import random
import string


length = int(input("Enter Password Length: "))
num = int(input("Enter Num of Passwords: "))


data = string.ascii_letters + string.digits + string.punctuation

for i in range (num):

  genPass = ""
  for j in range(length):
    genPass += random.choice(data);

  print("Your Password: ", genPass)

else:
  print("Tasks Finished.")

  