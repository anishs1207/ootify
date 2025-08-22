"use client";
import { motion } from "motion/react";
import { BlurText, TrueFocus } from "@/components/dashboard";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";

export default function Home() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const isSigningIn = status === "loading";

    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };

    const handleGoogleLogin = async () => {
        try {
            // Redirect user to Google sign-in
            await signIn("google", { callbackUrl: "/qna" });
            // After sign-in, NextAuth will redirect automatically
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed!");
        }
    };

    return (
    <>
      <Header />
      <main className="relative flex flex-col items-center justify-start min-h-screen p-6 md:p-12 gap-16 bg-gradient-to-br from-[#1a1122] via-[#2a1a36] to-[#1a1122] text-white overflow-hidden">
        {/* Floating Drip Particles */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-4 h-4 bg-pink-500 rounded-full animate-bounce top-10 left-20"></div>
          <div className="absolute w-6 h-6 bg-indigo-500 rounded-full animate-bounce top-64 left-10"></div>
          <div className="absolute w-3 h-3 bg-purple-400 rounded-full animate-bounce top-1/2 left-1/2"></div>
        </motion.div>

        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 z-10 text-center">
          <motion.img
            src="https://i.ibb.co/bjnnCCNH/Whats-App-Image-2025-08-18-at-00-28-55-af362fc2.jpg"
            alt="Phone displaying a fashion app next to a stack of clothes"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="object-cover w-full max-w-md h-80 md:h-96 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />

          <BlurText
            text="Your Personal AI Stylist"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-6xl mb-4 font-extrabold tracking-wide drop-shadow-lg"
          />
          
          <TrueFocus
            sentence="slay your way"
            manualMode={false}
            blurAmount={5}
            borderColor="pink"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-lg transition-all duration-300 mt-4"
            onClick={handleGoogleLogin}
          >
            Find Your Style
          </motion.button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-center z-10">
          {[
            {
              title: "Digital Wardrobe",
              desc: "Upload photos of your clothes to create a smart, digital closet. Get a bird's-eye view of everything you own.",
            },
            {
              title: "AI-Powered Outfits",
              desc: "Get daily style recommendations based on your clothes, the weather, occasion, and your body type.",
            },
            {
              title: "Virtual Try-On (Beta)",
              desc: "Don't know how it will look? Our Try-On feature gives you an idea before you even get dressed.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-[#2a1a36]/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col items-center gap-8 w-full max-w-4xl z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
            What our users say
          </h2>
          {[
            {
              name: "Aanya S.",
              text: "This is a game-changer! I've discovered so many new outfits from clothes I already own. My mornings are so much easier.",
            },
            {
              name: "Rohan K.",
              text: "The AI stylist is scarily accurate. It gets my vibe and suggests combos I would've never thought of. 10/10!",
            },
          ].map((user, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-[#2a1a36]/60 backdrop-blur-md p-6 rounded-xl shadow-lg w-full text-center"
            >
              <p className="text-gray-200 mb-2">"{user.text}"</p>
              <span className="text-pink-400 font-semibold">- {user.name}</span>
            </motion.div>
          ))}
        </section>

        {/* Secondary Call-to-Action */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(127,90,240,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-lg mt-12 transition-all duration-300 z-10"
        >
          Join the Community
        </motion.button>
      </main>
      <Footer />
    </>
  );
}
