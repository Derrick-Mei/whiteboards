/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  while (lists.length > 1) {
      const a = lists.shift();
      const b = lists.shift();
      const merged = merge(a, b);
      lists.push(merged);
  }

  return lists[0] || null;

};

function merge(a, b) {
  const dummy = new ListNode(0);
  let temp = dummy;
  while(a && b) {
      if (a.val < b.val) {
          temp.next = a;
          a = a.next
      } else {
          temp.next = b
          b = b.next
      }
      temp = temp.next
  }

  if (a) {
      temp.next = a;
  } else {
      temp.next = b;
  }

  return dummy.next;
}

/*
ways to solve.

1. Create array from linked lists, sort linked list, create whole linked list
  1. Time - o(n), nLog(n), n = nLog(n)
  2. time might acutally be really slow under the hood because creating dynamic sized arrays in JS need to be recopied over to a new section when size increases.
2. create bst from LL and then create LL - similar complexity to solution 1 except creating tree is On*h
3. continually mergeSort 2 lists at the same time
  1. merging 2 lists is n which will be done log(k) times.
  2. space complexity is the lowest as no new space is needed

*/