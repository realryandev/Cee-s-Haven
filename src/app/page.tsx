"use client";

import Affirmation from "@/components/Affirmation";
import FadeIn from "@/components/FadeIn";
import React, { useEffect, useState } from "react";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E89EB8]">
        <div className="animate-pulse text-xl text-gray-900 font-mono">
          Loading your space...
        </div>
      </div>
    );
  }

  return (
    
    <main className="flex flex-col items-center justify-center rounded-xs shadow-lg bg-gradient-to-r from-[#E89EB8] to-[#F6BCD2] p-6">
      <h1 className="dark:text-white text-2xl md:text-4xl font-semibold mb-8">✨ Welcome to Your Space ✨</h1>
      <Affirmation/>
    <FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
        <CustomVideoPlayer src="C1.mp4"/>
        <CustomVideoPlayer src="C2.mp4"/>
        <CustomVideoPlayer src="C3.mp4"/>
        <CustomVideoPlayer src="C4.mp4"/>
        <CustomVideoPlayer src="C5.mp4"/>
        <CustomVideoPlayer src="C6.mp4"/>
        <CustomVideoPlayer src="C7.mp4"/>
        <CustomVideoPlayer src="C8.mp4"/>
        <CustomVideoPlayer src="C9.mp4"/>
        <CustomVideoPlayer src="C10.mp4"/>
        <CustomVideoPlayer src="C11.mp4"/>
      </div>
    </FadeIn>
      
      
    </main>
  )

};

export default Index;
