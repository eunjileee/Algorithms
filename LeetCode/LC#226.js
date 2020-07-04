/** 
- Title : Invert Binary Tree
- Author: eunjileee@GitHub (leeeeunz@gmail.com)
- Date : 2020-07-04
- URL : https://leetcode.com/problems/invert-binary-tree/
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let invertTree = function (root) {
  if (!root) return null;

  const leftTree = invertTree(root.left);
  const rightTree = invertTree(root.right);
  root.left = rightTree;
  root.right = leftTree;

  return root;
};
