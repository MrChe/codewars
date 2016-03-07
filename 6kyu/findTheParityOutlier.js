/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The integers in the array are either entirely odd or entirely even except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 */


function findOutlier(integers){
  var even = (integers[0] % 2 == 0 && integers[1] % 2 == 0) ||
    (integers[0] % 2 == 0 && integers[2] % 2 == 0) ||
    (integers[1] % 2 == 0 && integers[2] % 2 == 0);

  if (even) {
    for (var i in integers) {
      if (integers[i] % 2 !== 0){
        return integers[i]
      }
     }
   } else {
    for (var i in integers) {
      if (integers[i] % 2 === 0){
        return integers[i]
      }
    }
  }
}
