import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  Leaf, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import { SMART_BENEFITS } from '../data/smartHomeData';

export default function BenefitsCalculator() {
  const [homeSizeSqFt, setHomeSizeSqFt] = useState(2400);
  const [monthlyBill, setMonthlyBill] = useState(280);
  const [smartZones, setSmartZones] = useState(6);
  const [activeTab, setActiveTab] = useState(0);

  // ROI Calculator Math
  // Savings percentage scales between 28% and 42% depending on zones & sqft
  const savingsPercent = Math.min(42, 28 + Math.round((smartZones / 16) * 14));
  const monthlySavings = Math.round(monthlyBill * (savingsPercent / 100));
  const annualSavings = monthlySavings * 12;
  const carbonTonsSaved = (annualSavings * 0.0042).toFixed(1);
  const estimatedSystemCost = 450 + (smartZones * 180);
  const paybackMonths = (estimatedSystemCost / monthlySavings).toFixed(1);

  return (
    <section id="benefits" style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px' }}>
          <div className="section-tag">
            <Calculator size={14} /> QUANTIFIABLE VALUE & BENEFITS
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Energy & Cost Savings Calculator
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Calculate your personalized return on investment. See how much money, energy, and carbon emissions Lumina smart home automation shaves off every single month.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div 
          className="glass-panel"
          style={{
            padding: '40px',
            marginBottom: '64px',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              lgGridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center'
            }}
            className="calc-grid"
          >
            {/* Sliders Input Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SlidersIcon size={20} color="var(--accent-primary)" /> Input Your Home Details
              </h3>

              {/* Slider 1: Home Size */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Home Floor Area</label>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{homeSizeSqFt.toLocaleString()} sq ft</span>
                </div>
                <input 
                  type="range" min="800" max="6000" step="100"
                  value={homeSizeSqFt}
                  onChange={(e) => setHomeSizeSqFt(parseInt(e.target.value))}
                  className="glass-range"
                />
              </div>

              {/* Slider 2: Monthly Electric Bill */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Avg Monthly Electricity Bill</label>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>${monthlyBill} / mo</span>
                </div>
                <input 
                  type="range" min="50" max="800" step="10"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                  className="glass-range"
                />
              </div>

              {/* Slider 3: Smart HVAC & Lighting Zones */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Number of Automated Zones</label>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{smartZones} Zones</span>
                </div>
                <input 
                  type="range" min="2" max="16" step="1"
                  value={smartZones}
                  onChange={(e) => setSmartZones(parseInt(e.target.value))}
                  className="glass-range"
                />
              </div>
            </div>

            {/* Live Results Display Column */}
            <div 
              className="glass-card"
              style={{
                padding: '32px',
                background: 'rgba(9, 12, 24, 0.75)',
                border: '1px solid var(--accent-primary)',
                boxShadow: '0 0 35px var(--accent-glow)'
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '6px' }}>
                Your Estimated Savings Projection
              </div>

              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '4px' }}>
                ${annualSavings.toLocaleString()} <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>/ year</span>
              </div>
              <p style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px' }}>
                ↓ {savingsPercent}% reduction in HVAC & power grid costs
              </p>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <DollarSign size={18} color="var(--accent-primary)" style={{ marginBottom: '4px' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Monthly Savings</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>${monthlySavings}/mo</span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Leaf size={18} color="var(--success)" style={{ marginBottom: '4px' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Carbon Reduced</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--success)' }}>{carbonTonsSaved} Tons CO2</span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Clock size={18} color="var(--warning)" style={{ marginBottom: '4px' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>ROI Payback</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>~ {paybackMonths} Months</span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Zap size={18} color="var(--accent-primary)" style={{ marginBottom: '4px' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>System Est. Cost</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>${estimatedSystemCost}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Core Benefits Breakdown Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {SMART_BENEFITS.map((benefit, i) => (
            <div 
              key={i} 
              className="glass-card"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <span className="glass-pill" style={{ fontSize: '0.75rem', marginBottom: '14px' }}>
                  {benefit.category}
                </span>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {benefit.headline}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px' }}>
                  {benefit.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>
                  {benefit.statValue}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{benefit.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .calc-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SlidersIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}
