import React, { useCallback, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

// helper: pastikan path selalu diawali "/"
const normalizePath = (p) => (p?.startsWith("/") ? p : `/${p}`);

// helper: dari "/images/bkad.webp" -> base "bkad"
const baseNameFromImage = (imagePath) => {
  const p = normalizePath(imagePath);
  const file = p.split("/").pop() || "";
  return file.replace(/\.(png|jpe?g|webp)$/i, "");
};

// helper: pakai hasil optimasi di /images/optimized/<base>-{480|800|1200}.webp
const getResponsiveImageProps = (imagePath, sizes) => {
  const base = baseNameFromImage(imagePath);
  const src = `/images/optimized/${base}-800.webp`;

  return {
    src,
    srcSet: `/images/optimized/${base}-480.webp 480w, /images/optimized/${base}-800.webp 800w, /images/optimized/${base}-1200.webp 1200w`,
    sizes,
  };
};

const Portfolio = () => {
  const { t } = useLanguage();

  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data projects (tidak pakai t() di sini supaya stabil)
  const projects = useMemo(
    () => [
      {
        id: 1,
        categoryKey: "web",
        title: "ETWPAD",
        description:
          "Elektronik Tabungan Wajib Perumahan TNI AD - financial web admin and Android app.",
        image: "/images/etwpad.webp",
        technologies: ["Laravel", "Go", "Livewire", "Bootstrap", "PostgreSQL", "Nginx"],
        client: "TNI AD",
        year: "2021-2022",
        features: ["E-Akunting", "E-TPPAD", "E-BALTAB", "E-KPR", "Bank Integrations"],
        results: "Used nationally by TNI AD, 50,000+ downloads on Google Play.",
        liveUrl: "", // isi kalau ada
        codeUrl: "", // isi kalau ada
      },
      {
        id: 2,
        categoryKey: "web",
        title: "SMART BKAD",
        description: "SMART BKAD - Sistem Manajemen Anggaran Terintegrasi untuk BKAD Kota Bogor.",
        image: "/images/bkad.webp", // FIX: pakai leading slash
        technologies: ["Laravel", "Bootstrap", "MySQL", "Apache"],
        client: "BKAD Kota Bogor",
        year: "2023",
        features: ["E-Office", "SPM", "SKPP", "Archive Management", "BSrE E-Sign"],
        results: "Digitized financial processes in Bogor regional government.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 3,
        categoryKey: "web",
        title: "AMANDA Telkomsel",
        description:
          "Digital Marketing Platform integrating Google, Instagram, Facebook, and TikTok Ads.",
        image: "/images/DMP.webp",
        technologies: ["Flask", "Next.js", "Tailwind", "PostgreSQL", "Nginx"],
        client: "Telkomsel",
        year: "2023",
        features: ["Ad Integration", "Reporting Dashboard", "Bug Fixing & Feed Improvement"],
        results: "Enhanced ad performance reporting and campaign management.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 4,
        categoryKey: "web",
        title: "Refmed",
        description: "Rekam Medis Elektronik dengan integrasi Satusehat dan BPJS.",
        image: "/images/refmed.webp",
        technologies: ["Laravel", "Bootstrap", "MySQL", "Nginx"],
        client: "Healthcare Clinics",
        year: "2024",
        features: ["Satusehat & BPJS Integration", "Pharmacy & Lab Modules", "Queue & Consultation"],
        results: "Digitized clinical records with multi-feature EMR platform.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 5,
        categoryKey: "web",
        title: "Plantsasri",
        description:
          "Plant import/export platform with international payments and DHL/UPS integration.",
        image: "/images/plantsasri.webp",
        technologies: ["Laravel", "Bootstrap", "Firebase", "MySQL", "Apache", "Midtrans", "Stripe", "Paypal"],
        client: "Indonesian Farmers",
        year: "2022",
        features: ["International Shipping", "Multi-Payments", "Realtime Tracking"],
        results: "Connected Indonesian farmers to global market buyers.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 6,
        categoryKey: "web",
        title: "DPKPP Simpol",
        description: "Aplikasi untuk mengelola data IMB (Izin Mendirikan Bangunan) dari DPKPP Kota Bogor.",
        image: "/images/simpol.webp",
        technologies: ["Laravel", "PHP", "Bootstrap", "MySQL", "Apache"],
        client: "DPKPP Kota Bogor",
        year: "2025",
        features: ["Data Management", "IMB Processing", "Reporting & Archiving"],
        results: "Digitized IMB management process for DPKPP Kota Bogor.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 7,
        categoryKey: "web",
        title: "Sidak BI",
        description:
          "Sistem Informasi Pengendalian Harga dan Pasokan (SIDAK) for Bank Indonesia Sulteng.",
        image: "/images/sidak.webp",
        technologies: ["Express", "Next.js", "Tailwind", "Firebase", "PostgreSQL", "Nginx"],
        client: "Bank Indonesia Sulteng",
        year: "2024",
        features: ["Commodity Monitoring", "Realtime Data", "API Integration"],
        results: "Provided realtime commodity price & supply monitoring.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 8,
        categoryKey: "web",
        title: "Gencerling",
        description: "Generasi Cerdas Lingkungan.",
        image: "/images/gencerling.webp",
        technologies: ["Laravel", "Bootstrap", "MySQL", "S3", "Apache"],
        client: "Educational Community",
        year: "2025",
        features: ["Content Upload", "Learning Showcase", "Student Projects"],
        results: "Provided a digital platform for students to share and showcase their learning projects.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 9,
        categoryKey: "mobile",
        title: "MPP Kota Depok",
        description: "Mal Pelayanan Publik Kota Depok - mobile platform for public services.",
        image: "/images/mpp.png",
        technologies: ["Laravel", "Tailwind", "Flutter", "Firebase", "MySQL", "Nginx"],
        client: "Depok City Government",
        year: "2023",
        features: ["Public Services", "Consultation", "Interactive Maps", "User-Friendly Services", "Problem Reporting", "Event Notifications"],
        results: "Improved transparency & accessibility of local government services.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 11,
        categoryKey: "web",
        title: "Redhunter Page",
        description: "Redhunter LMS + QA & Testing Automation with Appium & Selenium.",
        image: "/images/redhunter-page.webp",
        technologies: ["Laravel", "Flask", "Next.js", "Appium", "Selenium", "Tailwind", "PostgreSQL", "MongoDB", "Apache"],
        client: "Redhunter Academy",
        year: "2022",
        features: ["Learning Portal", "Quizzes", "Automation Testing"],
        results: "Built LMS and QA/QC automation system.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 12,
        categoryKey: "branding",
        title: "Branding ABL",
        description: "Branding project for ABL.",
        image: "/images/branding-ABL.webp",
        technologies: ["YouTube"],
        client: "ABL",
        year: "2024",
        features: ["Media Production", "Brand Awareness"],
        results: "Enhanced ABL's digital branding presence.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 13,
        categoryKey: "branding",
        title: "Branding DJP",
        description: "Branding project for DJP.",
        image: "/images/branding-DJP.webp",
        technologies: ["YouTube"],
        client: "DJP",
        year: "2024",
        features: ["Media Production", "Digital Branding"],
        results: "Improved DJP’s public branding through media campaigns.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 14,
        categoryKey: "branding",
        title: "Branding IPB",
        description: "Branding project for IPB.",
        image: "/images/branding-IPB.webp",
        technologies: ["YouTube"],
        client: "IPB University",
        year: "2024",
        features: ["Media Content", "Brand Visibility"],
        results: "Promoted IPB’s educational branding to wider audience.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 15,
        categoryKey: "branding",
        title: "Branding Kemensos",
        description: "Branding project for Kemensos.",
        image: "/images/branding-kemensos.webp",
        technologies: ["YouTube"],
        client: "Ministry of Social Affairs (Kemensos)",
        year: "2024",
        features: ["Media Campaign", "Social Awareness"],
        results: "Strengthened Kemensos digital outreach.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 16,
        categoryKey: "branding",
        title: "Branding Dokter Siska",
        description: "Branding project for Dokter Siska.",
        image: "/images/branding-dokter-siska.webp",
        technologies: ["YouTube"],
        client: "Dokter Siska",
        year: "2024",
        features: ["Media", "Branding"],
        results: "Improved Dokter Siska’s professional branding.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 17,
        categoryKey: "branding",
        title: "Branding Travel Wifi",
        description: "Branding project for Travel Wifi.",
        image: "/images/branding-Travel-wifi.webp",
        technologies: ["YouTube"],
        client: "Travel Wifi",
        year: "2024",
        features: ["Media", "Branding"],
        results: "Increased visibility of Travel Wifi services.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 18,
        categoryKey: "web",
        title: "Scindapsus",
        description: "Scindapsus Community - plant portal and encyclopedia.",
        image: "/images/scindapsus.webp",
        technologies: ["Laravel", "PHP", "MySQL", "Apache"],
        client: "Plant Enthusiasts Community",
        year: "2022",
        features: ["Community Portal", "Plant Encyclopedia"],
        results: "Provided comprehensive knowledge about Indonesian flora.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 19,
        categoryKey: "web",
        title: "PLAB",
        description: "PLab SMKN 4 - lab booking system for students.",
        image: "/images/plab.png",
        technologies: ["Laravel", "PHP", "MySQL", "Apache"],
        client: "SMKN 4 Bogor",
        year: "2021",
        features: ["Lab Booking", "Schedule Management"],
        results: "Solved lab overbooking issues in school.",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 20,
        categoryKey: "web",
        title: "SMK3",
        description: "SMKN 3 Bogor website and education platform.",
        image: "/images/smk3.png",
        technologies: ["Next.js", "Ant Design", "PostgreSQL", "Nginx"],
        client: "SMKN 3 Bogor",
        year: "2021",
        features: ["School Profile", "PPDB Registration", "Student Info"],
        results: "Digitized school profile & registration system.",
        liveUrl: "",
        codeUrl: "",
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { key: "all", label: t("portfolioSection.categories.all") },
      { key: "web", label: t("portfolioSection.categories.web") },
      { key: "mobile", label: t("portfolioSection.categories.mobile") },
      { key: "branding", label: t("portfolioSection.categories.branding") },
    ],
    [t]
  );

  const categoryMap = useMemo(
    () => ({
      all: t("portfolioSection.categories.all"),
      web: t("portfolioSection.categories.web"),
      mobile: t("portfolioSection.categories.mobile"),
      branding: t("portfolioSection.categories.branding"),
    }),
    [t]
  );

  const categoryLabel = useCallback(
    (key) => categoryMap[key] || key,
    [categoryMap]
  );

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === selectedCategory);
  }, [projects, selectedCategory]);

  const loadMore = useCallback(() => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  }, [filteredProjects.length]);

  const handleSelectCategory = useCallback((key) => {
    setSelectedCategory(key);
    setVisibleProjects(6);
  }, []);

  const openProject = useCallback((project) => setSelectedProject(project), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-3 py-1 mb-4">
              {t("portfolioSection.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("portfolioSection.title")}
              <span className="text-[#5e4bf5]">{t("portfolioSection.highlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t("portfolioSection.desc")}</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className={
                  selectedCategory === category.key
                    ? "bg-[#5e4bf5] hover:bg-[#5038d4] text-white"
                    : "hover:bg-muted/50"
                }
                onClick={() => handleSelectCategory(category.key)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.slice(0, visibleProjects).map((project, idx) => {
              const cardImg = getResponsiveImageProps(
                project.image,
                "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              );

              // kalau section ini kebetulan muncul above-the-fold, 1-2 gambar pertama jangan terlalu telat
              const eager = idx < 2;

              return (
                <Card
                  key={project.id}
                  className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-xl hover:shadow-[#5e4bf5]/10 transition-all duration-500 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-[#5e4bf5]/40"
                  onClick={() => openProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openProject(project);
                  }}
                  aria-label={`Open project details: ${project.title}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      {...cardImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      loading={eager ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={eager ? "low" : "auto"}
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {categoryLabel(project.categoryKey)}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e4bf5] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {/* ✅ Contrast fix: pakai Badge secondary/outline, bukan bg-muted + text-muted-foreground */}
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge
                          key={`${project.id}-tech-${i}`}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="px-8 hover:bg-muted/50"
              >
                {t("common.loadMoreProjects")}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) closeProject();
          }}
        >
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="w-full flex justify-center rounded-lg overflow-hidden">
                {(() => {
                  const modalImg = getResponsiveImageProps(
                    selectedProject.image,
                    "100vw"
                  );

                  return (
                    <img
                      {...modalImg}
                      alt={selectedProject.title}
                      className="w-full rounded object-cover"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  );
                })()}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">
                    {t("portfolioSection.modal.overview")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong>{t("portfolioSection.modal.client")}:</strong>{" "}
                      {selectedProject.client}
                    </div>
                    <div>
                      <strong>{t("portfolioSection.modal.year")}:</strong>{" "}
                      {selectedProject.year}
                    </div>
                    <div>
                      <strong>{t("portfolioSection.modal.category")}:</strong>{" "}
                      {categoryLabel(selectedProject.categoryKey)}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">
                    {t("portfolioSection.modal.keyFeatures")}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.features.map((feature, i) => (
                      <li key={`${selectedProject.id}-feat-${i}`} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[#5e4bf5] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-semibold mb-3">
                    {t("portfolioSection.modal.results")}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {selectedProject.results}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">{t("portfolioSection.modal.tech")}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Badge key={`${selectedProject.id}-alltech-${i}`} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  className="bg-[#5e4bf5] hover:bg-[#5038d4] text-white"
                  disabled={!selectedProject.liveUrl}
                  aria-disabled={!selectedProject.liveUrl}
                  aria-label={t("portfolioSection.modal.viewLive")}
                  onClick={() => {
                    if (selectedProject.liveUrl) window.open(selectedProject.liveUrl, "_blank", "noopener,noreferrer");
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("portfolioSection.modal.viewLive")}
                </Button>

                <Button
                  variant="outline"
                  disabled={!selectedProject.codeUrl}
                  aria-disabled={!selectedProject.codeUrl}
                  aria-label={t("portfolioSection.modal.viewCode")}
                  onClick={() => {
                    if (selectedProject.codeUrl) window.open(selectedProject.codeUrl, "_blank", "noopener,noreferrer");
                  }}
                >
                  <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("portfolioSection.modal.viewCode")}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Portfolio;
