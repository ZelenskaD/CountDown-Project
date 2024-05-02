# def bounded_avg(nums):
#     """ Return avg of list of nums (makes sure nums are 1-100) 
   
#     >>> bounded_avg([2,4,6])
#     4.0
#     >>> bounded_avg([10,20,30,40,50])
#     30.0
#     >>> bounded_avg([2,4,500])
#     Traceback (most recent call last):
#         ...
#     ValueError: Outside bounds of 1-100
#     """
#     for n in nums:
#         if n < 1 or n > 100:
#             raise ValueError("Outside bounds of 1-100")
#     return sum(nums) / len(nums)



# from turtle import*
# color('red','yellow')
# begin_fill()
# while True:
#     forward(200)
#     left(170)
#     if abs (pos())<1:
#         break
# end_fill()
# done()