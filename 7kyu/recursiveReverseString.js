/* Your objective is to complete a recursive function reverse() that receives
str as String and returns the same string in reverse order

Rules:

reverse function should be executed only N times. N = length of the input string
helper functions are not allowed
changing the signature of the function is not allowed
Examples:

reverse("hello world") = "dlrow olleh" (N = 11)
reverse("abcd") = "dcba" (N = 4)
reverse("12345") = "54321" (N = 5)  */


function reverse(str) {
  var arr = str.split("");
  var popped = arr.pop();

  if (str.length <= 1) {
    return str;
  }
  return popped += reverse(arr.join(""));
}


// alternatively:

function reverseV2(str) {
  var arr = str.split("");
  var popped = arr.pop();

  return str.length <= 1 ? str : popped += reverse(arr.join(""));
}

// alternatively:

function reverseV3(str) {
  var new_str = str.slice(0, -1);
  var popped = str.slice(-1)

  if (str.length <= 1) {
    return str;
  }
  return popped += reverse(new_str);
}
