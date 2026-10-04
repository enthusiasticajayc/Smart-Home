import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  ShieldCheck,
  Search
} from 'lucide-react';
import { REVIEWS, FAQS } from '../data/smartHomeData';

export default function TestimonialsFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    f => f.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
         f.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="faq" style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Customer Reviews Section */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <MessageSquare size={14} /> HOMEOWNER REVIEWS
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Trusted by Modern Homeowners
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            See why architects, engineers, and luxury homeowners upgrade to Lumina Glass OS.
          </p>
        </div>

        {/* Reviews Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '80px'
          }}
        >
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id} 
              className="glass-card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{rev.text}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{rev.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rev.role} — {rev.location}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
          <div className="section-tag">
            <HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '16px' }}>
            Everything You Need to Know
          </h2>
        </div>

        {/* FAQ Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto 32px', position: 'relative' }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search questions (e.g., Matter, subscriptions, installation)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="glass-input"
            style={{ paddingLeft: '46px' }}
          />
        </div>

        {/* FAQ List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div 
                key={index}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  border: isOpen ? '1px solid var(--accent-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--accent-primary)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 24px 24px 24px',
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '16px'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
