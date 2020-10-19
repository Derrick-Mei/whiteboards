/*
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 */

function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data);

  // if head is null
  if(head === null) {
      return newNode;
  }

  // if head is > newNode
  if (head.data > data) {
      newNode.next = head;
      return newNode;
  }

  let currentNode = head;

  //  if node in the middle
  while(currentNode.data < data) {
      // if newNode is tail
      if (currentNode.next === null) {
          currentNode.next = newNode;
          newNode.prev = currentNode;
          return head;
      }
      currentNode = currentNode.next
  }

  currentNode.prev.next = newNode;
  newNode.prev = currentNode.prev;
  newNode.next = currentNode;
  currentNode.prev = newNode;

  return head
}