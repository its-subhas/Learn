# import requests

# def fetchAnimal():

#     url = "https://catfact.ninja/fact"

#     response = requests.get(url)
#     res = response.json()

#     print(res["fact"])
#     print(res["length"])

#     # with open("./animal.txt", "a") as f:
#     #     f.write(str(res) + "\n")


# fetchAnimal()


import requests


# response.json()    
# json.loads()  => json to dict
# json.dumps()  => dict to json
# json.load()   => json file to dict file
# json.dump()   => dict file to json file



# HTTP methods

# GET     → get/read data
# POST    → create/send data
# PUT     → replace/update data
# PATCH   → partially update data
# DELETE  → delete data

  #  requests.get()
  #  requests.post()
  #  requests.put()
  #  requests.delete()
  #  requests.patch()
   

# HTTP status codes

# 200 → OK / success
# 201 → Created
# 400 → Bad Request
# 401 → Unauthorized
# 403 → Forbidden
# 404 → Not Found
# 500 → Server Error




# url = "https://example.com/users"

# data = {
#         "name": "Subhas"
#        }

# headers = {
#         "Content-Type": "application/json"
#          "Accept": "application/json"
#         "Authorization": "Bearer YOUR_TOKEN"
#           }

# response = requests.post(
#         url,
#         json=data,
#         headers=headers
#     )

  # print(response.status_code)




def fetch():

  url = "https://dummyjson.com/users";

  response = requests.get(url);

  jsonResponse = response.json()

  if jsonResponse["total"]  and jsonResponse["users"]:

    

      user = jsonResponse["users"];
     
      newUsers = []

      for i in range(1,3):
         
         newUsers.append(user[i])

         


      for i in range(len(newUsers)):
        
        id = newUsers[i]["id"]
        name = newUsers[i]["firstName"]
        gender = newUsers[i]["gender"]
        age = newUsers[i]["age"]
        phone = newUsers[i]["phone"]

        print()
        print("User:")
        print()
        print(id)
        print(name)
        print(gender)
        print(age)
        print(phone)
        print()
      


  
  else:
    raise Exception("Data Not Found !")
   



fetch()
