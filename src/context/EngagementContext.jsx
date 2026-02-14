import React, { createContext, useContext, useState, useEffect } from 'react';

const EngagementContext = createContext();

export const useEngagement = () => useContext(EngagementContext);

export const EngagementProvider = ({ children }) => {
    const [ecoScore, setEcoScore] = useState(() => {
        const saved = localStorage.getItem('ecoScore');
        return saved ? parseInt(saved, 10) : 0;
    });

    const [completedChallenges, setCompletedChallenges] = useState(() => {
        const saved = localStorage.getItem('completedChallenges');
        return saved ? JSON.parse(saved) : [];
    });

    const [badges, setBadges] = useState(() => {
        const saved = localStorage.getItem('badges');
        return saved ? JSON.parse(saved) : ['Beginner'];
    });

    useEffect(() => {
        localStorage.setItem('ecoScore', ecoScore);
        localStorage.setItem('completedChallenges', JSON.stringify(completedChallenges));
        localStorage.setItem('badges', JSON.stringify(badges));

        // Check for badges
        if (ecoScore > 200 && !badges.includes('Eco Warrior')) {
            setBadges(prev => [...prev, 'Eco Warrior']);
        }
        if (ecoScore > 500 && !badges.includes('Green Champion')) {
            setBadges(prev => [...prev, 'Green Champion']);
        }
    }, [ecoScore, completedChallenges, badges]);

    const addScore = (points) => {
        setEcoScore(prev => prev + points);
    };

    const completeChallenge = (challengeId, points) => {
        if (!completedChallenges.includes(challengeId)) {
            setCompletedChallenges(prev => [...prev, challengeId]);
            addScore(points);
            return true;
        }
        return false;
    };

    return (
        <EngagementContext.Provider value={{
            ecoScore,
            addScore,
            completedChallenges,
            completeChallenge,
            badges
        }}>
            {children}
        </EngagementContext.Provider>
    );
};
