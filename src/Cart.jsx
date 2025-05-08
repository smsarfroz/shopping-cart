import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const { qtyArray, setQtyArray, itemArray, orderedIds, setOrderedIds, total, setTotal } = useOutletContext();
    
    console.log('qtyArray');
    console.log(qtyArray);
    console.log('orderedIds');
    console.log(orderedIds);
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
                orderedIds.map((i) => {
                    return (
                        <div className="cartItem">
                            <img src={itemArray[i].image} alt="" />
                            <p>{itemArray[i].title}</p>
                            <p>
                                <button onClick={() => handleDecrement(i)}>-</button>
                                {qtyArray[i]}
                                <button onClick={() => handleIncrement(i)}>+</button>
                            </p>
                            <button>delete</button>
                            <p>$ {Math.round(qtyArray[i] * itemArray[i].price * 100) / 100}</p>
                        </div>
                    );
                })
            }

            <br />

            <p><b>Total: $</b>{Math.round(total * 100) / 100}</p>
        </div>
    );
}

export default Cart; 