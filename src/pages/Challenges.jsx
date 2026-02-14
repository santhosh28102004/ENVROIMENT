import React from 'react';
import { environmentalTopics } from '../data';
import { useEngagement } from '../context/EngagementContext';
import { CheckCircle, Circle, Trophy } from 'lucide-react';

const Challenges = () => {
    const { completedChallenges, completeChallenge } = useEngagement();

    // Aggregate all challenges
    const allChallenges = environmentalTopics.flatMap(topic =>
        (topic.challenges || []).map(c => ({ ...c, topic: topic.title }))
    );

    const handleAccept = (id, points) => {
        const success = completeChallenge(id, points);
        if (success) {
            alert(`Challenge Completed! You earned ${points} points!`);
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Environmental Challenges</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {allChallenges.length === 0 && (
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3>No challenges available yet</h3>
                        <p>Check back soon for new community challenges.</p>
                    </div>
                )}
                {allChallenges.map((challenge) => {
                    const isCompleted = completedChallenges.includes(challenge.id);
                    return (
                        <div key={challenge.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', borderLeft: isCompleted ? '5px solid var(--primary)' : '5px solid var(--text-light)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '1px' }}>{challenge.topic}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                                    <Trophy size={16} /> {challenge.points} pts
                                </div>
                            </div>
                            <h3 style={{ margin: '1rem 0' }}>{challenge.title}</h3>
                            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                                <button
                                    onClick={() => handleAccept(challenge.id, challenge.points)}
                                    disabled={isCompleted}
                                    className="btn-primary"
                                    style={{
                                        width: '100%',
                                        background: isCompleted ? 'var(--light)' : 'var(--primary)',
                                        color: isCompleted ? 'var(--text-light)' : 'white',
                                        cursor: isCompleted ? 'default' : 'pointer'
                                    }}
                                >
                                    {isCompleted ? (
                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><CheckCircle size={18} /> Completed</span>
                                    ) : (
                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><Circle size={18} /> Accept Challenge</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Challenges;
