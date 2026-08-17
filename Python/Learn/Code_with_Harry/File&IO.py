# myPara = "Dharmendra Pradhan resigned from his post on July 25, following the Cockroach Janta Party-led student protests across the country, which demanded his ouster over the NEET paper leak controversy.";


# my_file = open("./Paper.txt", "w");
# my_file.write(myPara);
# my_file.close;

# my = "SUBHAS ";
# newLine = open("./Paper.txt", "a" )
# newLine.write(my);
# newLine.close();

# your_file = open("./Paper.txt", "r");
# text = your_file.read();
# print(text);
# your_file.close();

# your_file = open("./Paper.txt", "r");
# text = your_file.readlines();
# print(text);
# your_file.close();

# your_file = open("./Paper.txt", "r");
# text = your_file.readline();
# print(text);
# your_file.close();


# while (text != ""):
#   text = your_file.readline();
#   print(text);
# else:
#   your_file.close();
#   print("Written Successfully !")



# with open("./Paper.txt", "r") as myFile:
#   text = myFile.read();
#   print(text);



#Practics


# myPara = '''Python is a powerful and easy-to-learn programming language.
# It is widely used in web development, data science, and artificial intelligence.
# Its simple syntax makes coding easier for beginners.
# Experienced developers also use Python for automation and software development.
# Consistent practice and real-world projects help improve programming skills.'''

# # Write to file
# file = open("./Practics.txt", "w")
# file.write(myPara)
# file.close()

# # Word to search
# word = input("Enter a word to search: ")

# # Read file
# readFile = open("./Practics.txt", "r")

# line = readFile.readline()

# while line != "":
#     if word in line:
#         print(f'"{word}" Found: {line.strip()}')
#         break
#     line = readFile.readline()
# else:
#     print(f'"{word}" Not Found')

# readFile.close()


# import random

# def Game():
#     score = random.randint(1, 100)

#     GameScore = open("./Game.txt", "r")
#     HiScore = GameScore.read()
#     GameScore.close()  # Close after reading

#     if HiScore != "":
#         HiScore = int(HiScore)
#     else:
#         HiScore = 0

#     print(f"Your Score: {score}")
#     print(f"High Score: {HiScore}")

#     if score > HiScore:
#         file = open("./Game.txt", "w")
#         file.write(str(score))
#         file.close()
#         print("🎉 New High Score!")
#     else:
#         print("No New High Score!")

# Game()



# def Table(num):
#   table = "";
#   for i in range(1,11):
#     table += f"{num} X {i} = {num*i}\n";
#     myTable = open(f"./Tables/Table{num}.txt", "w");
#     myTable.write(table);
#     myTable.close();


# for i in range(1,21):
#   Table(i);
# print("Tasks Completed !")




# word = input("Enter Word: ");

# with open("./Donkey.txt", "r") as f:
#   content = f.read();

# newContent = content.replace(word,"#######");
# with open("./Donkey.txt", "w") as f:
#   f.write(newContent);


# words = [];

# for i in range(1,6):
  # word = input("Enter Word: ");
#   words.append(word);



# with open("./Donkey.txt", "r") as f:
#   content = f.read();

# for word in words:
#   content = content.replace(word, "#"*len(word));


# with open("./Donkey.txt", "w") as f:
#   f.write(content);


# word = input("Enter Word: ");

# with open("./Donkey.txt", "r") as f:
#   content = f.read();

# if (word in content):
#   print(f"{word} Present in File.");
# else:
#   print(f"{word} Not Present in File.");


# word = input("Enter Word: ");

# with open("./Donkey.txt", "r") as f:
#   lines = f.readlines();

# Lno = 1;
# for words in lines:
#   if (word in words):
#    print(f"{word} Present in File. at Line Number: {Lno} ");
#    break;

#   Lno+=1;

# else:
#    print(f"{word} Not Present in File.");



# with open("./Donkey.txt","r") as f:
#   content = f.read();


# with open("./Donkey02.txt", "w") as f:
#   f.write(content);




# with open("./Donkey.txt", "r") as f:
#   content1 = f.read();


# with open("./Donkey02.txt", "r") as f:
#   content2 = f.read();


# if (content1 == content2):
#   print("Both File Has Same Content.");
# else:
#   print("Both are Diffrent Files.")



with open("./Donkey02.txt", "w") as f:
  f.write("");