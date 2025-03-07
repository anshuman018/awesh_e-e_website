import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9669231117"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all hover:-translate-y-1 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-white rounded-lg opacity-0 scale-0 group-hover:scale-90 group-hover:opacity-20 transition-all duration-300"></div>
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}