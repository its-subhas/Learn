# # import threading
# import multiprocessing
# import time



# def fun(sec):
#    print(f"Running {sec} time task.")
#    time.sleep(sec)



# def fun1(sec):
#    print(f"Running {sec} time task.")
#    time.sleep(sec)   


# def fun2(sec):
#    print(f"Running {sec} time task.")
#    time.sleep(sec) 


# def fun3(sec):
#    print(f"Running {sec} time task.")
#    time.sleep(sec) 


# # timeStart = time.perf_counter()

# # fun(8)      
# # fun1(4)      
# # fun2(2)      
# # fun3(1)  

# # timeEnd = time.perf_counter() 
# # print("Total: ",timeEnd-timeStart)
    



# # timeStart = time.perf_counter()

# # t = threading.Thread(target=fun, args=[8])
# # t1 = threading.Thread(target=fun1, args=[4])
# # t2 = threading.Thread(target=fun2, args=[2])
# # t3 = threading.Thread(target=fun3, args=[1])


# # t.start()
# # t1.start()
# # t2.start()
# # t3.start()

# # t.join()
# # t1.join()
# # t2.join()
# # t3.join()

# # timeEnd = time.perf_counter() 
# # print("Total: ",timeEnd-timeStart)


# if __name__ == "__main__":
   
#   timeStart = time.perf_counter()


#   t = multiprocessing.Process(target=fun, args=[8])
#   t1 = multiprocessing.Process(target=fun1, args=[4])
#   t2 = multiprocessing.Process(target=fun2, args=[2])
#   t3 = multiprocessing.Process(target=fun3, args=[1])


#   t.start()
#   t1.start()
#   t2.start()
#   t3.start()

#   t.join()
#   t1.join()
#   t2.join()
#   t3.join()

#   timeEnd = time.perf_counter() 
#   print("Total: ",timeEnd-timeStart)