// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" aria-label="Twitter" className="hover:text-primary">🐦</a>
        <a href="#" aria-label="Discord" className="hover:text-primary">💬</a>
        <a href="#" aria-label="LinkedIn" className="hover:text-primary">🔗</a>
        <a href="#" aria-label="YouTube" className="hover:text-primary">📺</a>
      </div>
      <p>© 2025 HashCombinator. All rights reserved.</p>
    </footer>
  );
}