
function ItemCard({ itemInfo:
    { id, image, category, title, price, rating:{rate, count} }, qtyArray, setQtyArray }) {

    function handleDecrement() {
        if (qtyArray[id] >= 2) {
            setQtyArray((prevArray) => prevArray.map((qty, index) => {
                if (index === id) {
                    return qty - 1;
                } else {
                    return qty;
                }
            }))
        }
    }
    function handleIncrement () {
        setQtyArray((prevArray) => prevArray.map((qty, index) => {
            if (index === id) {
                return qty + 1;
            } else {
                return qty;
            }
        }))
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
                <input type="number" value={qtyArray[id]} />
                <button onClick={handleIncrement}>+</button>
            </span>
            
            <p>
                <button onClick={handleAddToCart}><b>Add to Cart</b></button>
            </p>
        </div>
    );
}

export default ItemCard;
