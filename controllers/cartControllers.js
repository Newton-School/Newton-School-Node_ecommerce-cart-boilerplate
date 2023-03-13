const Product = require('../models/Product');
const User = require('../models/User');
const Cart = require('../models/Cart');

/*
Implement an API to fetch a user's cart and its products.
Instructions:
The function should accept the following input:

userId: string representing the ID of the user whose cart is to be fetched.

The function should perform the following steps:

Validate that the userId input is present.
Retrieve the user's cart from the database and populate the products array with the products' details.
If the user does not have a cart, return a JSON response with a status code of 200 and the following format:
{
    "message": "Cart is empty",
    "status": "Success",
    "cart": {
        "user": userId,
        "products": []
    }
}
If the user has a cart, return a JSON response with a status code of 200 and the following format:
{
    "message": "Cart fetched successfully",
    "status": "Success",
    "cart": <the fetched cart object>
}

If any errors occur during the execution of the function, the function should return a JSON response with a status code of 500 and the following format:
{
    "message": "Internal server error",
    "status": "Error",
    "error": <the error object>
}

If the userId input is missing or invalid, the function should return a JSON response with a status code of 400 and the following format:
{
    "message": "User ID is required",
    "status": "Error"
}
*/

const getCart = async (req, res) => { 
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({
            message: "User ID is required",
            status: "Error"
        });
    }

    try {
       //Write your code here

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            status: "Error",
            error: err
        });
    }
}

/*
Implement an API to add products to a user's cart.
Instructions:
The function should accept the following inputs:

userId: string representing the ID of the user adding the product
productId: string representing the ID of the product being added to the cart
quantity: number representing the quantity of the product being added to the cart
The function should perform the following steps:

Validate that all required inputs are present (userId, productId, and quantity).
Validate that the quantity is a positive number.
Retrieve the user's cart from the database.
If the user does not have a cart, create a new cart object for the user.
Check if the product being added already exists in the cart.
If the product exists, update the quantity of the existing product in the cart.
If the product does not exist, add a new product object to the cart with the provided quantity.
Save the cart object to the database.
The function should return a JSON response with a status code of 200 and the following format:
{
    "message": "Product added to cart",
    "status": "Success",
    "cart": <the updated cart object>
}

If any errors occur during the execution of the function, the function should return a JSON response with a status code of 500 and the following format:
{
    "message": "Internal server error",
    "status": "Error",
    "error": <the error object>
}

If any of the required inputs (userId, productId, or quantity) are missing or invalid, the function should return a JSON response with a status code of 400 and the following format:
{
    "message": "<validation error message>",
    "status": "Error"
}
*/

const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    if (!userId) {
        return res.status(400).json({
            message: "User ID is required",
            status: "Error"
        });
    }

    if (!productId) {
        return res.status(400).json({
            message: "Product ID is required",
            status: "Error"
        });
    }

    if (!quantity || quantity < 1) {
        return res.status(400).json({
            message: "Quantity must be a positive number",
            status: "Error"
        });
    }

    try {
        //Write your code here

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            status: "Error",
            error: err
        });
    }
};

/*
Implement a controller to delete a product from a user's cart.
Instructions:
The controller should accept the userId and productId from the request body.
It should then query the Cart collection to find the user's cart with the given userId.
If the cart is not found, it should return a JSON response with a status code of 404 and the following format:
{
    "message": "Cart not found",
    "status": "Error"
}
If the cart is found, it should find the index of the product with the given productId in the cart's products array using findIndex() method.
If the product is found, it should remove it from the cart's products array using the splice() method.
It should then save the updated cart using the save() method.
If the cart's products array becomes empty, it should delete the cart using the deleteOne() method.
It should return a JSON response with a status code of 200 and the updated cart object in the following format:
{
    "message": "Product deleted from cart",
    "status": "Success",
    "cart": <updated cart object>
}
If an error occurs during the operation, it should return a JSON response with a status code of 500 and the following format:
{
    "message": "Internal server error",
    "status": "Error",
    "error": <the error object>
}
*/

const deleteFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        //Write your code here

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            status: "Error",
            error: err
        });
    }
};

module.exports = { getCart ,addToCart, deleteFromCart };