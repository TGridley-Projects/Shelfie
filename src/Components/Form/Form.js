import React, { Component } from "react";
import axios from "axios";
// import { getInventory } from "../../../server/controller";


class Form extends Component {
  constructor() {
    super();
    this.state = {
      image_url: "",
      item_name: "",
      price: 0.0,
    };
  }


  imageHandler = (e) => {
    this.setState({
      image_url: e.target.value,
    });
  };

  
  nameHandler = (e) => {
    this.setState({
      item_name: e.target.value,
    });
  };

  
  priceHandler = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  resetState = (e) => {
    this.setState({
      image_url: '',
      item_name: '',
      price: 0
    });
  }

  createProduct = () =>{
    const {image_url, item_name, price} = this.state;
    axios.post('/api/product', {image_url, item_name, price}).then(() => {
      this.props.loadInventory()
      this.resetState()
    })
  }
  

  render() {
    return (
      <div>
        <section>  
        <h4>Image:</h4>
        <input
          onChange={(e) => this.imageHandler(e)}
          placeholder="Add image url here"
          value={this.state.image_url}
          type="text"
        />
        <h4>Product Name:</h4>
        <input
          onChange={(e) => this.nameHandler(e)}
          placeholder="Item name"
          value={this.state.item_name}
          type="text"
        />
        <h4>Price:</h4>
        <input
        onChange={(e) => this.priceHandler(e)}
        value={this.state.price}
        type="text"
        />
        </section>
        <button onClick={(e) => this.resetState(e)}>Cancel</button>
        <button onClick={(e) => this.createProduct(e)}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
