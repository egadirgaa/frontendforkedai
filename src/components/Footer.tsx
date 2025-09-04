import { BookOpen, Github, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                KedaiKomik
              </span>
            </div>
            <p className="text-white/70 max-w-sm">
              Platform terdepan untuk membaca komik digital dari berbagai genre. 
              Nikmati pengalaman membaca yang tak terlupakan dengan koleksi terlengkap.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "#home" },
                { name: "Komik Populer", href: "#popular" },
                { name: "Genre", href: "#genres" },
                { name: "Rilis Terbaru", href: "#new" },
                { name: "Tentang Kami", href: "#about" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Kategori</h3>
            <ul className="space-y-3">
              {[
                "Action & Adventure",
                "Romance & Drama",
                "Fantasy & Magic",
                "Horror & Thriller",
                "Comedy & Slice of Life",
                "Sci-Fi & Mecha",
              ].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white hover:text-yellow-400 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white/70">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>KedaiKomik@belumada.id</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>+62 123 bagi seribu</span>
              </li>
              <li className="flex items-start space-x-3 text-white/70">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span>Jl. Kedai Komik No. 666<br />Bangko, Kab.Merangin, Jambi, Indonesia</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="space-y-3 pt-4">
              <h4 className="text-white font-semibold">Newsletter</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  Kirim
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 2024 KedaiKomik. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}