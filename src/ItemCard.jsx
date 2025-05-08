import { useState } from "react";

function ItemCard({ itemInfo:
    { id, image, category, title, price, rating:{rate, count} }, qtyArray, setQtyArray, orderedIds, setOrderedIds, setTotal }) {
    
    const [qnty, setQnty] = useState(1);
    function handleDecrement() {
        if (qtyArray[id-1] >= 2) {
            setQnty((prevQnty) => prevQnty - 1);
        }
    }
    function handleIncrement() {
        setQnty((prevQnty) => prevQnty + 1);
    }
    function handleAddToCart() {
        setQtyArray((prevArray) => prevArray.map((qty, index) => {
            if (index === id-1) {
                return qty + qnty;
            } else {
                return qty;
            }
        }));
        if (!orderedIds.includes(id-1)) {
            setOrderedIds(prevArray => [...prevArray, id-1]);
        }
        setTotal((prevTotal) => prevTotal + qnty * price);
        setQnty(1);
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
                <input type="number" value={qnty} />
                <button onClick={handleIncrement}>+</button>
            </span>
            
            <p>
                <button onClick={handleAddToCart}><b>Add to Cart</b></button>
            </p>
        </div>
    );
}

export default ItemCard;
