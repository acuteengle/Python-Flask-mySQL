# pip install mysql-connector-python
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="test123*",
    database="pokemonDB"
)

# https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursordict.html
cursor = mydb.cursor(dictionary=True)

def selectAll(table):
    select_query = "SELECT * FROM " + table + ";"
    cursor.execute(select_query)
    results = cursor.fetchall()
    return results

def selectOne(table, id):
    select_query = "SELECT * FROM " + table + " WHERE id = %s;"
    cursor.execute(select_query, (id, ))
    results = cursor.fetchall()
    return results

def insertOne(table, data):
    params = {}
    for k in data.keys():
        params[k] = str(data[k])
    cols = list(params.keys())
    vals = tuple(params.values())
    insert_query = "INSERT INTO " + table + " (" + ", ".join(cols) + ") "
    filler = ["%s"] * len(cols)
    insert_query += "VALUES (" + ", ".join(filler) + ");"
    cursor.execute(insert_query, vals)
    mydb.commit()
    return params

def updateOne(table, id, data):
    params = {}
    for k in data.keys():
        params[k] = str(data[k])
    cols = list(params.keys())
    vals = tuple(params.values())
    sets = map(lambda c: c + " = %s", cols)
    update_query = "UPDATE " + table
    update_query += " SET " + ", ".join(sets)
    update_query += " WHERE id = %s;"
    vals = vals + tuple(id)
    cursor.execute(update_query, vals)
    mydb.commit()
    return params
