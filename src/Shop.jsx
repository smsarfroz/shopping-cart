import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { CiSearch } from "react-icons/ci";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("allCategories");

  const {
    qtyArray,
    setQtyArray,
    itemArray,
    setItemArray,
    orderedIds,
    setOrderedIds,
    total,
    setTotal,
  } = useOutletContext();
  const api = "https://fakestoreapi.com/products";
  useEffect(() => {
    setQtyArray(Array(20).fill(0));
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>A network error was ecountered</p>;
  }

  function handleFilter(item) {
    let myQuery = query.toLowerCase();

    if (
      (myQuery === "" ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)) &&
      (category === "allCategories" || category === item.category)
    ) {
      return true;
    }
    return false;
  }
  return (
    <>
      <div className="filterContainer">
        <div className="searchWrapper">
          <CiSearch className="searchIcon" />
          <input
            className="searchQuery"
            type="text"
            value={query}
            placeholder="Search products..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          name=""
          id="filterCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="allCategories">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="itemContainer">
        {itemArray.map((item) => {
          return handleFilter(item) ? (
            <ItemCard
              key={item.id}
              itemInfo={item}
              qtyArray={qtyArray}
              setQtyArray={setQtyArray}
              orderedIds={orderedIds}
              setOrderedIds={setOrderedIds}
              total={total}
              setTotal={setTotal}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default Shop;
