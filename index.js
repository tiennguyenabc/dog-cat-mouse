let Dog = require('./dog');
let Cat = require('./cat');
let Mouse = require('./mouse');


let cat = new Cat();
let mouse = new Mouse("Mickey");
let dog = new Dog();
try{
	cat.eat(dog);
} catch(error){
	console.log('Erorr while cat eating dog');
}

cat.eat(mouse);

console.log(cat);