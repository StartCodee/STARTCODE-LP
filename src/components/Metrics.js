import React from "react";
import { Badge } from "./ui/badge";
import { Star, Users, Trophy, Clock } from "lucide-react";

const Metrics = () => {
  const stats = [
    {
      icon: <Trophy className="h-8 w-8" />,
      value: "100+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "50+",
      label: "Happy Clients",
      description: "Trusted by startups to enterprise companies worldwide"
    },
    {
      icon: <Star className="h-8 w-8" />,
      value: "4.9/5",
      label: "Client Satisfaction",
      description: "Average rating based on project feedback and reviews"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance"
    }
  ];

  const testimonials = [
    {
      quote: "StartCode transformed our vision into a reality. Their expertise and dedication resulted in a platform that exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The team's attention to detail and commitment to quality is outstanding. They delivered our mobile app on time and within budget.",
      author: "Michael Chen",
      role: "Founder, StartupXYZ", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Working with StartCode was seamless. They understood our requirements perfectly and provided innovative solutions.",
      author: "Emily Rodriguez",
      role: "Product Manager, InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 mb-4">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proven results that 
            <span className="text-[#5e4bf5]"> speak volumes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5e4bf5]/10 to-[#7c3aed]/10 rounded-2xl flex items-center justify-center text-[#5e4bf5] mx-auto group-hover:bg-gradient-to-br group-hover:from-[#5e4bf5]/20 group-hover:to-[#7c3aed]/20 transition-all duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
              </div>
              <div className="mb-2">
                <div className="text-3xl md:text-4xl font-bold text-[#5e4bf5] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            What our clients say
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-[#5e4bf5]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#5e4bf5]/10 hover:-translate-y-2"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-4xl text-[#5e4bf5] mb-4 font-serif">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-[#5e4bf5] text-[#5e4bf5]" 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;