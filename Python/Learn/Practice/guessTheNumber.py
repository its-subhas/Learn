import random

print()
print("Guess The Right Number ----> ('0' to Exit)")
print()

computer = random.randint(1, 100)
attemps = 0;
while (True):

    num = int(input("Enter Number Between (1 to 100): "))

    if (num == 0):
        print("Exit !");
        break;


    if ((num > 100) or (num < 1)):
        print("Invalid Move !");
        continue;
        

    print()
    if (computer == num):

        attemps+=1;
        print("Result: Guessed Correct !")
        print(f"Computer choice: {computer}")
        print(f"Your choice: {num}")
        print(f"Total Attemps: {attemps}")
  
        computer = random.randint(1, 100)
        attemps = 0;
        print()

    elif (computer > num):

        attemps+=1;
        print(f"Bigger Than: {num}")
        print()

    else:

        attemps+=1;
        print(f"Smaller Than: {num}")
        print()



        #  [2,4,5,7,8,9,12]   = search -> 8     