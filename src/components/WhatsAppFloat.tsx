import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = "919992725545"; // India format
  const message = encodeURIComponent("Hi, I would like to know more about Satvik Yoga Classes.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
}
