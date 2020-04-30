import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <p>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, name }) => (
            <h3 key={id}>{name} </h3>
          ))}
      </p>
    </div>
  );
};

export default CollectionPreview;
