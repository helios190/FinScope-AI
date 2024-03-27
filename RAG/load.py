from flask import Flask, request, jsonify,Response
from langchain.document_loaders import PyPDFLoader
from dotenv import load_dotenv
from pathlib import Path
import pandas as pd
import json
import os

from api_activation import openai_activate

load_dotenv()

app = Flask(__name__)

try:
    path = os.path.dirname(os.path.abspath(__file__))
    upload_folder=os.path.join(
    path.replace("/file_folder",""),"tmp")
    os.makedirs(upload_folder, exist_ok=True)
    app.config['upload_folder'] = upload_folder
except Exception as e:
    app.logger.info("An error occurred while creating temp folder")
    app.logger.error("Exception occurred : {}".format(e))

                     
@app.route('/')
def index():
    return Response(json.dumps({
    "status": True,
    "code": 200,
    "message": "Its Working!"}), mimetype="application/json")


@app.route('/upload', methods=['POST'])
def post():
    try:
        openai_activate.activation()
        path = os.path.dirname(os.path.abspath(__file__))
        upload_folder=os.path.join(
        path.replace("/file_folder",""),"tmp")
        os.makedirs(upload_folder, exist_ok=True)
        app.config['upload_folder'] = upload_folder
        pdf_file = request.files['file']
        pdf_name = pdf_file.filename
        save_path = os.path.join('RAG/testing_pdf/',pdf_name)
        pdf_file.save(save_path)
        loader = PyPDFLoader(save_path)
        loader.load()
        return jsonify({'message': 'PDF file uploaded and loaded successfully'})
    except Exception as e:
        app.logger.info("error occurred")

if __name__ == '__main__':
    app.run(debug=True)