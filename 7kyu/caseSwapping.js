// Given a string, swap the case for each of the letters.
// e.g. CodEwArs --> cODeWaRS

function swap(str){
  return str.split('').map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}