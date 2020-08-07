import React from "react";
import Product from "../Product/Product";

const Dashboard = (props) => {
  const arr = []
  props.inventory.map((props,i) => {
   arr.push(props)
  });
  return (
    <div>
      <Product  inventory={arr}/>      
    </div>
  );
};
export default Dashboard;
