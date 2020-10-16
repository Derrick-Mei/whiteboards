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

var reverseKGroup = function (headNode, k) {
  const dummyHead = new ListNode(0);
  const placeHolderHead = dummyHead;

  let left = headNode;
  let right = headNode;

  while (true) {

    for (let i = 0; i < k; i++) {
      if (right) {
        right = right.next;
      } else {
        return dummyHead.next;
      }
    }

    let head = left;
    let tail = right;

    for (let i = 0; i < k; i++) {
      let tempHead = head.next;
      head.next = tail;
      tail = head;
      head = tempHead;
    }

    placeHolderHead.next = tail;
    placeHolderHead = left;
    left = right; // or left = left.next;
  }
};
