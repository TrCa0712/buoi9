import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
const Header = () => {
    const {cart}= useContext(AppContext)
    return (
        <>
            <Link to="/cart">Cart: {cart.lenght} </Link>
            <div>
                <Link to="/">Home aaaaaa</Link>
                <Link to="/product">Product</Link>
            </div>
        </>
        
        
    );
}

export default Header;
