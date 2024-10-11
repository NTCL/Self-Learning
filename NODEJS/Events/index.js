const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on('eventName', (param1, param2) => {
    console.log(`emitting eventName with ${param1} and ${param2}`);
});

emitter.on('eventName', (param1) => {
    if(param1 === "A") {
        console.log("emitting eventName with A as param1");
    }
});

console.log('before emitting events');
emitter.emit('eventName', 'A', 'B');


const PizzaShop = require('./PizzaShop');
const DrinkMachine = require('./DrinkMachine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'mushrooms');
pizzaShop.displayOrderNumber();