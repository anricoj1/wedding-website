from flask import Flask, redirect, url_for, request
from flask_cors import CORS


server = Flask(__name__)
CORS(server)

@server.route('/register', methods=['POST'])
def register():
    form = request.get_json()

    print(form)

    return 'Submit'

if __name__ == '__main__':
    server.run(host='0.0.0.0', debug=True)