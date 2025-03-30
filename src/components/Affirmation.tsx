"use client";

import { useState, useEffect } from "react";

const affirmations = [

  "You are enough! 💖",
  "Keep shining ✨",
  "Believe in yourself 💗",
  "You're doing amazing! 👩",
  "You're beautiful, inside and out. 🌸",
  "Trust yourself, you've got this. 🌟",
  "Your dreams are valid. 🌙",
  "You are worthy of love and happiness. 💕",
  "Embrace your uniqueness. 💖",
  "Your potential is limitless. 🦋",

];

const Affirmation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
    }, 5000); // Change every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="dark:text-white text-xl text-center mt-6 p-4 bg-black/20 rounded-lg shadow-lg transition-opacity duration-500 delay-150 mb-8">
      {affirmations[index]}
    </div>
  );
};

export default Affirmation;
