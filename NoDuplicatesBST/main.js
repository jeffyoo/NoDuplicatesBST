// NOTES: the node needs to have the methods

// node constructor
var bstNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

bstNode.prototype.insert = function(node) {
  if (node.value < this.value) {
    if (this.left === null) {
      this.left = node;
    } else {
      this.left.insert(node);
    }
  }

  if (node.value > this.value) {
    if (this.right === null) {
      this.right = node;
    } else {
      this.right.insert(node);
    }
  }
};

var NoDuplicateBst = function(array) {
  this.root = null;

  var tempArr = array.sort(function(a, b) {
    return a-b;
  });
  var middleIndex = Math.floor(((tempArr.length - 1) / 2));
  this.root = new bstNode(tempArr.splice(middleIndex, 1)[0]);
  var self = this;
  tempArr.forEach(function(value) {
    var node = new bstNode(value);
    self.root.insert(node);
  });

};

var testBST = new NoDuplicateBst([2,3,4,5,1]);

console.log("The testBST:", testBST);
