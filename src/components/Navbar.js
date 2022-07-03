import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar= () => {
    return (
        <div id="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Shop">Shop</Link>
            </li>
        </div>
    );
}

export default Navbar;

