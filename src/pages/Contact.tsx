import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const phoneNumber = "919992725545";
  const getWhatsAppLink = () => `https://wa.me/${phoneNumber}?text=Hi, I have a query regarding Satvik Yoga Classes.`;

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>
      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info animate-fade-in">
            <h2>Get in Touch</h2>
            <p className="mb-8">We'd love to hear from you. Reach out to us for class schedules, personalized sessions, or any other queries.</p>
            
            <div className="info-item">
              <div className="icon-wrapper"><MapPin /></div>
              <div>
                <strong>Location</strong>
                <p>123 Serenity Lane, Wellness City, IN</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper"><Phone /></div>
              <div>
                <strong>Phone</strong>
                <p>+91 99927 25545</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper"><Mail /></div>
              <div>
                <strong>Email</strong>
                <p>hello@satvikyoga.com</p>
              </div>
            </div>

            <div className="mt-8">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-image animate-fade-in animate-delay-1">
             <img src="https://images.unsplash.com/photo-1552859012-78d10330dc37?q=80&w=800&auto=format&fit=crop" alt="Meditation" />
          </div>
        </div>
      </section>
    </div>
  );
}
