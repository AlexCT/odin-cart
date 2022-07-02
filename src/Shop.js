import Card from "./components/Card";
import icon from "./images/icon.png"
import hammer from "./images/hammer.png"
import helmet from "./images/helmet.png"
import shield from "./images/shield.png"

const Shop = () => {
    return (
        <div>
            <h1>Items in Cart: 0</h1>
            <Card name="Hammer" qty="0" image={hammer}/>
            <Card name="Helmet" qty="0" image={helmet}/>
            <Card name="Shield" qty="0" image={shield}/>
        </div>

    );
};

export default Shop;