import './App.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [qtyArray, setQtyArray] = useState(Array(20).fill(1));
  return (
    <div>
      <nav>
        <h2>Shopping Cart App</h2>
        <div className="pages">
          <button><Link to="/" className='link'>Home</Link></button>
          <button><Link to="/shop" className='link'>Shop</Link></button>
        </div>
        <div className="cart">
          <button><Link to="/cart" className='link'>Cart</Link></button>
        </div>
      </nav>
      <Outlet context={{ qtyArray, setQtyArray }}/>
    </div>
  );
}

export default App
