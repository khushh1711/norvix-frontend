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
import CaseStudyView from './components/CaseStudyView';
import JournalIndex from './components/JournalIndex'; // New Index Page
import JournalArticle from './components/JournalArticle';

const LandingPage = () => (
  <main className="min-h-screen font-sans bg-[#09101A]">
    <Navbar onStartProject={() => window.location.href = '/initiate'} />
    <Hero onStartProject={() => window.location.href = '/initiate'} />
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/initiate" element={<ProjectBrief onBack={() => window.location.href = '/'} />} />
        <Route path="/case-study/:id" element={<CaseStudyView />} />
        {/* Dynamic Journal Paths */}
        <Route path="/journal" element={<JournalIndex />} />
        <Route path="/journal/:id" element={<JournalArticle />} />
      </Routes>
    </Router>
  );
}

export default App;