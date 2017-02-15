import { expect, assert } from 'chai';
import Trie               from '../scripts/trie'
import Node               from '../scripts/node'
import fs                 from "fs";
require('locus')

describe('TDD with TRIE', () => {
  let trie;
  let node;

  beforeEach(function(){
    trie = new Trie();
    node = new Node();
  });

  it('should recognize insert as a function', function(){
    assert.isFunction(trie.insert)
  })

  it('should throw error if nothing is inserted', function(){
    expect(() => trie.insert()).to.throw('error');
  })

  it('should allow me to insert words', function() {
    trie.insert('word')
  })


  it('should allow me to insert word and confirm that it is a word', function() {
    trie.insert('word')
    expect(trie.head.children['w']
                    .children['o']
                    .children['r']
                    .children['d']
                    .isWord)
                    .to.be.true
  })

  it('should allow me to insert word and disconfirm if it is not word', function() {
    trie.insert('word')
    expect(trie.head.children['w']
                    .children['o']
                    .children['r']
                    .isWord)
                    .to.be.false
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
  })

  it.only('should be able to populate the trie given words from the dictionary and count all words', function(){

    var arrayOfWords = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    arrayOfWords.forEach((word)=>{
      trie.insert(word.toLowerCase())
    })
    expect(trie.count).to.equal(235886)
  })

  it('should be able to confirm whether populated words in the dictionary are actual words', function(){
    var arrayOfWords = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    arrayOfWords.forEach((word)=>{
      trie.insert(word.toLowerCase())
    })

    expect(trie.head.children['d']
                    .children['u']
                    .children['d']
                    .children['e']
                    .isWord)
                    .to.be.true;

  });

  it('should be able to ascertain whether populated words are not actual words ', function(){
    var arrayOfWords = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    arrayOfWords.forEach((word)=>{
      trie.insert(word.toLowerCase())
    })

    expect(trie.head.children['d']
                    .children['i']
                    .children['d']
                    .children['e']
                    .isWord)
                    .to.be.false
  })

  it('should recognize suggest as a function', function() {
    assert.isFunction(trie.suggest)
  })

  it('suggest should output an array', function(){

    expect(trie.suggest('p')).to.deep.equal([])

  })

  it.only('suggest should traverse the node structure and list stuff', function(){
    trie.insert('pizza')
    trie.insert('pizzeria')
    trie.insert('hey')
    trie.insert('suh')
    trie.insert('skateboard')
    trie.insert('surf')


    console.log(trie.suggest('skateboard'))
    console.log(trie.suggest('p'))

    expect(trie.suggest('skateboard')).to.deep.equal(['skateboard'])

    // console.log(trie.getAllWords())

    // expect(trie.suggest('p')).to.deep.equal([])
    // console.log(trie.head.children['p'].children['i'].children['z'].children['z'].children['a'].isWord)

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