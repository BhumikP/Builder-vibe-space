import { Button } from "@/components/ui/button";

const FrameItHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 overflow-hidden">
      {/* Background decorative elements */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23F5F1EA" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
        }
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight">
                  Transform Your
                  <span className="text-gold-500 block">Memories</span>
                  Into Stunning Wall Art
                </h1>
                <p className="text-lg md:text-xl text-charcoal-800/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Upload your favorite photos and get them delivered as
                  beautifully framed art. Premium quality, handcrafted frames
                  that turn your memories into masterpieces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Framing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream-50 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
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
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-cream-50 flex items-center justify-center"
                      >
                        <span className="text-xs text-white">★</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-charcoal-800/70 font-medium">
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
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-cream-200"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48V120z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default FrameItHero;
