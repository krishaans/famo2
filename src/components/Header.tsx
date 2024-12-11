import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="flex items-center gap-4 text-5xl font-bold mb-6 hover:opacity-90 transition-opacity">
            <img src="/src/assets/logo.svg" alt="Famo Logo" className="w-16 h-16" />
            <span className="font-serif tracking-wide">Famo.</span>
          </Link>
          <p className="max-w-3xl text-lg font-light leading-relaxed">
            Empowering farmers, fostering sustainable agriculture, and delivering fresh, high-quality vegetables to consumers at fair prices.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;