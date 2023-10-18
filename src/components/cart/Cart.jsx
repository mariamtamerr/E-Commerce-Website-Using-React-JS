import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import the useSelector hook to access cart state
import ProductCard from "../ProductCard";
import {
    incrementItemQuantity,
    decrementItemQuantity,
    removeItemFromCart,
  } from "./cartSlice";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
    const dispatch = useDispatch();

    const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.quantity * item.price;
      }, 0);
    

  const handleIncrement = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Empty Cart</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <ProductCard product={item} />
                            <p>Quantity:</p>
                            {/* Add +/- quantity and remove item functionality */}
                            {/* Example: */}
                            <button onClick={() => handleIncrement(item.id)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))}
                    {/* Calculate and display the total price */}
                    {/* Example: */}
                     <p>Total Price: ${total.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
