var fs = require("fs");




class Node {
  constructor(value){
    this.value = value;
    this.children = {};
    this.isWord = null;
  }
}



class Trie {
  constructor(){
    this.head = new Node(null)
    this.count = 0;
  }

  insert(word){
    let node = this.head;

    if(word === undefined || word === null){
      throw new Error("error");
    }

    for(var i = 0; i < word.length; i++){
      if(!node.children[word[i]]){
        node.children[word[i]] = new Node(word[i])
        console.log(node)
      }

      node = node.children[word[i]];

      if(i === word.length-1){
        node.isWord = true;
        this.count ++;
        console.log(node)
      }
    }
  }
}



export default Trie;