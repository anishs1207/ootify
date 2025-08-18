"use client";
import { useState } from "react";
import TiltedCard from "../../uiComponents/titleCard";
import { FaStar } from "react-icons/fa";

export default function OccasionsPage() {
  const [selectedOccasions, setSelectedOccasions] = useState([]);

  const occasions = [
    { label: "College", img: "https://launchacademytulsa.com/wp-content/uploads/2012/08/Depositphotos_10527524_m.jpg", value: "college" },
    { label: "Cinema", img: "https://t3.ftcdn.net/jpg/06/52/50/84/360_F_652508416_PMVJMXZMgnpHmlUIoEnV6xlSTojSwiQ3.jpg", value: "movies" },
    { label: "Date", img: "https://i.pinimg.com/736x/c4/71/33/c47133e2aa9dc8445f8adcb14ae935ee.jpg", value: "date" },
    { label: "Party", img: "https://im.whatshot.in/img/2019/Feb/shutterstock-499233301-1550744233.jpg", value: "party" },
    { label: "Concerts", img: "https://musicalsatans.com/wp-content/uploads/2025/02/IMG_20250228_235431.jpg", value: "concerts" },
    { label: "Travel", img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/01/places-to-visit-with-friends-new-og.jpg", value: "travel" },
  ];

  function handleOccasionClick(value) {
    setSelectedOccasions(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1122] to-[#2c1b3a] px-6 py-12">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-12 text-center drop-shadow-md animate-pulse">
        What Occasions Do You Usually Attend? 🎉
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {occasions.map(occ => {
          const isSelected = selectedOccasions.includes(occ.value);

          return (
            <div
              key={occ.value}
              onClick={() => handleOccasionClick(occ.value)}
            >
              <TiltedCard
                imageSrc={occ.img}
                altText={occ.label}
                captionText={occ.label}
                containerHeight="280px"
                containerWidth="280px"
                imageHeight="280px"
                imageWidth="280px"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 pointer-events-none">
                    <p className="text-lg font-bold text-white drop-shadow-lg">{occ.label}</p>
                  </div>
                }
              />
            </div>
          );
        })}
      </div>

      {selectedOccasions.length > 0 && (
        <p className="mt-12 text-2xl text-white font-semibold animate-fadeIn text-center">
          You selected:{" "}
          <span className="text-purple-400">
            {selectedOccasions.join(", ")}
          </span>
        </p>
      )}
    </div>
  );
}