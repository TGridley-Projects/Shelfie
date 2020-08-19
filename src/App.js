import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedItem: {},
    };
    this.loadInventory = this.loadInventory.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.loadInventory();
  }

  loadInventory = () => {
    axios
      .get("/api/inventory")
      .then((res) => {
        this.setState({ inventory: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editProduct = (product) => {
    const toEdit = (product) =>
      this.state.inventory.map(() => {
        if (product === this.state.inventory.product_id) {
          return this.setState({ selectedItem: this.state.inventory[product] });
        }
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          loadInventory={this.loadInventory}
          editProduct={this.editProduct}
        />
        <Form
          loadInventory={this.loadInventory}
          selectedItem={this.state.selectedItem}
        />
      </div>
    );
  }
}

export default App;
