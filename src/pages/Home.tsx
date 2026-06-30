import { Link } from 'react-router-dom';
import './Home.css';
import { ArrowRight, Leaf, Heart, Sun } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content animate-fade-in">
          <h1>Discover Your Inner <span className="text-secondary">Balance</span></h1>
          <p className="mt-4 mb-8">Join Satvik Yoga Classes to rejuvenate your mind, body, and soul through authentic yoga practices.</p>
          <div className="hero-buttons">
            <Link to="/classes" className="btn btn-primary">
              Explore Classes <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section container text-center">
        <h2 className="section-title">Why Satvik Yoga?</h2>
        <div className="features-grid mt-4">
          <div className="feature-card glass-effect">
            <Leaf size={48} className="feature-icon" />
            <h3>Authentic Practice</h3>
            <p>Traditional methods tailored for modern lifestyle.</p>
          </div>
          <div className="feature-card glass-effect animate-delay-1">
            <Heart size={48} className="feature-icon" />
            <h3>Holistic Health</h3>
            <p>Focus on physical strength and mental clarity.</p>
          </div>
          <div className="feature-card glass-effect animate-delay-2">
            <Sun size={48} className="feature-icon" />
            <h3>Expert Guidance</h3>
            <p>Learn from certified, passionate yoga instructors.</p>
          </div>
        </div>
      </section>

      {/* Mini Classes Preview */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Our Popular Classes</h2>
          <div className="classes-preview-grid mt-4">
            <div className="class-preview-card">
              <div className="card-image bg-vinyasa"></div>
              <div className="card-content">
                <h3>Vinyasa Flow</h3>
                <p>Dynamic movement synced with breath.</p>
                <Link to="/classes" className="text-link mt-2">View details</Link>
              </div>
            </div>
            <div className="class-preview-card animate-delay-1">
              <div className="card-image bg-hatha"></div>
              <div className="card-content">
                <h3>Hatha Yoga</h3>
                <p>Gentle and slow-paced, perfect for beginners.</p>
                <Link to="/classes" className="text-link mt-2">View details</Link>
              </div>
            </div>
            <div className="class-preview-card animate-delay-2">
              <div className="card-image bg-meditation"></div>
              <div className="card-content">
                <h3>Meditation</h3>
                <p>Find focus and reduce daily stress.</p>
                <Link to="/classes" className="text-link mt-2">View details</Link>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/classes" className="btn btn-secondary">See All Classes</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
