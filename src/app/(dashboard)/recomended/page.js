"use client";
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';

// Diamond Icon Component
const DiamondIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-gray-400"
  >
    <path d="M12.001 2.003c.87-.002 1.693.336 2.313.958l6.787 6.787c.622.621.958 1.442.958 2.312s-.336 1.691-.958 2.313l-6.787 6.787a3.266 3.266 0 01-4.627 0l-6.787-6.787a3.27 3.27 0 01-.958-2.313c0-.87.336-1.691.958-2.312l6.787-6.787c.62-.623 1.444-.96 2.314-.958zm-1.061 9.939H15.67v-3.75h-4.73v3.75zm-1.25 0v-3.75H4.96v3.75h4.73zm6.211 0h4.73v-3.75h-4.73v3.75zm-4.961 1.25v3.75h4.73v-3.75h-4.73z" />
  </svg>
);

export default function RecommendationsPage() {
  const [mockFitData, setMockFitData] = useState({
    fitName: '',
    top: { link: '', name: '' },
    lower: { link: '', name: '' },
    footWear: { link: '', name: '' },
    accessories: null
  });

  const userId = "test123";

  const [styleInput, setStyleInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateFit = async () => {
    setLoading(true);

    try {
      // Call API only when button is clicked
      const res = await axios.post(
      "http://localhost:3000/api/recommend-clothes",
      { prompt: styleInput },      // request body
      { headers: { userId } }      // headers with userId
    );

    console.log(res.data);

      setMockFitData(res.data);
    } catch (error) {
      console.error("Error generating fit:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSimpleDescription = (item) => {
    if (!item || !item.name) return "Keep it simple and clean!";
    return item.name;
  };

  return (
    <div className="bg-[#1a1625] min-h-screen p-4 sm:p-6 lg:p-8 text-white font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Style Input */}
        <div className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="How do you want your style to be?"
            value={styleInput}
            onChange={(e) => setStyleInput(e.target.value)}
            className="flex-grow p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleGenerateFit}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            Generate Fit
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-200">
            Today's Vibe:{" "}
            <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {mockFitData.fitName || (loading ? 'Loading...' : 'Your Fit')}
            </span>
          </h1>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left Side: Clothing Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 gap-6">
            {['top','lower','footWear'].map((item, idx) => (
              <div key={idx} className="bg-[#2a2342]/80 p-4 rounded-2xl border border-white/10 flex flex-col">
                <h2 className="text-xl font-bold mb-4 text-gray-200">{item}</h2>
                <div className="bg-white/90 rounded-lg p-4 flex-grow flex items-center justify-center">
                  {loading ? (
                    <div className="w-full h-40 bg-gray-700 animate-pulse rounded-lg"></div>
                  ) : (
                    <Image
                      src={mockFitData[item]?.link || "/placeholder.png"}
                      alt={mockFitData[item]?.name || item}
                      width={400}
                      height={400}
                      className="object-contain max-h-60 w-auto"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Outfit Details */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#4b2850] to-[#2e1d3e] p-8 rounded-2xl border border-white/10 flex flex-col">
            <h2 className="text-3xl font-bold mb-8">Outfit Details</h2>
            
            <div className="space-y-6 flex-grow">
              {['top','lower','footWear','accessories'].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-gray-200">{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                  <p className="text-gray-300 mt-1">
                    {loading ? <span className="block w-full h-4 bg-gray-700 animate-pulse rounded"></span> : getSimpleDescription(mockFitData[item])}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
                Save Fit
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
