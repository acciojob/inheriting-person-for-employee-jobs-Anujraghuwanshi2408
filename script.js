// complete this js code
Person.prototype.greet = () =>{
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
} 

function Employee(name, age, jobTitle) {
	person.call(this ,name , age);
	this.jobTitle = jobTitle;
}

Employee.prototype.__proto__ = Person.prototype

Employee.prototype.jobGreet = function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
 }


// Do not change code below this line

window.Person = Person;
window.Employee = Employee;


