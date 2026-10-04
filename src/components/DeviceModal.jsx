import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Star, 
  Plus, 
  ShieldCheck, 
  Cpu, 
  Wifi, 
  Power, 
  Thermometer, 
  Sliders, 
  Lock,
  Volume2
} from 'lucide-react';

export default function DeviceModal({ device, onClose, onAddToCart, deviceState, onUpdateDeviceState }) {
  if (!device) return null;

  const isPowerOn = deviceState?.power ?? true;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 200,
        background: 'rgba(5, 7, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflowY: 'auto'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '28px',
          padding: '0',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', mdGridTemplateColumns: '1fr 1.2fr' }}>
          
          {/* Left Column: Product Image & Live Control Simulation */}
          <div style={{ padding: '32px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', background: '#0a0e1c' }}>
            
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '260px', marginBottom: '20px', position: 'relative' }}>
              <img 
                src={device.image} 
                alt={device.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isPowerOn ? 'brightness(1)' : 'brightness(0.4) grayscale(50%)',
                  transition: 'all 0.3s ease'
                }}
              />
              <span 
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(9, 12, 24, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                {device.category}
              </span>
            </div>

            {/* Interactive Live Control Console inside Modal */}
            <div 
              className="glass-card"
              style={{ padding: '18px', background: 'rgba(15, 21, 38, 0.7)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sliders size={16} color="var(--accent-primary)" /> Live Control Simulator
                </span>
                
                {/* Main Power Toggle */}
                <label className="glass-switch">
                  <input 
                    type="checkbox" 
                    checked={isPowerOn} 
                    onChange={(e) => onUpdateDeviceState(device.id, { power: e.target.checked })} 
                  />
                  <span className="slider"></span>
                </label>
              </div>

              {isPowerOn ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
                  
                  {/* Climate specific controls */}
                  {device.category === 'Climate Control' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: 'var(--text-muted)' }}>
                        <span>Target Temp</span>
                        <span style={{ color: '#fff', fontWeight: 700 }}>{deviceState?.targetTemp || 72}°F</span>
                      </div>
                      <input 
                        type="range" min="62" max="80" 
                        value={deviceState?.targetTemp || 72} 
                        onChange={(e) => onUpdateDeviceState(device.id, { targetTemp: parseInt(e.target.value) })}
                        className="glass-range"
                      />
                    </div>
                  )}

                  {/* Ambient Lighting specific controls */}
                  {device.category === 'Ambient Lighting' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: 'var(--text-muted)' }}>
                        <span>Brightness</span>
                        <span style={{ color: '#fff', fontWeight: 700 }}>{deviceState?.brightness || 85}%</span>
                      </div>
                      <input 
                        type="range" min="1" max="100" 
                        value={deviceState?.brightness || 85} 
                        onChange={(e) => onUpdateDeviceState(device.id, { brightness: parseInt(e.target.value) })}
                        className="glass-range"
                      />
                    </div>
                  )}

                  {/* Security specific controls */}
                  {device.category === 'AI Security' && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        onClick={() => onUpdateDeviceState(device.id, { locked: !deviceState?.locked })}
                        className="btn-glass-secondary"
                        style={{ flex: 1, padding: '8px', fontSize: '0.8rem' }}
                      >
                        <Lock size={14} /> {deviceState?.locked ? 'Unlock' : 'Lock'}
                      </button>
                    </div>
                  )}

                  <div style={{ fontSize: '0.75rem', color: 'var(--success)', marginTop: '4px' }}>
                    ✓ Syncing via Local Thread Network (&lt; 2ms response)
                  </div>
                </div>
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textAlign: 'center', padding: '12px 0' }}>
                  Device is powered off. Toggle switch above to activate controls.
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Specs & Overview */}
          <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>{device.rating}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({device.reviewsCount} customer reviews)</span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                {device.name}
              </h2>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px' }}>
                {device.subtitle}
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {device.description}
              </p>

              {/* Technical Specifications List */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                  Technical Specs
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {Object.entries(device.specs || {}).map(([key, val]) => (
                    <div 
                      key={key} 
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '10px 14px',
                        borderRadius: '12px'
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{key}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ecosystem Compatibility Tags */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Native Compatibility:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {(device.compatibility || []).map((comp) => (
                    <span 
                      key={comp} 
                      className="glass-pill" 
                      style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                    >
                      <Check size={12} color="var(--success)" /> {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Package Price</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                  ${device.price}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    onAddToCart(device);
                    onClose();
                  }}
                  className="btn-glass-primary"
                  style={{ padding: '12px 24px' }}
                >
                  <Plus size={18} /> Add to System Package
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
