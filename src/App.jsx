import "./App.css";
import { Link, MemoryRouter } from "react-router";
import { Outlet } from "react-router";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { BrowserRouter } from "react-router";
import { Router } from "react-router";

const App = () => {
  const [qtyArray, setQtyArray] = useState(Array(20).fill(0));
  const [itemArray, setItemArray] = useState([]);
  const [orderedIds, setOrderedIds] = useState([]);
  const [total, setTotal] = useState(0);

  function totalItemsInCart() {
    let totQty = 0;
    qtyArray.forEach((element) => {
      totQty += element;
    });
    return totQty;
  }
  return (
        <div>
          <nav>
            <b className="Title">Shopping Cart App</b>
            <div className="pages">
              <button className="button">
                <Link to="/" className="link">
                  Home
                </Link>
              </button>
              <button className="button">
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </button>
            </div>
            <div className="cart">
              <button className="cartButton">
                <Link to="/cart" className="link">
                  <CiShoppingCart />
                  <div className="circle">{totalItemsInCart()}</div>
                </Link>
              </button>
            </div>
          </nav>
          <Outlet
            context={{
              qtyArray,
              setQtyArray,
              itemArray,
              setItemArray,
              orderedIds,
              setOrderedIds,
              total,
              setTotal,
            }}
          />
        </div>
  );
};

export default App;
