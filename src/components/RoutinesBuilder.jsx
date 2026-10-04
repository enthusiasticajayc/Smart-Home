import React, { useState } from 'react';
import { 
  Sun, 
  Film, 
  Leaf, 
  Moon, 
  Play, 
  Plus, 
  Check, 
  Clock, 
  Sliders, 
  Sparkles,
  Zap
} from 'lucide-react';
import { PRESET_ROUTINES } from '../data/smartHomeData';

export default function RoutinesBuilder() {
  const [routines, setRoutines] = useState(PRESET_ROUTINES);
  const [activeToast, setActiveToast] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // New Routine Form State
  const [newRoutineName, setNewRoutineName] = useState('');
  const [newRoutineTrigger, setNewRoutineTrigger] = useState('On Demand');
  const [newRoutineActions, setNewRoutineActions] = useState('');

  const iconMap = {
    Sun: <Sun size={20} color="var(--warning)" />,
    Film: <Film size={20} color="var(--accent-primary)" />,
    Leaf: <Leaf size={20} color="var(--success)" />,
    Moon: <Moon size={20} color="var(--accent-secondary)" />
  };

  // Test executing routine animation toast
  const handleTestRoutine = (routine) => {
    setActiveToast(`Executing "${routine.name}" scene — ${routine.actions.length} glass triggers executed.`);
    setTimeout(() => setActiveToast(null), 4000);
  };

  const handleAddCustomRoutine = (e) => {
    e.preventDefault();
    if (!newRoutineName.trim()) return;

    const actionList = newRoutineActions
      .split('\n')
      .map(a => a.trim())
      .filter(a => a.length > 0);

    const created = {
      id: `routine-custom-${Date.now()}`,
      name: newRoutineName,
      icon: 'Sun',
      time: newRoutineTrigger,
      actions: actionList.length > 0 ? actionList : ['Adjust ambient glass lighting', 'Optimize room temperature']
    };

    setRoutines([...routines, created]);
    setNewRoutineName('');
    setNewRoutineActions('');
    setShowCreateForm(false);
    setActiveToast(`Custom routine "${created.name}" saved to Lumina Glass OS!`);
    setTimeout(() => setActiveToast(null), 4000);
  };

  return (
    <section id="routines" style={{ padding: '80px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px' }}>
          <div className="section-tag">
            <Zap size={14} /> AUTONOMOUS SCENE ENGINE
          </div>
          <h2 className="gradient-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Smart Routines & Automations
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Program your home to respond to your lifestyle. Trigger multiple smart devices simultaneously with a single tap or voice gesture.
          </p>
        </div>

        {/* Live Execution Toast Notification */}
        {activeToast && (
          <div 
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 300,
              background: 'rgba(9, 12, 24, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--accent-primary)',
              boxShadow: '0 0 30px var(--accent-glow)',
              padding: '16px 24px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 600,
              animation: 'slideUp 0.3s ease'
            }}
          >
            <Sparkles size={20} color="var(--accent-primary)" />
            {activeToast}
          </div>
        )}

        {/* Routines Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {routines.map((routine) => (
            <div 
              key={routine.id}
              className="glass-card"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {iconMap[routine.icon] || <Sun size={20} color="var(--accent-primary)" />}
                  </div>

                  <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    <Clock size={12} /> {routine.time}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
                  {routine.name}
                </h3>

                {/* Actions List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {routine.actions.map((act, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                      <Check size={14} color="var(--success)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleTestRoutine(routine)}
                className="btn-glass-secondary"
                style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}
              >
                <Play size={14} fill="var(--accent-primary)" color="var(--accent-primary)" /> Test Scene
              </button>
            </div>
          ))}
        </div>

        {/* Custom Routine Builder Trigger */}
        <div style={{ textAlign: 'center' }}>
          {!showCreateForm ? (
            <button 
              onClick={() => setShowCreateForm(true)}
              className="btn-glass-primary"
              style={{ padding: '14px 32px' }}
            >
              <Plus size={18} /> Create Custom Automation Scene
            </button>
          ) : (
            <form 
              onSubmit={handleAddCustomRoutine}
              className="glass-panel"
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '32px',
                borderRadius: '24px',
                textAlign: 'left'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                Build Custom Glass Automation
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Scene Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Focus Work Mode, Party Glow"
                  value={newRoutineName}
                  onChange={(e) => setNewRoutineName(e.target.value)}
                  className="glass-input"
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Trigger Condition
                </label>
                <select 
                  value={newRoutineTrigger}
                  onChange={(e) => setNewRoutineTrigger(e.target.value)}
                  className="glass-input"
                >
                  <option value="On Demand" style={{ background: '#0e1222' }}>On Demand (Tap / Voice)</option>
                  <option value="06:30 AM" style={{ background: '#0e1222' }}>Time: 06:30 AM</option>
                  <option value="10:00 PM" style={{ background: '#0e1222' }}>Time: 10:00 PM</option>
                  <option value="When Leaving Home" style={{ background: '#0e1222' }}>Geofence: Leaving Home Radius</option>
                  <option value="Motion Detected" style={{ background: '#0e1222' }}>Sensor: Motion Detected</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Automated Actions (One per line)
                </label>
                <textarea 
                  rows={3}
                  placeholder="Lock front biometric door&#10;Set living room lights to 20% Amber&#10;Set HVAC thermostat to 71°F"
                  value={newRoutineActions}
                  onChange={(e) => setNewRoutineActions(e.target.value)}
                  className="glass-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="submit" className="btn-glass-primary" style={{ flex: 1 }}>
                  Save Custom Scene
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowCreateForm(false)} 
                  className="btn-glass-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
