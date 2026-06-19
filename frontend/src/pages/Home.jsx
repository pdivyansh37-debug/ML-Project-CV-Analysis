import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiFileText, FiCheck, FiArrowRight, FiCheckCircle, FiEdit3, 
  FiLayout, FiMessageSquare, FiSliders, FiHelpCircle, FiSearch,
  FiBriefcase, FiZap, FiCpu, FiTrendingUp
} from 'react-icons/fi';

export default function Home() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <FiFileText className="text-blue-600" size={24} />,
      title: "Optimal length",
      desc: "Most employers prefer a resume that fits on one page. Our ATS checker gives you tips to help you highlight your top strengths clearly and concisely."
    },
    {
      icon: <FiEdit3 className="text-blue-600" size={24} />,
      title: "Fix typos",
      desc: "A polished resume is free of grammar and spelling mistakes. Our resume analyzer catches errors to help you submit a flawless application."
    },
    {
      icon: <FiCheck className="text-blue-600" size={24} />,
      title: "Comprehensiveness",
      desc: "Make sure your resume checks all the right boxes. Our AI tool helps you include the key details employers want to see."
    },
    {
      icon: <FiSliders className="text-blue-600" size={24} />,
      title: "Measurable results",
      desc: "Stand out with results that show real impact. Our scanner helps you add clear, measurable achievements."
    },
    {
      icon: <FiZap className="text-blue-600" size={24} />,
      title: "Word choice",
      desc: "Use powerful action verbs to show your value. The AI resume checker suggests active language that gets noticed."
    },
    {
      icon: <FiLayout className="text-blue-600" size={24} />,
      title: "Formatting",
      desc: "Clean, consistent formatting helps your resume pass ATS and impress employers. Our checker makes sure your layout is perfect."
    },
    {
      icon: <FiMessageSquare className="text-blue-600" size={24} />,
      title: "Strong summary",
      desc: "Keep hiring managers reading with a compelling resume summary. Get expert tips to make your introduction count."
    },
    {
      icon: <FiCpu className="text-blue-600" size={24} />,
      title: "Customization",
      desc: "Select your job title and get a list of the most important skills you should include in your resume. Enrich your resume with the right keywords."
    },
    {
      icon: <FiHelpCircle className="text-blue-600" size={24} />,
      title: "Clear contact Info",
      desc: "Don't miss out on interviews because of missing or hard-to-find details. Our checker ensures your contact info is complete and easy to spot."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Banner Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 px-6 sm:px-12 lg:px-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Resume Templates &gt; Resume Checker</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              ATS Resume Checker:<br />
              Score Your Resume Online
            </h1>
            <p className="text-base sm:text-lg text-blue-100 max-w-xl leading-relaxed">
              Boost your chances of landing the job with our ATS Resume Checker. Scan your resume from any device, get a personalized score, and receive actionable suggestions.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button 
                onClick={() => navigate('/analyze')}
                className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 text-sm font-extrabold uppercase rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-100"
              >
                Check Your Resume
              </button>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
                <span>Excellent</span>
                <span className="flex gap-0.5 text-emerald-400">★★★★★</span>
                <span>on Trustpilot / BERT AI</span>
              </div>
            </div>
          </div>

          {/* Right Mock CV Illustration Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 w-full max-w-sm text-slate-800 relative z-10">
              {/* Fake Resume Details */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center">RH</div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Robert Hahn</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Marketing Manager (Social Media)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-3/4 bg-slate-100 rounded" />
                <div className="h-2 w-5/6 bg-slate-100 rounded" />
                <div className="h-2 w-2/3 bg-slate-100 rounded" />
              </div>
              
              {/* Overlay Interactive Elements */}
              <div className="absolute -left-12 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 w-32 justify-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="68 100" />
                  </svg>
                  <span className="absolute text-xs font-black text-slate-900">68</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-900">68%</p>
                  <span className="text-[8px] font-bold text-emerald-500 uppercase">Good</span>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 space-y-1.5 z-20">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 text-[10px] font-bold text-red-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> ! Skills
                </div>
                <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 text-[10px] font-bold text-red-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> ! Education
                </div>
                <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 text-[10px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> ✓ Work History
                </div>
                <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 text-[10px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> ✓ Summary
                </div>
              </div>
            </div>
            {/* Background Blob Decor */}
            <div className="absolute right-4 bottom-4 w-48 h-48 bg-blue-500/20 rounded-full filter blur-xl z-0" />
          </div>
        </div>
      </div>

      {/* Customer Bar */}
      <div className="bg-slate-900 text-slate-400 py-6 text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs font-semibold uppercase tracking-widest">
          <span>Hired by top companies:</span>
          <span className="text-white hover:text-blue-400 transition-colors">Amazon</span>
          <span className="text-white hover:text-blue-400 transition-colors">Walmart</span>
          <span className="text-white hover:text-blue-400 transition-colors">AT&T</span>
          <span className="text-white hover:text-blue-400 transition-colors">FedEx</span>
          <span className="text-white hover:text-blue-400 transition-colors">Microsoft</span>
        </div>
      </div>

      {/* 2. Benefits Grid Section */}
      <div className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why You Should Use Our Resume Checker
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our automated checker reads details accurately and compares metrics against thousands of recruiter standards instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CTA Feedback Banner */}
      <div className="py-12 px-6 sm:px-12 lg:px-24 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl border border-dashed border-blue-200 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Get Instant Resume Feedback</h3>
          <button 
            onClick={() => navigate('/analyze')}
            className="px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-xs uppercase rounded-full shadow transition-all"
          >
            Scan Your Resume Now
          </button>
          <p className="text-xs text-slate-500">
            Don't have a resume yet? Use our AI Resume Builder to create a professional, ATS-friendly resume in minutes.
          </p>
        </div>
      </div>

      {/* 4. How It Works Section */}
      <div className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">How Our Resume Checker Works</h2>
            <p className="text-slate-500 text-sm">Four simple steps to polish your resume and impress employers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "1", title: "Upload your resume", text: "Upload your resume or create a new one and check its score in our dashboard." },
              { num: "2", title: "Get your score", text: "Read your free resume review report and follow the tips to polish your resume." },
              { num: "3", title: "Apply changes", text: "Click 'Fix My Resume' to instantly optimize your resume or fix the errors manually." },
              { num: "4", title: "Download and send", text: "Select 'Done' when finished and download your flawless resume in your desired format." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 font-black flex items-center justify-center shrink-0">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button 
              onClick={() => navigate('/analyze')}
              className="px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-xs uppercase rounded-full shadow transition-all"
            >
              Optimize Your Resume Now
            </button>
          </div>
        </div>
      </div>

      {/* 5. What You Get Section */}
      <div className="py-20 px-6 sm:px-12 lg:px-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">What You Get With TonyCV's Resume Checker</h2>
            <p className="text-slate-500 text-sm">Our resume checker comes with a resume builder that has everything you need to create a job-winning resume in just a few clicks.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col items-center max-w-md w-full relative">
                {/* Simulated Paper CV */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold">RH</div>
                    <div className="text-left">
                      <h5 className="text-xs font-bold text-slate-800">Robert Hahn</h5>
                      <span className="text-[8px] text-slate-400 font-semibold uppercase">Marketing Manager</span>
                    </div>
                  </div>
                  <div className="space-y-2 border-b border-slate-100 pb-4 mb-4">
                    <div className="h-1.5 w-full bg-slate-100 rounded" />
                    <div className="h-1.5 w-5/6 bg-slate-100 rounded" />
                  </div>
                  
                  {/* Gauge indicator inside CV mockup */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="48 100" />
                      </svg>
                      <span className="absolute text-[10px] font-black text-slate-900">48</span>
                    </div>
                    <div className="text-left text-[10px]">
                      <p className="font-bold text-slate-800">48 Average</p>
                      <p className="text-[8px] text-red-500 font-bold uppercase mt-0.5">! 4 suggested improvements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">ATS-focused check</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Run your resume through our ATS resume checker to get a score and step-by-step tips to help you pass the ATS and get noticed by employers. Our tool scans for keywords, formatting issues, and other ATS blockers so you can improve your chances of landing an interview.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
