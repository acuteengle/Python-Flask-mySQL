# pip install flask
from flask import Flask

app = Flask(__name__)

import pokemon_R
import pokemonType_R

if __name__ == '__main__':
    app.run()