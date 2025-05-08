import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
    const { qtyArray, setQtyArray, itemArray, orderedIds, setOrderedIds, total, setTotal } = useOutletContext();
    
    console.log('qtyArray');
    console.log(qtyArray);
    console.log('orderedIds');
    console.log(orderedIds);
    function handleDecrement(id) {
        const newArray = qtyArray.map((qty, index) => {
            if (index === id) {
                return qty - 1;
            } else {
                return qty;
            }
        })
        setQtyArray(newArray);
        setTotal(prevTotal => prevTotal - itemArray[id].price);
        if (newArray[id] === 0) {
            setOrderedIds((prevArray) => prevArray.filter(idx => {
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
    function handleDelete(id) {
        setTotal(prevTotal => prevTotal - itemArray[id].price * qtyArray[id]);
        setQtyArray((prevArray) => prevArray.map((qty, index) => {
            if (index === id) {
                return 0;
            } else {
                return qty;
            }
        }));
        setOrderedIds((prevArray) => prevArray.filter(i => {
            if (i !== id) {
                return i;
            } 
        }))
    }
    return (
        <div className="cartPage">
            {orderedIds.length ? 
                <>
                    <h1>Your Cart</h1>
                    {
                        orderedIds.map((i) => {
                            return (
                                <div className="cartItem" key={i+1}> 
                                    <img className="cartImage" src={itemArray[i].image} alt="" />
                                    <p>{itemArray[i].title}</p>
                                    <p>
                                        <button onClick={() => handleDecrement(i)}>-</button>
                                        {qtyArray[i]}
                                        <button onClick={() => handleIncrement(i)}>+</button>
                                    </p>
                                    <button onClick={() => handleDelete(i)}>delete</button>
                                    <p>$ {Math.round(qtyArray[i] * itemArray[i].price * 100) / 100}</p>
                                </div>
                            );
                        })
                    }
                    <br />

                    <p><b>Total: $</b>{Math.round(total * 100) / 100}</p>
                </>
                :
                <h2>
                    Your cart is empty. <Link to='/shop'>Go to Shop</Link>
                </h2>
            
            }
        
        </div>
    );
}

export default Cart; 