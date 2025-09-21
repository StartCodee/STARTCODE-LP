import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribing(false);
    setEmail("");
    
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter. Thank you!",
    });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "Custom Solutions", href: "#" },
    { name: "Enterprise Software", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Consulting", href: "#" }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", name: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" }
  ];

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#5e4bf5] to-[#7c3aed] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">StartCode</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming digital visions into exceptional software solutions. 
                We help businesses innovate and grow through cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-[#5e4bf5]" />
                  startcodedigital@gmail.com
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-[#5e4bf5]" />
                  {/* 0895331493506 */}
                    +62 895-3314-93506 
                </div>
             
               <div className="flex items-start gap-2 text-xs text-muted-foreground">
  <MapPin className="shrink-0 mt-[3px] h-5 w-5 text-[#5e4bf5]" aria-hidden="true" />
  <p className="leading-tight">Jakarta Office: Plaza Aminta, Jalan Let. Jen. TB Simatupang No.Kav.10, Lantai 5/504, RT.06/RW.14, Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12310.</p>
</div>
 
<div className="flex items-start gap-2 text-xs text-muted-foreground">
  <MapPin className="shrink-0 mt-[3px] h-5 w-5 text-[#5e4bf5]" aria-hidden="true" />
  <p className="leading-tight">Bogor Office: Kp. Baru Desa Wates Jaya, Kec. Cigombong, Kab. Bogor, Jawa Barat.</p>
</div>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest tech insights and project updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-[#5e4bf5] hover:bg-[#5038d4] text-white group"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-muted hover:bg-[#5e4bf5] hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                © 2024 StartCode. All rights reserved.
              </p>
              <Badge variant="outline" className="text-xs">
                Made with ❤️ in Indonesia
              </Badge>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;