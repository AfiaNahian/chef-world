import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Chefs from '../Chefs/Chefs';
import './Restaurant.css';

const Restaurant = () => {
    const [chefs, setChefs] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./person.JSON')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, []);

    const handleAddToCart = (chef) => {
        const newCart = [...cart, chef];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="container">
                <div className="row gx-4 gy-5 d-flex justify-content-center">
                    {
                        chefs.map(chef => <Chefs
                            key={chef.id}
                            chef={chef}
                            handleAddToCart={handleAddToCart}
                        >
                        </Chefs>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restaurant;