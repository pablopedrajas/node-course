// Object property shorthand

const name = 'Andrew';
const age = 29;

const user = {
    name,
    age,
    location: 'Philadelphia'
}

console.log(user);

// Object destructuring 
const product = {
    label: 'Shitty',
    price: 3, 
    stock: 203
}
const {label, stock} = product;

console.log(label);
console.log(stock);