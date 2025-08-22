"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';

// --- MOCK DATA ---
// This is where your API data will go.
// I've added a 'type' property to each item for filtering.
const filterCategories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes'];

// --- Reusable Clothing Item Card Component ---
const ClothingItemCard = ({ item }) => {
  return (
    <div className={`${item.bgColor} p-3 rounded-2xl transition-transform duration-300 hover:scale-105`}>
      <div className="relative bg-white p-2 rounded-xl">
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <button className="absolute top-3 right-3 p-1.5 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-colors">
          <MoreHorizontal size={20} className="text-gray-800" />
        </button>
      </div>
      <div className="pt-3 px-1">
        <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.category}</p>
      </div>
    </div>
  );
};


// --- Main Wardrobe Component ---
const Wardrobe = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [wardrobeItems, setWardrobeItems] = useState([]);
  useEffect(() => {
    async function fetchWardrobeItems() {
      const res = await fetch("http://localhost:3002/wardrobe");
      const data = await res.json();
      console.log(data.wardrobeItems);
      setWardrobeItems(data.wardrobeItems);
    }
    fetchWardrobeItems();
  },[])
  // useMemo will prevent re-filtering on every render, only when the filter changes.
  // When you use an API, you might fetch data based on the filter instead.
  const filteredItems = useMemo(() => {
  if (activeFilter === 'All') return wardrobeItems;

  return wardrobeItems.filter(
    item => item.type.toLowerCase() === activeFilter.toLowerCase()
  );
}, [activeFilter, wardrobeItems]);

  return (
    // This main container mimics the dark background and padding from your design.
    <main className="flex-1 bg-gray-900 p-6 md:p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Wardrobe</h1>
      
      {/* -- Feature: Filter Buttons -- */}
      <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2">
        {filterCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              activeFilter === category 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-700/50 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* -- Wardrobe Grid -- */}
      {/* The grid is responsive: 1 column on small screens, up to 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <ClothingItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* -- Feature: Add New Item Floating Button -- */}
      <button 
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Add new item"
      >
        <Plus size={24} />
      </button>

    </main>
  );
};

export default Wardrobe;