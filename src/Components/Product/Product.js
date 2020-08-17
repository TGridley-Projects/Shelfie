import React from "react";

const Product = (props) => {
  const { image_url, item_name, price } = props.inventory;
  return (
    <div className="product">
      <img className="productImage" src={image_url} alt={"not available"} />
      <div className='textBox'>
        <h3>{item_name}</h3>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default Product;
