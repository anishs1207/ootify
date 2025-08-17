"use client";
import { useState } from "react";
import TiltedCard from "../../uiComponents/titleCard";
import { useRouter } from "next/navigation";

export default function Qna() {
  const [gender, setGender] = useState("");
  const router = useRouter();

  const options = [
    {
      label: "Male",
      img: "https://theclassywoman.net/wp-content/uploads/2017/11/how-to-be-a-gentleman.jpg",
      value: "male",
    },
    {
      label: "Female",
      img: "https://fashionista.com/.image/t_share/MTQ1NDEyODQ3MjE0NTM2NDY1/art-of-the-gentlewoman-7.jpg",
      value: "female",
    },
  ];

  function handleGenderClick(value) {
    setGender(value);
    router.push(`/prefrences`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1122] to-[#2c1b3a] px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-10 sm:mb-12 text-center">
        Who’s behind the pixels?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full max-w-4xl">
        {options.map((opt) => (
          <div
            key={opt.value}
            className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105 ${
              gender === opt.value ? "ring-4 ring-purple-400" : ""
            }`}
            onClick={() => handleGenderClick(opt.value)}
          >
            <TiltedCard
              imageSrc={opt.img}
              altText={opt.label}
              captionText={opt.label}
              containerHeight="280px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="100%"
              rotateAmplitude={15}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 pointer-events-none">
                  <p className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    {opt.label}
                  </p>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}