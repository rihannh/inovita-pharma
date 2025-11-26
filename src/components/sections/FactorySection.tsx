 "use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle2, Building2, Shield, Gauge } from "lucide-react"

const facilities = [
  {
    icon: Shield,
    title: "Sertifikasi cGMP",
    description: "Fasilitas produksi memenuhi standar Current Good Manufacturing Practice",
  },
  {
    icon: Building2,
    title: "Area Produksi Modern",
    description: "Ruang produksi dengan teknologi terdepan dan sistem kontrol kualitas ketat",
  },
  {
    icon: Gauge,
    title: "Quality Control Lab",
    description: "Laboratorium kontrol kualitas dengan peralatan analitik canggih",
  },
  {
    icon: CheckCircle2,
    title: "Sistem Manajemen ISO",
    description: "Sertifikasi ISO 9001:2015 untuk sistem manajemen kualitas",
  },
]

export function FactorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Fasilitas Produksi
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Pabrik modern dengan standar internasional untuk kualitas terbaik
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Factory Image with preview */}
            <div className="flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative h-full min-h-[400px] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm transition hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none">
                    <div className="absolute inset-0">
                      <Image
                        src="/images/Denah.png"
                        alt="Denah fasilitas produksi"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        priority
                      />
                    </div>
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/30 px-6 text-center text-white backdrop-blur-[2px] transition group-hover:bg-black/20">
                      <Building2 className="mb-4 h-16 w-16 text-white/80" />
                      <p className="text-lg font-semibold">Denah Fasilitas Pabrik</p>
                      <p className="text-sm text-white/80">Klik untuk melihat ukuran penuh</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 z-20 bg-blue-600 text-white"
                    >
                      cGMP Certified
                    </Badge>
                  </button>
                </DialogTrigger>
                <DialogContent className="border-none bg-transparent p-0 shadow-none min-w-full h-[90vh]">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Denah Fasilitas Pabrik</DialogTitle>
                    <DialogDescription>Preview ukuran penuh denah pabrik</DialogDescription>
                  </DialogHeader>
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/Denah.png"
                      alt="Denah fasilitas produksi - tampilan penuh"
                      fill
                      className="rounded-xl object-contain bg-white"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Facility Features */}
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Standar Kualitas Internasional
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fasilitas produksi kami dirancang dan dioperasikan sesuai
                    dengan standar internasional untuk memastikan kualitas,
                    keamanan, dan efektivitas setiap produk yang kami hasilkan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {facilities.map((facility, index) => {
                      const Icon = facility.icon
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                              <Icon className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {facility.title}
                            </h4>
                            <p className="mt-1 text-sm text-gray-600">
                              {facility.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

