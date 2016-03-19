/* It's tricky keeping track of who is owed what when spending money in a group.
Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value
pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much
money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from
the group, negative numbers if they owe money to the group.

If value is a decimal, round to two decimal places. */

function splitTheBill(x) {
    var total = 0;
    var each, moniesOwed = {};

    for (var i in x) {
      total += x[i];
    }

    each = total / Object.keys(x).length;

    for (var i in x) {
      moniesOwed[i] = parseFloat((x[i] - each).toFixed(2));
    }

    return moniesOwed;
}
