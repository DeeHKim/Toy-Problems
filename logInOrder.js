// given a binary search tree, log all its nodes from least to greatest.

function logInOrder(node) {
  if(node.left) {
    logInOrder(node.left)
    };
  console.log(node);
  if(node.right) {
    logInOrder(node.right)
    };
};

