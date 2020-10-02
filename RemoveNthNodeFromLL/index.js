/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let right = head;
  let left = head;

  while (n > 0) {
      right = right.next;
      n--;
  }

  if (!right) return left.next;

  while (right.next) {
      right = right.next;
      left = left.next;
  }

  left.next = left.next.next;
  return head;
};


// 3 cases - node is head, tail, or middle

// use 2 pointers -
// move rightP n times
  // at this point, if right is already null, that means we're removing head
// move both pointers till rightP reaches end.
// make left pointer's next to be next.next

// if node is head - treat like it's a middle
// if node is tail - also treat like middle
// edge case - node is only 1 long aka head and tail