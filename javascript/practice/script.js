function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

CreateUser.prototype.getDobYear = function()  {
  return new Date().getFullYear() - this.age;
}

CreateUser.prototype.getFullName = function() {
  return this.firstName + ` ` + this.lastName;
}

const user1 = new CreateUser('Rahi', 'Sujal', 22)
const user2 = new CreateUser('Rahul', 'Fad', 10)

console.log(user1);
console.log(user2);
console.log(user1.getDobYear())
console.log(user2.getDobYear())
console.log(user1.getFullName())
console.log(user2.getFullName())
