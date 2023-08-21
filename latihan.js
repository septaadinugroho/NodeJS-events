const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = ({ price }) => {
//   console.log(`Bill sebesar ${price} telah dibuat!`);
// };

// myEventEmitter.on("coffee-order", makeCoffee);
// myEventEmitter.on("coffee-order", makeBill);

// myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

const orderCar = ({ name }) => {
  console.log(`Mobil ${name} telah diorder!`);
};

const makeBill = ({ price }) => {
  console.log(`Harga mobil adalah ${price}, selamat atas mobil barunya!`);
};

myEventEmitter.on("Car-Order", orderCar);
myEventEmitter.on("Car-Order", makeBill);

myEventEmitter.emit("Car-Order", { name: "Mclaren 765lt", price: "14 Milyar Rupiah" });
myEventEmitter.emit("Car-Order", { name: "Porsche 992 GT3RS", price: "13 Milyar Rupiah" });
myEventEmitter.emit("Car-Order", { name: "Lamborghini Aventador SVJ", price: "16 Milyar Rupiah" });
myEventEmitter.emit("Car-Order", { name: "Lamborghini Huracan STO", price: "13 Milyar Rupiah" });
myEventEmitter.emit("Car-Order", { name: "Ferrari 812 Competizione", price: "16 Milyar Rupiah" });
