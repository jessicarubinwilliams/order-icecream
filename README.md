# Online Ice Cream Ordering 
#### Project to practice Object Oriented Javascript and Checkboxes
#### Project initiated: 02-17-2021
#### By Sofia Acosta and Jessica R. Williams 
## Project Description
  This project is to practice Object Oriented Javascript. This is a web-based application for an ice-cream shop where the user may pick flavor, size, type of cone and toppings to find the price. The user may also create an order of several ice creams. 
## Specs
 
```
Describe: IceCream()
Test: "It will create IceCream instances with properties: isKiddieCone and price"
Expect(let iceCream = new IceCream()).toEqual({ isKiddieCone: false, price: 5.00 });

Describe: IceCream.prototype.addScoops()
Test: "It will take a number as an argument and add the property key scoops with the value of the number argument"
Expect(iceCream.addScoops(3)).toEqual({ isKiddieCone: false, price: 5.00, scoops: 3 })

Describe: IceCream.prototype.addFlavors(flavors)
Test: "It will take an argument and add the property key 'flavors' with the value of the argument"
Expect(iceCream.addFlavors(["chocolate", "vanilla", "strawberry"])).toEqual({ isKiddieCone: false, price: 5.00, scoops: 3, flavors: ["chocolate", "vanilla", "strawberry"] })

Describe: IceCream.prototype.addCone(cone)
Test: "It will take an argument and create a cone property key "cone" with the value of the argument and if the argument is 'kiddie-cone' then isKiddieCone property will be set to true"
Expect(iceCream.addCone("kiddie cone")).toEqual({ isKiddieCone: true, price: 5.00, scoops: 3, flavors: ["chocolate", "vanilla", "strawberry"], cone: "kiddie cone" }) 
Expect(iceCream.addCone("sugar cone")).toEqual({ isKiddieCone: false, price: 5.00, scoops: 3, flavors: ["chocolate", "vanilla", "strawberry"], cone: "sugar cone" })   

Describe: IceCream.prototype.price()
Test: "It will use branching logic to evaluate the properties of IceCream and determine the price"
Expect(iceCream.price).toEqual({ isKiddieCone: false, price: 8.50, scoops: 3, flavors: ["chocolate", "vanilla", "strawberry"], cone: "sugar cone"  })
 
 
```
 
## Technologies Used
* HTML
* Javascript
* CSS
* JQuery
## Set up / Installation requirements
* Download a .zip copy of this repository: LINK GITHUB REPO HERE  by clicking the green "code" button. 
* Launch the index.html file into your browser
 
OR
 
* Open your terminal and navigate to the folder where you would like to save this project
* Clone this repository in your terminal: $ git clone
* Go to the top level of the repository: $ cd programming-language-suggester
* Open index.html into your browser: $ open index.html
 
## Known Bugs
* No known bugs
## Notes

## License
* [MIT](https://choosealicense.com/licenses/mit)
* Copyright 2021 Sofia Acosta, Jessica R. Williams
## Contact
Sofia Acosta sofiaacostarascon@gmail.com
Jessica R. Williams jessicarubinwilliams@gmail.com
 

