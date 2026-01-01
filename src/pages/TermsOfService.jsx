import React from "react";
import { Link } from "react-router-dom";

const Section = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function TermsOfService() {
  const lastUpdated = "1 Januari 2026";

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-14 max-w-3xl">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-[#5e4bf5]">Beranda</Link> / Syarat Layanan
          </p>
          <h1 className="text-3xl font-bold">Syarat Layanan</h1>
          <p className="text-sm text-muted-foreground mt-2">Terakhir diperbarui: {lastUpdated}</p>
        </div>

        <div className="space-y-10">
          <Section title="1. Ketentuan Umum">
            <p>
              Dengan mengakses situs atau menggunakan layanan StartCode (“kami”), Anda menyetujui Syarat Layanan ini.
            </p>
          </Section>

          <Section title="2. Layanan">
            <p>
              Kami menyediakan layanan pengembangan digital (website, aplikasi, desain, konsultasi, dan layanan terkait) sesuai penawaran/kontrak yang disepakati.
            </p>
          </Section>

          <Section title="3. Kewajiban Pengguna">
            <ul className="list-disc pl-5 space-y-2">
              <li>Memberikan informasi yang benar saat menghubungi kami.</li>
              <li>Tidak melakukan aktivitas ilegal, spam, atau mencoba mengganggu sistem.</li>
              <li>Menghormati hak kekayaan intelektual dan privasi pihak lain.</li>
            </ul>
          </Section>

          <Section title="4. Kekayaan Intelektual">
            <p>
              Konten situs (logo, teks, desain) milik StartCode atau pihak pemberi lisensi. Penggunaan tanpa izin tertulis dilarang.
              Ketentuan kepemilikan aset proyek mengikuti kontrak/penawaran yang disepakati.
            </p>
          </Section>

          <Section title="5. Penafian & Batasan Tanggung Jawab">
            <p>
              Situs disediakan “sebagaimana adanya”. Sepanjang diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial,
              kecuali ditentukan lain dalam kontrak.
            </p>
          </Section>

          <Section title="6. Hukum yang Berlaku">
            <p>
              Syarat ini diatur oleh hukum Republik Indonesia. Sengketa diupayakan melalui musyawarah, atau mengikuti ketentuan yang berlaku/kontrak.
            </p>
          </Section>

          <Section title="Kontak">
            <p>Untuk pertanyaan: <b>hello@startcode.id</b></p>
          </Section>

          <div className="pt-6 border-t border-border text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#5e4bf5]">← Kembali ke Beranda</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
