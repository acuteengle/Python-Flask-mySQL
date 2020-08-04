import json
import orm

table = "pokemon_type"

def getAll():
    result = orm.selectAll(table)
    return json.dumps(result)

def getOne(id):
    result = orm.selectOne(table, id)
    return json.dumps(result)

def createOne(data):
    result = orm.insertOne(table, data)
    return json.dumps(result)

def updateOne(id, data):
    result = orm.updateOne(table, id, data)
    return json.dumps(result)