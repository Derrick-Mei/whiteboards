class Node {
  constructor(value, name) {
    this.value = value;
    this.name = name;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(node) {
    this.head = node;
  }

  insert(node, current = this.head) {
    // if no head, node = head;
    if (!current) return (this.head = node);

    // traverse right
    if (node.value > current.value) {
      if (current.right) return this.insert(node, current.right);
      return (current.right = node);
    }
    // traverse left
    else {
      // node.value <= current.value)
      if (current.left) return this.insert(node, current.left);
      return (current.left = node);
    }
  }

  // @param {TreeNode} node, @param {integer} value, @param {name} string
  // @return none  // node does not need to be deleted, just the pointers need to be removed
  delete(value, name, node = this.head) {
    // 1. traverse until you've reached node
    if (value < node.value || (value === node.value && name !== node.name)) {
      node.left = this.delete(value, name, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, name, node.right);

      // 2. If it matches - Delete Node
    } else {
      // 4 cases when deleting node - also need to solve when node === head.
      // node is leaf, node has no left, node has no right, node has both left and right

      if (!node) return null; // catch all if something bad happens.

      // no left tree <-- also will cover when node is leaf node
      if (!node.left) {
        // if it's the head, you need to reassign the head
        if (node === this.head) this.head = node.right;
        // make pointer to rightNode to return later
        const rightNode = node.right;
        // remove pointer from node to be deleted
        node.right = null;
        // return rightNode
        return rightNode;
      }

      // no right tree
      if (!node.right) {
        if (node === this.head) this.head = node.left;
        const leftNode = node.left;
        node.left = null;
        return leftNode;
      }

      // has both trees
      if (node === this.head) this.head = node.right;
      // find successor node - aka the following value of the node we're deleting
      let cur = node.right;
      while (cur.left) cur = cur.left;
      // move the left branch of the node we're deleting to the successor node
      cur.left = node.left;

      const rightNode = node.right;
      node.left = node.right = null;
      return rightNode;
    }
    // return node to match the pointers when traversing
    return node;
  }

  delete2(nodeToDelete, current = this.head) {
    // console.log({ nodeToDelete, current });
    if (!current || !nodeToDelete) return null;

    if (nodeToDelete === current) {
      // console.log("======= FOUND IT =======");
      // Leaf node, node only has left/right branch
      if (!nodeToDelete.left || !nodeToDelete.right) {
        // console.log("no something **********");
        let returnNode = nodeToDelete.left || nodeToDelete.right;
        if (nodeToDelete === this.head) this.head = returnNode;
        // console.log({ returnNode });
        return returnNode;
      } else {
        // has both left and right
        // find successorNode, delete successorNode, replace successor pointers with nodeToDelete pointers.
        let successorNode = current.right;
        while (successorNode.left) successorNode = successorNode.left;
        // console.log({ successorNode });

        this.delete2(successorNode, current);

        successorNode.left = current.left;
        successorNode.right = current.right;
        current.left = current.right = null;

        if (current === this.head) this.head = successorNode;
        return successorNode;
      }
    } else {
      // need to traverse tree
      if (nodeToDelete.value > current.value) {
        // console.log("going right");
        current.right = this.delete2(nodeToDelete, current.right);
      } else {
        // nodeToDelete <= current.value
        // console.log("going left");
        current.left = this.delete2(nodeToDelete, current.left);
      }
    }
    return current;
  }

  getTopK(k) {
    let storage = [];
    function recursiveHelper(node) {
      if (node.right) recursiveHelper(node.right);
      if (storage.length < k) storage.push(node.value);
      if (storage.length < k && node.left) recursiveHelper(node.left);
    }

    recursiveHelper(this.head);
    console.log(storage);
    return storage;
  }

  print(current = this.head) {
    if (!current) return;

    this.print(current.right);
    console.log(current.value, current.name);
    this.print(current.left);
  }
}

let arr = [
  [100, "apple"],
  [200, "beta"],
  [300, "c"],
  [200, "beta2"],
  [400, "d"],
  [90, "e"],
];

let nodes = arr.map(([volume, name]) => new Node(volume, name));

const tree = new BST();

nodes.forEach((node) => tree.insert(node));

tree.print();

tree.delete(300, "c");

console.log("head:", tree.head);

tree.print();

tree.getTopK(2);

console.log(nodes[3]);
