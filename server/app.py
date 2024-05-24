from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import sys
from dotenv import load_dotenv
import datetime
import portofolio_calculation
import os
from server.ocr_handle.database import get_db, update_user_data
from server.ocr_handle.ocr import ocr_image_from_blob
from server.ocr_handle.storage import upload_file_to_blob, get_blob_client



load_dotenv()

app = Flask(__name__)
CORS(app)

db = get_db()




@app.route('/calculate', methods=['POST'])
def calculate():
    stock_symbols = request.form.getlist('stock_symbols')
    if not stock_symbols:
        return jsonify({"error": "No stock symbols provided"}), 400

    start_date = "2023-01-01"
    end_date = "2024-01-01"

    adj_close_prices = portofolio_calculation.get_adjusted_close_prices(stock_symbols, start_date, end_date)
    if adj_close_prices.empty:
        return jsonify({"error": "Failed to retrieve stock data"}), 500

    adj_close_prices['^IRX'] = adj_close_prices['^IRX'] / 12 / 100
    adj_close_prices.dropna(inplace=True)

    excess = adj_close_prices.subtract(adj_close_prices['^IRX'], axis=0)
    excess.drop('^IRX', axis=1, inplace=True)

    risk_free_rate = adj_close_prices['^IRX'].mean()
    market_return = excess['S&P500'].mean()

    alpha_beta_dict = portofolio_calculation.calculate_alpha_beta(excess)

    min_var_portfolios = portofolio_calculation.calculate_minimum_variance_frontier(adj_close_prices)
    max_sharpe_weights, _ = portofolio_calculation.calculate_max_sharpe_ratio(adj_close_prices, risk_free_rate)

    return jsonify({"min_var_portfolios": min_var_portfolios, "max_sharpe_weights": list(max_sharpe_weights),'Alpha & Beta':alpha_beta_dict})


@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No file selected for uploading'}), 400
    
    try:
        file_url, filename = upload_file_to_blob(file)
        
        # Simpan metadata file di MongoDB
        document = {
            "file_name": filename,
            "file_url": file_url,
            "upload_date": datetime.datetime.utcnow()
        }
        result = db.files.insert_one(document)

        user_data_document = {
            "file_name": filename,
            "upload_date": datetime.datetime.utcnow()
        }
        user_data_result = db.User_Data.insert_one(user_data_document)
        
        return jsonify({
            'message': 'File successfully uploaded',
            'file_url': file_url,
            'document_id': str(result.inserted_id),
            'user_data_id': str(user_data_result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/ocr_extract', methods=['POST'])
def ocr_extract():
    try:
        last_file = db.User_Data.find_one(sort=[('_id', -1)])
        
        if not last_file or 'file_name' not in last_file:
            return jsonify({'error': 'No file found in the database'}), 400
        
        file_name = last_file['file_name']
        blob_client = get_blob_client(file_name)
        
        extracted_text = ocr_image_from_blob(blob_client)
        update_user_data(last_file['_id'], extracted_text)
        
        return jsonify({
            'message': 'OCR extraction successful',
            'extracted_text': extracted_text
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)