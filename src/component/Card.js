import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function Card({ cartvalue, setCartvalue }) {
    const [toggle, setToggle] = useState(true);
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img
                    className="card-img-top"
                    src="https://m.media-amazon.com/images/I/61XO4bORHUL._AC_UF1000,1000_QL80_.jpg"
                    alt="..."
                />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">iphone 14</h5>
                        RS: 1,25,000
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        {toggle ? (
                            <button
                                className="btn btn-outline-dark mt-auto"
                                onClick={() => {
                                    setCartvalue(cartvalue + 1);
                                    setToggle(false);
                                }}
                            >
                                Add to Cart
                            </button>
                        ) : (
                            <button
                                className="btn btn-outline-dark mt-auto"
                                onClick={() => {
                                    setCartvalue(cartvalue - 1);
                                    setToggle(true);
                                }}
                            >
                                Remove from Cart
                            </button>
                        )}
                    </div>
                    <div className="text-center mt-3">
                        <Rating onClick={handleRating} ratingValue={rating} size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
