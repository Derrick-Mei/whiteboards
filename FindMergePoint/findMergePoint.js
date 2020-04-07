function findMergeNode(headA, headB) {
  const map = {}
  let currentA = headA
  while (currentA !== null) {
      console.log(currentA.data)
      map[(currentA)] = currentA;
      currentA = currentA.next
  }

  let currentB = headB.next
  while (currentB !== null) {
      console.log(currentB.data)
      if (map[(currentB)]) {
          return currentB.data
      }

      currentB = currentB.next
  }
}

/*
since objects in js are addresses,
I made a map of the nodes of 1 list
then I looped over the second list looking for the first matching node
*/