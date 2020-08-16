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
    };
    this.loadInventory = this.loadInventory.bind(this);
  }

  componentDidMount() {
    this.loadInventory();
  }

  loadInventory = () => {
    axios
      .get('/api/inventory')
      .then((res) => {
        this.setState({ inventory: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form addInventory={this.loadInventory} />
        {console.log('apps',this.state.inventory)}
      </div>
    );
  }
}

export default App;
