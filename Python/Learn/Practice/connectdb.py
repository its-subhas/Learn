import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Subhas@263151",
    database="nodedb"
)

print("Connected!")


cursor = db.cursor()

cursor.execute("SELECT * FROM homes where id = %s;",(1,))

result = cursor.fetchall()

for row in result:
 id = row[0]
 home = row[1]
 name = row[2]
 location = row[3]
 rs = row[4]
 av = row[5]
 desc = row[6]

 print()
 print(id)
 print(home)
 print(name)
 print(location)
 print(rs)
 print(av)
 print(desc)
 print()

cursor.close()
db.close()