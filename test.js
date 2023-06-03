// import the function sum from the app.js file
const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    const Dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(Dollars).toBe(expected); 
})

test("One thousand yen should be 6.25 pounds", function(){
    const pounds = fromYenToPound(1000)
    const expected = 1000 / 127.9 * 0.8; 
    expect(pounds).toBe(expected); 
})
test("One thousand dollars should be 106,583 yen", function(){
    const yen = fromDollarToYen(1000);
    const expected = 1000 / 1.2 * 127.9; 
    expect(yen).toBe(expected); 
});