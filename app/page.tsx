import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import FrameItHeader from "@/components/FrameItHeader";
import FrameItHero from "@/components/FrameItHero";

// Lazy load non-critical components
const FrameItPhotoGallery = dynamic(() => import("@/components/FrameItPhotoGallery"), {
  loading: () => <div className="py-20 bg-white"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>,
  ssr: true
});

const FrameItTestimonialsSlider = dynamic(() => import("@/components/FrameItTestimonialsSlider"), {
  loading: () => <div className="py-20 bg-dark-green"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-green-800 rounded-lg"></div></div></div>,
  ssr: true
});

const FrameItFeatures = dynamic(() => import("@/components/FrameItFeatures"), {
  loading: () => <div className="py-20 bg-white"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>,
  ssr: true
});

const FrameItShowcase = dynamic(() => import("@/components/FrameItShowcase"), {
  loading: () => <div className="py-20 bg-cream-50"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>,
  ssr: true
});

const FrameItWhatWeCover = dynamic(() => import("@/components/FrameItWhatWeCover"), {
  loading: () => <div className="py-20 bg-white"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>,
  ssr: true
});

const FrameItFAQ = dynamic(() => import("@/components/FrameItFAQ"), {
  loading: () => <div className="py-20 bg-cream-50"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>,
  ssr: true
});

const FrameItFooter = dynamic(() => import("@/components/FrameItFooter"), {
  loading: () => <div className="py-20 bg-charcoal-900"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div></div></div>,
  ssr: true
});

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FrameItHeader />
      <FrameItHero />
      
      <Suspense fallback={<div className="py-20 bg-white"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>}>
        <FrameItPhotoGallery />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-dark-green"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-green-800 rounded-lg"></div></div></div>}>
        <FrameItTestimonialsSlider />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-white"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>}>
        <FrameItFeatures />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-cream-50"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>}>
        <FrameItShowcase />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-white"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>}>
        <FrameItWhatWeCover />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-cream-50"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div></div></div>}>
        <FrameItFAQ />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-charcoal-900"><div className="container mx-auto px-4"><div className="animate-pulse h-96 bg-gray-800 rounded-lg"></div></div></div>}>
        <FrameItFooter />
      </Suspense>
    </div>
  );
}
