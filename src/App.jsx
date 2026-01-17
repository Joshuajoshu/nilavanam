import './App.css'

function App() {
  return (
    <div className="app">
      {/* Sticky Navigation Bar */}
      <nav className="navbar sticky">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>Elite Homes Realty</h1>
          </div>
          <div className="navbar-contact">
            <span className="phone-icon">📞</span>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Property Showcase */}
      <header className="hero">
        <div className="hero-content">
          <h2>Find Your Dream Home</h2>
          <p>Premium Properties in Prime Locations</p>
          <button className="cta-button">View Listings</button>
        </div>
      </header>

      {/* Featured Properties Section */}
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="properties-grid">
          <div className="property-card">
            <div className="property-image">
              <img src="/images/property-1.jpg" alt="Luxury Villa" />
            </div>
            <div className="property-info">
              <h3>Luxury Villa</h3>
              <p className="price">$850,000</p>
              <p className="details">4 Beds | 3 Baths | 3,500 sqft</p>
              <button className="details-button">View Details</button>
            </div>
          </div>

          <div className="property-card">
            <div className="property-image">
              <img src="/images/property-2.jpg" alt="Modern Apartment" />
            </div>
            <div className="property-info">
              <h3>Modern Apartment</h3>
              <p className="price">$450,000</p>
              <p className="details">2 Beds | 2 Baths | 1,200 sqft</p>
              <button className="details-button">View Details</button>
            </div>
          </div>

          <div className="property-card">
            <div className="property-image">
              <img src="/images/property-3.jpg" alt="Beachfront Home" />
            </div>
            <div className="property-info">
              <h3>Beachfront Home</h3>
              <p className="price">$1,250,000</p>
              <p className="details">5 Beds | 4 Baths | 5,000 sqft</p>
              <button className="details-button">View Details</button>
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
