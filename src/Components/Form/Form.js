import React, {Component} from 'react';

class Form extends Component  {
    constructor(){
        super()
        this.state = {
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
            item_name: '',
            price: 0.00
        }

    };

    
    render(){
        return(
            <div>
                <input>Image URL:</input>
                <input>Product Name:</input>
                <input>Price:</input>
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    };
};

export default Form;