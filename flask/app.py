from flask import Flask,jsonify
import requests
from flask_cors import CORS
from dotenv import load_dotenv
import os
import math
from datetime import datetime, timedelta

load_dotenv()

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return 'home'

@app.route('/city/<string:name>')
def allcities(name):
    params = {
        "q":name,
        "appid":os.getenv('OPEN_WEATHER_KEY'),
        "units":"metric"
    }
    response = requests.get('https://api.openweathermap.org/data/2.5/weather',params=params)
    data = response.json()
    city = data["name"]
    weather = data["weather"][0]["description"]
    weather_id = data["weather"][0]["id"]
    temp_avg = data["main"]["temp"]
    temp_min = math.floor(data["main"]["temp_min"])
    temp_max = math.ceil(data["main"]["temp_max"])
    return jsonify({'city': city,'weather': weather,'temp_min': temp_min,'temp_max': temp_max,'temp_avg': temp_avg,'weather_id': weather_id,'data': data})

@app.route('/search/<string:name>')
def searchcity(name):
    day = datetime.today().date()
    today = day.strftime("%Y-%m-%d")
    tomorrow = (day + timedelta(days=1)).strftime("%Y-%m-%d")
    twodaysafter = (day + timedelta(days=2)).strftime("%Y-%m-%d")
    threedaysafter = (day + timedelta(days=3)).strftime("%Y-%m-%d")
    fourdaysafter = (day + timedelta(days=4)).strftime("%Y-%m-%d")
    
    params = {
        "q":name,
        "appid":os.getenv('OPEN_WEATHER_KEY'),
        "units":"metric",
    }
    res = requests.get(url='https://api.openweathermap.org/data/2.5/forecast',params=params)
    if res.status_code == 200:
        data = res.json()
        if "city" in data and "list" in data:
            city = data["city"]["name"]
            country = data["city"]["country"]
            return jsonify({'city': city ,'country':country , 'data': data, 'today': today, 'tomorrow': tomorrow,'twodaysafter': twodaysafter,'threedaysafter': threedaysafter,'fourdaysafter': fourdaysafter})
        else:
            return jsonify({"error": "Unexpected response format"}), 500
    else:
        return jsonify({"error": "City not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)