import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCardItems } from "../../redux/card/card.selectors";

import { withRouter } from "react-router-dom";
import CardItem from "../card-item/card-item.component";

import { toggleCardHidden } from "../../redux/card/card.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./card-dropdown.styles.scss";

const Card = ({ cardItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cardItems.length ? (
      cardItems.map((cardItem) => (
        <CardItem key={cardItem.id} cardItem={cardItem} />
      ))
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCardHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
});
export default withRouter(connect(mapStateToProps)(Card));
