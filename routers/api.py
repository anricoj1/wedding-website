from fastapi import APIRouter

# create router
api: APIRouter = APIRouter(prefix='/api')


@api.post('/rsvp')
def rsvp():
    return 'RSVP'