function make_avg(array_numbers, size) {
  var sum = 0;
  for (var i = array_numbers; i <= size; i++) {
    sum = sum + i;
  }
  var avg = sum / size;
  return avg;
}

var array = [1, 2, 3, 4, 5];
var array_size = array.length;

var avg = make_avg(array, array_size);
console.log(avg);
