# JavaScript classes

JavaScript class is a template for JavaScript objects.

## The constructor method
The constructor method is a special method:

1. It has to have the exact name "constructor"

2. It is executed automatically when a new object is created

3. It is used to initialize object properties

# Sytax:

### javaScript class template:-

    class ClassName {

        constructor(parameter1, parameter2) {
            this.property1 = parameter1;
            this.property2 = parameter2;
        }

        method_1(parameter1, parameter2){......}

        method_2(){......}

        method_3(){......}
    }


### javaScript class using:-

    const varName = new ClassName(argument1, argument2);

### class method call:-

    varName.method_1(argument1, argument2);

## Class Inheritance:

Inheritance means one class inheriting another class, is called inheritance. To create a class use the   extends keywords;

#### Example:-

    class ParentClassName{
        constructor(parameter){....}

        method_1(){.....}

        method_2(){.....}

    }


    class ChildClassName extends parentClassName{
        constructor(parameter1){
            super(parameter1);
        }

        method_1(){....}

    }

### javaScript class using:-

    const objectName = new childClassName(parameter1);


### super() method:-
The super() method refers to the parent class. By calling the super() method in the constructor method we call the parent's constructor method and gets access to the parent's properties and methods.



## Getter & Setter 

Class always allow getter and setter. 

Getter means  get keyword

Setter means set keyword


### Example :-

    class ClassName{
        constructor(parameter1){
            this.propertyName = parameter1;
        }

        get proName(){
            return this.propertyName;
        }

        set proName(parameter){
            this.propertyName = parameter; 
        }
    }


### javaScript class using:-

    const objectName = new ClassName(parameter1);

#### Access get property:-

    const getProperty = ClassName.getterPropertyName;

#### Access set property name:-

    className.setterProperty = parameterValue;   ( set function property value. Then change the property value )


### note: The name of getter/setter method cannot be the same as the name of the object property.  








