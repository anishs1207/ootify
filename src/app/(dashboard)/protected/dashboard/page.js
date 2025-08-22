"use client";
import { useEffect, useState } from "react";

// Brand Logos
const BrandLogo1 = () => (
  <div className="flex flex-col items-center justify-center text-center h-full">
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 8px #00ffffaa)" }}
    >
      <path
        d="M15.21 4.21C13.93 2.93 12.08 2.5 10.5 3.05C8.92 3.6 7.66 4.92 7.05 6.5C6.5 8.08 6.93 9.93 8.21 11.21L4 15.41V18H6.59L10.79 13.79C12.07 15.07 13.92 15.5 15.5 14.95C17.08 14.4 18.34 13.08 18.95 11.5C19.5 9.92 19.07 8.07 17.79 6.79L15.21 4.21ZM12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10Z"
        fill="#00ffff"
      />
    </svg>
    <span className="mt-2 text-sm font-semibold text-[#00ffff]">Bond</span>
    <span className="text-xs text-gray-400">NATURA</span>
  </div>
);

const BrandLogo2 = () => (
  <div className="flex flex-col items-center justify-center text-center h-full">
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 8px #00ffffaa)" }}
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#00ffff" />
      <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#00ffff" opacity="0.6" />
    </svg>
    <span className="mt-2 text-sm font-semibold text-[#00ffff]">BRAND</span>
    <span className="text-xs text-gray-400">SHAPE BEYOND</span>
  </div>
);

const BrandLogo3 = () => (
  <div className="flex flex-col items-center justify-center text-center h-full">
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 8px #00ffffaa)" }}
    >
      <path
        d="M12 6C12.55 6 13 5.55 13 5C13 4.45 12.55 4 12 4C9.79 4 8 5.79 8 8C8 8.55 8.45 9 9 9C9.55 9 10 8.55 10 8C10 6.9 10.9 6 12 6ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 11.45 18.45 11 19 11C19.55 11 20 11.45 20 12C20 16.41 16.41 20 12 20Z"
        fill="#00ffff"
      />
    </svg>
    <span className="mt-2 text-sm font-semibold text-[#00ffff]">BRAND</span>
    <span className="text-xs text-gray-400">SUITS IN MIND</span>
  </div>
);

const BrandLogo4 = () => (
  <div className="flex flex-col items-center justify-center text-center h-full">
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 8px #00ffffaa)" }}
    >
      <path d="M3 18H11V16H3V18M3 6V8H21V6H3M3 13H16V11H3V13Z" fill="#00ffff" />
    </svg>
    <span className="mt-2 text-sm font-semibold text-[#00ffff]">BRAND</span>
    <span className="text-xs text-gray-400">ELEVATE BEYOND</span>
  </div>
);

const featuredBrands = [
  { name: "Brand X", logoComponent: <BrandLogo1 /> },
  { name: "Brand Y", logoComponent: <BrandLogo2 /> },
  { name: "Brand Z", logoComponent: <BrandLogo3 /> },
  { name: "Brand W", logoComponent: <BrandLogo4 /> },
];

// --- MAIN PAGE COMPONENT ---
export default function Page() {
  const [discoverCategories, setDiscoverCategories] = useState([]);
  const [recommendedOutfits, setRecommendedOutfits] = useState([]);
  useEffect(() => {
    async function fetchDiscoverCategories() {
      const res = await fetch("http://localhost:3002/discover");
      const data = await res.json();
      setDiscoverCategories(data.discoverCategories);
    }
    async function fetchReccomendedOutfits() {
      const res = await fetch("http://localhost:3002/recommended");
      const data = await res.json();
      setRecommendedOutfits(data.recommendedOutfits);
    }
    fetchReccomendedOutfits();
    fetchDiscoverCategories();
  }, []);

  return (
    <div className="p-8 space-y-12">
      {/* Discover Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Discover</h2>
          <div className="flex items-center gap-2">
            {["All", "New Arrivals", "Trending", "Sale"].map((btn) => (
              <button
                key={btn}
                className="px-4 py-1.5 text-sm bg-[#3a344a] rounded-full hover:bg-[#4A3E5E] text-white"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {discoverCategories.map((category) => (
            <div
              key={category.name}
              className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Brands Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Featured Brands</h2>
        <div className="grid grid-cols-4 gap-6">
          {featuredBrands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center">
              <div className="bg-[#242131] p-4 w-full aspect-square rounded-lg flex items-center justify-center cursor-pointer transition-all hover:bg-[#3a344a] hover:-translate-y-1">
                {brand.logoComponent}
              </div>
              <span className="mt-3 text-sm font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section className="pb-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Recommended for You
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {recommendedOutfits.map((outfit) => (
            <div key={outfit.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#242131]">
                <img
                  src={outfit.imageUrl}
                  alt={outfit.name}
                  className="object-contain object-center p-4 w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center text-white font-medium">
                {outfit.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
