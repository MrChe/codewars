/* You will be given a wishlist (array), containing all possible items.
Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit",
weight: "medium"} (Ruby version has an analog hash structure, see example below)

You also get a list of presents (array), you see under the christmas tree, which
have the following format each: {size: "small", clatters: "no", weight: "light"}

Your task is to create a list of all possible presents you might get.

Rules

Possible values for size: "small", "medium", "large"
Possible values for clatters: "no", "a bit", "yes"
Possible values for weight: "light", "medium", "heavy"
The return value must be an array of the names of items from your wishlist,
e.g. ["Toy Car", "Card Game"]
Don't add any item more than once to the result
The order of names in the returned array doesn't matter
It's possible, that multiple items from your wish list have the same attribute
values. If they match the attributes of one of the presents, add all of them.
*/

function guessGifts(wishlist, presents) {
  var possibleGifts = [];

  for (var i in presents) {
    for (var j in wishlist) {
      if (presents[i].size === wishlist[j].size &&
        presents[i].clatters === wishlist[j].clatters &&
        presents[i].weight === wishlist[j].weight &&
        possibleGifts.indexOf(wishlist[j].name) === -1) {
          possibleGifts.push(wishlist[j].name);
        }
      }
    }
    return possibleGifts;
}


// alternatively:

function guessGifts(wishlist, presents) {
  return wishlist.filter(function(wish) {
    return presents.some(function(gift) {
      return wish.size === gift.size &&
          wish.clatters === gift.clatters &&
          wish.weight === gift.weight;
    });
  }).map(function(x) {
        return x.name;
     });
}
