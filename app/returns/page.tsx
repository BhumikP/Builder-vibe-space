import FrameItFooter from "@/components/FrameItFooter";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Shield, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Returns & Exchanges - FrameIt",
  description:
    "Learn about FrameIt's hassle-free return and exchange policy. 30-day guarantee for your complete satisfaction.",
};

const ReturnsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="bg-white border-b border-cream-300 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-charcoal-800 hover:text-gold-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-gold-500">
                FrameIt
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/contact"
                  className="text-charcoal-800 hover:text-gold-600 transition-colors duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="/shipping"
                  className="text-charcoal-800 hover:text-gold-600 transition-colors duration-300"
                >
                  Shipping
                </Link>
                <Link href="/returns" className="text-gold-600 font-semibold">
                  Returns
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-6">
              Returns & Exchanges
            </h1>
            <p className="text-lg md:text-xl text-charcoal-800/80 max-w-2xl mx-auto mb-8">
              Your satisfaction is our top priority. If you're not completely
              happy with your frame, we'll make it right.
            </p>

            <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 inline-block">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-gold-600" />
                <span className="text-gold-800 font-semibold text-lg">
                  30-Day Satisfaction Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                Our Return Policy
              </h2>
              <p className="text-lg text-charcoal-800/70">
                Simple, straightforward, and designed with your satisfaction in
                mind.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream-50 rounded-2xl p-8 text-center">
                <div className="bg-gold-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  30-Day Window
                </h3>
                <p className="text-charcoal-800/70">
                  Return or exchange your frame within 30 days of delivery for
                  any reason
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8 text-center">
                <div className="bg-gold-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  Free Exchanges
                </h3>
                <p className="text-charcoal-800/70">
                  Switch to a different frame style or size at no additional
                  cost
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8 text-center">
                <div className="bg-gold-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  Full Refunds
                </h3>
                <p className="text-charcoal-800/70">
                  Get a complete refund if you're not satisfied with your frame
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                How to Return Your Frame
              </h2>
              <p className="text-lg text-charcoal-800/70">
                Simple steps to process your return or exchange.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gold-500 text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold text-charcoal-900 mb-3">Contact Us</h3>
                <p className="text-sm text-charcoal-800/70">
                  Email us at returns@frameit.com or call 1-555-FRAME-IT with
                  your order number
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gold-500 text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold text-charcoal-900 mb-3">
                  Get Return Label
                </h3>
                <p className="text-sm text-charcoal-800/70">
                  We'll email you a prepaid return shipping label within 24
                  hours
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gold-500 text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold text-charcoal-900 mb-3">
                  Pack & Ship
                </h3>
                <p className="text-sm text-charcoal-800/70">
                  Carefully package your frame and drop it off at any carrier
                  location
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gold-500 text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="font-bold text-charcoal-900 mb-3">Get Refund</h3>
                <p className="text-sm text-charcoal-800/70">
                  Receive your refund or replacement within 5-7 business days of
                  our receipt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions & FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Return Conditions */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal-900 mb-8">
                  Return Conditions
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-charcoal-900 mb-1">
                        Original Condition
                      </h3>
                      <p className="text-charcoal-800/70">
                        Frame must be in original condition with all materials
                        included
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-charcoal-900 mb-1">
                        Original Packaging
                      </h3>
                      <p className="text-charcoal-800/70">
                        Please use original packaging when possible to prevent
                        damage
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-charcoal-900 mb-1">
                        30-Day Limit
                      </h3>
                      <p className="text-charcoal-800/70">
                        Returns must be initiated within 30 days of delivery
                        date
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-charcoal-900 mb-1">
                        Custom Orders
                      </h3>
                      <p className="text-charcoal-800/70">
                        Custom sizes and special orders are returnable for
                        defects only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal-900 mb-8">
                  Common Questions
                </h2>

                <div className="space-y-6">
                  <div className="bg-cream-50 rounded-xl p-6">
                    <h3 className="font-bold text-charcoal-900 mb-2">
                      How long do refunds take?
                    </h3>
                    <p className="text-charcoal-800/70">
                      Refunds are processed within 5-7 business days after we
                      receive your return. Credit card refunds may take an
                      additional 3-5 days to appear.
                    </p>
                  </div>

                  <div className="bg-cream-50 rounded-xl p-6">
                    <h3 className="font-bold text-charcoal-900 mb-2">
                      Can I exchange for a different style?
                    </h3>
                    <p className="text-charcoal-800/70">
                      Yes! We offer free exchanges to different frame styles or
                      sizes. Just let us know your preference when you contact
                      us.
                    </p>
                  </div>

                  <div className="bg-cream-50 rounded-xl p-6">
                    <h3 className="font-bold text-charcoal-900 mb-2">
                      What if my frame arrived damaged?
                    </h3>
                    <p className="text-charcoal-800/70">
                      Contact us immediately with photos. We'll send a
                      replacement right away and arrange pickup of the damaged
                      item.
                    </p>
                  </div>

                  <div className="bg-cream-50 rounded-xl p-6">
                    <h3 className="font-bold text-charcoal-900 mb-2">
                      Do I pay for return shipping?
                    </h3>
                    <p className="text-charcoal-800/70">
                      No! We provide a prepaid return label for all returns and
                      exchanges. There's no cost to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-charcoal-900 text-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Your Return?
            </h2>
            <p className="text-lg text-cream-50/80 mb-8">
              Our customer service team is here to make your return process as
              smooth as possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 text-white font-semibold rounded-xl hover:bg-gold-600 transition-colors duration-300"
              >
                Contact Support
              </Link>
              <a
                href="mailto:returns@frameit.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-cream-50 font-semibold rounded-xl border border-cream-50/20 hover:bg-white/20 transition-colors duration-300"
              >
                Email Returns Team
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-cream-50/20">
              <p className="text-cream-50/60">
                <strong>Quick Contact:</strong> returns@frameit.com |
                1-555-FRAME-IT
              </p>
            </div>
          </div>
        </div>
      </section>

      <FrameItFooter />
    </div>
  );
};

export default ReturnsPage;
