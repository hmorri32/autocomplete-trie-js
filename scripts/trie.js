import fs from "fs";

class Node {
  constructor(value){
    this.value = value;
    this.children = {};
    this.isWord = null;
  }
  getWord(){
    // var output = [];
    // var node = this;
    //
    // while (node !== null) {
    //   output.unshift(node.key);
    //   node = node.parent;
    // }
    // return output.join('');
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

    for(let i = 0; i < word.length; i++){
      if(!node.children[word[i]]){
        node.children[word[i]] = new Node(word[i])
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

  suggest(pre){
    let node = this.head;
    let suggestions = [];

    for(let i = 0; i < pre.length; i++){
      if(node.children[pre[i]]){
        node = node.children[pre[i]];
      } else {
        return suggestions
      }
    }
    return suggestions
  }
}


export default Trie;