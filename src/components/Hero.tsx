import { Button } from "./ui/button";
import { Play, Star, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const featuredComics = [
  {
    id: 1,
    title: "Hero Genesis",
    subtitle: "Chapter 45 - The Final Battle",
    description: "Petualangan epik seorang hero yang harus menyelamatkan dunia dari kehancuran total.",
    image: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG1hbmdhJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1Njk2NzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    genre: "Action",
    isNew: true,
  },
  {
    id: 2,
    title: "Mystic Chronicles", 
    subtitle: "Chapter 23 - The Awakening",
    description: "Dunia sihir dan misteri menanti di setiap halaman cerita yang menakjubkan ini.",
    image: "https://images.unsplash.com/photo-1620928572438-075c466c48da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTY5Njc3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    genre: "Fantasy",
    isHot: true,
  },
  {
    id: 3,
    title: "Celestial Journey",
    subtitle: "Chapter 67 - Beyond Stars",
    description: "Perjalanan luar angkasa yang memukau dengan visual yang spektakuler.",
    image: "https://images.unsplash.com/photo-1577720086808-ee62b140bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY5Njc3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    genre: "Sci-Fi",
    isHot: true,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pt-22">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Welcome Text
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Selamat Datang di Kedai Komik
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Jelajahi koleksi komik terlengkap dengan kualitas terbaik
          </p>
        </div> */}

        {/* Featured Comics Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredComics.map((comic) => (
                <CarouselItem key={comic.id}>
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Gambar sebagai cover */}
                    <ImageWithFallback
                      src={comic.image}
                      alt={comic.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay gradient biar tulisan kelihatan */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60" />
              
                    {/* Konten */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 p-8 lg:p-12 items-start">
                      {/* Badges */}
                      <div className="flex gap-2 mb-4">
                        <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                          {comic.genre}
                        </span>
                        {comic.isNew && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            NEW
                          </span>
                        )}
                        {comic.isHot && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            HOT
                          </span>
                        )}
                      </div>
                      
                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">{comic.title}</h2>
                        <p className="text-yellow-400">{comic.subtitle}</p>
                        <p className="text-white/70">{comic.description}</p>
                      
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-white/70">{comic.rating}</span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-3">
                          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600">
                            <Play className="w-4 h-4 mr-2" />
                            Baca Sekarang
                          </Button>
                          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Simpan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Genres Section */}
        <section id="genres">
          {/* <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Genre Favorit</h2>
          </div> */}
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
            {[
              { name: "Action", count: "1,234", color: "from-red-500 to-orange-500" },
              { name: "Romance", count: "987", color: "from-pink-500 to-rose-500" },
              { name: "Fantasy", count: "2,156", color: "from-purple-500 to-indigo-500" },
              { name: "Horror", count: "543", color: "from-gray-700 to-gray-900" },
              { name: "Sci-Fi", count: "876", color: "from-blue-500 to-cyan-500" },
              { name: "Comedy", count: "1,432", color: "from-yellow-400 to-orange-400" },
            ].map((genre) => (
              <div
                key={genre.name}
                className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-10 group-hover:opacity-20 rounded-xl transition-opacity`} />
                <div className="relative text-center">
                  <h3 className="text-white font-semibold mb-1">{genre.name}</h3>
                  <p className="text-white/60 text-sm">{genre.count} komik</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats
        <div className="flex flex-wrap justify-center gap-8 mt-12 lg:mt-16">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-yellow-400">10K+</div>
            <div className="text-sm text-white/70">Komik</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-green-400">500K+</div>
            <div className="text-sm text-white/70">Pembaca</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-blue-400">100+</div>
            <div className="text-sm text-white/70">Genre</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-purple-400">4.9</div>
            <div className="text-sm text-white/70">Rating</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}