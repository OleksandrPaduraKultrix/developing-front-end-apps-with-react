import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>PlantShop</h1>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}
          >
            Shop Plants
          </Link>
          <Link 
            to="/cart" 
            className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
