/* === JavaScript classes === */

// javaScript class object template;
class Car {
    constructor(name, year, model, price) {
        this.name = name;
        this.year = year;
        this.model = model;
        this.price = price
    }
}


// create class object;
const bmw = new Car('BMW', 2015, 'H-MBW', '1cr')

// check output;
console.log(bmw);


/* === JavaScript class object template use method and argument === */
class Person {
    constructor(name, age, city, country) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }
    eat(name) {
        return `${name} is eating.`;
    }
}


const deo = new Person('Jhone Deo', 30, 'Gania', 'America');

// output all object property and value;
console.log(deo);

// access class eat method
console.log(deo.eat('Rahim'));







