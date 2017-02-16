class Node {
  // the "vale" will reference the character in sequence
  // create a children hash, keep reference to the parent,
  // check to see if we're at the end of our word (isWord)
  constructor(value){
    this.value    = value;
    this.children = {};
    this.isWord   = false;
    // this.parent   = null
  }
}


export default Node