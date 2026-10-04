import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeviceCatalog from './components/DeviceCatalog';
import DeviceModal from './components/DeviceModal';
import RoomSimulator from './components/RoomSimulator';
import FeaturesSection from './components/FeaturesSection';
import BenefitsCalculator from './components/BenefitsCalculator';
import RoutinesBuilder from './components/RoutinesBuilder';
import TestimonialsFaq from './components/TestimonialsFaq';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('cyan');
  const [cartItems, setCartItems] = useState([
    {
      id: "dev-climate-1",
      name: "Aura Glass Thermostat X9",
      price: 249,
      quantity: 1,
      image: "/images/thermostat.jpg"
    },
    {
      id: "dev-lighting-1",
      name: "Lumina Prism Filament RGB Bulb",
      price: 79,
      quantity: 3,
      image: "/images/lighting.jpg"
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedModalDevice, setSelectedModalDevice] = useState(null);

  // Live state for device interactive controls across catalog and modals
  const [deviceStates, setDeviceStates] = useState({
    "dev-climate-1": { power: true, targetTemp: 72, mode: "Cooling" },
    "dev-security-1": { power: true, recording: true, detectionMode: "High AI Guard" },
    "dev-lighting-1": { power: true, brightness: 85, colorHex: "#06b6d4" },
    "dev-hub-1": { power: true, activeView: "Floorplan", volume: 60 },
    "dev-lock-1": { power: true, locked: true },
    "dev-energy-1": { power: true, solarInputkW: 5.2, batteryPercent: 88 }
  });

  // Apply Theme Accent to Document Root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const handleToggleDevicePower = (deviceId) => {
    setDeviceStates((prev) => ({
      ...prev,
      [deviceId]: {
        ...prev[deviceId],
        power: !(prev[deviceId]?.power ?? true)
      }
    }));
  };

  const handleUpdateDeviceState = (deviceId, newProps) => {
    setDeviceStates((prev) => ({
      ...prev,
      [deviceId]: {
        ...prev[deviceId],
        ...newProps
      }
    }));
  };

  const handleAddToCart = (device) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === device.id);
      if (existing) {
        return prev.map((item) => 
          item.id === device.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: device.id, name: device.name, price: device.price, quantity: 1, image: device.image }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-deep)', color: 'var(--text-main)' }}>
      
      {/* Ambient Animated Glass Glow Background Orbs */}
      <div className="ambient-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* Glass Navigation Bar */}
      <Navbar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currentTheme={currentTheme}
        onChangeTheme={setCurrentTheme}
      />

      {/* Main Content */}
      <main>
        <Hero 
          onExploreClick={() => scrollToSection('devices')}
          onDemoClick={() => scrollToSection('simulator')}
        />

        <DeviceCatalog 
          onSelectDevice={(device) => setSelectedModalDevice(device)}
          onAddToCart={handleAddToCart}
          deviceStates={deviceStates}
          onToggleDevicePower={handleToggleDevicePower}
        />

        <RoomSimulator />

        <FeaturesSection />

        <BenefitsCalculator />

        <RoutinesBuilder />

        <TestimonialsFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Device Modal */}
      {selectedModalDevice && (
        <DeviceModal 
          device={selectedModalDevice}
          onClose={() => setSelectedModalDevice(null)}
          onAddToCart={handleAddToCart}
          deviceState={deviceStates[selectedModalDevice.id]}
          onUpdateDeviceState={handleUpdateDeviceState}
        />
      )}

      {/* System Package Quote Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
