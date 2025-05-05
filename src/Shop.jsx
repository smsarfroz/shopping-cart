import { useState, useEffect } from "react";

const Shop = () => {
    const api = 'https://fakestoreapi.com/products';
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemArray, setItemArray] = useState([]); 
    useEffect(() => {
        fetch(api, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setItemArray(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    console.log(itemArray);
    return (
        <div>
            <h1>Hello from Shop page!</h1>
        </div>
    )
}

export default Shop;