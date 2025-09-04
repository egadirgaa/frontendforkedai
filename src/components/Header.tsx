import { Button } from "./ui/button";
import { Search, Menu, User, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-yellow-400" />
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              KedaiKomik
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">
              Beranda
            </a>
            <a href="#popular" className="text-white/90 hover:text-white transition-colors">
              Populer
            </a>
            <a href="#genres" className="text-white/90 hover:text-white transition-colors">
              Genre
            </a>
            <a href="#new" className="text-white/90 hover:text-white transition-colors">
              Terbaru
            </a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              Tentang
            </a>
          </nav>

          {/* Search / User / Menu */}
          <div className="flex items-center space-x-4">
            {isSearchActive ? (
              <form
                className="flex items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Searching:", searchQuery);
                  setIsSearchActive(false);
                  setSearchQuery("");
                }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  placeholder="Cari komik..."
                  className="px-3 py-1 rounded-md bg-white/80 border border-white text-white/90 placeholder-white focus:outline-none focus:bg-black/50 focus:ring-1 focus:ring-yellow-400"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="ml-2 text-white hover:text-yellow-400 hover:bg-white/10"
                  onClick={() => setIsSearchActive(false)}
                >
                  X
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-yellow-400 hover:bg-white/10"
                onClick={() => setIsSearchActive(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-white hover:text-yellow-400 hover:bg-white/10"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-yellow-400 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/40 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                Beranda
              </a>
              <a href="#popular" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                Populer
              </a>
              <a href="#genres" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                Genre
              </a>
              <a href="#new" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                Terbaru
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                Tentang
              </a>
              <div className="px-4 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-white hover:text-yellow-400 hover:bg-white/10"
                >
                  <User className="h-5 w-5 mr-2" />
                  Profil
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
