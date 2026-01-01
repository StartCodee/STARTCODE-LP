import React from "react";
import { Link } from "react-router-dom";

const Section = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  const lastUpdated = "1 Januari 2026";

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-14 max-w-3xl">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-[#5e4bf5]">Beranda</Link> / Kebijakan Privasi
          </p>
          <h1 className="text-3xl font-bold">Kebijakan Privasi</h1>
          <p className="text-sm text-muted-foreground mt-2">Terakhir diperbarui: {lastUpdated}</p>
        </div>

        <div className="space-y-10">
          <Section title="Ringkasan">
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana StartCode (“kami”) mengumpulkan, menggunakan, menyimpan,
              dan melindungi informasi pribadi Anda saat mengakses situs, menghubungi kami, atau menggunakan layanan kami.
            </p>
          </Section>

          <Section title="Informasi yang Kami Kumpulkan">
            <ul className="list-disc pl-5 space-y-2">
              <li><b>Data identitas & kontak:</b> nama, email, nomor telepon, perusahaan.</li>
              <li><b>Isi komunikasi:</b> pesan yang Anda kirim melalui form (mis. kebutuhan proyek/permintaan demo).</li>
              <li><b>Data penggunaan:</b> data teknis seperti alamat IP, perangkat, browser, dan halaman yang dikunjungi (bila memakai analytics).</li>
              <li><b>Newsletter:</b> email jika Anda memilih berlangganan.</li>
            </ul>
          </Section>

          <Section title="Cara Kami Menggunakan Informasi">
            <ul className="list-disc pl-5 space-y-2">
              <li>Menindaklanjuti pertanyaan dan permintaan Anda.</li>
              <li>Memberikan layanan, dukungan, dan administrasi proyek.</li>
              <li>Mengirim update/marketing jika Anda berlangganan.</li>
              <li>Menjaga keamanan dan mencegah penyalahgunaan/spam.</li>
            </ul>
          </Section>

          <Section title="Berbagi Informasi">
            <p>
              Kami dapat menggunakan penyedia layanan pihak ketiga (mis. hosting, formulir, analytics, email) untuk membantu operasional.
              Kami tidak menjual informasi pribadi Anda.
            </p>
          </Section>

          <Section title="Keamanan & Retensi">
            <p>
              Kami menerapkan langkah keamanan yang wajar untuk melindungi data. Data disimpan selama diperlukan untuk tujuan yang dijelaskan,
              kecuali diwajibkan lebih lama oleh hukum.
            </p>
          </Section>

          <Section title="Hak Anda">
            <ul className="list-disc pl-5 space-y-2">
              <li>Meminta akses, koreksi, atau penghapusan data (sesuai ketentuan).</li>
              <li>Menarik persetujuan (mis. berhenti newsletter).</li>
            </ul>
          </Section>

          <Section title="Kontak">
            <p>
              Pertanyaan terkait privasi: <b>hello@startcode.id</b>
            </p>
          </Section>

          <div className="pt-6 border-t border-border text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#5e4bf5]">← Kembali ke Beranda</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
