import React from 'react';
import SectionCard from './SectionCard/SectionCard';


const Section = ({cars}) => {
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {
                cars.map((car) => (<SectionCard key={car.id} cars={car} />))
            }
        </div>
    );
};

export default Section;