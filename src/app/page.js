"use client";
import { auth, provider, signInWithPopup } from '../app/firebase' ; 
import BlurText from "../uiComponents/BlurText";
import TrueFocus from "../uiComponents/TrueFocus";
import { Link } from "next/link"
import { useRouter } from "next/navigation";
export default function Home() {
  let router = useRouter();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  function handleGoogleLogin(){
      signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Logged in user:", user);
      router.push("/qna");
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Login failed!");
    });
  }
  return (
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
        onClick={()=>handleGoogleLogin()}
      >
        Continue with google
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
  );
}
