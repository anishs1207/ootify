"use client";

import { Sidebar, Header, LightRays } from "@/components/dashboard";
import { useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { UserContext } from "@/context/userContext";
import axios from "axios";

interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  gender?: string;
  occasions?: string[];
  // Add other fields you expect from your API
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const uid = useSearchParams().get("uid");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!uid) return;
      try {
        const { data } = await axios.get<User>(`http://localhost:3001/prefrences/${uid}`);
        console.log("Fetched user:", data);
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    }
    fetchUser();
  }, [uid]);

  return (
    <UserContext.Provider value={user}>
      <div className="bg-[#1a1823] text-gray-300 font-sans h-screen w-screen overflow-hidden relative">
        {/* Background LightRays */}
        <div className="w-screen h-screen fixed top-0 left-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="h-full w-full opacity-30"
          />
        </div>

        {/* UI Layout */}
        <div className="relative z-10 flex w-full h-screen">
          {/* --- Sidebar --- */}
          <aside className="w-64 h-screen bg-gray-900">
            <Sidebar />
          </aside>

          {/* --- Main Content --- */}
          <main className="flex-1 h-screen overflow-y-auto">
            {/* Header */}
            <Header user={user} />

            {/* Scrollable Content */}
            <div className="p-8">{children}</div>
          </main>
        </div>
      </div>
    </UserContext.Provider>
  );
}
