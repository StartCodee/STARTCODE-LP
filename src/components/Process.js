import React from "react";
import { Badge } from "./ui/badge";
import { Search, Palette, Code, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  const steps = t("processSection.steps");
  const icons = [<Search className="h-8 w-8" />, <Palette className="h-8 w-8" />, <Code className="h-8 w-8" />, <Rocket className="h-8 w-8" />];

  return (
    <section id="process" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="px-3 py-1 mb-4">
            {t("processSection.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t("processSection.title")}
            <span className="text-[#5e4bf5]">{t("processSection.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("processSection.desc")}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5e4bf5]/20 via-[#5e4bf5]/60 to-[#5e4bf5]/20 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-[#5e4bf5]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#5e4bf5]/10 hover:-translate-y-2 relative z-10">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-[#5e4bf5] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5e4bf5]/10 to-[#7c3aed]/10 rounded-2xl flex items-center justify-center text-[#5e4bf5] group-hover:bg-gradient-to-br group-hover:from-[#5e4bf5]/20 group-hover:to-[#7c3aed]/20 transition-all duration-300">
                      {icons[index]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e4bf5] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[#5e4bf5] rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 bg-[#5e4bf5] rounded-full transform -translate-y-1/2 z-20 shadow-lg">
                  <div className="absolute inset-0 bg-[#5e4bf5] rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#5e4bf5]/5 to-transparent rounded-2xl border border-[#5e4bf5]/20">
          <h3 className="text-xl font-bold mb-4">{t("processSection.bottomCta.title")}</h3>
          <p className="text-muted-foreground mb-6">{t("processSection.bottomCta.desc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#5e4bf5] hover:bg-[#5038d4] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5e4bf5]/25">
              {t("common.startYourProject")}
            </button>
            <button className="px-6 py-3 border border-[#5e4bf5] text-[#5e4bf5] hover:bg-[#5e4bf5]/5 rounded-lg font-medium transition-all duration-300">
              {t("common.scheduleCall")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
