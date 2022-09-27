# Class static

Static this is a keyword. Static class methods are defined on the class itself.

This only use for class object.


## syntax:

###  Define class object template:-

    class Car{

        constructor(name, model){
            this.name = name;
            this.model = model;
        }

        static hello(){
            return 'I Love JavaScript.';
        } 

    }

### Access static method:-

    console.log(Car.hello());  // return output:- 'I Love JavaScript.' ;


## static method use parameter. When static method call, use this class object create new object and send static function as a argument. show my code and see this example.

