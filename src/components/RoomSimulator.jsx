import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Thermometer, 
  Music, 
  Sliders, 
  Zap, 
  Tv, 
  Wind,
  Play,
  Pause,
  Lock,
  Unlock,
  Volume2,
  Activity,
  Layers
} from 'lucide-react';

export default function RoomSimulator() {
  const [lightPreset, setLightPreset] = useState({ id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.5)' });
  const [temperature, setTemperature] = useState(71);
  const [securityState, setSecurityState] = useState('Home Guard'); // Disarmed, Home Guard, Away Shield
  const [blindsPercent, setBlindsPercent] = useState(70);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [tvPowered, setTvPowered] = useState(true);

  const lightPresets = [
    { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.5)' },
    { id: 'sunset', name: 'Warm Sunset', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.5)' },
    { id: 'emerald', name: 'Zen Emerald', color: '#10b981', glow: 'rgba(16, 185, 129, 0.5)' },
    { id: 'purple', name: 'Neon Purple', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.5)' },
    { id: 'night', name: 'Night Dim', color: '#334155', glow: 'rgba(51, 65, 85, 0.2)' }
  ];

  // Dynamic telemetry calculations
  const calculatePowerWatts = () => {
    let base = 60; // idle background
    if (lightPreset.id !== 'night') base += 85;
    if (temperature < 70 || temperature > 74) base += 140; // HVAC active
    if (isPlayingAudio) base += 35;
    if (tvPowered) base += 110;
    return base;
  };

  return (
    <section id="simulator" style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <Sliders size={14} /> REAL-TIME EXPERIMENTAL ENGINE
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Interactive Smart Room Simulator
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Take full command of a virtual Lumina smart home living room in real time. Tweak lighting moods, temperature, security locks, audio acoustics, and blinds below!
          </p>
        </div>

        {/* Room Simulator Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            lgGridTemplateColumns: '1.1fr 0.9fr',
            gap: '32px'
          }}
          className="simulator-grid"
        >
          {/* Left Column: Visual Room Rendering */}
          <div 
            className="glass-panel"
            style={{
              padding: '24px',
              position: 'relative',
              borderRadius: '28px',
              border: `1px solid ${lightPreset.color}`,
              boxShadow: `0 0 50px ${lightPreset.glow}`,
              transition: 'all 0.5s ease'
            }}
          >
            {/* Live Room Header Bar */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span 
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: lightPreset.color,
                    boxShadow: `0 0 10px ${lightPreset.color}`
                  }} 
                />
                <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                  Main Living Space — {lightPreset.name}
                </span>
              </div>

              <div className="glass-pill" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                <Activity size={12} color="var(--success)" /> Live Simulation
              </div>
            </div>

            {/* Visual Room Frame */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '360px',
                marginBottom: '20px'
              }}
            >
              <img 
                src="/images/hero.jpg" 
                alt="Living Room View" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: lightPreset.id === 'night' ? 'brightness(0.3) contrast(1.2)' : 'brightness(1.1)'
                }}
              />

              {/* Ambient Glass Glow Overlay matching preset color */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: `radial-gradient(circle at 50% 40%, ${lightPreset.glow} 0%, transparent 80%)`,
                  mixBlendMode: 'screen',
                  pointerEvents: 'none',
                  transition: 'all 0.5s ease'
                }}
              />

              {/* Overlaid UI Status Tags */}
              <div 
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {/* Security Tag */}
                <div 
                  style={{
                    background: 'rgba(9, 12, 24, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    color: securityState === 'Disarmed' ? 'var(--warning)' : 'var(--success)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <ShieldCheck size={14} /> {securityState}
                </div>

                {/* Blinds Tag */}
                <div 
                  style={{
                    background: 'rgba(9, 12, 24, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sun size={14} color="var(--accent-primary)" /> Smart Blinds: {blindsPercent}%
                </div>
              </div>

              {/* Overlaid Music Playing Widget */}
              {isPlayingAudio && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(9, 12, 24, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '8px 14px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Music size={16} color="var(--accent-primary)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>Lumina Spatial Lofi</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Living Room Soundbar</div>
                  </div>

                  {/* Equalizer animation bars */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '14px', marginLeft: '6px' }}>
                    <span style={{ width: '3px', height: '12px', background: 'var(--accent-primary)', borderRadius: '2px', animation: 'eq 0.6s infinite alternate' }} />
                    <span style={{ width: '3px', height: '8px', background: 'var(--accent-primary)', borderRadius: '2px', animation: 'eq 0.8s infinite alternate 0.2s' }} />
                    <span style={{ width: '3px', height: '14px', background: 'var(--accent-primary)', borderRadius: '2px', animation: 'eq 0.5s infinite alternate 0.4s' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Room Telemetry Statistics Bar */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                textAlign: 'center'
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Power Draw</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{calculatePowerWatts()} W</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Indoor AQI</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--success)' }}>12 Clean</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Humidity</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>45%</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Comfort</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>98/100</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Room Control Console */}
          <div 
            className="glass-panel"
            style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={20} color="var(--accent-primary)" /> Control Deck
            </h3>

            {/* 1. Ambient Lighting Moods */}
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                1. Ambient Lighting Mood Preset
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {lightPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setLightPreset(preset)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '12px',
                      background: lightPreset.id === preset.id ? preset.glow : 'rgba(255, 255, 255, 0.05)',
                      border: lightPreset.id === preset.id ? `1px solid ${preset.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                      color: lightPreset.id === preset.id ? '#fff' : 'var(--text-muted)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: preset.color }} />
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. HVAC Climate Dial Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  2. HVAC Climate Control
                </label>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  {temperature}°F {temperature < 70 ? '(Heating)' : temperature > 73 ? '(Cooling)' : '(Optimal)'}
                </span>
              </div>
              <input 
                type="range" min="64" max="78" 
                value={temperature} 
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="glass-range"
              />
            </div>

            {/* 3. Security Perimeter Selector */}
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                3. AI Security Armed Mode
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['Disarmed', 'Home Guard', 'Away Shield'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSecurityState(mode)}
                    style={{
                      padding: '10px',
                      borderRadius: '10px',
                      background: securityState === mode ? 'rgba(var(--accent-rgb), 0.25)' : 'rgba(255, 255, 255, 0.04)',
                      border: securityState === mode ? '1px solid var(--accent-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: securityState === mode ? '#fff' : 'var(--text-muted)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Smart Blinds Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  4. Motorized Glass Shades
                </label>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{blindsPercent}% Open</span>
              </div>
              <input 
                type="range" min="0" max="100" 
                value={blindsPercent} 
                onChange={(e) => setBlindsPercent(parseInt(e.target.value))}
                className="glass-range"
              />
            </div>

            {/* 5. Spatial Audio Audio Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', display: 'block' }}>Spatial Audio Surround</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Multi-room acoustic synchronization</span>
              </div>
              <button 
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="glass-pill"
                style={{ background: isPlayingAudio ? 'rgba(var(--accent-rgb), 0.25)' : 'transparent', color: isPlayingAudio ? '#fff' : 'var(--text-muted)' }}
              >
                {isPlayingAudio ? <Pause size={14} /> : <Play size={14} />} {isPlayingAudio ? 'Pause' : 'Play'}
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes eq {
          0% { height: 4px; }
          100% { height: 14px; }
        }
        @media (min-width: 992px) {
          .simulator-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  );
}
