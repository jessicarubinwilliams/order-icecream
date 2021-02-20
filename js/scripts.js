function IceCream (flavors, cone, toppings) {
this.flavors = flavors;
this.isKiddieCone = false; 
this.cone = cone;
this.toppings = toppings;
this.price = 5.00;
}

IceCream.prototype.calculatePrice = function() {
  this.price += this.toppings.length
  const that = this;
  that.flavors.forEach(function(flavor) {
    if (flavor == "marionberry cheesecake" || flavor == "salted caramel ganache" || flavor == "tahitian vanilla bean" ) {
      that.price += 2.00
    } else if (flavor == "truffle honey" || flavor == "bluecheese pears" || flavor == "gold dust vanilla bean") {
      that.price += 3.00;
    }
  });
  if (this.isKiddieCone == true) {
    this.price /= 2 }
  i  


}


let flavors = ["marionberry cheesecake", "salted caramel ganache","tahitian vanilla bean", "truffle honey"];
let toppings = ["chocolate chips", "nuts", "candy dots"];
let iceCream = new IceCream(flavors, "waffle", toppings);
iceCream.isKiddieCone = true;
iceCream.calculatePrice();
console.log(iceCream);

//Regular cone (no price added)
//Waffle cone
//Chocolate dipped waffle cone 
