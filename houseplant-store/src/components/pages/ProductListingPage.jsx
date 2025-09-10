import { plants, categories } from '../../data/plantsData';
import ProductCard from '../common/ProductCard';
import Header from '../common/Header';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const getPlantsByCategory = (category) => {
    return plants.filter(plant => plant.category === category);
  };

  return (
    <div className="product-listing-page">
      <Header />
      
      <div className="page-container">
        <div className="page-header">
          <h1>Our Plant Collection</h1>
          <p>Discover the perfect plants for your home and lifestyle</p>
        </div>

        {categories.map(category => {
          const categoryPlants = getPlantsByCategory(category);
          
          return (
            <section key={category} className="category-section">
              <div className="category-header">
                <h2>{category} Plants</h2>
                <p className="category-count">
                  {categoryPlants.length} plant{categoryPlants.length !== 1 ? 's' : ''} available
                </p>
              </div>
              
              <div className="products-grid">
                {categoryPlants.map(plant => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
