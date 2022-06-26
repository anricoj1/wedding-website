# config
from config.connections import WeddingDatabase

# flask
from flask import Blueprint

# create router
api: Blueprint = Blueprint('api', __name__, url_prefix='/api')


@api.route('/rsvp', methods=['POST'])
def rsvp():
    return "RSVP"

@api.route('/user/<int:id>', methods=['GET'])
def get_user(id: int):
    user: list[dict] = WeddingDatabase().query(
        query="SELECT * FROM users WHERE id = ?",
        params=[id],
        close=True
    )

    return user[0]

@api.route('/party/<int:party_id>', methods=['GET'])
def get_party(party_id: int):
    party: list[dict] = WeddingDatabase().query(
        query="SELECT * FROM users WHERE party_id = ?",
        params=[party_id],
        close=True
    )

    return party