import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, GraduationCap } from "lucide-react"

const csrActivities = [
  {
    id: 1,
    title: "Program Kesehatan Masyarakat",
    description: "Melakukan pemeriksaan kesehatan gratis dan penyuluhan kesehatan di berbagai daerah tertinggal di Indonesia.",
    icon: Heart,
  },
  {
    id: 2,
    title: "Beasiswa Pendidikan Kesehatan",
    description: "Menyediakan beasiswa untuk mahasiswa kesehatan dan farmasi di universitas-universitas terkemuka.",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Bantuan Bencana & Kemanusiaan",
    description: "Berkontribusi aktif dalam penanggulangan bencana melalui donasi produk kesehatan dan bantuan medis.",
    icon: Users,
  },
]

export function CSRSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Kegiatan Kemasyarakatan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Komitmen kami terhadap tanggung jawab sosial dan pemberdayaan
            masyarakat
          </p>
        </div>
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-lg text-gray-700">
            Sebagai perusahaan yang peduli terhadap masyarakat, kami aktif
            dalam berbagai kegiatan sosial yang bertujuan untuk meningkatkan
            kualitas hidup dan kesehatan masyarakat Indonesia. Kami percaya
            bahwa bisnis yang berkelanjutan harus sejalan dengan kontribusi
            positif terhadap masyarakat.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {csrActivities.map((activity) => {
            const Icon = activity.icon
            return (
              <Card key={activity.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-gray-100 p-8">
            <p className="text-gray-700">
              <span className="font-semibold">Contoh Kegiatan:</span> Pada tahun
              2023, kami telah melaksanakan program kesehatan di 15 desa
              terpencil, memberikan akses pemeriksaan kesehatan dan edukasi
              kesehatan dasar kepada lebih dari 5.000 masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

