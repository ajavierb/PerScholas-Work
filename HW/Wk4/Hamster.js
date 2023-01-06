class Hamster {
    constructor(name='', owner='', price='') {
      this.name = name;
      this.owner = owner;
      this.price = price;
  
    }
    wheelRun() {
      return ('squeak squeak');
    }
    eatFood() {
      return ("nibble nibble");
    }
    getPrice() {
      return this.price;
    }
  }
 
  let Hamster1 = new Hamster("Buddy", "Amy", "15")
  console.log(Hamster1.name)
  console.log(Hamster1.owner)
  console.log(Hamster1.price)