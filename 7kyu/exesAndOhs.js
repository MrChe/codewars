// Check to see if a string has the same amount of 'x's and 'o's. The method
// must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
  str = str.toUpperCase();
  var xCount = 0;
  var oCount = 0;

  for (var i = 0; i < str.length; i++){
    if (str[i] === "X"){
      xCount++;
    } else if (str[i] === "O"){
      oCount++;
    }
  }
  return xCount === oCount;
}
