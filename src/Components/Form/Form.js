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
      product_id: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { product_id, image_url, item_name, price } = this.props.selectedItem;
    if (product_id !== prevProps.selectedItem.product_id) {
      this.setState({
        image_url,
        item_name,
        price,
        product_id,
      });
      console.log(prevState)
    }
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
      image_url: "",
      item_name: "",
      price: 0,
      product_id: null,
    });
  };

  createProduct = () => {
    if (
      this.state.image_url === "" ||
      this.state.item_name === "" ||
      this.state.price === ""
    ) {
      alert(
        "please complete the image url, product name, and price before submitting"
      );
    } else {
      const { image_url, item_name, price } = this.state;
      axios.post("/api/inventory", { image_url, item_name, price }).then(() => {
        this.props.loadInventory();
        this.resetState();
      });
    }
  };

  updateProduct = () => {
    if (
      this.state.image_url === "" ||
      this.state.item_name === "" ||
      this.state.price === ""
    ) {
      alert(
        "please complete the image url, product name, and price before submitting"
      );
    } else {
      const { product_id, image_url, item_name, price } = this.state;
      axios
        .put("/api/inventory", { product_id, image_url, item_name, price })
        .then(() => {
          this.props.loadInventory();
          this.resetState();
        });
    }
  };

  render() {
    console.log(this.props.selectedItem);
    const productId = this.state.product_id;
    let productButton;
    if (productId) {
      productButton = (
        <button
          className="formButtonShared"
          onClick={(e) => this.updateProduct(e)}
        >
          Save Changes
        </button>
      );
    } else {
      productButton = (
        <button
          className="formButtonShared"
          onClick={(e) => this.createProduct(e)}
        >
          Add to Inventory
        </button>
      );
    }
    return (
      <div className="form">
        <section>
          <img
            className="formImage"
            src={
              !this.state.image_url
                ? "https://nyuad.nyu.edu/en/academics/divisions/arts-and-humanities/instructors/jack-b-du/_jcr_content/bio-info/image.adaptive.m1569922701141/394.jpg"
                : this.state.image_url
            }
            alt="not available"
          />
          <section className="inputBoxes">
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
        </section>
        <section className="formButtons">
          <button
            className="formButtonShared"
            onClick={(e) => this.resetState(e)}
          >
            Cancel
          </button>
          {productButton}
        </section>
      </div>
    );
  }
}

export default Form;
