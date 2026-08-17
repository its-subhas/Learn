
def myFunction():
  print("Function Called !")




if (__name__ == "__main__"):
  print("Exucuted Code From Original File Test_Module.")
  myFunction()
  print(f"({__name__})");  
else:
  print("Exucuted Code From import File Test.")

