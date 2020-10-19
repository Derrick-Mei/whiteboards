function checkBalanced(node) {
    let parent = [node]
    let children = [];
    let nullChildren = [];
    while(parent.length) {
      for (let i = 0; i < parent.length; i++) {
        if(parent[i].left) {
          children.push(parent[i].left)}
        else{nullChildren.push(null)}

        if(parent[i].right) {
          children.push(parent[i].right)}
        else{nullChildren.push(null)}
      }
      // console.log("parent: ", parent)
      // console.log("children: ", children)
      // console.log("nullChildren: ", nullChildren)
      if (children.length && nullChildren.length) {
        return false;
      }
      if(children.length === 0) return true;
      if(nullChildren.length === 0) {
        parent = children;
        children = []
      }
    }
  }

  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }

    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }

  const root = new BinaryTreeNode(5);
  console.log(checkBalanced(root));   // should print true

  root.insertLeft(10);
  console.log(checkBalanced(root));   // should print false


  root.insertRight(11);

  console.log(checkBalanced(root));   // should print true;

  root.left.insertLeft(3)

  // root.left.left = 3
  root.left.right = 3
  root.right.left = 4
  root.right.right = 4

  console.log(checkBalanced(root))