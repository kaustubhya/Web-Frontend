class CreateUser {
  #age
  constructor(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.#age = age;
  }

  publicSayHi = 'Hello'
  #privateSayHi = 'Hi'

  getDobYear() {
    console.log(this.#privateSayHi)
    console.log(this.#getFullName()) // accessing the private method
    return new Date().getFullYear() - this.#age;
  }

  #getFullName() {
    return this.firstName + ` ` + this.lastName;
  }
}

const user1 = new CreateUser("Rahi", "Sujal", 22);
const user2 = new CreateUser("Rahul", "Fad", 10);

