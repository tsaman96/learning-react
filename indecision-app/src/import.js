import substract, { square, add} from './utils.js';
import isSenior,{ isAdult, canDrink } from './person.js';
console.log('app.js is running');
console.log(square(4));
console.log(add(46, 100));
console.log(substract(50, 10));
console.log(isSenior(50));
const x = 16;
if (canDrink(x) == true) {
  console.log('person is an adult and allowed to drink')
} else if (isAdult(x) == false) {
  console.log('person is not an adult and not allowed to drink')
} else {
  console.log('peron is an adult but not allowed to drink')
}
import validator from 'validator';
console.log(validator.isEmail('taherasaman@gmail.com'));
