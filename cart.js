///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, prices) => total + prices.price, 0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    // let total = cartTotal.reduce((total,prices) => total + prices.price,0)
    // let taxes = total * tax
    // total += taxes
    // return total - couponValue
    
    let taxes = cartTotal * tax;
    cartTotal += taxes 
    return cartTotal - couponValue
}
// console.log(calcFinalPrice(cart, 3.99, .06))
console.log(calcFinalPrice(summedPrice, 3.99, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Customer Object: 
        will take in a customer's name, phone number, 
        email, and number of people in their party.
        basic information for reservations and dining in

    name (string)
    phone (number)
    email (string)
    party (number)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

// class Customer {
//     constructor(name, items, phone, party) {
//         this.name = name;
//         this.phone = phone; 
//         this.items = items;
//         this.party = party;
//     }
// }
// const james = new Customer("James", ['pizza', 'soda', 'salad'], 601, 6)
// console.log(james)


const customer = {
    name: "James",
    items: ['pizza', 'soda', 'salad'],
    email: 601,
    party: 6,
}
console.log(customer)