"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

// A simple component for the diamond icon
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


// Main Page Component
export default function RecommendationsPage() {
   const [mockFitData, setMockFitData] = useState({
  fitName: '',
  top: { link: '', name: '' },
  lower: { link: '', name: '' },
  footWear: { link: '', name: '' },
  accessories: null
});
  // Use the mock data for the component
  useEffect(() => {
    async function fetchMockData() {
      const res = await fetch("http://localhost:3002/fit");
      const data = await res.json();
      console.log(data) ; 
      setMockFitData(data.mockfit);
    }
    fetchMockData();
  },[])
  const fitData = mockFitData;

  // Helper function to create simple descriptions like in the image
  const getSimpleDescription = (item) => {
  if (!item) return "Keep it simple and clean!";
  return item.name; 
  };

  return (
    // This main container simulates the page content area
    <div className="bg-[#1a1625] min-h-screen p-4 sm:p-6 lg:p-8 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-200">
            Today's Vibe:{" "}
            <span className="font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {fitData.fitName}
            </span>
          </h1>
        </div>
        <main className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left Side: Clothing Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Top Card */}
            <div className="bg-[#2a2342]/80 p-4 rounded-2xl border border-white/10 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Top</h2>
              <div className="bg-white/90 rounded-lg p-4 flex-grow flex items-center justify-center">
                <Image
                  src={fitData.top.link}
                  alt={fitData.top.name}
                  width={400}
                  height={400}
                  className="object-contain max-h-60 w-auto"
                />
              </div>
            </div>

            {/* Lower Card */}
            <div className="bg-[#2a2342]/80 p-4 rounded-2xl border border-white/10 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Lower</h2>
              <div className="bg-white/90 rounded-lg p-4 flex-grow flex items-center justify-center">
                <Image
                  src={fitData.lower.link}
                  alt={fitData.lower.name}
                  width={400}
                  height={400}
                  className="object-contain max-h-60 w-auto"
                />
              </div>
            </div>

            {/* Footwear Card */}
            <div className="bg-[#2a2342]/80 p-4 rounded-2xl border border-white/10 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Footwear</h2>
              <div className="bg-white/90 rounded-lg p-4 flex-grow flex items-center justify-center">
                <Image
                  src={fitData.footWear.link}
                  alt={fitData.footWear.name}
                  width={400}
                  height={400}
                  className="object-contain max-h-60 w-auto"
                />
              </div>
            </div>

            {/* Accessories Card */}
            <div className="bg-[#1e343b]/80 p-4 rounded-2xl border border-white/10 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Accessories</h2>
              <div className="bg-black/20 rounded-lg flex-grow flex flex-col items-center justify-center min-h-[15rem] text-gray-400">
                {fitData.accessories ? (
                   <Image
                    src={fitData.accessories.link}
                    alt={fitData.accessories.name}
                    width={400}
                    height={400}
                    className="object-contain max-h-60 w-auto"
                  />
                ) : (
                  <>
                    <DiamondIcon />
                    <p className="mt-4">No Accessories</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Outfit Details */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#4b2850] to-[#2e1d3e] p-8 rounded-2xl border border-white/10 flex flex-col">
            <h2 className="text-3xl font-bold mb-8">Outfit Details</h2>
            
            <div className="space-y-6 flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">Top</h3>
                <p className="text-gray-300 mt-1">{getSimpleDescription(fitData.top)}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">Lower</h3>
                <p className="text-gray-300 mt-1">{getSimpleDescription(fitData.lower)}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">Footwear</h3>
                <p className="text-gray-300 mt-1">{getSimpleDescription(fitData.footWear)}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">Accessories</h3>
                <p className="text-gray-300 mt-1">{getSimpleDescription(fitData.accessories)}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
                Save Fit
              </button>
              <button className="w-full bg-white/10 text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-white/20 transition-colors">
                Shuffle
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}