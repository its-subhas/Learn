# name = input("Enter your name: ")

# print(f"Hello {name}")



# print(f"Hello {(name := input('Enter your name: '))}")  




# text = input("Enter text: ")

# while text != "exit":
#     print(text)
#     text = input("Enter text: ")


# while (text := input("Enter text: ")) != "exit":
#     print(text)




# def location(num:int, place:str) -> str:
#    return (f"{num} and {place} ")



# num :int = input("Enter Num: ")
# place :str = input("Enter Place: ")
# print (f"{location(num,place)}")






# num:int = int(input("Enter Num: "))


# def myNum(num:int)->int:
#   return num**num;

# print(f"Your Ans {(ans := myNum(num))}")




# numbers: list[int] = [1, 2, 3]
# numbers: list[str] = ["Hi", "Bye", "Nice"]

# student: dict[str, int] = {"Math": 95, "English": 90}

# point: tuple[int] = (10, 20)

# ids: set[int] = {1, 2, 3}

# def show() -> None:
#     print("Hello")






# def days(day:int) -> str:
#   match day:  
#     case 1:
#       return "Monday"
#     case 2:
#       return "Tuesday"
#     case 3:
#       return "Wednesday"
#     case 4:
#       return "Thursday"
#     case 5:
#       return "Friday"
#     case 6:
#       return "Saturday"
#     case 7:
#       return "Sunday"
#     case _:
#        return "Invalid"


# day:int = int(input("Enter Num: "))
# ans:str = days(day);
# print(f"According To Input Number Day is : {ans}");



# dict1 :dict[str,int] = {
#     "name": "Subhas",
#     "age": 21
# }

# dict2 :dict[str,str] = {
#     "city": "Delhi",
#     "country": "India"
# }

# result :dict[str,int] = dict1 | dict2

# print(result)



# with(open('file.txt') as f,open('file.txt') as f):
#   print("Operations Here");




# Exceptions Handling



# try: 
#   a:int = int(input("Enter a Number: "))
#   print(f"Your Number: {a}")

# except ValueError as err:
#   print(f"Only Take Input as Integers.");



# name:str = str(input("Enter Name: "))

# if (not name.isalpha()):
#   raise ValueError("Enter Your Name Not Number.");
# else:
#   print(f"Your Name: {name}")


# name:str = str(input("Enter Name: "))

# if (not name.isalpha()):
#   raise Exception ("Enter Your Name Not Number.");
# else:
#   print(f"Your Name: {name}")


# def errorHandling():

#   try:

#     num1:int = int(input("Enter Num1: "))
#     num2:int = int(input("Enter Num2: "))
#     print(f"Good: {num1/num2}")
#     # return
         

#   except ZeroDivisionError:
#     print("Zero Division Error !") 
#     return

#   except ArithmeticError:
#     print("Arithmetic Error !")  
#     return

#   except ValueError:
#     print("ValueError")    
#     return
  
#   except Exception:
#     print("Exception")   
#     return
  
#   else:
#     print("No Error Occured !")
#     return

#   finally:
#      print("No Error Occured Finally !")
    


# errorHandling()   


# a = 77;

# def fun():
#   a = 90
#   print(a)


# fun()
# print(a)






# a = 77;

# def fun():
#   global a
#   a = 90
#   print(a)

# a = 77 # modify not allow
# fun()
# print(a)




# my = [1,4,8,77]

# for index, item in enumerate(my):
#   print(f"Your index: {index} and item: {item}")



# squareList = [i*i for i in my]  
# squareList = []  

# for item in my:
#   squareList.append(item*item);


# print(squareList)


try:

  num:int = int(input("Enter Number: "))

  table:list[int] = [num*i for i in range(1,11)]

  with open('./table.txt', 'a') as f:
    f.write(f"Table {num}: {table} \n")

except Exception:
  print("Please Enter Digits Only !")

else:
  print("Table Has Written Successfully !")      

finally:
  print("Program End !")