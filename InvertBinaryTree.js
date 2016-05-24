//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// to

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(root) {
    if(root === null){
        return null;
    }
    function recurse(node) {
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        if(node.left !== null){
            recurse(node.left);
        }
        if(node.right !== null){
            recurse(node.right);
        }
    }
    
    recurse(root);
    return root;
};
