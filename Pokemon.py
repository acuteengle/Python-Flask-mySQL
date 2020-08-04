import json
import orm

table = "pokemon"

def getAll():
    result = orm.selectAll(table)
    return json.dumps(result)

def getOne(pokemon_id):
    result = orm.selectOne(table, pokemon_id)
    return json.dumps(result)

def createOne(data):
    result = orm.insertOne(table, data)
    return json.dumps(result)

def updateOne(pokemon_id, data):
    result = orm.updateOne(table, pokemon_id, data)
    return json.dumps(result)