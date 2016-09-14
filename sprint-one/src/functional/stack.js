var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Use counters to assign numeric keys
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      counter--;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
