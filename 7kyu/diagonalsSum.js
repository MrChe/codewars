// Create a function that receives a (square) matrix and calculates the sum of
// both diagonals (main and secondary)


function sum(matrix) {
  var primary = 0;
  var secondary = 0;

  for (var i in matrix){
    for (var j in matrix[i]){

      if (i === j){
        primary += matrix[i][j]
      }

      if (parseInt(i) + parseInt(j) === (matrix.length -1)){
        secondary += matrix[i][j]
      }
    }
  }

  return primary + secondary;
}
