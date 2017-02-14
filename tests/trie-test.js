import { expect, assert } from 'chai';
import Trie       from '../scripts/trie'
const text       = "/usr/share/dict/words"

describe('TDD with TRIE', () => {
  it('should recognize insert as a function', function(){
    let trie = new Trie();

    assert.isFunction(trie.insert)
  })
  
})



// -----------------------------------------
//
// // instantiate our trie
// var trie = new Trie();
//
// // insert few values
// trie.insert("hello");
// trie.insert("helium");
//
// // check contains method
// console.log(trie.contains("helium"));  // true
// console.log(trie.contains("kickass")); // false
//
// // check find method
// console.log(trie.find("hel"));  // [ 'helium', 'hello' ]
// console.log(trie.find("hell")); // [ 'hello' ]


// completion = new CompleteMe
//
// completion.insert("pizza")
//
// completion.count()
// => 1
//
// completion.insert('suh')
//
// completion.count()
//
// => 2
//
// completion.suggest("piz")
// => ["pizza"]
//
// completion.suggest('s')
// => ["suh"]