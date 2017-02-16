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

  it('should recognize populate as a function', function(){
    assert.isFunction(trie.populate)
  })

  it('populate should be able to take in an array, and insert each word', function(){
    let dictionary = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    trie.populate(dictionary)

  })

  it('should be able to populate the trie given words from the dictionary and count all words', function(){
    let dictionary = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    trie.populate(dictionary)
    expect(trie.count).to.equal(235886)
  })

  it('should be able to confirm whether populated words in the dictionary are actual words', function(){
    let dictionary = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    trie.populate(dictionary)

    expect(trie.head.children['d']
                    .children['u']
                    .children['d']
                    .children['e']
                    .isWord)
                    .to.be.true;
  });

  it('should be able to ascertain whether populated words are not actual words ', function(){
    var dictionary = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    trie.populate(dictionary)

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

  it('suggest should traverse the node structure and suggest all words that contain the prefix ', function(){
    trie.insert('pizza')
    trie.insert('pizzeria')
    trie.insert('hey')
    trie.insert('suh')
    trie.insert('skateboard')
    trie.insert('skateboards')
    trie.insert('surf')

    expect(trie.suggest('p')).to.deep.equal(['pizza',
                                             'pizzeria'
                                           ])
    console.log(trie.suggestions)
  })

  it.only('suggest should work using words from the dictionary', function(){
    let dictionary = fs.readFileSync('/usr/share/dict/words').toString('utf-8').trim().split('\n')

    trie.populate(dictionary)

    expect(trie.suggest('piz')).to.deep.equal([ 'pize',
                                                'pizza',
                                                'pizzeria',
                                                'pizzicato',
                                                'pizzle'
                                              ])
    console.log(trie.suggestions)
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