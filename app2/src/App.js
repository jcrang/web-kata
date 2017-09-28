import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      name: '',
      value: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleValueChange = (event) => {
    this.setState({ value: event.target.value });
  }

  removeProduct = (index) => {
    var products = _.clone(this.state.products);
    products.splice(index, 1);

    this.setState({
      products: products
    })
  }

  addProduct = (event) => {
    var { name, value } = this.state;
    var newProduct = {
      name: name,
      description: value
    }

    this.setState({ products : this.state.products.concat(newProduct) });

    this.setState({
      name: "",
      value: ""
    })

    event.preventDefault();
  }

  render() {
    const { products, name, value } = this.state;

    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form action="" onSubmit={ this.addProduct }>
          <label>Product name</label>
          <input value={name} onChange={this.handleNameChange} type="text" />
          <label>Product description</label>
          <input value={value} onChange={this.handleValueChange} type="text" />
          <input type="submit" />
        </form>
      </div>
      <div className='products-container'>
        <Products products={products} onRemoveClicked={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
