// import fs   from "fs";
// import Node from './node'

let input = document.getElementById('autocorrect-dis')

input.addEventListener('blur', function(){
  let trie = new Trie()
  trie.insert(input.value)


  console.log(trie)
  // input.text = trie.insert()
})

class Node {
  // the "vale" will reference the character in sequence
  // create a children hash, keep reference to the parent(might not need this...),
  // check to see if we're at the end of our word (isWord)

  constructor(value){
    this.value    = value;
    this.children = {};
    this.isWord   = false;
  }
}


class Trie {
  constructor() {
    this.head  = new Node(null)
    this.count = 0;
    this.suggestions = [];
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
      }

      // proceed to the next level down
      node = node.children[word[i]];

      // if we're at the end of the line, declare it as a word, up our counter
      if(i === word.length-1){
        node.isWord = true;
        this.count ++;
      }
    }
  }

  populate(array){
    array.forEach((word)=>{
      this.insert(word.toLowerCase())
    })
  }

  // returns every word weve inserted given the first letter(s)

  suggest(prefix){
    let suggestStr = prefix.split('');
    let current = this.head;

    suggestStr.forEach(letter => {
      if (current.children[letter]){
        return current = current.children[letter];
      }
    })

    this.findWords(current,prefix);
    return this.suggestions
  }

  // Recursive function used to find all words in a node
  // if node is already at a word, push it.
  // if it isnt, keep iterating through each child.

  findWords(current, prefix){
    if (current.isWord){
      this.suggestions.push(prefix);
    }

    let keys = Object.keys(current.children)

    keys.forEach(letter => {
      let next = current.children[letter];
      this.findWords(next, (prefix + letter));
    })
  }
// object isntead of (suggestions) array, and key would be userstring

// check user sleection
  /// take the suggest words and count of user selections
  // re sort array to accomadate that word

}





// export default Trie;