let Dog = require('./dog');
let Cat = require('./cat');
let Mouse = require('./mouse');
let dog = new Dog("Tom");
dog.sayHi();	

let tom = new Cat(); 
dog.eat(tom);

let mickey = new Mouse();
tom.eat(mickey);
console.log(dog);