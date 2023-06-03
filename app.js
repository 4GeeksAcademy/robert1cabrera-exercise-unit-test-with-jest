// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
//
const fromEuroToDollar = function(valueInEuro){
let valueInDollar = valueInEuro * 1.2;
   return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    const valueInYen = valueInDollar / 1.2 * 127.9;
       return valueInYen;
    }
const fromYenToPound = function(valueInYen){
       const valueInPound = valueInYen / 127.9 * 0.8;
           return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};