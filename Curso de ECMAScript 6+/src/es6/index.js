function newFunction (name, age ) {
    var name = name || "oscar";
    var name = age || "18";
    console.log(name,age);
}

//es6

function newFunction2(name="oscar",age=21) {
    console.log(name,age);
}

newFunction2("juancho",22);

let epicPhrase = `holaaaa aquí se pueden concatenar variables`;

let lorem = "lorem ipsum yo no se quE \n" + "hola"
let lorem2 = `Hola caremondassssssss
ahora es otra frase epica`
console.log(lorem2);

let person = {
    'name':"oscar",
    'age':32,
    'country':'mx'
}
console.log(person.name,person.age);
let {name} = person;
console.log(name);

let team1 = ["oscar", "juancho","marco"];
let team2 = ["julian","valen", "rere"];

let education = ["david",...team1,...team2 ];
console.log(education)



let name = "william";
let edad = 21;

obj = {name:name,edad:edad}
//es6
obj2 = {name,edad}
console.log(obj2);
console.log(obj);

const names = [
    {name:"oscar",age:edad},
    {name:"yesica",age:edad}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

//arrow function 
let listOfNames = names.map(item => console.log(item.name))

const listOfNames3 = (name,age,country) => {
    ...
};

const listOfNames4 = name => {
    ...
}


const square = num => num * num ;


const helloPromise = (holita) => {
    return new Promise ((resolve,reject) => {
        if (holita){
            resolve("hey");
        }else{
            reject("paila");
        }
    })
}

helloPromise(false)
    .then(response => console.log(response))
    .catch(error => console.log(error));



class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA,valueB){
        this.valueA = valueA; 
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,3));  


import { hello } from './module';

console.log( hello() );

function* helloWorld () {
    if (true){
        yield 'hello, '
    }
    if(true){
        yield "World"
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



