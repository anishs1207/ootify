"use client";

import { useEffect, useState } from "react";

interface ClothingItem {
  id: string;
  type: string;
  name: string;
  link: string;
  description: string;
}

interface Fit {
  fitId: string;
  createdAt: string;
  top: ClothingItem;
  lower: ClothingItem;
  footWear: ClothingItem;
  accessories: ClothingItem | null;
}

export default function Fits() {
  const [fits, setFits] = useState<Fit[]>([]);

  useEffect(() => {
    async function fetchFits() {
      try {
        const res = await fetch("/api/outfit-calendar", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "userId": "test123",
          },
        });

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data: Fit[] = await res.json();
        console.log(data) ; 
        setFits(data);
      } catch (err) {
        console.error("❌ Error fetching fits:", err);
      }
    }
    fetchFits();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen w-full px-8 py-10 bg-[#1e1b2f]">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-12 text-center">
        Your AI Recommendations ✨
      </h1>

      {/* Fits Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {fits.map((fit) => (
          <div
            key={fit.fitId}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30 bg-[#242038]/50 backdrop-blur-sm border border-white/10 hover:scale-[1.03] hover:border-purple-400/80 transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-200 mb-6">
                Recommendation • {new Date(fit.createdAt).toLocaleDateString()}
              </h2>

              <div className="grid gap-5">
                {(["top", "lower", "footWear", "accessories"] as const).map(
                  (key) => {
                    const item = fit[key];
                    if (!item) return null;
                    return (
                      <div
                        key={item.id}
                        className="rounded-2xl bg-black/20 flex items-center gap-4 p-4 transition-all duration-300 hover:bg-black/40"
                      >
                        <img
                          src={item.link}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl border-2 border-purple-400/50"
                        />
                        <div>
                          <p className="text-base font-semibold text-gray-100">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {fits.length === 0 && (
        <p className="text-center text-lg text-gray-400 mt-20">
          Loading your recommendations...
        </p>
      )}
    </div>
  );
}