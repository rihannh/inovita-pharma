import Link from "next/link"
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Produk", href: "#produk" },
  { name: "Jasa", href: "#jasa" },
  { name: "Profil", href: "#profil" },
  { name: "Kontak", href: "#kontak" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-12 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">PF</span>
              </div>
              <span className="font-bold text-xl text-white">PharmaFirst</span>
            </div>
            <p className="mb-4 text-sm">
              Perusahaan farmasi terpercaya dengan komitmen terhadap kualitas,
              inovasi, dan kesehatan masyarakat Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Informasi Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">
                  Jl. Industri Raya No. 123
                  <br />
                  Jakarta Utara 14240
                  <br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@pharmafirst.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@pharmafirst.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+62211234567"
                  className="text-sm hover:text-white transition-colors"
                >
                  +62 21 1234 5678
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Media Sosial
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} PharmaFirst. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

