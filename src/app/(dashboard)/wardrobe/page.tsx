"use client";
import React, { useState, useMemo, useEffect } from "react";
import { MoreHorizontal, Plus } from "lucide-react";
import axios from "axios";

// --- Types ---
type ClothingType = "Top" | "Lower" | "FootWear";

interface WardrobeItem {
  id: string;
  name: string;
  type: ClothingType;
  link?: string | null;
  description?: string | null;
  color?: string | null;
  price?: number | null;
  imageUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
}

// --- Filter Categories ---
const filterCategories = ["All", "Tops", "Lower", "Footwear"] as const;
type FilterCategory = typeof filterCategories[number];

const typeToCategory: Record<ClothingType, FilterCategory> = {
  Top: "Tops",
  Lower: "Lower",
  FootWear: "Footwear",
};

// --- Reusable Clothing Item Card Component ---
interface ClothingItemCardProps {
  item: WardrobeItem;
}

const ClothingItemCard: React.FC<ClothingItemCardProps> = ({ item }) => {
  return (
    <div className="p-3 rounded-2xl transition-transform duration-300 hover:scale-105">
      <div className="relative bg-white p-2 rounded-xl">
        {item.link ? (
          <img
            src={item.link}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-lg text-gray-500">
            No Image
          </div>
        )}
        <button className="absolute top-3 right-3 p-1.5 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 transition-colors">
          <MoreHorizontal size={20} className="text-gray-800" />
        </button>
      </div>
      <div className="pt-3 px-1">
        <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600">{typeToCategory[item.type]}</p>
      </div>
    </div>
  );
};

// --- Main Wardrobe Component ---
const Wardrobe: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [wardrobeItems, setWardrobeItems] = useState<WardrobeItem[]>([]);

  useEffect(() => {
    async function fetchWardrobeItems() {
      try {
        const res = await axios.get("/api/view-clothes", {
          headers: {
            userId: "test123", // TODO: Replace with actual user id from auth
          },
        });

        const data = res.data as {
          top?: WardrobeItem[];
          lower?: WardrobeItem[];
          footWear?: WardrobeItem[];
        };

        // Flatten clothes from all categories into one array
        const allItems: WardrobeItem[] = [
          ...(data.top || []),
          ...(data.lower || []),
          ...(data.footWear || []),
        ];

        setWardrobeItems(allItems);
      } catch (error) {
        console.error("Error fetching wardrobe items:", error);
      }
    }
    fetchWardrobeItems();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return wardrobeItems;
    return wardrobeItems.filter(
      (item) => typeToCategory[item.type] === activeFilter
    );
  }, [activeFilter, wardrobeItems]);

  return (
    <main className="flex-1 bg-gray-900 p-6 md:p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Wardrobe</h1>

      {/* -- Filter Buttons -- */}
      <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              activeFilter === category
                ? "bg-white text-gray-900"
                : "bg-gray-700/50 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* -- Wardrobe Grid -- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <ClothingItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* -- Add New Item Floating Button -- */}
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
