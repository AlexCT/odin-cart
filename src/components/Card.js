import React from "react";

function Card(props) {
    return (
        <div id="card">
            <h1>{props.name}</h1>
            <img src={props.image} width="64" height="64"></img>
            <div id="qtybox">
                <input type="number" id="quantity" name="quantity" value={props.qty}></input>
                <input type="button" id="increase" name="increase" value="+"></input>
                <input type="button" id="decrease" name="decrease" value ="-"></input>
            </div>
            <input type="submit" id="addtocart" name="addtocart" value="Add to Cart"></input>
        </div>
    );
};

export default Card;