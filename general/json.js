var person = {};

var name = "John";
var age = "30";

var name = prompt("nombre?");
var age = prompt("edad?");

person.name = name;
person.age = age;

var jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

var personObj = JSON.parse(jsonPerson);

console.log(personObj);

//Geovanny E. Villa Sánchez
//KikeViS