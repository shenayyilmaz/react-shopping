import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCardItems,
  selectTotalPrice,
} from "../../redux/card/card.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cardItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cardItems.map((cardItem) => (
      <CheckoutItem key={cardItem.id} cardItem={cardItem} />
    ))}
    <div className="total">TOTAL:{totalPrice}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  totalPrice: selectTotalPrice,
});
export default connect(mapStateToProps)(CheckoutPage);
