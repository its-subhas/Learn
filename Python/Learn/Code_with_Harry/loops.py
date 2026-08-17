# myList = ["Muskan","Priya","Kalindi","Vanshika","Nidhi","Shreya"]
# i = 0;

# while (i < len(myList)):
#   print(myList[i])
#   i+=1;

# for i in range(0,len(myList)):
#   print(myList[i])

# for i in myList:
#    print(i)


# for i in myList:
#    print(i);
# else:
#    print("Done !")


# i = 0;
# while (i <= 10):
#   if(i==6):
#     break
#   print(i)
#   i+=1;


# for i in range(0,10):
#   if (i == 6 or i == 8):
#     continue
#   print(i)





# for i in range(1,10):
#   pass #null statement


# for i in range(1,11):
#   print(i)



# Practics

# num = int(input("Enter Number: "))

# for i in range(1,11):
#   print(f"{i} X {num} = ",num*i)



# i = 1;
# while(i < 11):
#   print(f"{i} X {num} = ", i*num)
#   i+=1



# myList = ["Muskan","Munmun","Priya","Mahesh","Biswas","Jitu"]
# name = input("Enter Latter: ")

# i = 0

# while (i < len(myList)):
#   if (myList[i].startswith(name)):
#     print("Good Night ",myList[i])
#   i+=1



# for i in myList:
#   if (i.startswith(name)):
#     print("Good Night ", i)




# num = int(input("Enter Number: "))
# ans = 1

# for i in range(1,num+1):
#   ans*=i
# print("Factorial: ", ans)


# n = int(input("Enter Rows: "))

# for i in range(1, n + 1):
#     print(" " * (n - i) + "* " * i)




# n = int(input("Enter Rows: "))

# for i in range(1, n + 1):
#     print("*" * i)





# n = int(input("Enter Size: "))

# for i in range(n):
#     for j in range(n):
#         if i == 0 or i == n - 1 or j == 0 or j == n - 1:
#             print("*", end=" ")
#         else:
#             print(" ", end=" ")
#     print()




# i = 0
# add = 0

# while (i <= num):
#   add += i
#   i+=1
# print("Sum is: ",add)




# for i in range(2,num): # 0 and 1 is Exception need to handle
#   if (num%i == 0):
#     print("Number Is Not Prime.")
#     break
# else:
#     print("Number Is Prime.")






# num = int(input("Enter Number: "))

# for i in range(10, 0, -1):
#     print(f"{num} x {i} = {num * i}")


# i = 10;
# while(i > 0):
#     print(f"{num} X {i} = ", num*i)
#     i-=1;