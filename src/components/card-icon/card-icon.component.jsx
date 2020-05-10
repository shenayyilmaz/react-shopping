import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCardHidden } from "../../redux/card/card.actions";
import { connect } from "react-redux";
import "./card-icon.styles.scss";

const CardIcon = ({ toggleCardHidden }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
