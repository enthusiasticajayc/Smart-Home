import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  Sliders, 
  Check, 
  X,
  Sparkles,
  Lock,
  Wifi
} from 'lucide-react';
import { SMART_FEATURES } from '../data/smartHomeData';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('lumina'); // lumina vs legacy

  const iconMap = {
    Layers: <Layers size={24} color="var(--accent-primary)" />,
    Cpu: <Cpu size={24} color="var(--accent-primary)" />,
    Zap: <Zap size={24} color="var(--warning)" />,
    TrendingDown: <TrendingDown size={24} color="var(--success)" />,
    ShieldCheck: <ShieldCheck size={24} color="var(--success)" />,
    Sliders: <Sliders size={24} color="var(--accent-primary)" />
  };

  return (
    <section id="features" style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px' }}>
          <div className="section-tag">
            <Sparkles size={14} /> ARCHITECTURAL ADVANTAGES
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Built for Modern Luxury & Zero Friction
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Say goodbye to fragmented apps, cloud outages, and privacy leaks. Lumina combines hardware glass elegance with local neural processing.
          </p>
        </div>

        {/* 6 Features Glass Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '64px'
          }}
        >
          {SMART_FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.15)'
                  }}
                >
                  {iconMap[feature.icon]}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lumina vs Legacy Architecture Matrix */}
        <div className="glass-panel" style={{ padding: '40px', borderRadius: '28px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              Architecture Matrix: Lumina Glass vs Traditional Systems
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Why home architects and tech leaders choose Lumina Edge Glass OS.
            </p>
          </div>

          {/* Comparison Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <th style={{ padding: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', width: '35%' }}>FEATURE SPEC</th>
                  <th style={{ padding: '16px', color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 700, width: '35%' }}>
                    LUMINA GLASS OS
                  </th>
                  <th style={{ padding: '16px', color: 'var(--text-dim)', fontSize: '0.95rem', width: '30%' }}>
                    TRADITIONAL APPS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>Privacy & Data Storage</td>
                  <td style={{ padding: '16px', color: 'var(--success)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} /> 100% On-Device Edge Encryption
                  </td>
                  <td style={{ padding: '16px', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <X size={16} color="var(--danger)" /> Cloud Uploaded / Monetized
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>Response Latency</td>
                  <td style={{ padding: '16px', color: 'var(--success)', fontWeight: 700 }}>
                    &lt; 0.2s Local Thread Mesh
                  </td>
                  <td style={{ padding: '16px', color: 'var(--text-dim)' }}>
                    2.0s - 4.5s Cloud Hop Latency
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>Internet Outage Resilience</td>
                  <td style={{ padding: '16px', color: 'var(--success)', fontWeight: 700 }}>
                    100% Functionality Offline
                  </td>
                  <td style={{ padding: '16px', color: 'var(--danger)' }}>
                    Devices Fail During Outages
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>Cross-Brand Compatibility</td>
                  <td style={{ padding: '16px', color: 'var(--success)', fontWeight: 700 }}>
                    Universal Matter 1.3 Certified
                  </td>
                  <td style={{ padding: '16px', color: 'var(--text-dim)' }}>
                    Walled Garden Lock-in
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', color: '#fff', fontWeight: 600 }}>Monthly Subscription Fee</td>
                  <td style={{ padding: '16px', color: 'var(--success)', fontWeight: 700 }}>
                    $0 Required (Zero Subscriptions)
                  </td>
                  <td style={{ padding: '16px', color: 'var(--warning)' }}>
                    $15 - $45/mo Required
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
