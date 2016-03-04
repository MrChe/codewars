// Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments
// (return true if no other arguments)

function isDivisible(){

  for (var i = 0; i < arguments.length; i++){
    if (arguments[0] % arguments[i] !== 0){
      return false;
    }
  }
  return true;
}


