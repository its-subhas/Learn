import json



class Student:


 

  def __init__(self,id,name,college,rollno,course,branch,year):
    self.id:int = id
    self.name:str = name
    self.college:str = college
    self.rollno:int = rollno
    self.course:str = course
    self.branch:str = branch
    self.year:int = year

 

  
  def addStudent(self)-> list[dict]:

   try:

    with open("./student.txt", "r") as file:
     studentsList:list = json.load(file)

   except (FileNotFoundError, json.JSONDecodeError):
    studentsList = []


   for student in studentsList:
    for id,details in student.items():
     if (id == str(self.id)):
      print()
      print("Student Id already exists!")

      foundId = id
      foundStudent = details

      print()
      print("Student Found!")
      print("Student Details:")
      print()
      print(f"Student Id: {foundId}")
      print(f"Student Name: {foundStudent[0]['name']}")
      print(f"Student College: {foundStudent[1]['college']}")
      print(f"Student Rollno: {foundStudent[2]['rollno']}")
      print(f"Student Course: {foundStudent[3]['course']}")
      print(f"Student Branch: {foundStudent[4]['branch']}")
      print(f"Student Year: {foundStudent[5]['year']}")
      print()
      return studentsList




   studentsList.append({self.id:({"name":self.name},{"college":self.college},{"rollno":self.rollno},{"course":self.course},{"branch":self.branch},{"year":self.year})})
   
  

   with open("./student.txt","w") as file:
     json.dump(studentsList,file)
     print()
     print("Student Added Successfully!")

   return studentsList;


def newStudent():
  print()
  print("Add Student")
  print()
  id:int = int(input("Enter Student Id: "))
  name:str = str(input("Enter Student Name: ")).title()
  College:str = str(input("Enter Student College: ")).upper()
  Rollno:int = int(input("Enter Student Rollno: "))
  Course:str = str(input("Enter Student Course: ")).title()
  Branch:str = str(input("Enter Student Branch: ")).upper()
  Year:int = int(input("Enter Student Year: "))

  Student(id,name,College,Rollno,Course,Branch,Year).addStudent()
  



def fetchStudents():
  print()
  print("View Students")
  print()

  with open("./student.txt","r") as file:
    students = json.load(file)
  
    for student in students:
       for id,details in student.items():

        print()
        print("Student Details:")
        print()
        print(f"Student Id: {id}")
        print(f"Student Name: {details[0]['name']}")
        print(f"Student College: {details[1]['college']}")
        print(f"Student Rollno: {details[2]['rollno']}")
        print(f"Student Course: {details[3]['course']}")
        print(f"Student Branch: {details[4]['branch']}")
        print(f"Student Year: {details[5]['year']}")
        print()




def findStudent():
  print()
  print("Search Student")
  print()

  studentId = int(input("Enter Student Id: "))
  with open("./student.txt","r") as file:
    students = json.load(file)

    for student in students:
      for id,details in student.items():

        if (id == str(studentId)):

          foundId = id
          foundStudent = details

          print()
          print("Student Found!")
          print("Student Details:")
          print()
          print(f"Student Id: {foundId}")
          print(f"Student Name: {foundStudent[0]['name']}")
          print(f"Student College: {foundStudent[1]['college']}")
          print(f"Student Rollno: {foundStudent[2]['rollno']}")
          print(f"Student Course: {foundStudent[3]['course']}")
          print(f"Student Branch: {foundStudent[4]['branch']}")
          print(f"Student Year: {foundStudent[5]['year']}")
          print()
          return
        

  print()
  print("Student not Found!")   
  print()




def updateStudent():
  print()
  print("Update Student")
  print()

  studentId = int(input("Enter Student Id: "))
  with open("./student.txt","r") as file:
    students = json.load(file)
  
    for student in students:
      for id,details in student.items():
  
          if (id == str(studentId)):

            foundId = id
            foundStudent = details

            print()
            print("Student Found!")
            print("Student Details:")
            print()
            print(f"Student Id: {foundId}")
            print(f"Student Name: {foundStudent[0]['name']}")
            print(f"Student College: {foundStudent[1]['college']}")
            print(f"Student Rollno: {foundStudent[2]['rollno']}")
            print(f"Student Course: {foundStudent[3]['course']}")
            print(f"Student Branch: {foundStudent[4]['branch']}")
            print(f"Student Year: {foundStudent[5]['year']}")
            print()

            print("Enter New Details: ")
            print()

            name:str = str(input("Enter Student Name: ")).title()
            College:str = str(input("Enter Student College: ")).upper()
            Rollno:int = int(input("Enter Student Rollno: "))
            Course:str = str(input("Enter Student Course: ")).title()
            Branch:str = str(input("Enter Student Branch: ")).upper()
            Year:int = int(input("Enter Student Year: "))

            foundStudent[0]["name"] = name
            foundStudent[1]["college"] = College
            foundStudent[2]["rollno"] = Rollno
            foundStudent[3]["course"] = Course
            foundStudent[4]["branch"] = Branch
            foundStudent[5]["year"] = Year

            with open("./student.txt","w") as file:
              json.dump(students,file)
            

            

  
            print()
            print("Student Updated Successfully!")
            print("Student New Details:")
            print()
            print(f"Student Id: {foundId}")
            print(f"Student Name: {foundStudent[0]['name']}")
            print(f"Student College: {foundStudent[1]['college']}")
            print(f"Student Rollno: {foundStudent[2]['rollno']}")
            print(f"Student Course: {foundStudent[3]['course']}")
            print(f"Student Branch: {foundStudent[4]['branch']}")
            print(f"Student Year: {foundStudent[5]['year']}")
            print()
            return
          
  
  print()
  print("Student not Found!")   
  print()





def deleteStudent():
  print()
  print("Delete Student")
  print()

  studentId = int(input("Enter Student Id: "))
  with open("./student.txt","r") as file:
    students = json.load(file)
  
    for student in students:
      for id,details in student.items():
  
          if (id == str(studentId)):

            foundId = id
            foundStudent = details

            print()
            print("Student Found!")
            print("Deleted Student Details:")
            print()
            print(f"Student Id: {foundId}")
            print(f"Student Name: {foundStudent[0]['name']}")
            print(f"Student College: {foundStudent[1]['college']}")
            print(f"Student Rollno: {foundStudent[2]['rollno']}")
            print(f"Student Course: {foundStudent[3]['course']}")
            print(f"Student Branch: {foundStudent[4]['branch']}")
            print(f"Student Year: {foundStudent[5]['year']}")
            print()


            students.remove(student)
            
            with open("./student.txt", "w") as file:
              json.dump(students,file)

            print("Student Deleted Successfully!")
            print()

            return
          
  
  print()
  print("Student not Found!")   
  print()






try:
     
    
  while(True):

   try:    

     print()
     print('''Student Registration
--------------------
1. Add Student
2. View Students
3. Search Student
4. Update Student
5. Delete Student
6. Exit''')
     print()
    

     
     inp:int = int(input("Enter Number: "))
  
     if(inp == 1):

        try:
         newStudent()
        except Exception as err:
         print()
         print("Error Occured !")
         print(err)
         print()

     elif(inp == 2):

        try:
         fetchStudents()
        except Exception as err:
         print()
         print("Error Occured !")
         print(err)
         print()

     elif(inp == 3):
          
         try:
          findStudent()
         except Exception as err:
          print()
          print("Error Occured !")
          print(err)
          print()

     elif(inp == 4):
         
         try:
          updateStudent()
         except Exception as err:
          print()
          print("Error Occured !")
          print(err)
          print()

     elif(inp == 5):
       
        try:
          deleteStudent()
        except Exception as err:
          print()
          print("Error Occured !")
          print(err)
          print()

     elif(inp == 6):
          print("Exit!")
          break;
     else:
          print("Invalid Choice!")
          continue; 

   except Exception as err:
      print()
      print("Error Occured !")
      print(err)
      print()
      continue

except Exception as err:
  print()
  print("Error Occured !")
  print(err)
  print()