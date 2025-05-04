// Datatypes
// #1: Numbers
const num = 20;
console.log(num)
const num2 = 5.546;
console.log(num2)
const num3 = 1000 / 0;
console.log(num3);
const num4 = NaN;
console.log(num4);

// #2: Strings
const name = "rohan"
const anything = "dfdsjkgshfilhd348#@%$%$@#%^"
const greet = `Hello everyone and Good evening this is ${name}` //template literal
console.log(name)
console.log(anything)
console.log(greet)

// #3: boolean
const t = true;
console.log(t)

// #4: undefined
let x;
console.log(x) 
var y;
console.log(y)
// you cannot do this with const

// #5: Null
const nul = null;
console.log(nul)

// #6: Symbol:A unique and immutable value, often used as object property keys to avoid collisions.

const key = Symbol("Key")
const user = {
    [key]:"here we store the value which relates to key"
}
console.log(key)
console.log(user[key])

// #7: bigInt

const bignumber = 8976958379587349823265243785678348376777777777n; // append n to create bigInt
console.log(bignumber)

const s = "asda"
console.log(s[0] = "T")
console.log(s)