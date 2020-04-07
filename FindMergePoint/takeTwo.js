/*
my second attempt, I achieved both O(n) and constant space

logically speaking, what the code is doing is similar to an 8 shaped racetrack.

If you start at the same spot, but one starts on the top loop and the other the bottom loop
then switch loops, you will eventually meet at the center again

Or more rather, when the pointer of the longer list reaches it's own end
and goes to the other list, point pointers will be the same amount of nodes from the end.
*/


function findMergeNode(headA, headB) {

  let a = headA
  let b = headB

  while ( a !== b) {
      if (a.next === null) {
          a = headB
      } else {
          a = a.next
      }

      if ( b.next === null ) {
          b = headA
      } else {
          b = b.next
      }
  }

  return b.data

}