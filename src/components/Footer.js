import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Instagram } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";



const Footer = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);





  const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  if (!email) return;

  setIsSubscribing(true);

  try {
    const payload = {
      "form-name": "newsletter",
      email,
      "bot-field": "", // honeypot
    };

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload),
    });

    if (!res.ok) throw new Error(`Submit failed: ${res.status}`);

    setEmail("");
    toast({
      title: t("footer.toast.subscribedTitle"),
      description: t("footer.toast.subscribedDesc"),
    });
  } catch (err) {
    toast({
      title: "Gagal subscribe",
      description: "Coba lagi ya, atau hubungi kami via email.",
      variant: "destructive",
    });
  } finally {
    setIsSubscribing(false);
  }
};





  const quickLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.process"), href: "#process" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const servicesLinks = t("footer.servicesLinks").map((name) => ({ name, href: "#" }));

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/startcodetech", name: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/startcodetech", name: "Instagram" },
    { icon: <Phone className="h-5 w-5" />, href: "https://wa.me/62895331493506", name: "WhatsApp" },
  ];

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#5e4bf5] to-[#7c3aed] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">StartCode</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{t("footer.companyDesc")}</p>

              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-[#5e4bf5]" />
                  startcodedigital@gmail.com
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-[#5e4bf5]" />
                  +62 895-3314-93506
                </div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="shrink-0 mt-[3px] h-5 w-5 text-[#5e4bf5]" aria-hidden="true" />
                  <p className="leading-tight">
                    Jakarta Office: Plaza Aminta, Jalan Let. Jen. TB Simatupang No.Kav.10, Lantai 5/504, RT.06/RW.14,
                    Pd. Pinang, Kec. Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12310.
                  </p>
                </div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="shrink-0 mt-[3px] h-5 w-5 text-[#5e4bf5]" aria-hidden="true" />
                  <p className="leading-tight">
                    Bogor Office: Kp. Baru Desa Wates Jaya, Kec. Cigombong, Kab. Bogor, Jawa Barat.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">{t("footer.quickLinksTitle")}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">{t("footer.servicesTitle")}</h3>
              <ul className="space-y-3">
                {servicesLinks.map((service) => (
                  <li key={service.name}>
                    <a href={service.href} className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">{t("footer.stayUpdatedTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("footer.stayUpdatedDesc")}</p>

            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleNewsletterSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <Input
                name="email"
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button type="submit" disabled={isSubscribing} className="w-full bg-[#5e4bf5] hover:bg-[#5038d4] text-white group">
                {isSubscribing ? t("common.subscribing") : t("common.subscribe")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>


              <div className="mt-8">
                <h4 className="font-medium mb-4">{t("footer.followUsTitle")}</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
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

        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
              <Badge variant="outline" className="text-xs">
                {t("footer.madeWith")}
              </Badge>
            </div>

                <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                  {t("common.privacyPolicy")}
                </Link>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                  {t("common.termsOfService")}
                </Link>
                <Link to="/sitemap" className="text-muted-foreground hover:text-[#5e4bf5] transition-colors duration-200">
                  {t("common.sitemap")}
                </Link>
              </div>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
