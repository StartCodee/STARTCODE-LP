import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Seo title="Halaman Tidak Ditemukan" description="404" noIndex />
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-3">404</h1>
        <p className="text-muted-foreground mb-8">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <Button asChild className="bg-[#5e4bf5] hover:bg-[#5038d4] text-white">
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </main>
  );
}
