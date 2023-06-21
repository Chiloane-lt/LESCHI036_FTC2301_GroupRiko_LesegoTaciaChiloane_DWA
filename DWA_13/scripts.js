/* eslint-disable no-console */

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/** Use forEach to console log each name to the console. You are allowed to call
 * console.log seven times.
 */

names.forEach((name) => {
  console.log(name);
});

/** Use forEach to console log each name with a matching province (for example
 * Ashwin (Western Cape). Note that you are only allowed to call console.log
 * seven times.
 */

function printf(element, index) {
  console.log(`${element} (${provinces[index]})`);
}
names.forEach(printf);

/** Using map loop over all province names and turn the string to all uppercase.
 * Log the new array to the console.
*/
const uppercaseProvinces = provinces.map((province) => (province.toUpperCase()));
console.log(uppercaseProvinces);

/** Create a new array with map that has the amount of characters in each name.
 * The result should be: `[6, 9, 11, 5, 8, 7, 7]`
 */

const characters = names.map((name) => name.length);
console.log(characters);

/** Using toSorted to sort all provinces alphabetically. */

// console.log(names.toSorted());

/** Use filter to remove all provinces that have the word Cape in them. After
 * filtering the array, return the amount of provinces left. The final value
 * should be `3`.
 */

const result = provinces.filter((province) => province.includes('Cape') === false);
console.log(result.length);

/** Create a boolean array by using map and some to determine whether a name
 * contains an S character. The result should be
 * `[true, true, false, true, false, true, false]`
 *
 */

const checkForS = names.map((name) => name.toLowerCase().includes('s'));
console.log(checkForS);

/** Using only reduce, turn the above into an object that indicates the
 * province of an individual.
 */

const final = names.reduce((finalObject, name, index) => {
  finalObject[name] = provinces[index];
  return finalObject;
}, {});
console.log(final);

/* OTHER EXERCISES */

const products = [
  { product: 'banana', price: '2' },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: '8' },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

products.forEach((item) => {
  let eliza = item.product;
  console.log(eliza);
});

function chechPrice(num) {
  return num !== '';
}

function convertToString(num) {
  return num.toString();
}
products.map((item.price) => {})

console.log(
  products.filter((item) => item.product.length < 6), '\n',

  // Your code here
);
