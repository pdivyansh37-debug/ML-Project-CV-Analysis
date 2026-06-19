import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiCpu } from 'react-icons/fi';

// Pages
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import DashboardPage from './pages/DashboardPage';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      let url = searchTerm.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank');
      setSearchTerm('');
    }
  };

  return (
    <nav className="navbar relative z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-600">
            <FiCpu className="text-white" size={18} />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Tony<span className="text-blue-600">CV</span>
          </span>
        </Link>

        {/* Zety Inspired Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Tools</Link>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">Resume</span>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">CV</span>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">Cover Letter</span>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">Career Blog</span>
          <span className="hover:text-blue-600 transition-colors cursor-pointer">About</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center relative max-w-xs w-full mr-2">
            <FiSearch className="absolute left-3 text-slate-400" size={14} />
            <input
              type="text"
              className="bg-slate-50 border border-slate-200 pl-9 pr-4 py-1.5 text-xs rounded-full w-full text-slate-800 focus:outline-none focus:border-blue-500"
              placeholder="Search CV resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
          <Link to="/analyze" className="text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 transition-colors px-4 py-2.5 rounded-full shadow-sm">
            My Account
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      {/* Animated Background */}
      <div className="bg-animated" />

      {/* Navbar always visible */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-8 px-6 text-center mt-auto">
        <p className="text-slate-500 text-sm">
          Built with React, FastAPI & scikit-learn • <span className="text-blue-600 font-semibold">TonyCV</span> AI Engine
        </p>
      </footer>
    </Router>
  );
}

export default App;
