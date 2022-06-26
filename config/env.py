# third party modules
from dotenv import load_dotenv

# python modules
from os import environ

# load environment variables
load_dotenv()


# server config
HOST: str = environ.get("HOST")
DEBUG: bool = environ.get("DEBUG")
PORT: int = int(environ.get("PORT"))

# databases
WEDDING_DB: str = environ.get("WEDDING_DB")


# oauth
CLIENT_ID: str = environ.get("CLIENT_ID")
CLIENT_SECRET: str = environ.get("CLIENT_SECRET")

# api
API_AUDIENCE: environ.get("API_AUDIENCE")
ISSUER: environ.get("ISSUER")

# domain
AUTH_DOMAIN: str = environ.get("AUTH_DOMAIN")
AUTH_SERVER: str = f"https://{AUTH_DOMAIN}/.well-known/jwks.json"
ALGORITHMS: list[str] = [environ.get("ALGORITHMS")]