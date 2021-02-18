function IceCream (flavors, size, cone, toppings) { //Do the flavors and toppings parameters need to be arrays???
this.flavors = [flavors];
this.size = size;
this.cone = cone;
this.toppings = [toppings];
}

IceCream.prototype.price = function() {
  this.price = 5.00;
  this.flavors.forEach(function(flavor) {
    if (flavor === "marionberry cheesecake" || flavor === "salted carmel ganache" || flavor === "tahitian vanilla bean") {
      this.price += 2.00;
    }
    return this.price;
  });
  
}