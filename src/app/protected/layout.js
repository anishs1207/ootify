"use client";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import LightRays from "../../components/lightRays";

export default function Layout({ children }) {
  return (
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
          <Header />

          {/* Scrollable Content */}
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
