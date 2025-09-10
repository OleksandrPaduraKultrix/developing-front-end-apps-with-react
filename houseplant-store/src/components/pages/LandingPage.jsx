import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to PlantShop</h1>
            <p>
              Transform your home into a green oasis with our carefully curated 
              collection of houseplants. From low-maintenance succulents to 
              stunning tropical beauties, we have the perfect plants to bring 
              life and freshness to any space.
            </p>
            <Link to="/products">
              <Button variant="primary" size="large">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <section className="company-info">
        <div className="container">
          <h2>About PlantShop</h2>
          <p>
            At PlantShop, we believe that every home deserves the beauty and 
            benefits of living plants. Our mission is to make plant parenthood 
            accessible to everyone by offering high-quality plants, expert care 
            guides, and exceptional customer service. Whether you're a seasoned 
            plant collector or just starting your green journey, we're here to 
            help you create the perfect indoor garden.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
