/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var reverseKGroup = function (head, k) {

  let right = head;
  // move right node k times, if not enough return head
  for (let i=0; i<k; i++) {
    if (right) {
      right = right.next;
    } else {
      return head;
    }
  }
  // recurse so that the resulting k+1 node is the reversed node
  right = reverseKGroup(right, k);

  // reverse k-group
  for (let i=0; i<k; i++) {
    let tempHead = head.next;
    head.next = right;
    right = head;
    head = tempHead;
  }

  return right; // right is now the previous k-group's k+1

}
// k = 3;
// 1 2 3 4 5 6 7

/*

Breaking down the problem, you need to be able to reverse a k-group.

To reverse a k-group LL, you need the head plus the k+1 to attach it to.

The head value (which will become the tail part) should remain in the stack.

The recursion should return the k+1 node which would be the left part of the most recently reversed k-group
*/