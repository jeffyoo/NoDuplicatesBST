var NoDuplicatesBST = function(array) {
  var tempArr = arguments[0].sort(function(a, b) {
    return a-b;
  });
  var middle = Math.floor(((tempArr.length - 1) / 2));
  var sliced = tempArr.splice(middle, 1);
  
  this.createBST(sliced[0]);
      
  // now insert the rest of tempArr into the BST
  for (var i = 0; i < tempArr.length; i++) {
    this.insert(tempArr[i]);
  }
};

NoDuplicatesBST.prototype.createBST = function(number) {
  this.value = number;
  this.left = null;
  this.right = null;
};

NoDuplicatesBST.prototype.insert = function(number) {
  if (number < this.value) {
    if (this.left === null) {
      this.left = new this.createBST(number);
      console.log(this)
    } else {
    // ------------CODE BELOW DOES NOT WORK!, LINED 77 ALSO PROBABLY. TypeError: this.left.insert is not a function----------------------
      this.left.insert(number);
    }
  } else if (number > this.value) {
    if (this.right === null) {
      this.right = new this.createBST(number);
    } else {
      this.right.insert(number);
    }
  } else {
    // Do nothing
  }
};

var testBST = new NoDuplicatesBST([2,3,4,5,1]);

console.log("The testBST:", testBST);