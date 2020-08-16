import React from "react";

const Product = (props) => {
    const {image_url, item_name, price} = props.inventory
  return (
    <div>
      <img src={image_url} alt={"not available"} />
      <h3>{item_name}</h3>
      <h3>{price}</h3>
      {console.log('product', props.inventory)}
    </div>
  );
};

export default Product;
