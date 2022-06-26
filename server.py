# config
from config.env import HOST, PORT, DEBUG

# flask
from flask import Flask, render_template

# api routers
from api.api import api

# create server
app: Flask = Flask(__name__, static_folder="./client/dist/assets/", template_folder="./client/dist/")

# register blueprints
app.register_blueprint(api)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host=HOST, port=PORT, debug=DEBUG)