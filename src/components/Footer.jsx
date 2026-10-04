import React, { useState } from 'react';
import { 
  Home, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Globe, 
  Cpu,
  Share2,
  MessageSquare
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer 
      style={{
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(5, 7, 16, 0.9)'
      }}
    >
      <div className="container">
        
        {/* Top Footer Newsletter Panel */}
        <div 
          className="glass-card"
          style={{
            padding: '40px',
            marginBottom: '64px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            mdGridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(14, 18, 34, 0.8), rgba(20, 28, 50, 0.6))'
          }}
        >
          <div>
            <div className="glass-pill" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>
              STAY INSPIRED
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Subscribe to Lumina Glass OS Updates
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Get the latest Matter firmware release notes, architectural design guides, and energy optimization tips.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="email" 
              placeholder="Enter your email address..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input"
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn-glass-primary">
              {subscribed ? <Check size={18} /> : <ArrowRight size={18} />}
            </button>
          </form>
          {subscribed && (
            <p style={{ color: 'var(--success)', fontSize: '0.85rem', gridColumn: 'span 2' }}>
              ✓ Thank you! You have been subscribed to the Lumina Ecosystem Newsletter.
            </p>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Home size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                LUMINA
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px' }}>
              The Next-Generation Glassmorphic Smart Home Ecosystem. Powered by Matter 1.3, Thread, and local Edge AI.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span className="glass-pill" style={{ padding: '6px' }}><Globe size={16} /></span>
              <span className="glass-pill" style={{ padding: '6px' }}><Share2 size={16} /></span>
              <span className="glass-pill" style={{ padding: '6px' }}><MessageSquare size={16} /></span>
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Smart Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#devices" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Aura Glass Thermostat</a></li>
              <li><a href="#devices" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>AetherGuard 4K AI Camera</a></li>
              <li><a href="#devices" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Prism Filament RGB Bulbs</a></li>
              <li><a href="#devices" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>SolarPulse Energy Gateway</a></li>
              <li><a href="#devices" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Glass Touch Control Hub</a></li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Platform Tech
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Matter 1.3 Protocol</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Local Edge AI Engine</a></li>
              <li><a href="#benefits" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Energy ROI Calculator</a></li>
              <li><a href="#routines" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Autonomous Scene Engine</a></li>
              <li><a href="#simulator" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>3D Room Control Deck</a></li>
            </ul>
          </div>

          {/* Column 4: Certified Interop */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '0.5px' }}>
              Certified Interop
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="glass-pill" style={{ fontSize: '0.75rem' }}>Apple HomeKit Secure</span>
              <span className="glass-pill" style={{ fontSize: '0.75rem' }}>Google Home Matter</span>
              <span className="glass-pill" style={{ fontSize: '0.75rem' }}>Amazon Alexa Smart</span>
              <span className="glass-pill" style={{ fontSize: '0.75rem' }}>Home Assistant Local</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} LUMINA Glass Home Technologies Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy & Local Security</span>
            <span>Terms of Service</span>
            <span>Matter Compatibility Spec</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
