import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";
import { selectCardItemsCount } from "../../redux/card/card.selectors";
import { toggleCardHidden } from "../../redux/card/card.actions";
import { connect } from "react-redux";
import "./card-icon.styles.scss";




const CardIcon = ({ toggleCardHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCardItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
