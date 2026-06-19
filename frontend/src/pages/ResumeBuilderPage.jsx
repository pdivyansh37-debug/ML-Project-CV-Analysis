import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiFileText, FiArrowRight, FiDownload, FiEdit3, FiCheck,
  FiStar, FiLayout, FiZap, FiArrowLeft
} from 'react-icons/fi';

const TEMPLATES = [
  {
    id: 'cascade',
    name: 'Cascade',
    desc: 'Two-column with bold sidebar',
    color: '#2563eb',
    preview: 'blue-sidebar',
  },
  {
    id: 'cubic',
    name: 'Cubic',
    desc: 'Modern header with grid body',
    color: '#10b981',
    preview: 'green-header',
  },
  {
    id: 'crisp',
    name: 'Crisp',
    desc: 'Clean single-column classic',
    color: '#6366f1',
    preview: 'classic-white',
  },
  {
    id: 'nexus',
    name: 'Nexus',
    desc: 'Dark accent with clean layout',
    color: '#f97316',
    preview: 'dark-accent',
  },
  {
    id: 'aria',
    name: 'Aria',
    desc: 'Minimal and ATS-optimised',
    color: '#06b6d4',
    preview: 'minimal',
  },
  {
    id: 'apex',
    name: 'Apex',
    desc: 'Bold executive layout',
    color: '#8b5cf6',
    preview: 'executive',
  },
];

const FEATURES = [
  { icon: <FiEdit3 size={22} />, title: 'Step-by-Step Wizard', desc: 'Our guided builder walks you through every section — no blank page anxiety.' },
  { icon: <FiLayout size={22} />, title: 'Live Preview', desc: 'See your resume update in real time as you type. WYSIWYG perfection.' },
  { icon: <FiZap size={22} />, title: 'AI Suggestions', desc: 'Get AI-powered bullet points, skill recommendations, and impact phrases.' },
  { icon: <FiStar size={22} />, title: 'ATS-Friendly', desc: 'All templates are tested against top ATS systems to maximise shortlisting.' },
  { icon: <FiDownload size={22} />, title: 'PDF Export', desc: 'Download your polished resume as a pixel-perfect PDF with one click.' },
  { icon: <FiCheck size={22} />, title: 'Instant Score', desc: 'Analyse your resume immediately after building to get your ATS score.' },
];

function TemplatePreview({ template }) {
  const colors = {
    'blue-sidebar': { sidebar: '#1e3a8a', accent: '#2563eb' },
    'green-header': { sidebar: '#065f46', accent: '#10b981' },
    'classic-white': { sidebar: '#f1f5f9', accent: '#6366f1' },
    'dark-accent': { sidebar: '#1e1b4b', accent: '#f97316' },
    'minimal': { sidebar: '#ecfeff', accent: '#06b6d4' },
    'executive': { sidebar: '#1f1235', accent: '#8b5cf6' },
  };
  const c = colors[template.preview] || colors['classic-white'];

  return (
    <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex"
      style={{ background: '#fff' }}>
      {template.preview !== 'classic-white' && template.preview !== 'minimal' ? (
        <>
          <div className="w-1/3 h-full p-2 space-y-1 flex flex-col" style={{ background: c.sidebar }}>
            <div className="w-8 h-8 rounded-full bg-white/20 mb-1" />
            <div className="h-1.5 w-3/4 rounded bg-white/30" />
            <div className="h-1 w-1/2 rounded bg-white/20" />
            <div className="h-px w-full bg-white/10 my-1" />
            {[70, 55, 80, 60].map((w, i) => (
              <div key={i} className="h-1 rounded bg-white/20" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex-1 p-3 space-y-2">
            <div className="h-1.5 w-4/5 rounded bg-slate-200" />
            <div className="h-1 w-3/5 rounded bg-slate-100" />
            <div className="h-px w-full my-1" style={{ background: c.accent + '40' }} />
            {[90, 75, 85, 65, 80].map((w, i) => (
              <div key={i} className="h-1 rounded bg-slate-100" style={{ width: `${w}%` }} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full p-4 space-y-2">
          <div className="h-2 w-1/2 rounded font-bold" style={{ background: c.accent }} />
          <div className="h-1 w-1/3 rounded bg-slate-200" />
          <div className="h-px w-full bg-slate-100 my-2" />
          {[90, 75, 85, 65, 80, 70].map((w, i) => (
            <div key={i} className="h-1 rounded bg-slate-100" style={{ width: `${w}%` }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResumeBuilderPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleUseTemplate = () => {
    navigate('/analyze', { state: { startMode: 'scratch' } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 py-20 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
            <FiFileText size={12} /> Resume Builder
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Build a Resume<br /><span className="text-amber-400">That Gets Hired</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
            Choose a professionally designed template and use our step-by-step AI-powered builder to create a job-winning resume in minutes.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={handleUseTemplate}
            className="px-10 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-sm uppercase rounded-full shadow-xl transition-all"
          >
            Start Building Free <FiArrowRight className="inline ml-2" size={16} />
          </motion.button>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
          Everything You Need to Stand Out
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Template Picker */}
      <div className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Choose Your Template</h2>
            <p className="text-slate-500">All templates are ATS-optimised and fully customisable</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATES.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ y: -4 }}
                onHoverStart={() => setHovered(t.id)}
                onHoverEnd={() => setHovered(null)}
                onClick={() => setSelected(t.id)}
                className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                  selected === t.id
                    ? 'border-blue-500 shadow-blue-100 shadow-xl'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <TemplatePreview template={t} />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.desc}</p>
                  </div>
                  {selected === t.id && (
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                      <FiCheck size={14} className="text-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={handleUseTemplate}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm uppercase rounded-full shadow-lg transition-all"
            >
              {selected ? `Use ${TEMPLATES.find(t => t.id === selected)?.name} Template` : 'Start Building Now'}
              <FiArrowRight className="inline ml-2" size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
