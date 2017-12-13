// cart.test.js
// Import Chai for assaertions
const chai = require('chai')
const should = chai.should()
const expect = chai.expect


// We will be testing these methods from cart.js
const shoppingCart = require('./shopping-cart');
const createItem = shoppingCart.createItem;
const count = shoppingCart.getCount;
const clearCart = shoppingCart.clearCart;
const addToCart = shoppingCart.addToCart;
const removeFromCart = shoppingCart.removeFromCart;
const getTotal = shoppingCart.getTotal;


it('Should create a new item with name and price', () => {
  var newItem = shoppingCart.createItem("Laptop", 3000.00);
  expect(newItem).to.have.property("name");
  expect(newItem).to.have.property("price");
})

it('Should return an array containing all items in cart', ()=>{
  let cart = shoppingCart.getCart();
  expect(cart).to.have.lengthOf(0);
  expect(cart).to.be.an('array');
});

it('Should add a new item to the shopping cart', ()=>{
  let item = shoppingCart.createItem("dollar",3.99);
  shoppingCart.addToCart(item);
  expect(shoppingCart.getCart()).to.have.length(1);

});
it('Should return the number of items in the cart', () => {
  //need to clear cart first
  clearCart();
  let apple = createItem("Apple", 0.99);
  shoppingCart.addToCart(apple);
  let cartCount = shoppingCart.getCount();
  expect(cartCount).to.equal(1);
});
it('Should remove items from cart', () => {
  clearCart();
  let apple = createItem("Apple", 0.99);
  shoppingCart.addToCart(apple);
  expect(shoppingCart.getCount()).to.equal(1);
  clearCart();
  expect(shoppingCart.getCount()).to.equal(0);

});

// Stretch challenges
it('Should update the count of items in the cart', () => {
  clearCart();
  let apple = createItem("Apple", 0.99);
  addToCart(apple);
  let itemCount = count  // Should be 1
  let greenApple = createItem("Apple", 0.90, 3);
  addToCart(greenApple);
  itemCount = count(); // update the count, it should be 2 now
  expect(itemCount).to.equal(4);
});
it('Should remove an item when its count is 0',() =>{
  clearCart()
  let apple = createItem("Apple", .90, 3);
  addToCart(apple);
  removeFromCart("Apple");
  removeFromCart("Apple");
  removeFromCart("Apple");
  itemCount = count();
  expect(itemCount).to.equal(0);
  expect(shoppingCart.getCart()).to.have.length(0);
} );
it('Should return the total cost of all items in the cart', () => {
  clearCart();

  let apple = createItem("Apple", 0.99, 2);
  addToCart(apple);
  let totalPrice = getTotal();
  expect(totalPrice).to.equal(0.99 * 2);

  let orange = createItem("Orange", 1.99);
  addToCart(orange);
  totalPrice = getTotal();
  expect(totalPrice).to.equal((0.99 * 2) + 1.99);
});
```


[4:02]
 ```// shopping-cart.js
// These methods crete a simple shopping cart system.

var cart = []

function createItem(name, price, quantity = 1){
  return { name, price, quantity}
}
function addToCart(newItem){
  for (let item of cart) {
    // If the item exists in the cart, increment the quantity
    // by 1.  ^__^
    if  (newItem.name == item.name) {
      item.quantity += newItem.quantity
      return; // bye bye :)
    }
  }
  cart.push(newItem);
}
function getCart(){
  return [...cart];
}
const setQuantiy = (itemName,newQuantity)=>{
    if(itemName == item.name){
      item.quantity = newQuantity
    }
    return item.quantity

}
it("should get an item and set its quantity based on the second value", () =>{
  clearCart();
  let oven = createItem("Oven",900.00,1);
  setQuantiy("oven",5);
  expect(item.quantity).to.equal(5)

});

function getCount() {
   return cart.reduce((total, item) => {
    /* (total, item) -> int

        Return the sum of the quantity of items
        in the shopping cart.

    */
    return total + item.quantity;
  }, 0);

}


function removeFromCart(itemName, n = 1){
  for (let item in cart){
    if (cart[item].name == itemName){
      cart[item].quantity -= 1;

      if (cart[item].quantity < 1){
        cart.splice(item, 1);
        return
      }
    }
  }
}

function getTotal() {
  return cart.reduce((total, item) => {
    return total + (item.quantity * item.price);
  }, 0);
}

function clearCart() {
  cart = [];
}
module.exports.createItem = createItem;
module.exports.addToCart = addToCart;
module.exports.getCart = getCart;
module.exports.getCount = getCount;
module.exports.getTotal = getTotal;
module.exports.clearCart = clearCart;
module.exports.removeFromCart = removeFromCart;

//testing
it(“should remove items by quantity”)
