import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Star } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F7F1] dark:bg-gray-950 font-['Poppins'] text-[#1F3E3D] dark:text-gray-200 overflow-hidden transition-colors duration-300">

      {/* 2. MAIN HERO CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* --- LEFT COLUMN: Name, Arrow, Stats, Socials --- */}
          <div className="lg:col-span-4 flex flex-col justify-center relative z-10 order-2 lg:order-1 text-center lg:text-left">
            
            {/* Handwritten Greeting */}
            <h2 className="font-['Patrick_Hand'] text-4xl text-[#1F3E3D] dark:text-white mb-2 transform -rotate-2">
              Hy! I Am
            </h2>
            
            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#F4B956] dark:text-[#fbbf24] mb-8 leading-tight">
              Sashika <br /> Imesh.
            </h1>

            {/* Decorative Arrow (SVG) - Connecting Name to Image */}
            <div className="hidden lg:block absolute top-24 right-[-20px] pointer-events-none">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                {/* Applied classes to paths to handle color switching */}
                <path 
                    d="M10 70 Q 50 70 80 10" 
                    className="stroke-[#2C5F58] dark:stroke-teal-400" 
                    strokeWidth="2" 
                    strokeDasharray="5 5" 
                    fill="none" 
                />
                <path 
                    d="M75 10 L80 10 L78 18" 
                    className="stroke-[#2C5F58] dark:stroke-teal-400" 
                    strokeWidth="2" 
                    fill="none" 
                />
              </svg>
            </div>

            {/* Experience Counter */}
            <div className="mt-12 mb-12">
              <span className="block text-5xl font-bold text-[#2C5F58] dark:text-teal-400">03</span>
              <span className="text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Years Experience</span>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 text-[#F4B956] dark:text-[#fbbf24]">
              <a href="#" className="hover:scale-110 transition hover:text-[#2C5F58] dark:hover:text-white"><Facebook size={20} fill="currentColor" /></a>
              <a href="#" className="hover:scale-110 transition hover:text-[#2C5F58] dark:hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:scale-110 transition hover:text-[#2C5F58] dark:hover:text-white"><Twitter size={20} fill="currentColor" /></a>
              <a href="#" className="hover:scale-110 transition hover:text-[#2C5F58] dark:hover:text-white"><Linkedin size={20} fill="currentColor" /></a>
            </div>
          </div>

          {/* --- CENTER COLUMN: Main Image --- */}
          <div className="lg:col-span-4 flex justify-center items-end relative order-1 lg:order-2">
            {/* The Circle Background/Border Effect */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border-b-[12px] border-[#F4B956] dark:border-[#fbbf24] z-10 transition-colors"></div>
                {/* Profile Image */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                  alt="Sashika Imesh" 
                  className="w-full h-full object-cover rounded-full grayscale-[10%] sepia-[10%] dark:brightness-90 transition-all"
                />
            </div>
          </div>

          {/* --- RIGHT COLUMN: Intro Text, Reviews, Signature --- */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full relative z-10 order-3 text-center lg:text-left">
            
            {/* Top Description */}
            <div className="mb-16 lg:mb-32 lg:text-right">
              <p className="text-[#1F3E3D] dark:text-gray-300 text-lg leading-relaxed font-medium">
                I build beautifully simple web applications <br className="hidden lg:block" /> 
                and enjoy turning ideas <br className="hidden lg:block" /> into real-world products.
              </p>
            </div>

            {/* Floating Review Card */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl max-w-xs mx-auto lg:mx-0 lg:ml-auto mb-16 transform lg:-translate-x-8 transition-colors duration-300">
               <div className="flex justify-between items-center mb-3">
                 <span className="text-sm font-bold text-gray-800 dark:text-gray-200">1k Reviews On</span>
                 <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                 </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                      </div>
                    ))}
                  </div>
                  <span className="text-lg font-bold text-[#2C5F58] dark:text-teal-400">4.9</span>
               </div>
            </div>

            {/* Signature Area */}
            <div className="lg:text-right mt-auto">
               <span className="font-['Patrick_Hand'] text-4xl text-[#1F3E3D] dark:text-white block">FullStack</span>
               <span className="text-3xl font-bold text-[#2C5F58] dark:text-teal-400">Developer.</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;