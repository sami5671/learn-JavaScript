const user = { id: 1, name: "gorib aamir", job: "actor" };
// javaScript object Notation (JESON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

/*
{ id: 1, name: 'gorib aamir', job: 'actor' }//this is a object (JS)
{"id":1,"name":"gorib aamir","job":"actor"}// this is a String (JSON)
 */
const shop = {
  owner: "Alia",
  address: {
    street: "kocukhet voot ar goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 450000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop); //convert the object to string
console.log(shopJSON);

const shopJSON2 = JSON.parse(shopJSON); //convert the string to object
console.log(shopJSON2);
