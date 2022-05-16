# fastapi
from fastapi import APIRouter

# create router
client: APIRouter = APIRouter(prefix='/api')


@client.post('/rsvp')
def rsvp():
    return "RSVP"