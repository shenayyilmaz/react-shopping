import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCard,
  removeItemFromCard,
  addItem,
} from "../../redux/card/card.actions";

const CheckoutItem = ({ cardItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cardItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cardItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cardItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cardItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispachToProps = (dispatch) => ({
  clearItem: (cardItem) => dispatch(clearItemFromCard(cardItem)),
  removeItem: (cardItem) => dispatch(removeItemFromCard(cardItem)),
  addItem: (cardItem) => dispatch(addItem(cardItem)),
});
export default connect(null, mapDispachToProps)(CheckoutItem);
