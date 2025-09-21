import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import DemoModal from "./DemoModal";

const CTAStrip = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5e4bf5] via-[#6b46f7] to-[#7c3aed]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                <Sparkles className="h-10 w-10" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to transform your 
              <br className="hidden md:block" />
              digital vision into reality?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 50+ companies who trust StartCode to deliver exceptional digital solutions. 
              Let's discuss your project and create something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white hover:bg-white/90 text-[#5e4bf5] px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/25"
              >
                Get a Free Proposal
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-sm text-white/80">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-white/80">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm text-white/80">Client Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-white/90 text-sm">
                🚀 <strong>Limited Time:</strong> Free consultation and project planning session for new clients. 
                No commitment required - just valuable insights for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default CTAStrip;