import fs from "fs";

class Node {
  constructor(value){
    this.value    = value;
    this.children = {};
    this.isWord   = false;
    this.parent   = null
  }
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
    if(word === undefined || word === null){
      throw new Error('error');
    }

    let node = this.head;
    for(let i = 0; i < word.length; i++){
      if(!node.children[word[i]]){
        node.children[word[i]] = new Node(word[i])
        node.children[word[i]].parent = node;
        // console.log(node.children)
      }
      node = node.children[word[i]];
      if(i === word.length-1){
        node.isWord = true;
        this.count ++;
        // console.log(node)
      }
    }
  }
  suggest(letters) {
    let node        = this.head;
    let suggestions = [];
    
    for(let i = 0; i < letters.length; i++){
      if(node.children[letters[i]]){
        node = node.children[letters[i]];
      } else {
        return suggestions
      }
    }
    findWords(node, suggestions)
    return suggestions
  }
}

function findWords(node, array) {
  if (node.isWord === true) {
    array.unshift(node.traverse());
  }
  for (var eachChild in node.children) {
    findWords(node.children[eachChild], array);
  }
}

export default Trie;