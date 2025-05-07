import { useState } from "react";

function ItemCard({ itemInfo:
    { image, category, title, price, rating:{rate, count} } }) {

    const [qty, setQty] = useState(1);

    function handleDecrement() {
        if (qty >= 2) {
            setQty((qty) => (qty - 1));
        }
    }
    function handleIncrement () {
        setQty((qty) => (qty + 1));
    }
    function handleAddToCart() {
        
    }
    return (
        <div className="itemCard">
            <img src={image} alt="" className="itemImage"/>
            <hr className="lineBreak"/>
            <p>{category}</p>
            <h2>{title}</h2>
            <p> <span>&#36;</span> {price}</p>
            <p>stars: {rate} ({count})</p>
            <span>
                <button onClick={handleDecrement}>-</button>
                <input type="number" value={qty} />
                <button onClick={handleIncrement}>+</button>
            </span>
            
            <p>
                <button onClick={handleAddToCart}><b>Add to Cart</b></button>
            </p>
        </div>
    );
}

export default ItemCard;
