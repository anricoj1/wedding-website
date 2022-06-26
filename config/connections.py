# config
from config.env import WEDDING_DB

# third party modules
from pandas.io.sql import DatabaseError
from pandas import read_sql_query

# python modules
from sqlite3 import connect, OperationalError

class SQLiteConnection:
    """Manages Database Connection Status"""
    def __init__(self, db_name: str) -> None:
        self.connection = connect(db_name)
        self.cursor = self.connection.cursor()
        self.execute = self.connection.execute
        self.commit = self.connection.commit
        self.exit_cursor = self.connection.close

    def close(self, close: bool) -> None:
        """Close connection"""
        if close:
            self.exit_cursor()
            print("Connection cursor closed")
    
    def query(self, query: str, params=[], close=False) -> list[dict]:
        """Query rows from table, Optional[params], Optional[close]"""
        try:
            if len(params) > 0:
                return read_sql_query(sql=query, con=self.connection, params=params).to_dict(orient='records')
            return read_sql_query(sql=query, con=self.connection).to_dict(orient='records')
        except DatabaseError as err:
            print(err)
            pass
        except OperationalError as err:
            print(err)
            pass
        finally:
            self.close(close)

    def alert_rows(self, query: str, params=[] or (), close=False) -> None:
        """Commit db UPDATES, DELETES, INSERTS etc.. Optional[params], Optional[close]"""
        print(f"Executed query: {query}")
        try:
            if len(params) > 0:
                self.execute(query, params)
                self.commit()
            else:
                self.execute(query)
                self.commit()
        except DatabaseError as err:
            print(err)
            pass
        except OperationalError as err:
            print(err)
            pass
        finally:
            self.close(close)


class WeddingDatabase(SQLiteConnection):
    """Wedding Database"""
    def __init__(self) -> None:
        SQLiteConnection.__init__(self, db_name=WEDDING_DB)

    def create_users(self) -> None:
        """Create users table"""
        # LOGGER.info("Creating users table")
        self.alert_rows(
            query="""CREATE TABLE users (
                id INTEGER PRIMARY KEY,
                party_id INTEGER,
                prefix TEXT,
                first_name TEXT,
                last_name TEXT,
                has_plus INTEGER
            )""",
            close=True
        )

        return None