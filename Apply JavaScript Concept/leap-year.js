function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    console.log("your year is leap year", year);
  } else {
    console.log("your year is not leap year", year);
  }
}

// main
var year1 = 2000;
isLeapYear(year1);
