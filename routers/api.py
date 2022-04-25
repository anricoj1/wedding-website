from fastapi import APIRouter
from .config.connections import ConnectionManager

# create router
api: APIRouter = APIRouter(prefix='/api')


@api.post('/rsvp')
def rsvp():
    ConnectionManager().alert_rows(
        query="SELECT * FROM rows",
        close=True
    )
    return 'RSVP'