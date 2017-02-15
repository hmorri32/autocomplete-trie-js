class Node {
  constructor(d){
    this.data = d
    this.children = {}
    this.isWord = false;
    this.value = ""
  }
}

class Trie {
  constructor(){
    this.root = new Node()
    this.words = 0
    this.suggestions = []
  }
  insert(word){
    let wordArray = word.split('')
    let current = this.root;
    wordArray.forEach((letter, index)=> {
      if(current.children[letter]){
        current = current.children[letter]
      }
      current.children[letter] = new Node(letter)
      current = current.children[letter]
    })
  }
  suggest(string){
    let current = this.root
    let stringArr = string.split('')
    stringArr.forEach((letter, index)=> {
      if(current.children[letter]){
        current = current.children[letter]
      }
    }
  })

  words(node, string){
    if(node.isWord){

    }

    let nodeKeys = Object.keys(node.children)
  }

}




