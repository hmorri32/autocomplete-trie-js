class Node {
  constructor(value){
    this.value = value;
    this.children = {};
    this.endOfWord = null;
  }
}


//
// // we start with the TrieNode
// function TrieNode(key) {
//   // the "key" value will be the character in sequence
//   this.key = key;
//
//   // we keep a reference to parent
//   this.parent = null;
//
//   // we have hash of children
//   this.children = {};
//
//   // check to see if the node is at the end
//   this.end = false;
// }
//
// // iterates through the parents to get the word.
// // time complexity: O(k), k = word length
// TrieNode.prototype.getWord = function() {
//   var output = [];
//   var node = this;
//
//   while (node !== null) {
//     output.unshift(node.key);
//     node = node.parent;
//   }
//
//   return output.join('');
// };
//
//
//
//

export default Node