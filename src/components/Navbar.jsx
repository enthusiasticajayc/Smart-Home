import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Sliders, 
  Calculator, 
  HelpCircle, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles,
  Sun,
  Moon,
  Palette
} from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, currentTheme, onChangeTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4' },
    { id: 'amber', name: 'Warm Amber', color: '#f59e0b' },
    { id: 'emerald', name: 'Eco Emerald', color: '#10b981' },
    { id: 'purple', name: 'Neon Purple', color: '#a855f7' }
  ];

  const navLinks = [
    { name: 'Devices', href: '#devices' },
    { name: 'Live Room', href: '#simulator' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits & ROI', href: '#benefits' },
    { name: 'Routines', href: '#routines' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(9, 12, 24, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px var(--accent-glow)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <Home size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.5px', color: '#fff' }}>
                LUMINA
              </span>
              <span className="glass-pill" style={{ padding: '2px 6px', fontSize: '0.65rem', height: 'auto', background: 'rgba(var(--accent-rgb), 0.2)' }}>
                GLASS OS
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px', display: 'block' }}>
              SMART ECOSYSTEM
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', mdDisplay: 'flex' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '28px', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Theme Accent Picker */}
          <div style={{ position: 'relative' }}>
            <button 
              className="glass-pill"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              title="Change Ambient Glow Accent"
              style={{ padding: '8px 12px' }}
            >
              <Palette size={16} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.8rem', display: 'none', smDisplay: 'inline' }}>Theme</span>
            </button>

            {themeDropdownOpen && (
              <div 
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '180px',
                  padding: '8px',
                  zIndex: 110,
                  borderRadius: '16px'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '6px 10px', textTransform: 'uppercase', fontWeight: 700 }}>
                  Select Glow Accent
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onChangeTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      background: currentTheme === t.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '0.85rem'
                    }}
                  >
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color, display: 'inline-block' }} />
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart & System Package Drawer Trigger */}
          <button 
            className="btn-glass-secondary"
            onClick={onOpenCart}
            style={{ padding: '10px 18px', position: 'relative' }}
          >
            <ShoppingBag size={18} color="var(--accent-primary)" />
            <span style={{ display: 'none', smDisplay: 'inline' }}>My System</span>
            {cartCount > 0 && (
              <span 
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  background: 'var(--accent-primary)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px var(--accent-glow)'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="glass-pill"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: '8px 12px', display: 'flex', smDisplay: 'none' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileMenuOpen && (
        <div 
          className="glass-panel"
          style={{
            margin: '12px 24px',
            padding: '20px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
