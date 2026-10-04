import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Check, 
  Plus, 
  Sliders, 
  Power, 
  Shield, 
  Zap, 
  Eye, 
  Cpu,
  Layers
} from 'lucide-react';
import { SMART_DEVICES } from '../data/smartHomeData';

export default function DeviceCatalog({ onSelectDevice, onAddToCart, deviceStates, onToggleDevicePower }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Climate Control', 'AI Security', 'Ambient Lighting', 'Smart Hubs', 'Renewable Power'];

  // Filter and sort logic
  const filteredDevices = SMART_DEVICES.filter((dev) => {
    const matchesCategory = selectedCategory === 'All' || dev.category === selectedCategory;
    const matchesSearch = dev.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dev.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // popular
  });

  return (
    <section id="devices" style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <Cpu size={14} /> SMART HARDWARE CATALOG
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Curated Smart Devices
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every device features a smoked glass chassis, native Matter 1.3 interop, and local Edge AI processing. Toggle controls directly below to experience live feedback!
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div 
          className="glass-panel"
          style={{
            padding: '20px',
            marginBottom: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Categories Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`glass-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search and Sort Inputs */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              mdGridTemplateColumns: '1fr 220px',
              gap: '16px'
            }}
          >
            <div style={{ position: 'relative' }}>
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search smart devices, features, or specs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input"
                style={{ paddingLeft: '46px' }}
              />
            </div>

            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="popular" style={{ background: '#0e1222' }}>Most Popular</option>
              <option value="rating" style={{ background: '#0e1222' }}>Highest Rated</option>
              <option value="price-low" style={{ background: '#0e1222' }}>Price: Low to High</option>
              <option value="price-high" style={{ background: '#0e1222' }}>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Devices Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredDevices.map((device) => {
            const isPoweredOn = deviceStates[device.id]?.power ?? true;

            return (
              <div 
                key={device.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: isPoweredOn ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                {/* Product Image & Badges */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#080c1a' }}>
                  <img 
                    src={device.image} 
                    alt={device.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: isPoweredOn ? 'brightness(1)' : 'brightness(0.5) grayscale(40%)',
                      transition: 'all 0.4s ease'
                    }}
                  />
                  
                  {/* Category Pill Badge */}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(9, 12, 24, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)'
                    }}
                  >
                    {device.category}
                  </span>

                  {/* Matter Certified Badge */}
                  {device.matterCertified && (
                    <span 
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid var(--success)',
                        backdropFilter: 'blur(10px)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--success)'
                      }}
                    >
                      Matter 1.3
                    </span>
                  )}

                  {/* Live Quick Power Toggle Button on Card */}
                  <button
                    onClick={() => onToggleDevicePower(device.id)}
                    title={isPoweredOn ? "Turn Device OFF" : "Turn Device ON"}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: isPoweredOn ? 'var(--accent-primary)' : 'rgba(0, 0, 0, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: isPoweredOn ? '#000' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isPoweredOn ? '0 0 15px var(--accent-glow)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Power size={18} />
                  </button>
                </div>

                {/* Device Info Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  <div>
                    {/* Rating & Reviews */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <Star size={14} fill="#f59e0b" color="#f59e0b" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{device.rating}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>({device.reviewsCount} reviews)</span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                      {device.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {device.description}
                    </p>
                  </div>

                  {/* Price & Action Buttons */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', marginTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>MSRP</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                          ${device.price}
                        </span>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.7rem', color: isPoweredOn ? 'var(--success)' : 'var(--text-dim)', fontWeight: 600 }}>
                          ● {isPoweredOn ? 'ONLINE' : 'STANDBY'}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <button 
                        onClick={() => onSelectDevice(device)}
                        className="btn-glass-secondary"
                        style={{ padding: '8px 12px', fontSize: '0.85rem' }}
                      >
                        <Eye size={14} /> Quick View
                      </button>

                      <button 
                        onClick={() => onAddToCart(device)}
                        className="btn-glass-primary"
                        style={{ padding: '8px 12px', fontSize: '0.85rem' }}
                      >
                        <Plus size={14} /> Add System
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
