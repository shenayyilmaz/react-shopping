import React from "react";
import { connect } from "react-redux";
import CardItem from "../card-item/card-item.component";

import CustomButton from "../custom-button/custom-button.component";
import "./card-dropdown.styles.scss";

const Card = ({ cardItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cardItems.map((cardItem) => (
      <CardItem key={cardItem.key} cardItem={cardItem} />
    ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ card: { cardItems } }) => ({
  cardItems,
});
export default connect(mapStateToProps)(Card);
