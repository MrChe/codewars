// You are given a 2D array, composed of a colour and its 'common' association
// in each array element. The function you will write needs to return the colour
// as 'key' and association as its 'value'.

function colourAssociation(array){

  return array.map(function(pair) {
    var dict = {};
    dict[pair[0]] = pair[1];
    return dict;
  });
}
