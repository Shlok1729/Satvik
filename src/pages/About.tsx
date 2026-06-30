import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Satvik Yoga</h1>
      </div>
      
      <section className="section container">
        <div className="about-grid">
          <div className="about-text animate-fade-in">
            <h2>Our Philosophy</h2>
            <p>At Satvik Yoga, we believe in the pure and holistic approach to wellness. 'Satvik' refers to purity, truth, and light. Our classes are designed to bring these elements into your life through the practice of ancient yoga techniques.</p>
            <p className="mt-4">We focus not just on physical postures, but on breath control, meditation, and inner peace. Whether you are a beginner or an advanced practitioner, our studio is a sanctuary for you to grow and thrive.</p>
          </div>
          <div className="about-image animate-fade-in animate-delay-1">
            <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800&auto=format&fit=crop" alt="Yoga Studio" />
          </div>
        </div>
      </section>
    </div>
  );
}
