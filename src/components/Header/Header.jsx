import React from 'react';
import Section from '../Section/Section';
import Navbar from './Navbar/Navbar';

const Header = (props) => {
    return (
        <div style={{justifyContent: "space-between", alignItems: "center"}}>
            <img src={props.logo} alt="nav-img" width="100px"/>
            <div>
            <Navbar cars={props.cars} />
            <Section cars={props.cars} />
            </div>
        </div>
    );
};

export default Header; 