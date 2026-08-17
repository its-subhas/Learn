# def myfun(name, title):
#   print(f"Full Name: {name} {title}")


# name = input("Enter First Name: ")
# title = input("Enter Last Name: ")


# myfun(name,title)




# def myfun(num1, num2, num3):
#   sum = num1 + num2 + num3
#   return sum;

# sum = myfun(22,44,88)
# print(sum)

# def myfun(num1, num2, num3):
#   sum = num1 + num2 + num3
#   return sum;

# sum = myfun("Subhas","Biswas","Guddu")
# print(sum)


# def myfun(num1=10, num2=10, num3=10):
#   sum = num1 + num2 + num3
#   return sum;


# n1 = int(input("Enter Num 1: "))
# n2 = int(input("Enter Num 2: "))
# n3 = int(input("Enter Num 3: "))

# sum = myfun(n1,n2,n3)
# print(sum)


# n = int(input("Enter Num: "))
# sum2 = myfun(n)
# print(sum2)














# def fac(num):
#     if(num == 0 or num == 1):
#       return 1;
#     return num * fac(num-1) 



# num = int(input("Enter Number: "))
# print(f"Factorial: {fac(num)}")








# Practics 






# def greaterNum(num1=0,num2=0,num3=0):
#   if (num1 >= num2 and num1 >= num3):
#     return num1
#   elif(num2 >= num1 and num2 >= num3):
#     return num2
#   else:
#     return num3



# num1 = int(input("Enter Num1: "))
# num2 = int(input("Enter Num2: "))
# num3 = int(input("Enter Num3: "))

# print(f"Greatest Number: {greaterNum(num1,num2,num3)}")




# tem = int(input("Enter Temperature in Fahrenheit: "))


# def temperature(F):
#   return (F - 32) * (5/9) 

# print(f"Temperature in Celsius: {round(temperature(tem),2)} °C")


# print("Guddu")
# print("Guddu")
# print("Guddu", end="")
# print("Guddu", end="")   # Avoid Next Line




# def sum(num):
#     if(num == 1):
#       return 1;
#     return sum(num-1) + num 



# num = int(input("Enter Number: "))
# print(f"Sum: {sum(num)}")







# def pattern(num):
#   if (num == 0):
#     return
#   print("*" * num)
#   pattern(num -1)


# num = int(input("Enter Number: "))
# pattern(num)



# def inchToCms(inch):
#   return inch * 2.54


# num = int(input("Enter Number: "))
# print(f"Cms: {round(inchToCms(num),2)}")


# def rem(list, word):
#   for i in list:
#     list.remove(word)
#     return list


# myList = ["Guudu", "Biswas", "Mohit", "Muskan"]
# myWord = input("Enter Word to Remove: ")

# print(rem(myList,myWord))



# def rem(list, word):
#   newList = []

#   for item in list:
#     if not (item == word ):
#       newList.append(item.strip(word))
    
#     return newList


# myList = ["Guudu", "Biswas", "Mohit", "Muskan", "kan"]
# myWord = input("Enter Word to Remove: ")

# print(rem(myList,myWord))



# def mul(num):
#   for i in range(1,11):
#    print(f"{i} X {num} = {i*num}")


# num = int(input("Enter Number: "))
# mul(num)   