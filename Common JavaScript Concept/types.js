// strongly typed Language
// int a = 5;
// string b = 'alim kabir dalim';
// bool c = true;
// Object student = {name: 'noya doman', id: 55};
// int[] numbers = [12, 45, 78];
// string[] friends = [12, 45, 78];
// string[] friends = ['abul', 'babul'];

//javaScript is a Dynamic type programming Language
// preemptive
const a = 5;
const b = "samsu kopai na ekhon";
const c = true;

// non-preemptive
const ages = [45, 65, 48];
const student = { id: 23, class: 7 };
// console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: "web developer" };
let q = p; //it will refer the same memory location
q.job = "front end and back end developer";
console.log(p, q); //it holds the memory location that is why it gives us the same value
