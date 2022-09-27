/* === Class Inheritance === */

// parent class
class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return 'Car name is ' + this.carName;
    }
}


// child class extends Car
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ',This model is ' + this.model;
    }
}

// Create class object;
const ford = new Model('Ford', 'Suzuki')

// check output;
console.log(ford.show());


/* === getter & setter === */
class Car2 {
    constructor(brand) {
        this.carName = brand;
    }

    get cName(){
        return 'Car name is' + this.carName;
    }

    set cName(model) {
        return this.carName = model;
    }

}


// create class object;
const toyota = new Car2('Honda');

// output getter property; 
console.log(toyota.cName);

toyota.carName = 'Yamaha';
console.log(toyota.cName);



