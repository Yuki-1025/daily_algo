// _.memoize should return a function that, when called, will check if it has
// already computed the result for the given argument and return that value
// instead if possible.

// memoize could be renamed to oncePerUniqueArgumentList; memoize does the
// same thing as once, but based on many sets of unique arguments.

_.memoize = function (func) {
  var memory = {}; //{args:output,}
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var key = JSON.stringify(args);

    if (!memory[key]) {
      console.log('INVOKED');
      memory[key] = func.apply(this, args);
    }
    return memory[key];
  }
}