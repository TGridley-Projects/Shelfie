import React from 'react';

const Product = (props) => {
  const { product_id,image_url, item_name, price } = props.inventory;
  return (
    <div className='product'>
      <img className='productImage' src={image_url} alt={"not available"} />
      <div className='textBox'>
        <section className="info">
          <h3>{item_name}</h3>
          <h3>${price}</h3>
        </section>
        <section className='productButtons'>
        <button className='productButtonsShared' onClick={(e) => {props.deleteProduct(product_id)}}>Delete</button>
        <button className='productButtonsShared'>Edit</button>
        </section>
      </div>
    </div>
  );
};

export default Product;
