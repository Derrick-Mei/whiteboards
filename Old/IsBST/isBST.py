def check_binary_search_tree_(root):
    if root is None:
        return True

    return is_bst_checker(root, -4294967296, 4294967296)


def is_bst_checker(node, min, max):
    if node is None:
        return True

    if node.data < min or node.data > max:
        return False

    return is_bst_checker(node.left, min, node.data - 1) and is_bst_checker(node.right, node.data + 1, max)