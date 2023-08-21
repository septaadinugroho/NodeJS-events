// // TODO 1
// const { EventEmmiter } = require("events");

// const birthdayEventListener = (name) => {
//   console.log(`Happy birthday ${name}!`);
// };
// // TODO 2
// const myEmitter = new EventEmmiter();
// // TODO 3
// myEventEmitter.on("happy-birthday", birthdayEventListener);
// // TODO 4
// myEventEmitter.emit("happy-birthday", { name: "Septa 765lt" });

const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const myEmitter = new EventEmitter();

myEmitter.on("birthday", birthdayEventListener);

myEmitter.emit("birthday", "Septa 765lt");
