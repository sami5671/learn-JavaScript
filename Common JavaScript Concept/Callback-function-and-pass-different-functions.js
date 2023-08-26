function greeting(greetingHandler, name) {
  greetingHandler(name);
}

// const name = 'Halim mama';
// const numbers = [45, 2, 232];
// const laptop = { price: 45000, brand: "lenevo", memory: "8gb" };

function greetingHandler(name) {
  console.log("Good Morning", name);
}
function greetEvening(name) {
  console.log("Good Evening", name);
}
greeting(greetingHandler, "Honey nuts");
greeting(greetingHandler, "Tom Cruse");
greeting(greetingHandler, "Honey nuts");

greeting(greetEvening, "Tom Cruse");
greeting(greetEvening, "Honey nuts");


// ----------call back function
function submitHandler(){
    console.log('submit button clicked');
}

document.getElementById('btn-submit').addEventListener('click', submitHandler()){
    
}