import React, { useState } from "react";
import Card from "./components/Card";
import icon from "./images/icon.png";
import hammer from "./images/hammer.png";
import helmet from "./images/helmet.png";
import shield from "./images/shield.png";

const Shop = () => {

    const [cart, setCart] = useState(0);

    function updateCart(num) {
        setCart(cart + num);
    }

    return (
        <div>
            <h1>Items in Cart: {cart}</h1>
            <Card name="Hammer" qty="0" image={hammer} updateCart={updateCart}/>
            <Card name="Helmet" qty="0" image={helmet} updateCart={updateCart}/>
            <Card name="Shield" qty="0" image={shield} updateCart={updateCart}/>
        </div>

    );
};

export default Shop;