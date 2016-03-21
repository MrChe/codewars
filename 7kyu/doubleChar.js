/* Given a string, you have to return a string in which each character (case-sensitive)
is repeated once.

doubleChar("String") ==> "SSttrriinngg" */

function doubleChar(str) {
  var chars = str.split("");

  return chars.map(function(char) {
    return char + char;
  }).join("");
}
