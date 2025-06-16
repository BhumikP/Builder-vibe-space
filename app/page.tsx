import FrameItHero from "@/components/FrameItHero";
import FrameItPhotoGallery from "@/components/FrameItPhotoGallery";
import FrameItTestimonialsSlider from "@/components/FrameItTestimonialsSlider";
import FrameItFeatures from "@/components/FrameItFeatures";
import FrameItShowcase from "@/components/FrameItShowcase";
import FrameItWhatWeCover from "@/components/FrameItWhatWeCover";
import FrameItFAQ from "@/components/FrameItFAQ";
import FrameItFooter from "@/components/FrameItFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FrameItHero />
      <FrameItPhotoGallery />
      <FrameItTestimonialsSlider />
      <FrameItFeatures />
      <FrameItShowcase />
      <FrameItWhatWeCover />
      <FrameItFAQ />
      <FrameItFooter />
    </div>
  );
}
