import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HomeCarousel from '../components/HomeCarousel';
import { 
  Sprout, 
  Droplets, 
  Bell, 
  Users, 
  Cloud, 
  ShoppingCart, 
  Store, 
  TrendingUp, 
  Info,
  Coins
} from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { name: 'Today Prices', icon: Coins, path: '/today-prices' },
    { name: 'How to Farm', icon: Sprout, path: '/how-to-farm' },
    { name: 'Water Reminder', icon: Droplets, path: '/water-reminder' },
    { name: 'Animal Alarm', icon: Bell, path: '/animal-alarm' },
    { name: 'Worker Marker', icon: Users, path: '/worker-marker' },
    { name: 'Weather', icon: Cloud, path: '/weather' },
    { name: 'Sell', icon: Store, path: '/sell' },
    { name: 'Buy', icon: ShoppingCart, path: '/buy' },
    { name: 'Future Predictions', icon: TrendingUp, path: '/future-predictions' },
    { name: 'About Us', icon: Info, path: '/about-us' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <HomeCarousel />
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature) => (
            <button
              key={feature.name}
              onClick={() => navigate(feature.path)}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center gap-3"
            >
              <feature.icon className="w-8 h-8 text-primary" />
              <span className="text-gray-700 font-medium">{feature.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;