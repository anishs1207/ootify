"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-[#1a1122]/80 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
                
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 cursor-pointer"
                >
                    Ootdify
                </motion.div>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8 text-white font-medium text-lg">
                    {["Home", "About", "Features", "Contact"].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{ scale: 1.1, color: "#7f5af0" }}
                            className="transition-all duration-300 hover:drop-shadow-xl"
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                {/* Call to Action Button */}
                <motion.a
                    href="#login"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(127,90,240,0.6)" }}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-all duration-300"
                >
                    Get Started
                </motion.a>
            </div>
        </header>
    );
}