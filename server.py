from flask import Flask, redirect, url_for, request

# create server
wsgi_server = Flask(__name__, static_folder="./client/build", static_url_path='/')

@wsgi_server.route('/', methods=['GET'])
def index():
    return 'index.html'


if __name__ == '__main__':
    wsgi_server.run(host='0.0.0.0', port=80, debug=True)