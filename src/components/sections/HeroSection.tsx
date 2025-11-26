import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Inovasi Farmasi untuk{" "}
            <span className="text-blue-600">Kesehatan Masyarakat</span>
          </h1>
          <p className="mb-8 text-lg text-gray-600 sm:text-xl">
            Kami berkomitmen menyediakan produk farmasi berkualitas tinggi dengan
            standar internasional untuk meningkatkan kualitas hidup dan kesehatan
            masyarakat Indonesia.
          </p>
          <Button size="lg" className="gap-2 text-lg px-8 py-6">
            Pelajari Lebih Lanjut
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

