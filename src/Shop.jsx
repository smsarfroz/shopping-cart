import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const Shop = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemArray, setItemArray] = useState([]); 
    
    const api = 'https://fakestoreapi.com/products';
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
    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    if (error) {
        return (
            <p>A network error was ecountered</p>
        );
    }
    return (
        <div className="itemContainer">
            {
                itemArray.map((item) => {
                    return (
                        <ItemCard
                            key={item.id}
                            itemInfo={item}
                        />
                    );
                })
            }
        </div>
    )
}

export default Shop;