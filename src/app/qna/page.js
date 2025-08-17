"use client";
import { useState } from "react";
import TiltedCard from "../../uiComponents/titleCard";
import { useRouter } from "next/navigation";

export default function Qna() {
  const [gender, setGender] = useState("");
  let router = useRouter();
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
  function handleOptionClick(value) {
    setGender(value);
    router.push("/prefrences");
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1122] to-[#2c1b3a] px-6 py-12">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-12 text-center">
        Who's behind the pixel ? 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {options.map((opt) => (
          <TiltedCard
            key={opt.value}
            imageSrc={opt.img}
            altText={opt.label}
            captionText={opt.label}
            containerHeight="320px"
            containerWidth="320px"
            imageHeight="320px"
            imageWidth="320px"
            rotateAmplitude={15}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            onClick={() => handleOptionClick(opt.value)}
            overlayContent={
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 pointer-events-none">
                <p className="text-xl font-bold text-white drop-shadow-lg">
                  {opt.label}
                </p>
              </div>
            }
            className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105 ${
              gender === opt.value ? "ring-4 ring-purple-400" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}