import mysql.connector

try:

  db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Subhas@263151",
    database="nodedb"
  )
  print("Connected !")

  cursor = db.cursor()

  cursor.execute("INSERT INTO homes (houseName, owner, location, rent, bedrooms, description, available) VALUES (%s, %s, %s, %s, %s, %s, %s)", ("NAINA","Naina Dubey","Goa",15000,3,"Test","on"))

  db.commit()
  print("Saved !")


  cursor.execute("select * from homes;")
  data = cursor.fetchall()
  print(data)

  cursor.close()
  db.close()
  print("Disconnected !")
except Exception as err:
  print(err)



# cursor.execute()  → execute query
# db.commit()       → save changes
# cursor.fetchall() → get SELECT results