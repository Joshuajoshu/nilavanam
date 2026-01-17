import './App.css'
import mainImage from './images/main.png'
import img1 from './images/1.jpeg'
import img2 from './images/2.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'
import img6 from './images/6.jpeg'
import img7 from './images/7.jpeg'
import img8 from './images/8.jpeg'
import img9 from './images/9.jpeg'
import img10 from './images/10.jpeg'

function App() {
  return (
    <div className="app">
      {/* Sticky Navigation Bar */}
      <nav className="navbar sticky">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>Elite Homes Reality</h1>
          </div>
          <div className="navbar-contact">
            <span className="phone-icon">📞</span>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Property Showcase */}
      <header className="hero">
        <div className="hero-image-container">
          <img src={mainImage} alt="Luxury Property" className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2>Find Your Dream Home</h2>
            <p>Premium Properties in Prime Locations</p>
            <button className="cta-button">View Listings</button>
          </div>
        </div>
      </header>

      {/* Featured Properties Section */}
      <section className="featured-properties">
        <h2>Our Exclusive Property</h2>
        <div className="single-property-container">
          <div className="property-card-featured">
            <div className="property-image-featured">
              <img src={mainImage} alt="Premium Luxury Villa" />
            </div>
            <div className="property-info-featured">
              <h3>Premium Luxury Villa</h3>
              <div className="property-details-list">
                <div className="detail-item">
                  <span className="detail-label">Bedrooms</span>
                  <span className="detail-value">4</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Bathrooms</span>
                  <span className="detail-value">3</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Square Feet</span>
                  <span className="detail-value">3,500 sqft</span>
                </div>
              </div>
              <p className="property-description">
                This stunning luxury villa offers exceptional architecture and design. 
                Located in a premium location with modern amenities, beautiful landscaping, 
                and sophisticated finishes throughout. Perfect for discerning buyers looking 
                for an upscale residential property.
              </p>
              <div className="price-contact-section">
                <p className="price-label">For Pricing Information:</p>
                <a href="tel:+1234567890" className="contact-button">
                  <span>📞</span> Call +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Gallery Section */}
      <section className="gallery">
        <h2>Property Gallery</h2>
        <p className="gallery-subtitle">Explore all angles of this magnificent property</p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={img1} alt="Property View 1" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img1} alt="Property View 1 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img2} alt="Property View 2" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img2} alt="Property View 2 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img3} alt="Property View 3" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img3} alt="Property View 3 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img4} alt="Property View 4" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img4} alt="Property View 4 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img5} alt="Property View 5" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img5} alt="Property View 5 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img6} alt="Property View 6" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img6} alt="Property View 6 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img7} alt="Property View 7" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img7} alt="Property View 7 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img8} alt="Property View 8" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img8} alt="Property View 8 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img9} alt="Property View 9" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img9} alt="Property View 9 Full" />
            </div>
          </div>
          <div className="gallery-item">
            <img src={img10} alt="Property View 10" className="gallery-image" />
            <div className="gallery-overlay">
              <img src={img10} alt="Property View 10 Full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Elite Homes Realty</h2>
        <p>
          With over 20 years of experience in the real estate market, we pride ourselves on providing 
          exceptional service and finding the perfect properties for our clients. Our dedicated team 
          of professionals is committed to making your real estate dreams a reality.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">✓</span>
            <h3>Expert Team</h3>
            <p>Experienced agents with local market knowledge</p>
          </div>
          <div className="feature">
            <span className="feature-icon">✓</span>
            <h3>Quality Properties</h3>
            <p>Carefully curated listings in prime locations</p>
          </div>
          <div className="feature">
            <span className="feature-icon">✓</span>
            <h3>Fast Process</h3>
            <p>Smooth transactions with dedicated support</p>
          </div>
          <div className="feature">
            <span className="feature-icon">✓</span>
            <h3>Best Prices</h3>
            <p>Competitive pricing and flexible terms</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Elite Homes Realty helped us find our dream house. Highly professional team!"</p>
            <h4>- Sarah & John Mitchell</h4>
          </div>
          <div className="testimonial">
            <p>"Best real estate experience ever. They guided us through every step."</p>
            <h4>- Maria Garcia</h4>
          </div>
          <div className="testimonial">
            <p>"Outstanding service and attention to detail. Highly recommended!"</p>
            <h4>- Robert Chen</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p><strong>Email:</strong> info@elitehomesrealty.com</p>
            <p><strong>Address:</strong> 123 Real Estate Ave, City, State 12345</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Elite Homes Realty. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
