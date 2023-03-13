/* Cart Model */
const mongoose = require('mongoose');

/*
Write a simple Cart model. A Cart should have a user field that references a User and a products field that is an array of objects. Each object in the products array should have a product field that references a Product and a quantity field that is a number. The quantity field should have a default value of 1 and should not be allowed to be less than 1.
Sample Cart Object: 
{
  user: ObjectId("617fc221eb690e7cc9012345"),
  products: [
    {
      product: ObjectId("617fc8d0eb690e7cc9012346"),
      quantity: 2
    },
    {
      product: ObjectId("617fc8d0eb690e7cc9012347"),
      quantity: 1
    }
  ]
}
*/

const cartSchema = new mongoose.Schema({
   //Write your code here
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;