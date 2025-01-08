import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-white mb-6">Your Founders Eden Guide</h1>
      <p className="text-xl text-white mb-12">
        Meet the founders, developers, and designers you need to know.
      </p>
      <button
        onClick={() => navigate('/signup')}
        className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200"
      >
        Sign Up
      </button>
    </div>
  );
};

export default LandingPage;
