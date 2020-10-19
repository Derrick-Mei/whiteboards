// no dummy head

var mergeTwoLists = function (l1, l2) {
  let answerNode = undefined;
  if (l1.val < l2.val) {
    answerNode = l1;
    l1 = l1.next;
  } else {
    answerNode = l2;
    l2 = l2.next;
  }
  let currentNode = answerNode;
  // make answer node var and currentNode
  // make l1 l2 currentNode var
  // while loop if both aren't empty
  // check which node is smaller and point currentNode to it
  while (l1 || l2) {
    if (!l2 || l1.val < l2.val) {
      currentNode.next = l1;
      currentNode = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      currentNode = l2;
      l2 = l2.next;
    }
  }
  return answerNode;
};
