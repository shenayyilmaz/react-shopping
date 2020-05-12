import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCardHidden } from "../../redux/card/card.actions";
import { connect } from "react-redux";
import "./card-icon.styles.scss";

const CardIcon = ({ toggleCardHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ card: { cardItems } }) => ({
  itemCount: cardItems.reduce(
    (accumulatedQuantity, cardItem) => accumulatedQuantity + cardItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
