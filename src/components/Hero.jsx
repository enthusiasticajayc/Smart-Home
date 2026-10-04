import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Power, 
  Thermometer, 
  Lock, 
  CheckCircle2,
  Play
} from 'lucide-react';

export default function Hero({ onExploreClick, onDemoClick }) {
  // Live quick state inside Hero Widget
  const [heroLights, setHeroLights] = useState(true);
  const [heroTemp, setHeroTemp] = useState(72);
  const [heroSecurity, setHeroSecurity] = useState(true);

  return (
    <section 
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            lgGridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div>
            <div className="section-tag">
              <Sparkles size={14} /> GLASSMORPHISM ECOSYSTEM V3.4
            </div>

            <h1 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '24px',
                color: '#fff'
              }}
            >
              Step Into the Next Era of Living. <br />
              <span className="gradient-title">Sculpted in Glass. Powered by Edge AI.</span>
            </h1>

            <p 
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '36px',
                maxWidth: '600px'
              }}
            >
              Unify your climate control, 4K AI security, ambient circadian lighting, and solar micro-grid into one fluid, translucent glass interface. Zero app chaos. 100% local privacy.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <button onClick={onExploreClick} className="btn-glass-primary">
                Explore Smart Devices <ArrowRight size={18} />
              </button>
              <button onClick={onDemoClick} className="btn-glass-secondary">
                <Play size={16} fill="var(--accent-primary)" color="var(--accent-primary)" /> Live Room Simulator
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>
                  42%
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Avg. Energy Saved</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                  &lt; 0.2s
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Response Latency</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--success)', fontFamily: 'var(--font-display)' }}>
                  Matter 1.3
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Certified Universal</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Edge AI Local Data</div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual & Interactive Glass Console */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Ambient Glass Hero Card */}
            <div 
              className="glass-card"
              style={{
                padding: '24px',
                border: heroLights ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                boxShadow: heroLights ? '0 0 40px var(--accent-glow)' : 'var(--glass-shadow)'
              }}
            >
              {/* Product Background Photo */}
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '240px',
                  marginBottom: '20px'
                }}
              >
                <img 
                  src="/images/hero.jpg" 
                  alt="Futuristic Glassmorphic Smart Home" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: heroLights ? 'brightness(1.05)' : 'brightness(0.6)',
                    transition: 'all 0.5s ease'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(9, 12, 24, 0.75)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#fff'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: heroLights ? 'var(--success)' : 'var(--text-dim)' }} />
                  {heroLights ? 'Lumina Glass Mesh ACTIVE' : 'Lumina Standby'}
                </div>

                {/* Floating Temperature Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    right: '14px',
                    background: 'rgba(9, 12, 24, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '8px 16px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Thermometer size={18} color="var(--accent-primary)" />
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Living Room</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{heroTemp}°F</div>
                  </div>
                </div>
              </div>

              {/* Interactive Quick Hub Console Controls */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                
                {/* Control 1: Lights */}
                <button
                  onClick={() => setHeroLights(!heroLights)}
                  style={{
                    background: heroLights ? 'rgba(var(--accent-rgb), 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: heroLights ? '1px solid var(--accent-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    padding: '14px',
                    color: heroLights ? '#fff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Power size={20} color={heroLights ? 'var(--accent-primary)' : 'var(--text-muted)'} style={{ margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Ambient Light</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{heroLights ? 'Cyber Cyan' : 'OFF'}</div>
                </button>

                {/* Control 2: Climate */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    padding: '14px',
                    textAlign: 'center'
                  }}
                >
                  <Thermometer size={20} color="var(--accent-primary)" style={{ margin: '0 auto 4px' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>Target HVAC</div>
                  <input 
                    type="range" 
                    min="64" 
                    max="78" 
                    value={heroTemp} 
                    onChange={(e) => setHeroTemp(parseInt(e.target.value))}
                    className="glass-range"
                    style={{ marginTop: '6px' }}
                  />
                </div>

                {/* Control 3: Security */}
                <button
                  onClick={() => setHeroSecurity(!heroSecurity)}
                  style={{
                    background: heroSecurity ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: heroSecurity ? '1px solid var(--success)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    padding: '14px',
                    color: heroSecurity ? '#fff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Lock size={20} color={heroSecurity ? 'var(--success)' : 'var(--text-muted)'} style={{ margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>AI Security</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{heroSecurity ? 'ARMED' : 'DISARMED'}</div>
                </button>

              </div>

            </div>

            {/* Decorative Parallax Glass Overlay Card */}
            <div 
              className="glass-card"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.85rem',
                fontWeight: 600,
                zIndex: 2,
                borderRadius: '16px'
              }}
            >
              <Zap size={18} color="var(--warning)" />
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem' }}>Solar Yield Today</span>
                <span style={{ color: '#fff', fontSize: '0.95rem' }}>+ 28.5 kWh Generated</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  );
}
