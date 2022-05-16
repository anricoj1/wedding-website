# config
from config.env import HOST, PORT, RELOAD, APP

# fastapi
from fastapi import FastAPI
from uvicorn import run

# api routers
from routers.client import client

# create server
wsgi_server: FastAPI = FastAPI()

# include routers
wsgi_server.include_router(client)

@wsgi_server.get('/')
def index():    
    return 'index.html'


if __name__ == '__main__':
    run(app=APP, host=HOST, port=PORT, reload=RELOAD)