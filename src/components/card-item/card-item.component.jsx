import React from "react";
import "./card-item.styles.scss";

const CardItem = ({ cardItem: { name, imageUrl, price, quantity } }) => (
  <div>
    <img src={imageUrl} />
    <p>
      {name}-{quantity} x ${price}
    </p>
  </div>
);

export default CardItem;
