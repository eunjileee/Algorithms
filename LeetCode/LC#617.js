/** 
- Title : Merge Two Binary Trees
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-06-10
- URL : https://leetcode.com/problems/merge-two-binary-trees/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// FIRST SOLUTION
let mergeTrees = function (t1, t2) {
  return merge(t1, t2);
};

function merge(t1, t2) {
  if (t1 === null) {
    return t2;
  } else if (t2 === null) {
    return t1;
  }

  t1.val += t2.val;
  t1.left = merge(t1.left, t2.left);
  t1.right = merge(t1.right, t2.right);

  return t1;
}

// SECOND SOLUTION
let mergeTrees = function (t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;

  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};
