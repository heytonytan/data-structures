var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Use counter for assigning numeric keys
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
  };

  someInstance.dequeue = function() {
    counter--;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
