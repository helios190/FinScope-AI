from flask import Flask, request, jsonify, render_template, send_from_directory
import sys

import portofolio_calculation
import os

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)