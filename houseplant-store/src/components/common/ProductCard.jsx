import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { formatPrice } from '../../utils/cartUtils';
import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const disabledProducts = useSelector(state => state.cart.disabledProducts);
  const isDisabled = disabledProducts.includes(plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={plant.image} alt={plant.name} />
        <div className="product-category">{plant.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-description">{plant.description}</p>
        <div className="product-footer">
          <span className="product-price">{formatPrice(plant.price)}</span>
          <Button
            onClick={handleAddToCart}
            disabled={isDisabled}
            variant="primary"
            size="small"
          >
            {isDisabled ? 'Added' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
