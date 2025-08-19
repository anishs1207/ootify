"use client";

import { auth, provider, signInWithPopup } from "../app/firebase";
import { BlurText, TrueFocus } from "@/components";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";

export default function Home() {
    const router = useRouter();

    const handleAnimationComplete = () => {
        console.log("Animation completed!");
    };

    async function handleGoogleLogin() {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (!user) {
                throw new Error("No user returned from Firebase");
            }

            // POST request with axios
            const postResponse = await axios.post(
                "http://localhost:3001/prefrences",
                {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    avatar : user.photoURL
                },
                { withCredentials: true }
            );

            console.log("POST response:", postResponse.data);

            // GET request with axios
            const getResponse = await axios.get("http://localhost:3001/prefrences", {
                withCredentials: true,
            });

            console.log("GET response:", getResponse.data);

            console.log("Logged in user:", user);

            router.push(`/qna?uid=${user.uid}`);
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed!");
        }
    }

    return (
        <>
            <Header />
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

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleGoogleLogin}
                >
                    Continue with Google
                </button>

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
