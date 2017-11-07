var should= chai.should();
const chai = require('chai');
const newItem = require('./main').newItem;

it('Should create a new item with name and price' () =>{
consts apple= newItem("apple",0.99);
apple.should.have.property('name');
apple.should.have.property('price');
apple.should.have.property('qty');
apple.price.should.equal(0.99);

});
it('Should return an array containing all items in cart');
it('Should add a new item to the shopping cart');
it('Should return the number of items in the cart');
it('Should remove items from cart');
// Stretch challenges
it('Should update the count of items in the cart');
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart');
