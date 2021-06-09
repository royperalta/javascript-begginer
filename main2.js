const personxxx = {
    firstName :"Jhon",
    lastName :'Peralta',
    age: 30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

console.log(personxxx.firstName, personxxx.lastName);
const {firstName, lastName} = personxxx;


const {address:{street,city,state},hobbies} = personxxx;
console.log(street,city,state,hobbies);

personxxx.email = 'rrpb33@gmail.com';

const {email} = personxxx;

console.log(email);

const todos = [
    {
        id:1,
        text:"mi texto 1",
        isCompleted:false
    },
    {
        id:2,
        text:"mi texto 2",
        isCompleted:false
    },
    {
        id:3,
        text:"mi texto 3",
        isCompleted:true
    }
    
]

console.log(todos[0].isCompleted)


for(var i=0; i<todos.length; i++){
    console.log(todos[i].text);
}
for(let todo of todos){
    console.log(todo.text)
    console.log(todo.id)
}

todos.forEach(function(todo){
    console.log(todo.text+" "+todo.id);
})

todos.forEach(function(dato) {
    console.log(dato.text)
})


todos.forEach(function(d){
    console.log(d.id);
})
const textos =todos.map(function(tex){
    return tex.id;
})
// foreach , maps , filter
console.log(textos);

const isConfirmed = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

let number = '5';

if(number === 5){
    console.log("es igual");
}


const x= 11;

const color = x > 10 ? 'red':'blue';

console.log(color);

switch (color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;

}

function addNumer2(num1,num2){
    console.log(num1+num2);
}
addNumer2(5,2);

function restNumer(num1,num2){
    return num1-num2;

}
console.log(restNumer(5,2))

const addNumber = (num1=10, num2=10) =>{
    return num1+num2;
}
console.log(addNumber())

const multiplicacion = (num1,num2) => {
    return num1*num2;
}
console.log(multiplicacion(5,2))

const division = (num1,num2) =>num1/num2;

console.log(division(5,5))

const dato = num1 => num1+5;
console.log(dato(3))


console.log(window)

function person2(name,lastname,dob){
    this.name = name;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.name} : ${this.lastname}`;
    }
}

class Person{
    constructor(name,lastname,dob){
        this.name = name;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.name} : ${this.lastname}`;
    }

}
console.log(person2);

const person1 = new Person('Roy','Peralta','02-02-2015');
const person3 = new Person('Alicia','Chilon','03-06-2021');
console.log(person3.dob.getDay());
console.log(person1);


console.log(person1.getBirthYear());
console.log(person1.getFullName());
