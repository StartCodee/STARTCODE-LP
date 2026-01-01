import React from "react";
import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-14 max-w-3xl">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-[#5e4bf5]">Beranda</Link> / Peta Situs
          </p>
          <h1 className="text-3xl font-bold">Peta Situs</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Navigasi cepat ke halaman dan bagian utama.
          </p>
        </div>

        <div className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Halaman</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-[#5e4bf5]">Beranda</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#5e4bf5]">Kebijakan Privasi</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#5e4bf5]">Syarat Layanan</Link></li>
              <li><Link to="/sitemap" className="hover:text-[#5e4bf5]">Peta Situs</Link></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Bagian di Beranda</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><a href="/#about" className="hover:text-[#5e4bf5]">Tentang</a></li>
              <li><a href="/#services" className="hover:text-[#5e4bf5]">Layanan</a></li>
              <li><a href="/#portfolio" className="hover:text-[#5e4bf5]">Portofolio</a></li>
              <li><a href="/#process" className="hover:text-[#5e4bf5]">Proses</a></li>
              <li><a href="/#contact" className="hover:text-[#5e4bf5]">Kontak</a></li>
            </ul>
          </section>

          <div className="pt-6 border-t border-border text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#5e4bf5]">← Kembali ke Beranda</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
