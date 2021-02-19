function IceCream (flavors, size, cone, toppings) {
this.flavors = flavors;
this.size = size; 
this.cone = cone;
this.toppings = toppings;
this.price = 5.00;
}

IceCream.prototype.calculatePrice = function() {
  this.price += this.toppings.length
  const that = this;
  that.flavors.forEach(function(flavor){
    if (flavor == "marionberry cheesecake"||flavor == "salted caramel ganache"|| flavor == "tahitian vanilla bean" ) {
      that.price +=2.00};
      //else if (flavor == "truffle honey"){
        //that.price +=3.00;
      //};     
  });
}

let flavors = ["marionberry cheesecake", "salted caramel ganache","tahitian vanilla bean" ];
let toppings = ["chocolate chips", "nuts", "candy dots"];
let iceCream = new IceCream(flavors, "small", "waffle", toppings);
iceCream.calculatePrice();

// tier 1 flavors: strawberry, chocolate, vanilla
// tier 2 flavors: marionberry cheesecake, salted carmel ganache, tahitian vanilla bean
// tier 3 flavors: truffle honey, bluecheese pears, gold dust vanilla bean
//