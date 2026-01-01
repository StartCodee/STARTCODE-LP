import React, { useState, useEffect, useId } from "react";
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

  const mobileMenuId = useId();

  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 20);
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navItems = [
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "portfolio", href: "#portfolio" },
    { key: "process", href: "#process" },
    { key: "contact", href: "#contact" },
  ];

  // ✅ Flag Indonesia pakai versi square optimized (30/60) supaya aspect ratio match
  // Pastikan file ini ada: /public/assets/flags/optimized/ind-30.png dan ind-60.png
  const languages = [
    { code: "en", label: "English", flag: "/assets/flags/eng.svg", available: true, type: "svg" },
    {
      code: "id",
      label: "Indonesia",
      flag: "/assets/flags/optimized/ind-30.png",
      flag2x: "/assets/flags/optimized/ind-60.png",
      available: true,
      type: "raster",
    },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2" aria-label="StartCode Home">
              <img
                alt="StartCode logo"
                width={32}
                height={32}
                src="/assets/optimized/scode-64.webp"
                srcSet="/assets/optimized/scode-64.webp 1x, /assets/optimized/scode-112.webp 2x"
                style={{ borderRadius: 10 }}
                decoding="async"
              />
              <span className="text-xl font-bold">StartCode</span>
            </a>

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
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>

              {/* Language */}
              <div className="flex items-center space-x-2" aria-label="Language switcher">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => lang.available && setLanguage(lang.code)}
                    disabled={!lang.available}
                    className={`w-8 h-8 rounded-full overflow-hidden border ${
                      lang.code === language ? "border-[#5e4bf5]" : "border-transparent"
                    } ${!lang.available ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"}`}
                    aria-label={`Switch language to ${lang.label}`}
                    aria-pressed={lang.code === language}
                  >
                    {lang.type === "svg" ? (
                      <img
                        src={lang.flag}
                        alt="" /* icon-only; name already via aria-label */
                        className="w-full h-full"
                        width={32}
                        height={32}
                        decoding="async"
                      />
                    ) : (
                      <img
                        src={lang.flag}
                        srcSet={`${lang.flag} 1x, ${lang.flag2x} 2x`}
                        sizes="32px"
                        alt=""
                        className="w-full h-full object-cover"
                        width={32}
                        height={32}
                        decoding="async"
                      />
                    )}
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#5e4bf5] hover:bg-[#5038d4] text-white px-6"
                aria-label={t("common.requestDemo")}
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
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="w-9 h-9 rounded-full"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls={mobileMenuId}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              id={mobileMenuId}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={closeMobileMenu}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}

                <Button
                  onClick={() => {
                    setIsDemoModalOpen(true);
                    closeMobileMenu();
                  }}
                  className="w-full bg-[#5e4bf5] hover:bg-[#5038d4] text-white mt-4"
                  aria-label={t("common.requestDemo")}
                >
                  {t("common.requestDemo")}
                </Button>

                {/* Mobile Language */}
                <div className="flex items-center space-x-2 mt-4" aria-label="Language switcher">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        if (lang.available) setLanguage(lang.code);
                        closeMobileMenu();
                      }}
                      disabled={!lang.available}
                      className={`w-8 h-8 rounded-full overflow-hidden border ${
                        lang.code === language ? "border-[#5e4bf5]" : "border-transparent"
                      } ${!lang.available ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"}`}
                      aria-label={`Switch language to ${lang.label}`}
                      aria-pressed={lang.code === language}
                    >
                      {lang.type === "svg" ? (
                        <img
                          src={lang.flag}
                          alt=""
                          className="w-full h-full"
                          width={32}
                          height={32}
                          decoding="async"
                        />
                      ) : (
                        <img
                          src={lang.flag}
                          srcSet={`${lang.flag} 1x, ${lang.flag2x} 2x`}
                          sizes="32px"
                          alt=""
                          className="w-full h-full object-cover"
                          width={32}
                          height={32}
                          decoding="async"
                        />
                      )}
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
