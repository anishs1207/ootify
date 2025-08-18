"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
export default function OccasionsPage() {
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const uid = useSearchParams().get("uid");
  const occasions = [
    {
      label: "College",
      img: "https://launchacademytulsa.com/wp-content/uploads/2012/08/Depositphotos_10527524_m.jpg",
      value: "college",
    },
    {
      label: "Cinema",
      img: "https://t3.ftcdn.net/jpg/06/52/50/84/360_F_652508416_PMVJMXZMgnpHmlUIoEnV6xlSTojSwiQ3.jpg",
      value: "movies",
    },
    {
      label: "Date",
      img: "https://i.pinimg.com/736x/c4/71/33/c47133e2aa9dc8445f8adcb14ae935ee.jpg",
      value: "date",
    },
    {
      label: "Party",
      img: "https://im.whatshot.in/img/2019/Feb/shutterstock-499233301-1550744233.jpg",
      value: "party",
    },
    {
      label: "Concerts",
      img: "https://musicalsatans.com/wp-content/uploads/2025/02/IMG_20250228_235431.jpg",
      value: "concerts",
    },
    {
      label: "Travel",
      img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/01/places-to-visit-with-friends-new-og.jpg",
      value: "travel",
    },
  ];

  function handleOccasionClick(value) {
    setSelectedOccasions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function handleNext() {
    fetch(`http://localhost:3001/prefrences/${uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
        occasions: selectedOccasions,
      }),
      credentials: "include",
    });
    alert("Your preferences have been saved!");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1122] to-[#2c1b3a] px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 mb-12 text-center drop-shadow-md">
        What Occasions Do You Usually Attend? 🎉
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {occasions.map((occ) => {
          const isSelected = selectedOccasions.includes(occ.value);

          return (
            <div
              key={occ.value}
              onClick={() => handleOccasionClick(occ.value)}
              className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "ring-4 ring-purple-500 scale-105"
                  : "hover:scale-105"
              }`}
            >
              {/* Background Image */}
              <img
                src={occ.img}
                alt={occ.label}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                <p className="text-xl font-semibold text-white flex items-center gap-2">
                  {occ.label}
                  {isSelected && <FaCheck className="text-green-400" />}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Text */}
      {selectedOccasions.length > 0 && (
        <p className="mt-12 text-xl text-white font-medium text-center">
          Selected:{" "}
          <span className="text-purple-400 font-semibold">
            {selectedOccasions.join(", ")}
          </span>
        </p>
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={selectedOccasions.length === 0}
        className={`mt-8 px-6 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${
          selectedOccasions.length > 0
            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 shadow-lg"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        }`}
      >
        Next →
      </button>
    </div>
  );
}
