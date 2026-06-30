import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "icon";
  size?: "sm" | "md" | "lg";
}

const WHATSAPP_NUMBER = "1234567890";

export default function WhatsAppButton({
  message = "Hi, I want to know more about Satvik Yoga Classes",
  className = "",
  children,
  variant = "primary",
  size = "md",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const base =
    "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5",
    icon: "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "WhatsApp Us"}
    </a>
  );
}
