import React from "react";

const TrustedBy = () => {
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
  { name: "TravelWifi", logo: "/clients/travelwifi.webp", alt: "TravelWifi logo" }

  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
            Trusted by leading companies
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...clients, ...clients].map((client, index) => (
              <img 
                  src={client.logo} 
                  alt={client.alt} 
                  className="w-12 object-contain"
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;