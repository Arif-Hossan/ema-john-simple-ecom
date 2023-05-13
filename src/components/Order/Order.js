import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const {initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
}
  const handleReviewItem = (id)=>{
    const remaining = cart.filter(product => product.id !== id );
    setCart(remaining);
    removeFromDb(id);
  }
  return (
    <div className="shop-container">
      <div className="order-container">
        {
            cart.map(product => <ReviewItem
            key={product.id}
            product= {product}
            handleReviewItem={handleReviewItem}
            ></ReviewItem>)
        }
        {
            cart.length ===0 && <h2>No Items for Review , Please <Link to='/'>Shop more</Link></h2>
        }
      </div>
      <div className="cart-container">
        <Cart
        cart={cart}
        clearCart={clearCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Order;
