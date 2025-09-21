import React from "react";
import { Badge } from "./ui/badge";
import { Search, Palette, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Discovery & Research",
      description: "We dive deep into understanding your business needs, target audience, and project requirements through comprehensive research and stakeholder interviews.",
      details: [
        "Requirement analysis",
        "Market research",
        "Competitive analysis",
        "Technical feasibility"
      ]
    },
    {
      number: "02",
      icon: <Palette className="h-8 w-8" />,
      title: "Design & Planning",
      description: "Our design team creates intuitive user experiences and develops detailed project roadmaps with clear milestones and deliverables.",
      details: [
        "UI/UX design",
        "Project roadmap",
        "Architecture planning",
        "Prototype development"
      ]
    },
    {
      number: "03",
      icon: <Code className="h-8 w-8" />,
      title: "Development & Testing",
      description: "Using agile methodologies, we build robust solutions with continuous testing and quality assurance throughout the development process.",
      details: [
        "Agile development",
        "Code reviews",
        "Quality assurance",
        "Performance optimization"
      ]
    },
    {
      number: "04",
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch & Support",
      description: "We ensure smooth deployment and provide ongoing support, monitoring, and maintenance to keep your solution running optimally.",
      details: [
        "Deployment & launch",
        "Performance monitoring",
        "Ongoing support",
        "Feature updates"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="px-3 py-1 mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From concept to 
            <span className="text-[#5e4bf5]"> launch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven development process ensures successful project delivery 
            with clear communication and measurable results at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5e4bf5]/20 via-[#5e4bf5]/60 to-[#5e4bf5]/20 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-[#5e4bf5]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#5e4bf5]/10 hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-[#5e4bf5] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5e4bf5]/10 to-[#7c3aed]/10 rounded-2xl flex items-center justify-center text-[#5e4bf5] group-hover:bg-gradient-to-br group-hover:from-[#5e4bf5]/20 group-hover:to-[#7c3aed]/20 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e4bf5] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[#5e4bf5] rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Dots for Large Screens */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 bg-[#5e4bf5] rounded-full transform -translate-y-1/2 z-20 shadow-lg">
                  <div className="absolute inset-0 bg-[#5e4bf5] rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#5e4bf5]/5 to-transparent rounded-2xl border border-[#5e4bf5]/20">
          <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#5e4bf5] hover:bg-[#5038d4] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5e4bf5]/25">
              Start Your Project
            </button>
            <button className="px-6 py-3 border border-[#5e4bf5] text-[#5e4bf5] hover:bg-[#5e4bf5]/5 rounded-lg font-medium transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;