"use client";

import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Lazy load the chat component since it's not critical for initial render
const FrameItChat = dynamic(() => import("./FrameItChat"), {
  ssr: false,
  loading: () => null
});

const FrameItHero = () => {
  const [showChat, setShowChat] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by ensuring component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-green text-white overflow-hidden">
      {/* Optimized background pattern using CSS instead of inline SVG */}
      <div className="absolute  opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F1EA' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight py-3 md:py-0">
                  Transform Your
                  <span className="text-primary block">Memories</span>
                  Into Stunning Wall Art
                </h1>
                <p className="text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Upload your favorite photos and get them delivered as
                  beautifully framed art. Premium quality, handcrafted frames
                  that turn your memories into masterpieces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    if (isMounted && typeof window !== 'undefined') {
                      window.location.href = "/contact";
                    }
                  }}
                >
                  Start Framing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-800 text-black hover:bg-green-800 hover:text-cream-50 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
                  onClick={() => {
                    if (isMounted && typeof window !== 'undefined') {
                      const element = document.querySelector("#showcase");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  See Our Work
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-cream-50 flex items-center justify-center"
                      >
                        <span className="text-xs text-white">★</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    500+ Happy Customers
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg">
                {/* Main frame mockup */}
                <div className="relative bg-wood-500 p-6 rounded-lg shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                  <div className="bg-cream-50 p-4 rounded">
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded flex items-center justify-center">
                      <div className="text-center text-slate-600">
                        <div className="w-16 h-16 mx-auto mb-3 bg-slate-400 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-slate-200"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Your Photo Here</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating smaller frames */}
                <div className="absolute -top-4 -left-4 bg-wood-300 p-3 rounded shadow-lg transform -rotate-12 opacity-80">
                  <div className="w-20 h-20 bg-cream-100 rounded flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-6 bg-wood-600 p-3 rounded shadow-lg transform rotate-12 opacity-80">
                  <div className="w-24 h-16 bg-cream-100 rounded flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowChat(true)}
          className="relative flex ml-auto right-3 bottom-0"
        >
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="sr-only">Open chat</span>
          {/* Chat notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
        </Button>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-green-800/30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M1200 120L0 16.48V120z" fill="currentColor"></path>
        </svg>
      </div>
      
      {showChat && <FrameItChat onClose={() => setShowChat(false)} />}
    </section>
  );
};

export default FrameItHero;
