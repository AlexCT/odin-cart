import React, {useState} from "react";
import "./Card.css";

function Card(props) {

    const [qty, setQty] = useState(0);

    return (
        <div id="card">
            <h1>{props.name}</h1>
            <img src={props.image} width="64" height="64"></img>
            <div id="qtybox">
                <input type="button" id="decrease" name="decrease" value ="-" onClick={() => setQty(qty - 1)}></input>
                <input type="number" id="quantity" name="quantity" value={qty}></input>
                <input type="button" id="increase" name="increase" value="+" onClick={() => setQty(qty + 1)}></input>
            </div>
            <input type="submit" id="addtocart" name="addtocart" value="Add to Cart" onClick={() => props.updateCart(qty)}></input>
        </div>
    );
};

export default Card;