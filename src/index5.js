class Person {
  constructor(name) {
    this.name = name;
    this.canTalk = true;
  }

  greet() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name);
    }
  }

  goodbye() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name + ' ... Goodbye');
    }
  }
}

class Employee {
  constructor(name, title) {
    Person.call(this, name);
    this.title = title;
  }
}

class Customer {
  constructor(name) {
    Person.call(this, name);
  }
}

class Mime {
  constructor(name) {
    Person.call(this, name);
    this.canTalk = true;
  }
}

Employee.prototype = Object.create(Person.prototype);
console.log(Employee);

Employee.prototype.greet = function() {
  if (this.canTalk) {
    const cardData = `<div class="card">
   <div class="card-body">
   Hi, I am ${this.name} , the ${this.title}  ... Goodbye
   </div>
 </div>`;
    document.getElementById('root').innerHTML = cardData;
  }
};

Employee.prototype.goodbye = function() {
  if (this.canTalk) {
    // console.log(
    //   'Hi, I am ' + this.name + ', the ' + this.title + ' ... Goodbye'
    // );
  }
};

Customer.prototype = Object.create(Person.prototype);

Mime.prototype = Object.create(Person.prototype);

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var pers = new Person('Bill');
var mime = new Mime('Mime');

//console.log(mime);

////joe.goodbye();
//pers.goodbye();
bob.greet();
//mime.greet();

//rg.goodbye();
