import { expect, assert } from 'chai';
import Trie       from '../scripts/trie'
const text       = "/usr/share/dict/words"

describe('TDD with TRIE', () => {
  it('should recognize insert as a function', function(){
    let trie = new Trie();

    assert.isFunction(trie.insert)
  })
  it('should allow me to add words', function() {
    let trie = new Trie();

  })


})



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