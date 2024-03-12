import json
import sqlite3
import random

def insert_data(cursor, data):
    nombre_aleatoire = random.randint(1, 3)
    cursor.execute('''
        INSERT INTO operations (annee, nature, reference, montant, trimestre, client)
        VALUES (?, ?, ?, ?,?,?)
    ''', (data['annee'], data['nature'], data['reference'], data['montant'], data['trimestre'], nombre_aleatoire))

json_file = 'Test_pratique_projet_exercice1.json'

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

with open(json_file, 'r') as file:
    data = json.load(file)
    for entry in data:
        insert_data(cursor, entry)

conn.commit()
conn.close()
