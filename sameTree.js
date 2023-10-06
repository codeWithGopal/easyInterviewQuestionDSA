const isSameTree = function (p, q) {
  // base case
  if (p == null && q == null) {
    return true;
  }
  // if any of p,q is not null
  if ((p == null && q != null) || (q == null && p != null)) {
    return false;
  }
  //if p is not equal to q
  if (p.val !== q.val) {
    return false;
  }
  // check on the left and right node
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
