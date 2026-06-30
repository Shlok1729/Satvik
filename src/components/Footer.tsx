import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <img src="/image.png" alt="Satvik Yoga" className="footer-logo-img" />
          <p>Find your inner peace and strength through our traditional and modern yoga practices.</p>
          <div className="social-links">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">X</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Serenity Lane, Wellness City</p>
          <p>Email: hello@satvikyoga.com</p>
          <p>Phone: +91 99927 25545</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Satvik Yoga Classes. All rights reserved.</p>
      </div>
    </footer>
  );
}
