/*A closure is a feature of JavaScript that allows 
inner functions to access the outer scope of a 
function. Closure helps in binding a function
to its outer boundary and is created automatically 
whenever a function is created. 
A block is also treated as a scope since ES6.*/

function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const watch1 = stopWatch();
const watch2 = stopWatch();
const watch3 = stopWatch();
console.log(watch1());
console.log(watch2());
console.log(watch1());
console.log(watch3());
console.log(watch1());
console.log(watch3());
