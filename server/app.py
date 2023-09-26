from flask import Flask, request
import requests

app = Flask(__name__)

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