function IceCream () {
}

// IceCream.prototype.addProperty= function(name, value) {
//   this.name = value;
// }

IceCream.prototype.addScoops = function(number) {
  this.scoops = number;
}

IceCream.prototype.addFlavors = function(flavors) {
  this.flavors = flavors;
}

IceCream.prototype.calculatePrice = function() {
  this.price += this.toppings.length
  const that = this;
  that.flavors.forEach(function(flavor) {
    if (flavor === "marionberry cheesecake" || flavor === "salted caramel ganache" || flavor === "tahitian vanilla bean") {
      that.price += 2.00
    } if (flavor === "truffle honey" || flavor === "bluecheese pears" || flavor === "gold dust vanilla bean") {
      that.price += 3.00;
    }
  });
  if (this.cone === "waffle") {
    this.price += 2.00;
  } if (this.cone === "chocolate dipped") {
    this.price += 3.00;
  } if (this.isKiddieCone === true) {
    this.price /= 2;
  }
}

// User Interface Logic -------
let iceCream = new IceCream;

  function displayFlavorChoices(numberOfScoops) {
    let flavorSelectionDiv = $("#flavor-selection")
    let htmlForFlavorSelectionDiv = "";
    for (let instance = 1; instance <= numberOfScoops; instance +=1) {
      htmlForFlavorSelectionDiv += `<p>Select flavor for scoop <span>` + instance + `</span></p>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='strawberry'> Strawberry
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='chocolate'> Chocolate
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='vanilla'> Vanilla
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='marionberry cheesecake'> Marrionberry cheesecake (add $2)
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='salted caramel ganache'> Salted caramel ganache (add $2)
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='tahitian vanilla bean'> Tahitian vanilla bean (add $2)
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='truffle honey'> Truffle honey (add $3)
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='bluecheese pears'> Bluecheese pears (add $3)
        </label>
      </div>
      <div class='radio'>
        <label>
          <input type='radio' name='flavor` + instance + `' value='gold dust vanilla bean'> Gold dust vanilla bean (add $3)
        </label>
      </div>`
    };
    flavorSelectionDiv.html(htmlForFlavorSelectionDiv);
  };


$(document).ready(function() {
  $("#scoops-form").submit(function(event) {
    event.preventDefault();

    const numberOfScoopsString = $("#number-scoops").val();
    const numberOfScoops = parseInt(numberOfScoopsString);
    displayFlavorChoices(numberOfScoops);
    iceCream.addScoops(numberOfScoops)
    $("#personalize-cone").show();
    $("#scoops-form").hide();
    console.log(iceCream);
  });
  $("#order-form").submit (function(event) {
    event.preventDefault();
    const flavorChoices = []
    for (let instance = 1; instance <= iceCream.scoops; instance +=1) {
      flavor = "flavor" + instance;
      $("input:radio[name=" + flavor + "]:checked").each(function(){
        // const flavor = $(this).val();
        // flavorChoices.push(flavor);
        return flavorChoices.push($(this).val());
      });
    }
    console.log(flavorChoices);
    iceCream.addFlavors(flavorChoices);
  }); 
});

// IceCream Properties
// this.isKiddieCone = false; 
// this.cone = cone;
// this.toppings = toppings;
// this.price = 5.00;

//Temporary UIL for testing BL
// let flavors = ["marionberry cheesecake", "salted caramel ganache","tahitian vanilla bean", "truffle honey"];
// let toppings = ["chocolate chips", "nuts", "candy dots"];
// let iceCream = new IceCream(flavors, "chocolate dipped", toppings);
// iceCream.isKiddieCone = true;
// iceCream.calculatePrice();
// console.log(iceCream);

// 5 cone
// 2 marionberry cheesecake
// 2 salted carmel ganache
// 2 tahitian vanilla bean
// 3 truffle honey
// 1 chocolate chips
// 1 nuts
// 1 candy dots
// 3 chocolate dipped cone
// /2 isKiddieCone

//Regular cone (no price added)
//Waffle cone
//Chocolate dipped waffle cone 
