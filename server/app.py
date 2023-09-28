from flask import Flask, request, send_from_directory
import requests
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


build_path = os.path.join(os.path.dirname(
    os.path.abspath(__file__)), '..', 'client', 'build')


@app.route('/')
def serve():
    return send_from_directory(build_path, 'index.html')


@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(os.path.join(build_path, 'static'), filename)


@app.route('/api/get_countries', methods=['GET'])
def get_countries():

    external_api_url = 'https://restcountries.com/v3.1/all'

    try:
        response = requests.get(external_api_url)
        response.raise_for_status()
        data = response.json()
        return (data)
    except Exception as e:
        return ({'error': str(e)}), 500


if __name__ == '__main__':
    app.run()
