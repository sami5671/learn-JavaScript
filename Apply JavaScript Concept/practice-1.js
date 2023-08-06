function hourToMinute(hour) {
  var result = hour * 60;
  return result;
}

var hour = 5;
var result = hourToMinute(hour);
console.log("Minutes: ", result);
