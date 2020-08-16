import React,{Component} from 'react';

class Product extends Component {
    render(){
        return(
            <div>
                <img src={this.props.image_url} alt={'not available'}/>
                <h3>{this.props.item_name}</h3>
                <h3>{this.props.price}</h3>

            </div>
        )
    };
};

export default Product;