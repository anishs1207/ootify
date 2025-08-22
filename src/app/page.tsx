"use client";

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
            <div className="flex space-x-3">
                <button
                    onClick={handleGoogleLogin}
                    disabled={isSigningIn}
                    className="bg-white border border-green-700 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-100 transition flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isSigningIn ? (
                        <Loader2 className="animate-spin h-4 w-4" />
                    ) : (
                        <FcGoogle className="text-xl" />
                    )}
                    {isSigningIn ? "Signing in..." : "Sign In with Google"}
                </button>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1a1122] gap-7">
                <img
                    src="https://www.businessoffashion.com/resizer/NLhu1lkv4dMs2qlpxrxEA6XFRBo=/arc-photo-businessoffashion/eu-central-1-prod/public/2YRLNZFFTJBJ3I6N2AP7Q2ZA64.png"
                    alt="Card Image"
                    width={480}
                    height={480}
                    className="object-contain w-full h-80 rounded-xl"
                />

                <BlurText
                    text="Welcome to Ootify"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-4xl mb-4 text-white font-bold"
                />




                <TrueFocus
                    sentence="Drip your way"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="blue"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                />
            </main>
            <Footer />
        </>
    );
}
