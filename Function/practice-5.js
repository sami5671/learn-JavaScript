function traffic_signal(s1, s2, s3, m) {
  switch (m) {
    case s1:
      return "Danger Zone";
      break;
    case s2:
      return "Stop";
      break;
    case s3:
      return "Can Cross The Road!!!!!!!";
      break;
    default:
      return "none";
      break;
  }
}

// main

var signal1 = "red";
var signal2 = "yellow";
var signal3 = "green";
var main_signal = "green";

var signal = traffic_signal(signal1, signal2, signal3, main_signal);
console.log(signal);
