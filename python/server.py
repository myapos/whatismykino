from flask import Flask
from flask import request
from flask_cors import CORS
import requests 

app = Flask(__name__)
CORS(app)
print(__name__)

@app.route('/')
def initial():
    return 'OK!'

@app.route('/health')
def health():
    return 'OK!'

@app.route('/getKinos')
def getKinos():
     # here we want to get the value of user (i.e. ?user=some-value)
    date = request.args.get('date')
    # # api-endpoint 
    URL = f"https://api.opap.gr/draws/v3.0/1100/draw-date/{date}/{date}"
  
    # sending get request and saving the response as response object 
    r = requests.get(url = URL) 
  
    # extracting data in json format 
    data = r.json()

    # print('data',data[0])
    return data

  
