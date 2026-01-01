import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const TrustedBy = () => {
  const { t } = useLanguage();

  const clients = [
    { name: "Plantsasri", logo: "/clients/plantsasriLogo.webp", alt: "Plantsasri logo" },
    { name: "TNI", logo: "/clients/tni.webp", alt: "TNI logo" },
    { name: "IPB", logo: "/clients/ipb.svg", alt: "IPB logo" },
    { name: "MoodPrima", logo: "/clients/moodprimalogo.webp", alt: "MoodPrima logo" },
    { name: "SMKN 3", logo: "/clients/logosmkn3.webp", alt: "SMKN 3 logo" },
    { name: "DJP", logo: "/clients/djp.webp", alt: "DJP logo" },
    { name: "Sulteng", logo: "/clients/sulteng-logo.webp", alt: "Sulteng logo" },
    { name: "MPP", logo: "/clients/mpp-logo.webp", alt: "MPP logo" },
    { name: "Bonet", logo: "/clients/bonet.webp", alt: "Bonet logo" },
    { name: "SMKN 4", logo: "/clients/smkn4.svg", alt: "SMKN 4 logo" },
    { name: "BKAD", logo: "/clients/logo-bkad.webp", alt: "BKAD logo" },
    { name: "Bank Indonesia", logo: "/clients/bi.webp", alt: "Bank Indonesia logo" },
    { name: "TravelWifi", logo: "/clients/travelwifi.webp", alt: "TravelWifi logo" },
  ];

  // SVG tetap pakai original.
  // Untuk raster: pakai /clients/optimized/<nama>-64.webp dan -96.webp (2x)
  const getImgProps = (logo) => {
    if (logo.endsWith(".svg")) return { src: logo };

    const file = logo.split("/").pop(); // contoh: plantsasriLogo.webp
    const base = file.replace(/\.(webp|png|jpe?g)$/i, "");

    return {
      src: `/clients/optimized/${base}-64.webp`,
      srcSet: `/clients/optimized/${base}-64.webp 1x, /clients/optimized/${base}-96.webp 2x`,
      sizes: "48px", // sesuai w-12
    };
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
            {t("trustedBy.label")}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...clients, ...clients].map((client, index) => {
              const imgProps = getImgProps(client.logo);
              const isFirstSet = index < clients.length;

              return (
                <img
                  key={`${client.name}-${index}`}
                  {...imgProps}
                  alt={client.alt}
                  className="w-12 object-contain"
                  width={48}
                  height={48}
                  decoding="async"
                  loading={isFirstSet ? "eager" : "lazy"}
                  aria-hidden={!isFirstSet ? "true" : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
