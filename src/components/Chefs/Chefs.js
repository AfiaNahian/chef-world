import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Chefs.css'

const Chefs = (props) => {
    const { name, image, age, salary, signatureDish, michelinStar } = props.chef;
    return (
        <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card text-center p-3 border-2 shadow-sm single-chef">
                <div className="p-2">
                    <img className="card-img-top rounded-circle w-75" src={image} alt="" />
                </div>
                <div className="card-body fw-bold">
                    <p className="fw-bold text-success">Name : {name}</p>
                    <p><span className="text-danger">Age :</span> {age}</p>
                    <p><span className="text-danger">Salary :</span> {salary}</p>
                    <p><span className="text-danger">Signature Dish :</span> {signatureDish}</p>
                    <p><span className="text-danger">Michelin Star : </span>{michelinStar}</p>
                </div>
                <div className="text-center">
                    <button
                        onClick={() => props.handleAddToCart(props.chef)}
                        className="btn-regular"
                    ><FontAwesomeIcon icon={faShoppingCart} /> Invite </button>
                </div>
            </div>
        </div>
    );
};

export default Chefs;