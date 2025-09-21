import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Globe, Smartphone, Settings, Building, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular. Scalable, performant, and user-friendly solutions.",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "Content Management"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android. Seamless user experience with optimal performance.",
      features: ["iOS & Android", "React Native", "Flutter Development", "App Store Optimization"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Tailored software solutions designed specifically for your business needs. From APIs to complex integrations.",
      features: ["API Development", "Database Design", "Third-party Integrations", "Automation Tools"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Enterprise Software",
      description: "Robust enterprise-grade applications with advanced security, scalability, and compliance features.",
      features: ["Enterprise Architecture", "Cloud Solutions", "Security Audits", "Legacy Modernization"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="px-3 py-1 mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive digital solutions for 
            <span className="text-[#5e4bf5]"> every need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we provide end-to-end development services 
            that transform your vision into powerful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-card hover:shadow-xl hover:shadow-[#5e4bf5]/10 transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e4bf5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[#5e4bf5] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold text-[#5e4bf5] hover:text-[#5038d4] transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5e4bf5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <Button 
            size="lg"
            className="bg-[#5e4bf5] hover:bg-[#5038d4] text-white px-8 py-6 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5e4bf5]/25"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;