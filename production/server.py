from flask import Flask, redirect, url_for, request


server = Flask(__name__, static_folder="./client/build", static_url_path='/')

@server.route('/', methods=['GET'])
def index():
    return server.send_static_file('index.html')

@server.route('/register', methods=['POST'])
def register():
    form = request.get_json()

    print(form)

    return 'Submit'

if __name__ == '__main__':
    server.run(host='0.0.0.0', port=80, debug=True)