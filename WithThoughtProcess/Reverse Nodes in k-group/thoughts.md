For this problem, we're repeatedly reversing the linked nodes in a k group if the linked list has at least that many nodes remaining

Iteratively
1. With Iterative approaches, you generally need a dummyHead placeholder and return dummy.next
2. To solve this, you need to reverse the nodes in the k-group.  Then reconnect it back to the LL and iterate through the whole LL
3. You need a dummyHead for for the answer, you'll also need placeHolder for the kGroup's head/k-1
4. find the k+1 and reverse list.
5. The original start of the k group will become the head of the next k group.
6. The original k+1 will be the starting point of the next k-group
7. thus to reverse LL, you need a new set of vars


Recursively
Benefit of recursive programming on LL's is that you generally don't need a dummy head.

Recursion allows you to keep track of certain vars in the stack.  In this case, we will probably want to keep track of the k+1 node;

This will allow us to reverse the LL and then return the reversed LL's head and go back up the stack.