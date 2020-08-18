import React from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const Dashboard = (props) =>{
  const deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`).then(() => {
      props.loadInventory();
    }).catch(err => console.log(err));
      };

  const invent = props.inventory.map((inventory) => { return(
    <Product key={inventory.product_id} inventory={inventory} deleteProduct={deleteProduct}/>)
   })
  return (
    <div className='dashboard'>
      {invent}
    </div>
  );
};
export default Dashboard;
