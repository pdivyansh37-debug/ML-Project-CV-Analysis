import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import InputForm from '../components/InputForm';
import { FiUploadCloud, FiEdit3, FiArrowRight } from 'react-icons/fi';

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.') || window.location.hostname.startsWith('172.') || window.location.hostname.startsWith('10.');
const API_BASE_URL = isLocal ? `http://${window.location.hostname}:8000` : 'https://tonycv-backend.onrender.com';

const FALLBACK_COMPANIES = [
  "Google", "Amazon", "Microsoft", "Meta", "Apple",
  "Netflix", "Infosys", "TCS", "Oracle", "IBM", "Adobe"
];

export default function Analyze() {
  const navigate = useNavigate();
  const [step, setStep] = useState('option_select'); // 'option_select' or 'form_input'
  const [selectedOption, setSelectedOption] = useState('upload'); // 'upload' or 'scratch'
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [companies, setCompanies] = useState(FALLBACK_COMPANIES);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/companies`)
      .then(res => {
        if (res.data.companies && res.data.companies.length > 0) {
          setCompanies(res.data.companies);
        }
      })
      .catch(() => console.warn('Could not fetch companies from API, using fallback list.'));
  }, []);

  const handleAnalyze = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('cv_file', data.cv_file);
      formData.append('cgpa', data.cgpa);
      formData.append('target_company', data.target_company);
      if (data.github_url) {
        formData.append('github_url', data.github_url);
      }
      formData.append('experience_level', data.experience_level || 'fresher');

      const response = await axios.post(`${API_BASE_URL}/analyze`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      // Navigate to dashboard and pass the result data
      navigate('/dashboard', { state: { result: response.data } });
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred while connecting to the AI model.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = () => {
    if (selectedOption === 'upload') {
      setStep('form_input');
    } else {
      // In a real Zety app, this might go to a resume builder.
      // We just go to the form anyway for now, or you could navigate to a builder route.
      setStep('form_input');
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'option_select' && (
            <motion.div
              key="option_select"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-center mt-12"
            >
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Are you uploading an existing resume?</h1>
              <p className="text-slate-500 mb-12">Just review, edit, and update it with new information</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                {/* Upload Option */}
                <div 
                  onClick={() => setSelectedOption('upload')}
                  className={`relative cursor-pointer rounded-xl p-8 border-2 transition-all duration-200 bg-white shadow-sm flex flex-col items-center justify-center text-center h-64
                    ${selectedOption === 'upload' ? 'border-blue-600 ring-4 ring-blue-500/20' : 'border-slate-200 hover:border-blue-400'}`}
                >
                  {selectedOption === 'upload' && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-widest">
                      Recommended
                    </div>
                  )}
                  <div className={`p-4 rounded-full mb-4 ${selectedOption === 'upload' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                    <FiUploadCloud size={40} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${selectedOption === 'upload' ? 'text-blue-700' : 'text-slate-700'}`}>Yes, upload from my resume</h3>
                  <p className="text-slate-500 text-sm">We'll give you expert guidance to fill out your info and enhance your CV.</p>
                </div>

                {/* Scratch Option */}
                <div 
                  onClick={() => setSelectedOption('scratch')}
                  className={`relative cursor-pointer rounded-xl p-8 border-2 transition-all duration-200 bg-white shadow-sm flex flex-col items-center justify-center text-center h-64
                    ${selectedOption === 'scratch' ? 'border-blue-600 ring-4 ring-blue-500/20' : 'border-slate-200 hover:border-blue-400'}`}
                >
                  <div className={`p-4 rounded-full mb-4 ${selectedOption === 'scratch' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                    <FiEdit3 size={40} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${selectedOption === 'scratch' ? 'text-blue-700' : 'text-slate-700'}`}>No, create from scratch</h3>
                  <p className="text-slate-500 text-sm">We'll guide you through the process step-by-step to build a perfect resume.</p>
                </div>
              </div>

              <button 
                onClick={handleNextStep}
                className="btn-primary px-12 py-4 text-lg font-bold shadow-lg flex items-center justify-center gap-2 mx-auto"
                style={{ background: 'linear-gradient(135deg, #ff9e00, #ff6f00)' }}
              >
                Next <FiArrowRight />
              </button>
            </motion.div>
          )}

          {step === 'form_input' && (
            <motion.div
              key="form_input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">
                  {selectedOption === 'upload' ? 'Upload & Analyze' : 'Start Fresh & Analyze'}
                </h1>
                <p className="text-slate-500">Provide the required details below to generate your report.</p>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="text-red-500 text-lg">⚠</div>
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                  </div>
                </motion.div>
              )}

              <InputForm onAnalyze={handleAnalyze} isLoading={isLoading} companies={companies} />

              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center gap-4 mt-12"
                >
                  <div className="spinner" />
                  <p className="text-blue-600 font-bold tracking-widest uppercase text-xs">Processing NLP Vectors...</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
