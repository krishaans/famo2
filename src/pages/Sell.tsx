import React from 'react';
import Header from '../components/Header';

const Sell: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Sell Products</h1>
      </div>
    </div>
  );
};

export default Sell;