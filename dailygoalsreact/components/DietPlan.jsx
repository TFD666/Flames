// DietPlan.js
import React from 'react';


const DietPlan = ({ src, alt, description }) => {
    return (
        <div className="diet-plan">
            <img src={src} alt={alt} />
            <p>{description}</p>
        </div>
    );
};

export default DietPlan;
