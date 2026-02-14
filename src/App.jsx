import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EngagementProvider } from './context/EngagementContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopicsOverview from './pages/TopicsOverview';
import TopicDetail from './pages/TopicDetail';
import Challenges from './pages/Challenges';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery';
import AwarenessTips from './pages/AwarenessTips';
import Articles from './pages/Articles';
import AboutContact from './pages/AboutContact';

function App() {
  return (
    <EngagementProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<TopicsOverview />} />
            <Route path="/topics/:id" element={<TopicDetail />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tips" element={<AwarenessTips />} />
            <Route path="/about" element={<AboutContact />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:topicId" element={<Quiz />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </EngagementProvider>
  );
}

export default App;
