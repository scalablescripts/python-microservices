from flask.cli import FlaskGroup
from main import app, db


cli = FlaskGroup(app)

if __name__ == '__main__':
    cli()
