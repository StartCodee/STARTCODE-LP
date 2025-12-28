import React from "react";
import { Badge } from "./ui/badge";
import { CheckCircle, Zap, Shield, Users, Code, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const valueIcons = [<Zap className="h-6 w-6" />, <Shield className="h-6 w-6" />, <Code className="h-6 w-6" />, <Users className="h-6 w-6" />];
  const values = t("about.values");
  const achievements = t("about.achievements");

  return (
    <section id="about" className="py-20 lg:py-28 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1">
                <Rocket className="h-3 w-3 mr-1" />
                {t("about.badge")}
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {t("about.title")}
                <span className="text-[#5e4bf5]">{t("about.highlight")}</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.p1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#5e4bf5] flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-[#5e4bf5]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#5e4bf5]/10 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-[#5e4bf5]/10 text-[#5e4bf5] group-hover:bg-[#5e4bf5]/20 transition-colors duration-300">
                    {valueIcons[index]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#5e4bf5] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
