import React, { Component } from "react";
import axios from 'axios';

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
        <button>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
