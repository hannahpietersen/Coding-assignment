from flask import Flask, send_from_directory
from flask import render_template
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
@app.route('/<value>')
def serve(value="default"):
    return render_template('index.html')


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
