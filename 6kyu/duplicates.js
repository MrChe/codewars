// This is the text editor interface.

// adorne@palantir.com

var arr_1 = [1,2,3,4,2,3,2,1,2,6,7,9,4,0,-4,-5]; // return 4

// input: O(n)
// alg: T(n) = T(n-1) * O(1) => 1+2+3+...+n = O(n^2)
// alg: O(n)

function findLastDuplicate(anArr) {
    var occurrences = {};
    var lastDupe = null;

    for (var i = 0; i < anArr.length; i++) {
       var num = anArr[i];
       if (num in occurrences) {
           lastDupe = num;
       } else {
           occurrences[num] = 1;
       }
    }
    return null;

}

console.log(findLastDuplicate(arr_1));
