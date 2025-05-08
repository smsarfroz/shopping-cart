import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const { qtyArray, setQtyArray, itemArray, orderedIds, setOrderedIds, total, setTotal } = useOutletContext();
    
    function handleDecrement(id) {
        setQtyArray((prevArray) => prevArray.map((qty, index) => {
            if (index === id) {
                return qty - 1;
            } else {
                return qty;
            }
        }));
        setTotal(prevTotal => prevTotal - itemArray[id].price);
        if (qtyArray[id] === 0) {
            setOrderedIds((prevArray) => prevArray.map(idx => {
                if (idx !== id) {
                    return idx;
                }
            }))
        }
    }
    function handleIncrement(id) {
        setQtyArray((prevArray) => prevArray.map((qty, index) => {
            if (index === id) {
                return qty + 1;
            } else {
                return qty;
            }
        }));
        setTotal(prevTotal => prevTotal + itemArray[id].price);
    }
    return (
        <div>
            <h1>Your Cart</h1>
            {
                orderedIds.map((id) => {
                    <div className="cartItem">
                        <img src={itemArray[id].image} alt="" />
                        <p>{itemArray[id].title}</p>
                        <p>
                            <button onClick={() => handleDecrement(id)}>-</button>
                            {qtyArray[id]}
                            <button onClick={() => handleIncrement(id)}>+</button>
                        </p>
                        <button>delete</button>
                        <p>${qtyArray[id] * itemArray[id].price}</p>
                    </div>
                })
            }

            <br />

            <p><b>Total: $</b>{total}</p>
        </div>
    );
}

export default Cart; 