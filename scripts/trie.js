import fs from "fs";

class Node {
  // the "vale" will reference the character in sequence
  // create a children hash, keep reference to the parent,
  // check to see if were at the end of our word

  constructor(value){
    this.value    = value;
    this.children = {};
    this.isWord   = false;
    this.parent   = null
  }
  // Iterate through the parents, back to the root, to get words
  traverse() {
    var suggestions = [];
    var node        = this;

    while (node !== null) {
      suggestions.unshift(node.value);
      node = node.parent;
    }
    return suggestions.join('');
  }
}

class Trie {
  constructor() {
    this.head  = new Node(null)
    this.count = 0;
  }
  insert(word) {
// if we pass through nonsense , throw a firiggin error
    if(word === undefined || word === null){
      throw new Error('error');
    }

    let node = this.head;
// for every character in the word passed through
// check to see if the letter exists in our children
// if it doesnt, create a new node with that letter
// assign parent to the node

    for(let i = 0; i < word.length; i++){
      if(!node.children[word[i]]){
        node.children[word[i]] = new Node(word[i])
        node.children[word[i]].parent = node;
        // console.log(node.children)
      }
// proceed to the next level down
      node = node.children[word[i]];
// if were at the end of the line, declare it as a word, up our counter
      if(i === word.length-1){
        node.isWord = true;
        this.count ++;
        // console.log(node)
      }
    }
  }

// returns every word weve inserted given the first letter(s)

  suggest(letters) {
    let node        = this.head;
    let suggestions = [];

// Loop through every letter that we pass through
// if the node contains the letters, if it doesnt, return array.

    for(let i = 0; i < letters.length; i++){
      if(node.children[letters[i]]){
        node = node.children[letters[i]];
      } else {
        return suggestions
      }
    }
// recursion, yo!

    findWords(node, suggestions)
    return suggestions
  }
}


// Recursive function used to find all words in a node
// if node is already at a word, push it.
// if it isnt, keep iterating through each child.

function findWords(node, array) {
  if (node.isWord === true) {
    array.unshift(node.traverse());
  }
  for (var eachChild in node.children) {
    findWords(node.children[eachChild], array);
  }
}

export default Trie;