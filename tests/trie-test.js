import { expect, assert } from 'chai';
import Trie       from '../scripts/trie'
const text       = "/usr/share/dict/words"

describe('TDD with TRIE', () => {
  let trie;

  beforeEach(function(){
    trie = new Trie();
  });

  it('should recognize insert as a function', function(){
    assert.isFunction(trie.insert)
  })

  it('should allow me to insert words', function() {
    trie.insert('wordz')
  })

  it('should recognize count as a property of Trie', function() {
    expect(trie).to.have.property('count');
  })

  it('should update the count when a word is inserted', function(){
    expect(trie.count).to.eq(0);
    trie.insert('suh')
    expect(trie.count).to.eq(1);
  })

  it('should update the count when multiple words are inserted', function(){
    expect(trie.count).to.eq(0);
    trie.insert('pizza')
    expect(trie.count).to.eq(1);
    trie.insert('pizzas')
    expect(trie.count).to.eq(2);
    // console.log(JSON.stringify(trie, null, 4))
  })

  it('should recognize suggest as a function', function() {
    assert.isFunction(trie.suggest)

  })


})

