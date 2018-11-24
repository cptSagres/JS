//constructor
/*
var Person =  function(name,year,job){
  this.name = name;
  this.year = year;
  this.job = job;
  calculateAge = function(){
    console.log(2016-this.year);
  };
}
Person.prototype.calculateAge =
function(){
  console.log(2016-this.year);
};

var john = new Person('John',1990,'Teacher');
var mark = new Person('Mark',1948,'retired');
var jane = new Person('Jane',1969,'designer')
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
Person.prototype.lastName = 'Smith';
console.log(john.lastName,mark.lastName,jane.lastName);

var personProto = {
  calculateAge: function(){
    console.log(2016-this.year);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.year = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
  name: {value:'Jane'},
  year:{value:1969},
  job:{value:'designer'}
});
*/
//primitives vs Objects
