# JavaScript classes

JavaScript class is a template for JavaScript objects.

## The constructor method
The constructor method is a special method:

1. It has to have the exact name "constructor"

2. It is executed automatically when a new object is created

3. It is used to initialize object properties

# Sytax:

#### javaScript class template. 

class ClassName {
    constructor(parameter1, parameter2){
        this.property1 = parameter1;
        this.property2 = parameter2;
    }

    method_1(parameter1, parameter2){......}

    method_2(){......}

    method_3(){......}
}


#### javaScript class using

const varName = new ClassName(argument1, argument2);

#### class method call

varName.method_1(argument1, argument2);

