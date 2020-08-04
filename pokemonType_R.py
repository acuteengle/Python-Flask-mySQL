from __main__ import app
from flask import request
import PokemonType

'''
Pokemon Type Routes ***
'''

@app.route('/pokemon_type')
def getAllPokemonTypes():
    return PokemonType.getAll()

@app.route('/pokemon_type/<string:id>', methods=['GET'])
def getPokemonTypeById(id):
    return PokemonType.getOne(id)

@app.route('/pokemon_type', methods=['POST'])
def createPokemonType():
    data = request.form
    return PokemonType.createOne(data)

@app.route('/pokemon_type/<string:id>', methods=['PUT'])
def updatePokemonType(id):
    data = request.form
    return PokemonType.updateOne(id, data)
