/* === class static === */

class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    present() {
        return 'Car name is ' + this.name + ', Model name is ' + this.model;
    }

    static hello(){
        return "Hello JavaScript. I love JavaScript. JavaScript is my gf.";
    }
}

// Direct call this class static function; 
console.log(Car.hello());


/* === Use Parameter === */
class Player{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static playerInfo(obj){
        return `Player name is ${obj.name}. And player age ${obj.age}.`;
    }
}

const sakib = new Player('Sakib Al Hasan', 37); 

// pass sakib object as a parameter. 
console.log(Player.playerInfo(sakib));  // return 'Player name is Sakib Al Hasan. And player age 37.';
