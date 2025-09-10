import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../store/cartSlice';
import { formatPrice } from '../../utils/cartUtils';
import Header from '../common/Header';
import Button from '../common/Button';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart-page">
        <Header />
        <div className="page-container">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any plants to your cart yet.</p>
            <Link to="/products">
              <Button variant="primary" size="large">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page">
      <Header />
      
      <div className="page-container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <div className="cart-summary">
            <p className="total-items">
              {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart
            </p>
            <p className="total-price">
              Total: {formatPrice(totalPrice)}
            </p>
          </div>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">Unit Price: {formatPrice(item.price)}</p>
                </div>
                
                <div className="quantity-controls">
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </Button>
                  <span className="quantity">{item.quantity}</span>
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </Button>
                </div>
                
                <div className="item-total">
                  {formatPrice(item.price * item.quantity)}
                </div>
                
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => handleRemove(item.id)}
                  className="remove-button"
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products">
              <Button variant="outline" size="medium">
                Continue Shopping
              </Button>
            </Link>
            
            <Button 
              variant="primary" 
              size="medium"
              onClick={() => alert('Coming Soon!')}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
