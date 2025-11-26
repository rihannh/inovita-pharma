"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const historyParagraphs = [
  "PT Inovita Pharma didirikan pada tahun 2018 sebagai perusahaan farmasi yang lahir dari semangat generasi muda Farmasi Universitas Sriwijaya (UNSRI) untuk memberikan kontribusi nyata dalam bidang kesehatan. Perusahaan ini berawal dari ide sekelompok farmasis dan ilmuwan muda yang menyadari masih terbatasnya akses masyarakat terhadap obat-obatan berkualitas dengan harga yang terjangkau, khususnya di wilayah Sumatera Selatan dan sekitarnya.",
  "Sejak berdiri, PT Inovita Pharma menempatkan inovasi, kualitas, dan keamanan produk sebagai prioritas utama. Fokus perusahaan adalah pada produksi sediaan farmasi non-steril beta laktam dan sediaan steril yang memenuhi standar Cara Pembuatan Obat yang Baik (CPOB) serta standar internasional lainnya. Hal ini sejalan dengan visi perusahaan untuk menjadi perusahaan farmasi terkemuka yang berkomitmen pada kualitas, keamanan, dan inovasi produk, serta menjadi mitra terpercaya dalam mendukung peningkatan kualitas kesehatan masyarakat.",
  "Dalam perjalanannya yang masih relatif singkat, PT Inovita Pharma telah mengembangkan portofolio produk yang semakin beragam melalui riset dan teknologi terkini. Perusahaan juga membangun jaringan distribusi yang efektif untuk memastikan produk dapat menjangkau masyarakat luas secara merata. Tidak hanya fokus pada bisnis, PT Inovita Pharma juga aktif menjalankan program sosial berupa edukasi kesehatan, kolaborasi dengan institusi akademik, serta kontribusi dalam berbagai kegiatan masyarakat.",
  "Sebagai perusahaan yang berakar kuat di Palembang, PT Inovita Pharma menjunjung tinggi nilai kebersamaan, profesionalisme, dan integritas. Dengan dukungan sumber daya manusia yang kompeten dan budaya kerja yang unggul, perusahaan berkomitmen terus tumbuh dan berkembang, serta berperan aktif dalam meningkatkan derajat kesehatan masyarakat baik di tingkat regional maupun nasional.",
]

export function CompanyHistory() {
  const [expanded, setExpanded] = useState(false)
  const visibleParagraphs = expanded ? historyParagraphs : historyParagraphs.slice(0, 2)

  return (
    <section id="profil" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Sejarah Perusahaan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Perjalanan panjang kami dalam mewujudkan visi kesehatan untuk semua
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm md:p-10">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {visibleParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-24 h-24 bg-gradient-to-t from-white to-transparent" />
            )}
            <div className="mt-10 flex justify-center">
              <Button variant="outline" onClick={() => setExpanded((prev) => !prev)}>
                {expanded ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

