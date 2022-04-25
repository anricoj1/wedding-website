from fastapi import FastAPI
from uvicorn import run

# api routers
from routers.api import api

# create server
wsgi_server: FastAPI = FastAPI()

# include routers
wsgi_server.include_router(api)

@wsgi_server.route('/', methods=['GET'])
def index():
    return 'index.html'


if __name__ == '__main__':
    run("server:wsgi_server", host="0.0.0.0", port=80, reload=True)