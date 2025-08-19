"use client";
import { Search, Home, Shirt, Star, MessageSquare, Calendar, User, Settings } from 'lucide-react';

const navLinks = [
  { name: 'Home', icon: Home, active: true },
  { name: 'Wardrobe', icon: Shirt, active: false },
  { name: 'Recommendations', icon: Star, active: false },
  { name: 'Stylist Chat', icon: MessageSquare, active: false },
  { name: 'Calendar', icon: Calendar, active: false },
  { name: 'Profile', icon: User, active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-[#242131] p-6 flex flex-col flex-shrink-0">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-xl font-bold text-white">Ootdify</h1>
      </div>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full bg-[#3a344a] border border-transparent focus:border-purple-500 focus:ring-0 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400"
        />
      </div>

      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href="#"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
              link.active ? 'bg-[#4A3E5E] text-white' : 'hover:bg-[#3a344a]'
            }`}
          >
            <link.icon className="w-5 h-5" />
            <span>{link.name}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors hover:bg-[#3a344a]">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
}
