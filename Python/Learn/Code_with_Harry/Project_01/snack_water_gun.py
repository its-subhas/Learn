import random

# computer = random.randint(1, 3)

# print("1. Snake")
# print("2. Water")
# print("3. Gun")

# user = int(input("Enter your choice (1-3): "))

# if computer == 1:
#     print("Computer chose: Snake")
# elif computer == 2:
#     print("Computer chose: Water")
# else:
#     print("Computer chose: Gun")

# if user == computer:
#     print("Draw!")

# elif (user == 1 and computer == 2) or \
#      (user == 2 and computer == 3) or \
#      (user == 3 and computer == 1):
#     print("You Win!")

# elif user in [1, 2, 3]:
#     print("Computer Wins!")

# else:
#     print("Invalid Choice!")





# randint(1,10), random.choise("8","7","7")




print("Welcome SWG Game:")
print('''
1. Snack
2. Water
3. Gun
''');


myDictionary = {1:"Snack", 2:"Water", 3:"Gun"}


def gameLogic(userInput, computerInput):
 if (userInput == computerInput):
      print("Match Draw !")
 elif((userInput == 1 and computerInput == 2)or(userInput == 2 and computerInput == 3)or(userInput == 3 and computerInput == 1)):
      print("You Win !")
 else:
     print("Computer Wins !")



while(True):

    
    
    computer = random.randint(1,3);

    user_input = int(input("Choose Number (1 to 3) or 0 to Exit: "));

    if (user_input == 0):
      print("Thanks for playing!")
      break
    
    elif (user_input != 1 and user_input != 2 and user_input != 3):
        print("Invalid Input !")
        print()
        continue;
    else:
      print(f"Computer Chose: {myDictionary[computer]}")
      print(f"You Chose: {myDictionary[user_input]}")
      gameLogic(user_input,computer);
      print()





















