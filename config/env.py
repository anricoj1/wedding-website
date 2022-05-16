# third party modules
from dotenv import load_dotenv

# python modules
from os import environ


# load environment variables
load_dotenv()


# server config
APP: str = environ.get("APP")
HOST: str = environ.get("HOST")
RELOAD: bool = environ.get("RELOAD")
PORT: int = int(environ.get("PORT"))

# databases
WEDDING_DB: str = environ.get("WEDDING_DB")