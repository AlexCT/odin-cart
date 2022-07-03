import React, { useState } from "react";
import Card from "./components/Card";
import "./Shop.css";
import hammer from "./images/hammer.png";
import helmet from "./images/helmet.png";
import shield from "./images/shield.png";
import bolt from "./images/bolt.png";

const Shop = () => {

    const [cart, setCart] = useState(0);

    function updateCart(num) {
        setCart(cart + num);
    }

    return (
        <div>
            <div id="cartbar">
                <h1>Items in Cart:</h1>
                <h1 id="items"> {cart}</h1>
                <input type="button" id="checkout" name="checkout" value="Checkout"></input>
            </div>
            <div id="container">
                <Card name="Hammer" image={hammer} updateCart={updateCart}/>
                <Card name="Helmet" image={helmet} updateCart={updateCart}/>
                <Card name="Shield" image={shield} updateCart={updateCart}/>
                <Card name="Bolt" image={bolt} updateCart={updateCart}/>
            </div>
        </div>

    );
};

export default Shop;