import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Advantage from './components/Advantage';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectBrief from './components/ProjectBrief';

// Import our two new deep-dive pages
import CaseStudyView from './components/CaseStudyView';
import JournalArticle from './components/JournalArticle';

// We extract the main landing page into its own component for clean routing
const LandingPage = () => (
  <main className="min-h-screen font-sans bg-[#09101A]">
    {/* Use an anchor link to scroll to the Contact section for standard inquiries */}
    <Navbar onStartProject={() => window.location.href = '/initiate'} />
    <Hero onStartProject={() => window.location.href = '/initiate'} />
    
    {/* Add IDs here so the Navbar smooth scrolling works */}
    <div id="capabilities"><Capabilities /></div>
    <div id="case-studies"><CaseStudies /></div>
    <div id="process"><Process /></div>
    <Advantage />
    <div id="insights"><Insights /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </main>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Discovery Portal */}
        <Route path="/initiate" element={<ProjectBrief onBack={() => window.location.href = '/'} />} />
        
        {/* Dynamic Deep-Dive Pages */}
        <Route path="/case-study/:id" element={<CaseStudyView />} />
        <Route path="/journal/:id" element={<JournalArticle />} />
      </Routes>
    </Router>
  );
}

export default App;