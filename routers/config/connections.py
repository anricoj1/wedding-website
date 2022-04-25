from pandas import read_sql_query
from pandas.io.sql import DatabaseError

class ConnectionManager:
    """Manages Database Connection Status"""
    def __init__(self) -> None:
        self.connection = ''

    def handle_close(self, close: bool) -> None:
        print(f"CONNECTION STATUS: {'Closed' if close else 'Keep Alive'}")

    def query(self, query='', params=[], close=True) -> list[dict]:
        try:
            if len(params) > 0:
                return read_sql_query(sql=query, con=self.connection, params=params).to_dict('records')
            return read_sql_query(sql=query, con=self.connection).to_dict('record')
        except DatabaseError as err:
            print(err)
        finally:
            self.handle_close(close)

    def alert_rows(self, query='', params=[] or (), close=True) -> None:
        try:
            print(f"EXECUTE QUERY: {query}")
        except DatabaseError as err:
            print(err)
        finally:
            self.handle_close(close)