import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical, Factory, Truck, ShieldCheck } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Penelitian & Pengembangan",
    description: "Inovasi berkelanjutan dalam pengembangan produk farmasi baru dengan teknologi terdepan.",
    icon: FlaskConical,
  },
  {
    id: 2,
    name: "Manufaktur Kontrak",
    description: "Layanan produksi berkualitas tinggi dengan standar cGMP untuk berbagai produk farmasi.",
    icon: Factory,
  },
  {
    id: 3,
    name: "Distribusi & Logistik",
    description: "Jaringan distribusi luas dan efisien untuk memastikan ketersediaan produk di seluruh Indonesia.",
    icon: Truck,
  },
  {
    id: 4,
    name: "Quality Assurance",
    description: "Sistem jaminan kualitas komprehensif dengan sertifikasi internasional dan audit berkala.",
    icon: ShieldCheck,
  },
]

export function ServicesSection() {
  return (
    <section id="jasa" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Layanan Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Solusi lengkap untuk kebutuhan farmasi Anda dari hulu hingga hilir
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="bg-white transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

