import { useState } from "react";

function ItemCard({ itemInfo:
    { image, category, title, price, rating:{rate, count} } }) {

    const [qty, setQty] = useState(1);

    handleDecrement () {
        setQty((qty) => (qty - 1));
    }
    handleIncrement () {
        setQty((qty) => (qty + 1));
    }
    return (
        <div className="itemCard">
            <img src={image} alt="" className="itemImage"/>
            <hr className="lineBreak"/>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>stars: {rate} ({count})</p>
            <span>
                <button onClick={handleDecrement}>-</button>
                <input type="number" value={qty} />
                <button onClick={handleIncrement}>+</button>
            </span>
            
            <p>
                <button><b>Add to Cart</b></button>
            </p>
        </div>
    );
}

export default ItemCard;
