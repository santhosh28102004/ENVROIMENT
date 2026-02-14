import React from 'react';
import { useEngagement } from '../context/EngagementContext';
import { Trophy, Star, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { ecoScore, completedChallenges, badges } = useEngagement();

  const level = Math.floor(ecoScore / 100) + 1;
  const progress = ecoScore % 100;

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 style={{ marginBottom: '2rem' }}>My Eco Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
            <Trophy size={32} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '2rem' }}>{ecoScore}</h3>
            <p style={{ margin: 0, color: 'var(--text-light)' }}>Total Eco Points</p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
            <Target size={32} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '2rem' }}>{completedChallenges.length}</h3>
            <p style={{ margin: 0, color: 'var(--text-light)' }}>Challenges Done</p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'var(--accent)', padding: '1rem', borderRadius: '50%', color: 'var(--dark)' }}>
            <Zap size={32} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '2rem' }}>Lvl {level}</h3>
            <div style={{ width: '100px', height: '8px', background: '#e0e0e0', borderRadius: '4px', marginTop: '5px' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Star color="var(--accent)" fill="var(--accent)" /> Badges Earned
      </h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {badges.map((badge, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <span>Badge:</span> {badge}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '16px', textAlign: 'center' }}>
        <h3>Keep going!</h3>
        <p>Complete more challenges to unlock new badges.</p>
        <Link to="/challenges" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Find Challenges</Link>
      </div>
    </div>
  );
};

export default Dashboard;
