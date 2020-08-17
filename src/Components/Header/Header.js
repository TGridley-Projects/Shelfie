import React, {Component} from 'react';
import icon from '../../image/shelfie.png'

class Header extends Component {
    render(){
        return(
            <div className='Header'>
                <img className='icon' src={icon} alt='logo'/>
                <h1>SHELFIE</h1>
            </div>
        )
    };
};

export default Header;