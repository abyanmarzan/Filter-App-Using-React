import React from 'react';

const Card = ({ name, price, image }) => {
    return (
        <div className="card bg-base-100 shadow-xl w-full sm:w-96 mx-auto">
            <figure className="px-4 pt-4 sm:px-10 sm:pt-10">
                <img
                    src={image}  // Using image prop directly
                    alt="Mobile"
                    className="rounded-xl w-full h-auto"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl sm:text-2xl">{name}</h2>
                <p className="text-sm sm:text-base">
                    BDT {price}
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;

