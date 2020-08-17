import React from "react";
import Product from "../Product/Product";

const Dashboard = (props) =>{
  const invent = props.inventory.map((inventory) => { return(
    <Product key={inventory.product_id} inventory={inventory}/>)
   })
  return (
    <div className='dashboard'>
      {invent}
    </div>
  );
};
export default Dashboard;
