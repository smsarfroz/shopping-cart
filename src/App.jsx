import './App.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [qtyArray, setQtyArray] = useState(Array(20).fill(0));
  const [itemArray, setItemArray] = useState([]);
  const [orderedIds, setOrderedIds] = useState([]);
  const [total, setTotal] = useState(0);
  
  function totalItemsInCart() {
    let totQty = 0;
    qtyArray.forEach(element => {
      totQty += element;
    });
    return totQty;
  }
  return (
    <div>
      <nav>
        <h2>Shopping Cart App</h2>
        <div className="pages">
          <button><Link to="/" className='link'>Home</Link></button>
          <button><Link to="/shop" className='link'>Shop</Link></button>
        </div>
        <div className="cart">
          <button><Link to="/cart" className='link'>Cart { totalItemsInCart }</Link></button>
        </div>
      </nav>
      <Outlet context={{ qtyArray, setQtyArray, itemArray, setItemArray, orderedIds, setOrderedIds, total, setTotal }}/>
    </div>
  );
}

export default App
