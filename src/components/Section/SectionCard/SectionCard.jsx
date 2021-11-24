import React from 'react';

import './SectionCard.css'

const SectionCard = ({cars}) => {
    return (
        <div className="car-desc">
            <div>
                <h2>{cars.model}</h2>
                <h3>Order Online for Touchless Delivery Custom Order</h3>
            </div>
            <img className="car-image" src={cars.image} alt="" /> 
        </div>
    );
};

export default SectionCard; 