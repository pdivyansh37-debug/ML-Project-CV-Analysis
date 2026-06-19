import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiFileText, FiArrowRight, FiCheck, FiDownload,
  FiEdit3, FiGlobe, FiAward, FiUser, FiBriefcase, FiBookOpen
} from 'react-icons/fi';

const CV_VS_RESUME = [
  { aspect: 'Length', cv: '2+ pages (full academic/career history)', resume: '1 page (tailored snapshot)' },
  { aspect: 'Purpose', cv: 'Academic, research, medical positions', resume: 'Industry / corporate jobs' },
  { aspect: 'Content', cv: 'Publications, grants, conferences', resume: 'Skills, achievements, impact' },
  { aspect: 'Regions', cv: 'UK, Europe, Middle East, Asia, Academia', resume: 'USA, Canada, tech industry' },
  { aspect: 'Updates', cv: 'Continuous — add everything', resume: 'Tailored per application' },
];

const CV_SECTIONS = [
  { icon: <FiUser size={20} />, title: 'Personal Profile', desc: 'Name, contact details, professional summary, and photo (optional).' },
  { icon: <FiBriefcase size={20} />, title: 'Work Experience', desc: 'Full chronological history of roles, responsibilities and achievements.' },
  { icon: <FiBookOpen size={20} />, title: 'Education', desc: 'Degrees, institutions, grades, and relevant modules or thesis topics.' },
  { icon: <FiAward size={20} />, title: 'Publications & Research', desc: 'Papers, journals, books, conference presentations, and grants.' },
  { icon: <FiGlobe size={20} />, title: 'Languages & Skills', desc: 'Technical skills, language proficiencies, and professional memberships.' },
  { icon: <FiEdit3 size={20} />, title: 'References', desc: 'Academic and professional referees with contact details.' },
];

export default function CVPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'What is a CV?', a: 'A Curriculum Vitae (CV) is a comprehensive document listing your full academic and professional history including publications, research, awards, and teaching. Unlike a resume, a CV grows over time and is typically 2+ pages.' },
    { q: 'When should I use a CV instead of a resume?', a: 'Use a CV when applying for academic, research, medical, or senior roles in the UK, Europe, Middle East, or Asia. US employers generally expect a resume unless the role is in academia or medicine.' },
    { q: 'How long should my CV be?', a: 'Unlike a resume (1 page), a CV can be 2–10+ pages depending on your career stage. Entry-level CVs are typically 2 pages; senior academics may have CVs exceeding 10 pages.' },
    { q: 'Should I include a photo on my CV?', a: 'This depends on the country. In Europe, Asia, and the Middle East, a professional headshot is common and expected. In the US and Canada, photos are generally avoided to prevent bias.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 py-20 px-6 text-white text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
            <FiFileText size={12} /> CV Builder &amp; Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Create a Professional CV<br />
            <span className="text-amber-400">That Opens Doors</span>
          </h1>
          <p className="text-indigo-100 text-lg max-w-xl mx-auto mb-8">
            Build a complete Curriculum Vitae for academic, research, or international job applications. Our guided tool ensures every section is perfectly structured.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/analyze')}
            className="px-10 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-sm uppercase rounded-full shadow-xl"
          >
            Build My CV Now <FiArrowRight className="inline ml-2" size={16} />
          </motion.button>
        </div>
      </div>

      {/* CV vs Resume */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">CV vs Resume: What's the Difference?</h2>
        <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Understanding when to use each document is crucial to your job search success.</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="py-3 px-5 text-left font-bold">Aspect</th>
                <th className="py-3 px-5 text-left font-bold text-indigo-300">CV</th>
                <th className="py-3 px-5 text-left font-bold text-amber-300">Resume</th>
              </tr>
            </thead>
            <tbody>
              {CV_VS_RESUME.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="py-3 px-5 font-semibold text-slate-700">{row.aspect}</td>
                  <td className="py-3 px-5 text-slate-600">{row.cv}</td>
                  <td className="py-3 px-5 text-slate-600">{row.resume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CV Sections */}
      <div className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">What to Include in Your CV</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CV_SECTIONS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50"
                >
                  {faq.q}
                  <span className="text-slate-400">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                      className="px-5 py-4 text-slate-500 text-sm leading-relaxed border-t border-slate-100 bg-slate-50"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Build Your CV?</h2>
        <p className="text-indigo-100 mb-8 max-w-md mx-auto">Use our AI-powered builder to create a professional CV in minutes. Get an ATS score instantly.</p>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/analyze')}
          className="px-10 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold uppercase rounded-full shadow-xl"
        >
          Build My CV <FiArrowRight className="inline ml-2" size={16} />
        </motion.button>
      </div>
    </div>
  );
}
