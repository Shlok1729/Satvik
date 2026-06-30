import { MessageCircle } from 'lucide-react';
import './Classes.css';

export default function Classes() {
  const phoneNumber = "919992725545";

  const getWhatsAppLink = (className: string) => {
    const msg = encodeURIComponent(`Hi, I would like to join the ${className} class.`);
    return `https://wa.me/${phoneNumber}?text=${msg}`;
  };

  const classes = [
    {
      title: "Morning Vinyasa",
      time: "6:00 AM - 7:00 AM",
      level: "All Levels",
      desc: "Start your day with an energizing flow that connects breath with movement.",
      img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Gentle Hatha",
      time: "9:00 AM - 10:00 AM",
      level: "Beginner Friendly",
      desc: "A slower-paced class focusing on basic postures and alignment.",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Power Yoga",
      time: "6:00 PM - 7:00 PM",
      level: "Intermediate/Advanced",
      desc: "Build strength and endurance in this intense, fitness-based approach.",
      img: "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Meditation & Pranayama",
      time: "7:30 PM - 8:30 PM",
      level: "All Levels",
      desc: "End your day by calming the mind with guided meditation and breathing exercises.",
      img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="classes-page">
      <div className="page-header">
        <h1>Our Classes</h1>
      </div>

      <section className="section container">
        <div className="full-classes-grid">
          {classes.map((cls, idx) => (
            <div key={idx} className="class-card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="class-card-img" style={{ backgroundImage: `url(${cls.img})` }}></div>
              <div className="class-card-content">
                <h3>{cls.title}</h3>
                <div className="class-meta">
                  <span><strong>Time:</strong> {cls.time}</span>
                  <span><strong>Level:</strong> {cls.level}</span>
                </div>
                <p>{cls.desc}</p>
                <a href={getWhatsAppLink(cls.title)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
                  <MessageCircle size={18} /> Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
