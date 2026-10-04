import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  CheckCircle, 
  Sparkles, 
  Calendar, 
  User, 
  Mail, 
  Home
} from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    homeSqFt: '2400',
    preferredDate: ''
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const estAnnualSavings = Math.round(subtotal * 0.45);

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearCart();
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 250,
        background: 'rgba(5, 7, 15, 0.8)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100vh',
          borderRadius: '0',
          borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          padding: '0'
        }}
      >
        {/* Header */}
        <div 
          style={{
            padding: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>My Smart Home Package</h3>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          
          {submitted ? (
            /* Submission Success Glass View */
            <div style={{ textAlign: 'center', padding: '40px 12px' }}>
              <div 
                style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid var(--success)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
                }}
              >
                <CheckCircle size={36} color="var(--success)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                Quote Request Reserved!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you, <strong>{formData.name}</strong>. A Lumina Smart Home Systems Architect will contact you at <strong>{formData.email}</strong> within 2 hours with your custom installation design.
              </p>

              <div className="glass-card" style={{ padding: '20px', textAlign: 'left', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>SYSTEM SUMMARY</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{cartItems.length} Devices Included</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginTop: '4px' }}>
                  Est. Total: ${subtotal} | Est. Annual Savings: ${estAnnualSavings}/yr
                </div>
              </div>

              <button onClick={handleReset} className="btn-glass-primary" style={{ width: '100%' }}>
                Done & Return to Site
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart */
            <div style={{ textAlign: 'center', padding: '60px 12px', color: 'var(--text-muted)' }}>
              <ShoppingBag size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px' }}>Your System Package is Empty</h4>
              <p style={{ fontSize: '0.85rem' }}>Add smart thermostats, 4K AI cameras, or ambient lighting bulbs from the catalog.</p>
            </div>
          ) : (
            /* Items List & Quote Request Form */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Selected Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="glass-card"
                    style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }}
                    />

                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{item.name}</h4>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>${item.price}</div>
                    </div>

                    {/* Quantity Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.06)', padding: '4px 8px', borderRadius: '8px' }}>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Quote Request Form */}
              <form onSubmit={handleSubmitQuote} style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} color="var(--accent-primary)" /> Request Certified Installation Quote
                </h4>

                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-input"
                />

                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass-input"
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input 
                    type="text" 
                    placeholder="Home Sq Ft"
                    value={formData.homeSqFt}
                    onChange={(e) => setFormData({ ...formData, homeSqFt: e.target.value })}
                    className="glass-input"
                  />
                  <input 
                    type="date" 
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div style={{ marginTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Estimated Hardware Total:</span>
                    <span style={{ fontWeight: 800, color: '#fff' }}>${subtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--success)' }}>
                    <span>Estimated Annual Bill Reduction:</span>
                    <span style={{ fontWeight: 700 }}>~ ${estAnnualSavings}/yr</span>
                  </div>
                </div>

                <button type="submit" className="btn-glass-primary" style={{ width: '100%', marginTop: '12px', padding: '14px' }}>
                  Confirm Quote Reservation
                </button>
              </form>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
