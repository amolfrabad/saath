
'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t mt-12 py-8 relative">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} noOneAlone — You Talk. We Listen.
      </div>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-900 transition"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      )}
    </footer>
  );
}
