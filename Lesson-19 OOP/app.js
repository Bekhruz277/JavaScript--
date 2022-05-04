// OOP

const cars = {
    color: "white",
    isBay: false,
    isArmor: function () {
        console.log("Armor does not have")
    }
};

const nexia = Object.create(cars); // create - дабавляет
console.log(cars.color)

const bmw = {
    color: 'red',
};


Object.setPrototypeOf(bmw,cars);
bmw.isArmor();
console.log(bmw.isBay)