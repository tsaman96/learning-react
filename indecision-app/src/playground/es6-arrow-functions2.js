
const add = (a, b) => {
   console.log(arguments);         // no access to arguments
  return a + b ;
 }


const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(25, 45, 50));

const user = {
  name: 'Tahera',
  cities: ['Muzaffarpur', 'Delhi'],
  
    printPlacesLived(){          //printPlacesLived: function ()
                                 // {  ......if      onvert to arrow function, goes out of object  above ' const user'  printPlacesLived:() => {
    //console.log(this.name);
    //console.log(this.cities);

         // const that = this;


    this.cities.forEach(function (city) {  //bind "this." value to immediate parent
    this.cities.forEach((city) => {  //doesn't bind to object Goes to main parent
           console.log(this.name + ' has lived in  ' + city);
       }
     );

     const cityMessages = this.cities.map((city) => {
       return this.name + ' has lived in ' + city;
     });
     return cityMessages;
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

//Challenge 3
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 8,
  multiply(){ 
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};
console.log(multiplier.multiply());