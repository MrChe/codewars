/* Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring
(racecar) length would be 7.

If the length of the input string is 0, return value must be 0. */


longestPalindrome = function(s) {
  if (!s) {
    return 0;
  }
  var substrings = getAllSubstrings(s);

  var palindromes = substrings.filter(function(string) {
    return string === string.split("").reverse().join("");
  });

  var longest =  palindromes.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });

  return longest.length;
}


function getAllSubstrings(s) {
  var substrings = [];

  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length + 1; j++) {
      var string = s.slice(i, j);
      substrings.push(string);
    }
  }
  return substrings;
}
