"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1a1122] py-8 px-6 md:px-12  border-t border-[#2a1a36]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Logo */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500"
                >
                    Ootify
                </motion.div>

                {/* Social Icons */}
                <div className="flex gap-6 text-white text-2xl">
                    {[FaInstagram, FaTwitter, FaDiscord].map((Icon, idx) => (
                        <motion.a
                            key={idx}
                            href="#"
                            whileHover={{ scale: 1.2, color: "#7f5af0" }}
                            className="transition-all duration-300"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>

                {/* Copyright */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-400 text-sm md:text-base text-center"
                >
                    &copy; {new Date().getFullYear()} Ootify. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}