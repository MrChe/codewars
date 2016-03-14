/*/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

function triangleType(a, b, c) {
  var angleA = getAngle(a, b, c);
  var angleB = getAngle(b, a, c);
  var angleC = getAngle(c, a, b);
  var angles = [angleA, angleB, angleC];

  if (!isValidTriangle(a, b, c)) {
    return 0;
  }

  for (var i in angles) {
    if (angles[i] === 90) {
      return 2;
    } else if (angles[i] > 90) {
      return 3;
    }
  }
  return 1;
}

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function getAngle(oppositeSide, l_side, r_side) {
  var angle = Math.acos( (Math.pow(l_side, 2) + Math.pow(r_side, 2) - Math.pow(oppositeSide, 2))  / (2 * l_side * r_side) );
  return angle * 180 / Math.PI;
}
