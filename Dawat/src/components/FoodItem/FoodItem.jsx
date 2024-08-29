import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            className="icon add"
            src={assets.add}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="icon"
              onClick={() => removeFromCart(id)}
              src={assets.remove}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              className="icon"
              onClick={() => addToCart(id)}
              src={assets.plus}
              alt="Increase quantity"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
