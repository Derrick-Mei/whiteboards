For this problem, we are converting an integer into the "saying" of that integer, converting the saying back to integers and then concatenating everything together.  Then you repeat it with the result n times;

base case is if (n===1) return 1;

What is saying?  The "saying" is to count the number of contiguous integers plus the integer. (33 === two 3)

I don't think this problem can be done with recursion as is because the parameter is required for the base case, while the result is not related to the parameter.

1.  To calculate the countAndSay each iteration
    1.  We can do a for loop over the string, have a current int and count.
        1.  If the int is the same, increase count
        2.  if the int is different, concatenate the answer with the count and int.
        3.  at the end of the loop, concatenate the answer as well.
    2.  repeat this n-1 times and return answer