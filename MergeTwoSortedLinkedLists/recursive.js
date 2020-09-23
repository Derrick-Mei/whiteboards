var mergeTwoLists = function (l1, l2) {
  function merge(left, right) {
    if (!left) return right;
    if (!right) return left;

    if (left.val < right.val) {
      left.next = merge(left.next, right);
      return left;
    } else {
      right.next = merge(left, right.next);
      return right;
    }
  }
  return merge(l1, l2);
};
