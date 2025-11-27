import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, ListChecks } from "lucide-react"

const missionPoints = [
  "Memproduksi sediaan farmasi yang memenuhi standar nasional dan internasional, termasuk CPOB, untuk menjamin mutu dan keamanan produk",
  "Memberikan pelayanan yang profesional, responsif, dan berorientasi pada kepuasan pelanggan serta kebutuhan masyarakat",
  "Mengembangkan portofolio produk melalui riset dan teknologi terkini yang berbasis kebutuhan terapi dan tren kesehatan global.",
  "Membangun jaringan distribusi yang luas, efektif, dan terpercaya demi memastikan aksesibilitas produk yang merata",
  "Meningkatkan kualitas dan kompetensi sumber daya manusia melalui pelatihan berkelanjutan, budaya kerja yang unggul, dan tata kelola yang profesional.",
  "Berperan aktif dalam program peningkatan derajat kesehatan masyarakat melalui edukasi, kolaborasi, dan kontribusi sosial yang berkelanjutan",
]

export function VisionMission() {
  return (
    <section className="py-20 bg-linear-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl">
            Visi & Misi
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <Card className="bg-white max-h-fit md:max-h-full">
              <CardHeader>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Target className="h-6 w-6 text-blue-600 " />
                </span>
                <CardTitle className="text-2xl">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                Menjadi perusahaan farmasi terkemuka yang berkomitmen pada kualitas, keamanan, dan inovasi produk, serta menjadi mitra terpercaya dalam mendukung peningkatan kualitas kesehatan masyarakat.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-white">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <ListChecks className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

