import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import ProductListingPage from './components/pages/ProductListingPage';
import ShoppingCartPage from './components/pages/ShoppingCartPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
