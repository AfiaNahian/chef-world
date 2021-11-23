import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(props);
    let totalQuantity = 0;
    let total = 0;
    let chefName = '';
    for (const chef of cart) {
        chefName = chefName + chef.name + ' ';
    }
    for (const chef of cart) {
        if (!chef.quantity) {
            chef.quantity = 1;
        }
        total = total + chef.salary * chef.quantity;
        totalQuantity = totalQuantity + chef.quantity;
    }
    const grandTotal = total;
    return (
        <div className="box">
            <h3>Summary Of Salary</h3>
            <h5>Chefs Invited: {totalQuantity}</h5>
            <br />
            <h5>Chefs List : {chefName}</h5>
            <p>Total: {total}</p>
            <hr />
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;

