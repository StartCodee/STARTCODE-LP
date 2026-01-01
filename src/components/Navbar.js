import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import DemoModal from "./DemoModal";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "portfolio", href: "#portfolio" },
    { key: "process", href: "#process" },
    { key: "contact", href: "#contact" },
  ];

  const languages = [
    { code: "en", label: "English", flag: "/assets/flags/eng.svg", available: true },
    { code: "id", label: "Indonesia", flag: "/assets/flags/ind.png", available: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                alt="Logo"
                width={56}
                height={56}
                src="/assets/optimized/scode-64.webp"
                srcSet="/assets/optimized/scode-64.webp 1x, /assets/optimized/scode-112.webp 2x"
                style={{ borderRadius: 10 }}
              />
              <span className="text-xl font-bold">StartCode</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Language */}
              <div className="flex items-center space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => lang.available && setLanguage(lang.code)}
                    disabled={!lang.available}
                    className={`w-8 h-8 rounded-full overflow-hidden border ${
                      lang.code === language ? "border-[#5e4bf5]" : "border-transparent"
                    } ${!lang.available ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"}`}
                    aria-label={lang.label}
                  >
                    <img src={lang.flag} alt={lang.label} className="w-full h-full" />
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#5e4bf5] hover:bg-[#5038d4] text-white px-6"
              >
                {t("common.requestDemo")}
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 rounded-full"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}

                <Button
                  onClick={() => {
                    setIsDemoModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#5e4bf5] hover:bg-[#5038d4] text-white mt-4"
                >
                  {t("common.requestDemo")}
                </Button>

                {/* Mobile Language */}
                <div className="flex items-center space-x-2 mt-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => lang.available && setLanguage(lang.code)}
                      disabled={!lang.available}
                      className={`w-8 h-8 rounded-full overflow-hidden border ${
                        lang.code === language ? "border-[#5e4bf5]" : "border-transparent"
                      } ${!lang.available ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"}`}
                      aria-label={lang.label}
                    >
                      <img src={lang.flag} alt={lang.label} className="w-full h-full" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
};

export default Navbar;
