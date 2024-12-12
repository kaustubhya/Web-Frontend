class User {
  constructor() {
    this.fname = 'KSD',
    console.log(this);
  }

  getUser() {
    console.log(this)
  }
}



console.log(new User())
console.log(new User().getUser())