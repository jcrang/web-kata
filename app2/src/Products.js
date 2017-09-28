import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    removeProduct = () => {
        this.props.onRemoveClicked(this.props.index)
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.props.product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' onClick={this.removeProduct}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product product={p} key={'product-' + i } onRemoveClicked={this.props.onRemoveClicked} index={i}/>
            )}
        </div>
    }
}

export default Products