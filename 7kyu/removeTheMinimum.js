/* Given an array of integers, remove the smallest value. If there are multiple
 elements with the same value, remove the one with a lower index. If you get an
 empty array/list, return an empty array/list.
Don't change the order of the elements that are left. */

function removeSmallest(numbers) {
  var smallest = numbers[0];

  for (var i in numbers){
    if (numbers[i] < smallest) {
      smallest = numbers[i]
      }
  }

  numbers.splice(numbers.indexOf(smallest), 1);
  return numbers;
}
