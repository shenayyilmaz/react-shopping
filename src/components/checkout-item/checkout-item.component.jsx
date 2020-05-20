import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCard } from "../../redux/card/card.actions";

const CheckoutItem = ({ cardItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cardItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cardItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispachToProps = (dispatch) => ({
  clearItem: (cardItem) => dispatch(clearItemFromCard(cardItem)),
});
export default connect(null, mapDispachToProps)(CheckoutItem);
