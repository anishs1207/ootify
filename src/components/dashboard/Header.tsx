"use client";
import { Bell } from 'lucide-react';

// @ts-ignore
export default function Header({ user }) {
  console.log(user);
  return (
    <header className="sticky top-0 z-20 flex justify-end items-center p-4 pr-8 border-b border-t border-t-cyan-500/20 border-b-gray-700/50 bg-[#1a1823]/80 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-full hover:bg-[#3a344a]">
          <Bell className="w-6 h-6 text-gray-300" />
        </button>
        <img src={user?.avatar || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="User Avatar" width={40} height={40} className="rounded-full cursor-pointer" />
      </div>
    </header>
  )
}