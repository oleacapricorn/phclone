import React from "react";

const ItemsList = props => {
  const allItems = props.data.map(item => {
    return (
      <div>
        <h1>{Items.name}</h1>
        <h2>{Items.id}</h2>
      </div>
    );
  });

  return <div>{allItems}</div>;
};

export default ItemsList;