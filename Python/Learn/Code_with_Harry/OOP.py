# class Guddu:
#   name = "Biswas";
#   weight = 60.600;
#   hight = 5.68;

#   # def __init__(self):
#   #   print("Default Constructor Called !")


#   # def __init__(self,name="Unknown",weight=0,hight=0):
#   #    self.name = name;
#   #    self.weight = weight;
#   #    self.hight = hight;

#   def __init__(self,name, weight, hight):
#        self.name = name;
#        self.weight = weight;
#        self.hight = hight;
  
  
#   def getInfo(obj):
#    print(f"Employee Name: {obj.name}\nEmploy Weight: {obj.weight}\nEmployee Hight: {obj.hight}");  # Self use instend of Obj

#   def setInfo(obj,name,weight,hight): # Self use instend of Obj
#      obj.name = str(name);
#      obj.weight = float(weight);
#      obj.hight = float(hight);

#   @staticmethod
#   def welcome():
#     print("Statics Method Called.");
     





# obj = Guddu("Doland Trump", 77, 6.6)
# print(obj.getInfo());


# Guddu.welcome();

# # subhas = Guddu();

# # subhas.salary = 77000;

# # print(subhas.hight, subhas.weight, subhas.salary, subhas.name)


# # muskan = Guddu();
# # print(muskan.name)


# # myEmployee = Guddu();
# # myEmployee.setInfo("Muskan", 55, 4.11)

# # myEmployee2 = Guddu();
# # myEmployee2.setInfo("Priya", 57, 5.4)

# # print(myEmployee2.getInfo())
# # print(myEmployee.getInfo())

# # myEmployee.welcome()
# # myEmployee2.welcome()




# class employee:
#   name = "";
#   skill = "";
#   salary = 0.0;

#   def __init__(self,name,skill,salary):
#     self.name = str(name);
#     self.skill = str(skill);
#     self.salary = float(salary);


#   def getInfo(self):
#    print(self.name);
#    print(self.skill);
#    print(self.salary);



#   def setInfo(self,name,skill,salary):
#      self.name = str(name);
#      self.skill = str(skill);
#      self.salary = float(salary);
#      print("Updated") 





# Subhas = employee("Subhas Biswas", "Software Engineer", 79000)
# Subhas.getInfo()



# class Calculator:
#     def __init__(self, num):
#         self.num = num

#     def square(self):
#         print(f"Square: {self.num ** 2}")

#     def cube(self):
#         print(f"Cube: {self.num ** 3}")

#     def squareroot(self):
#         print(f"Square Root: {self.num ** 0.5}")


# cal = Calculator(5)

# cal.square()
# cal.cube()
# cal.squareroot()




# class employee1:

#   name = "Biswaas"
#   age = 22
#   year = 2027


#   def my(self):
#     print("Employee1 class called.");




#   def mul(self,num1,num2):
#     mul = (num1*num2)
#     return mul;   



# class employee2:

#   n = "Guddu"
#   ag = 27
#   ye = 2020


#   def my(self):
#     print("Employee2 class called.");




#   def add(self,num1,num2):
#     return (num1+num2);  




# class employee(employee1,employee2):

# #   name = "Muskan"
# #   age = 20
# #   year = 2029


#   def my(self):
#     print("Employee class called.");

 




# tst = employee();

# print(tst.mul(2,2))
# print(tst.name)
# print(tst.add(2,5), tst.n)





# class First():
#   a = "First";

#   def __init__(self):
#     print("Constructor First");


# class Second(First):
#   def __init__(self):
#    print("Constructor Second");
#   b = "Second";


# class Third(Second):
#   def __init__(self):
#    super().__init__();
#    print("Constructor Third");
#    print(super().a)
  
#   c = "Third";


# obj = Third();

# print(obj.a, obj.b, obj.c);





# class First():
#   a = "First";

#   @classmethod
#   def fun(cls):
#    print(f"First: {cls.a}");




# obj = First();
# obj.a = 88;

# print(obj.fun())



# class Name:

#     def __init__(self):
#         self.fName = ""
#         self.lName = ""

#     @property
#     def fullName(self):
#         return f"{self.fName} {self.lName}"

#     @fullName.setter
#     def fullName(self, value):
#         self.fName = value.split()[0]
#         self.lName = value.split()[1]


# obj = Name()

# obj.fullName = "Subhas Biswas"

# print(obj.fullName)
# print(obj.fName)
# print(obj.lName)



# class Student:

#     def __init__(self, marks):
#         self.marks = marks

#     def __add__(self, other):
#         return self.marks + other.marks


# s1 = Student(90)
# s2 = Student(80)

# print(s1 + s2)



# Practics


# class vector2D():
#   def __init__(self,i,j):
#     self.i = i
#     self.j = j



# class vector3D(vector2D):
#   def __init__(self,i,j,k):
#     super().__init__(i,j)
#     self.k = k

#   def show(self):
#     print(f"Vector: {self.i}i + {self.j}j + {self.k}k")



# obj = vector3D(1,2,3);
# obj.show()