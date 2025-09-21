import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  
  const projects = [
  {
    id: 1,
    title: "ETWPAD",
    description: "Elektronik Tabungan Wajib Perumahan TNI AD - financial web admin and Android app.",
    image: "/images/etwpad.webp",
    technologies: ["Laravel", "Go", "Livewire", "Bootstrap", "PostgreSQL", "Nginx"],
    category: "Web Development",
    client: "TNI AD",
    year: "2021-2022",
    features: ["E-Akunting", "E-TPPAD", "E-BALTAB", "E-KPR", "Bank Integrations"],
    results: "Used nationally by TNI AD, 50,000+ downloads on Google Play."
  },
  {
    id: 2,
    title: "SMART BKAD",
    description: "SMART BKAD - Sistem Manajemen Anggaran Terintegrasi untuk BKAD Kota Bogor.",
    image: "images/bkad.webp",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Apache"],
    category: "Web Development",
    client: "BKAD Kota Bogor",
    year: "2023",
    features: ["E-Office", "SPM", "SKPP", "Archive Management", "BSrE E-Sign"],
    results: "Digitized financial processes in Bogor regional government."
  },
  {
    id: 3,
    title: "AMANDA Telkomsel",
    description: "Digital Marketing Platform integrating Google, Instagram, Facebook, and TikTok Ads.",
    image: "images/DMP.webp",
    technologies: ["Flask", "Next.js", "Tailwind", "PostgreSQL", "Nginx"],
    category: "Web Development",
    client: "Telkomsel",
    year: "2023",
    features: ["Ad Integration", "Reporting Dashboard", "Bug Fixing & Feed Improvement"],
    results: "Enhanced ad performance reporting and campaign management."
  },
  {
    id: 4,
    title: "Refmed",
    description: "Rekam Medis Elektronik dengan integrasi Satusehat dan BPJS.",
    image: "images/refmed.webp",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Nginx"],
    category: "Web Development",
    client: "Healthcare Clinics",
    year: "2024",
    features: ["Satusehat & BPJS Integration", "Pharmacy & Lab Modules", "Queue & Consultation"],
    results: "Digitized clinical records with multi-feature EMR platform."
  },
  {
    id: 5,
    title: "Plantsasri",
    description: "Plant import/export platform with international payments and DHL/UPS integration.",
    image: "images/plantsasri.webp",
    technologies: ["Laravel", "Bootstrap", "Firebase", "MySQL", "Apache", "Midtrans", "Stripe", "Paypal"],
    category: "Web Development",
    client: "Indonesian Farmers",
    year: "2022",
    features: ["International Shipping", "Multi-Payments", "Realtime Tracking"],
    results: "Connected Indonesian farmers to global market buyers."
  },
    {
    id: 6,
    title: "DPKPP Simpol",
    description: "Aplikasi untuk mengelola data IMB (Izin Mendirikan Bangunan) dari DPKPP Kota Bogor.",
    image: "images/simpol.webp",
    technologies: ["Laravel", "PHP", "Bootstrap", "MySQL", "Apache"],
    category: "Web Development",
    client: "DPKPP Kota Bogor",
    year: "2025",
    features: ["Data Management", "IMB Processing", "Reporting & Archiving"],
    results: "Digitized IMB management process for DPKPP Kota Bogor."
    },

  {
    id: 7,
    title: "Sidak BI",
    description: "Sistem Informasi Pengendalian Harga dan Pasokan (SIDAK) for Bank Indonesia Sulteng.",
    image: "images/sidak.webp",
    technologies: ["Express", "Next.js", "Tailwind", "Firebase", "PostgreSQL", "Nginx"],
    category: "Web Development",
    client: "Bank Indonesia Sulteng",
    year: "2024",
    features: ["Commodity Monitoring", "Realtime Data", "API Integration"],
    results: "Provided realtime commodity price & supply monitoring."
  },
 {
  id: 8,
  title: "Gencerling",
  description: "Generasi Cerdas Lingkungan.",
  image: "images/gencerling.webp",
  technologies: ["Laravel", "Bootstrap", "MySQL", "S3", "Apache"],
  category: "Web Development",
  client: "Educational Community",
  year: "2025",
  features: ["Content Upload", "Learning Showcase", "Student Projects"],
  results: "Provided a digital platform for students to share and showcase their learning projects."
},
  {
    id: 9,
    title: "MPP Kota Depok",
    description: "Mal Pelayanan Publik Kota Depok - mobile platform for public services.",
    image: "images/mpp.png",
    technologies: ["Laravel", "Tailwind", "Flutter", "Firebase", "MySQL", "Nginx"],
    category: "Mobile Development",
    client: "Depok City Government",
    year: "2023",
    features: ["Public Services", "Consultation", "Interactive Maps", "User-Friendly Services","Problem Reporting", "Event Notifications"],
    results: "Improved transparency & accessibility of local government services."
  },
 
  {
    id: 11,
    title: "Redhunter Page",
    description: "Redhunter LMS + QA & Testing Automation with Appium & Selenium.",
    image: "images/redhunter-page.webp",
    technologies: ["Laravel", "Flask", "Next.js", "Appium", "Selenium", "Tailwind", "PostgreSQL", "MongoDB", "Apache"],
    category: "Web Development",
    client: "Redhunter Academy",
    year: "2022",
    features: ["Learning Portal", "Quizzes", "Automation Testing"],
    results: "Built LMS and QA/QC automation system."
  },
  {
    id: 12,
    title: "Branding ABL",
    description: "Branding project for ABL.",
    image: "images/branding-ABL.webp",
    technologies: ["YouTube"],
    category: "Branding",
    client: "ABL",
    year: "2024",
    features: ["Media Production", "Brand Awareness"],
    results: "Enhanced ABL's digital branding presence."
  },
  {
    id: 13,
    title: "Branding DJP",
    description: "Branding project for DJP.",
    image: "images/branding-DJP.webp",
    technologies: ["YouTube"],
    category: "Branding",
    client: "DJP",
    year: "2024",
    features: ["Media Production", "Digital Branding"],
    results: "Improved DJP’s public branding through media campaigns."
  },
  {
    id: 14,
    title: "Branding IPB",
    description: "Branding project for IPB.",
    image: "images/branding-IPB.webp",
    technologies: ["YouTube"],
    category: "Branding",
    client: "IPB University",
    year: "2024",
    features: ["Media Content", "Brand Visibility"],
    results: "Promoted IPB’s educational branding to wider audience."
  },
  {
    id: 15,
    title: "Branding Kemensos",
    description: "Branding project for Kemensos.",
    image: "images/branding-kemensos.webp",
    technologies: ["YouTube"],
    category: "Branding",
    client: "Ministry of Social Affairs (Kemensos)",
    year: "2024",
    features: ["Media Campaign", "Social Awareness"],
    results: "Strengthened Kemensos digital outreach."
  },
  {
    id: 16,
    title: "Branding Dokter Siska",
    description: "Branding project for Dokter Siska.",
    image: "images/branding-dokter-siska.webp",
    technologies: ["YouTube"],
    category: "Branding",
    client: "Dokter Siska",
    year: "2024",
    features: ["Media", "Branding"],
    results: "Improved Dokter Siska’s professional branding."
  },
  {
    id: 17,
    title: "Branding Travel Wifi",
    description: "Branding project for Travel Wifi.",
    image: "images/branding-Travel-wifi.webp",
    technologies: ["YouTube"],
    category: "Branding",
    client: "Travel Wifi",
    year: "2024",
    features: ["Media", "Branding"],
    results: "Increased visibility of Travel Wifi services."
  },
  {
    id: 18,
    title: "Scindapsus",
    description: "Scindapsus Community - plant portal and encyclopedia.",
    image: "images/scindapsus.webp",
    technologies: ["Laravel", "PHP", "MySQL", "Apache"],
    category: "Web Development",
    client: "Plant Enthusiasts Community",
    year: "2022",
    features: ["Community Portal", "Plant Encyclopedia"],
    results: "Provided comprehensive knowledge about Indonesian flora."
  },
  {
    id: 19,
    title: "PLAB",
    description: "PLab SMKN 4 - lab booking system for students.",
    image: "images/plab.png",
    technologies: ["Laravel", "PHP", "MySQL", "Apache"],
    category: "Web Development",
    client: "SMKN 4 Bogor",
    year: "2021",
    features: ["Lab Booking", "Schedule Management"],
    results: "Solved lab overbooking issues in school."
  },
  {
    id: 20,
    title: "SMK3",
    description: "SMKN 3 Bogor website and education platform.",
    image: "images/smk3.png",
    technologies: ["Next.js", "Ant Design", "PostgreSQL", "Nginx"],
    category: "eb Development",
    client: "SMKN 3 Bogor",
    year: "2021",
    features: ["School Profile", "PPDB Registration", "Student Info"],
    results: "Digitized school profile & registration system."
  }
];





  const categories = ["All", "Web Development", "Mobile Development", "Branding"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-3 py-1 mb-4">
              Our Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Showcasing our 
              <span className="text-[#5e4bf5]"> best work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category 
                    ? "bg-[#5e4bf5] hover:bg-[#5038d4] text-white" 
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <Card 
                key={project.id}
                className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-xl hover:shadow-[#5e4bf5]/10 transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500  group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e4bf5] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
    {selectedProject && (
  <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
    <DialogContent className="sm:max-w-4xl">
      <DialogHeader>
        <DialogTitle className="flex items-center justify-between">
          {selectedProject.title}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedProject(null)}
            className="h-6 w-6 rounded-full"
          >
          </Button>
        </DialogTitle>
      </DialogHeader>

      {/* Konten panjang untuk test scroll */}
        <div className="space-y-6">
        {/* Full-size image */}
        <div className="w-full flex justify-center rounded-lg overflow-hidden">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full  rounded object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground mb-4">
              {selectedProject.description}
            </p>
            <div className="space-y-3">
              <div><strong>Client:</strong> {selectedProject.client}</div>
              <div><strong>Year:</strong> {selectedProject.year}</div>
              <div><strong>Category:</strong> {selectedProject.category}</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-[#5e4bf5] rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-3">Results</h3>
            <p className="text-muted-foreground mb-4">
              {selectedProject.results}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProject.technologies.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button className="bg-[#5e4bf5] hover:bg-[#5038d4] text-white">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Live Project
          </Button>
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            View Code
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