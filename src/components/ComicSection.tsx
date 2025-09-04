import { ChevronRight, TrendingUp, Clock, Star } from "lucide-react";
import { Button } from "./ui/button";
import ComicCard from "./ComicCard";

const popularComics = [
  {
    title: "Dragon Quest Chronicles",
    author: "Akira Tanaka",
    genre: "Fantasy",
    rating: 4.8,
    views: "2.5M",
    chapters: 127,
    coverImage: "https://images.unsplash.com/photo-1740644545217-892da8cce224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGFuaW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc1Njk2MzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    isHot: true,
  },
  {
    title: "Cyber Ninja",
    author: "Yuki Sato",
    genre: "Sci-Fi",
    rating: 4.6,
    views: "1.8M",
    chapters: 89,
    coverImage: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlciUyMGFydHxlbnwxfHx8fDE3NTY5MzcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Mystic Academy",
    author: "Rei Nakamura",
    genre: "Magic",
    rating: 4.9,
    views: "3.1M",
    chapters: 156,
    coverImage: "https://images.unsplash.com/photo-1663790628011-09beb481198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjb21pYyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY5NjM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isHot: true,
  },
  {
    title: "Urban Legend",
    author: "Hana Kimura",
    genre: "Horror",
    rating: 4.7,
    views: "1.9M",
    chapters: 98,
    coverImage: "https://images.unsplash.com/photo-1628426912206-d88e22da5c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBzdXBlcmhlcm8lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU2OTYzMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const newComics = [
  {
    title: "Time Paradox",
    author: "Ken Ishiguro",
    genre: "Sci-Fi",
    rating: 4.5,
    views: "500K",
    chapters: 12,
    coverImage: "https://images.unsplash.com/photo-1740644545217-892da8cce224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGFuaW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc1Njk2MzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Shadow Realm",
    author: "Miku Hayashi",
    genre: "Dark Fantasy",
    rating: 4.8,
    views: "750K",
    chapters: 8,
    coverImage: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlciUyMGFydHxlbnwxfHx8fDE3NTY5MzcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Stellar Warriors",
    author: "Yuki Taniguchi",
    genre: "Mecha",
    rating: 4.6,
    views: "620K",
    chapters: 15,
    coverImage: "https://images.unsplash.com/photo-1663790628011-09beb481198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjb21pYyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY5NjM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Ocean Dreams",
    author: "Sora Watanabe",
    genre: "Romance",
    rating: 4.9,
    views: "890K",
    chapters: 20,
    coverImage: "https://images.unsplash.com/photo-1628426912206-d88e22da5c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBzdXBlcmhlcm8lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU2OTYzMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Time Paradox",
    author: "Ken Ishiguro",
    genre: "Sci-Fi",
    rating: 4.5,
    views: "500K",
    chapters: 12,
    coverImage: "https://images.unsplash.com/photo-1740644545217-892da8cce224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGFuaW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc1Njk2MzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Shadow Realm",
    author: "Miku Hayashi",
    genre: "Dark Fantasy",
    rating: 4.8,
    views: "750K",
    chapters: 8,
    coverImage: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlciUyMGFydHxlbnwxfHx8fDE3NTY5MzcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Stellar Warriors",
    author: "Yuki Taniguchi",
    genre: "Mecha",
    rating: 4.6,
    views: "620K",
    chapters: 15,
    coverImage: "https://images.unsplash.com/photo-1663790628011-09beb481198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjb21pYyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY5NjM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Ocean Dreams",
    author: "Sora Watanabe",
    genre: "Romance",
    rating: 4.9,
    views: "890K",
    chapters: 20,
    coverImage: "https://images.unsplash.com/photo-1628426912206-d88e22da5c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBzdXBlcmhlcm8lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU2OTYzMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Time Paradox",
    author: "Ken Ishiguro",
    genre: "Sci-Fi",
    rating: 4.5,
    views: "500K",
    chapters: 12,
    coverImage: "https://images.unsplash.com/photo-1740644545217-892da8cce224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGFuaW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc1Njk2MzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Shadow Realm",
    author: "Miku Hayashi",
    genre: "Dark Fantasy",
    rating: 4.8,
    views: "750K",
    chapters: 8,
    coverImage: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlciUyMGFydHxlbnwxfHx8fDE3NTY5MzcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Stellar Warriors",
    author: "Yuki Taniguchi",
    genre: "Mecha",
    rating: 4.6,
    views: "620K",
    chapters: 15,
    coverImage: "https://images.unsplash.com/photo-1663790628011-09beb481198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjb21pYyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY5NjM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Ocean Dreams",
    author: "Sora Watanabe",
    genre: "Romance",
    rating: 4.9,
    views: "890K",
    chapters: 20,
    coverImage: "https://images.unsplash.com/photo-1628426912206-d88e22da5c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBzdXBlcmhlcm8lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU2OTYzMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Time Paradox",
    author: "Ken Ishiguro",
    genre: "Sci-Fi",
    rating: 4.5,
    views: "500K",
    chapters: 12,
    coverImage: "https://images.unsplash.com/photo-1740644545217-892da8cce224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGFuaW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc1Njk2MzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Shadow Realm",
    author: "Miku Hayashi",
    genre: "Dark Fantasy",
    rating: 4.8,
    views: "750K",
    chapters: 8,
    coverImage: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlciUyMGFydHxlbnwxfHx8fDE3NTY5MzcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
  {
    title: "Stellar Warriors",
    author: "Yuki Taniguchi",
    genre: "Mecha",
    rating: 4.6,
    views: "620K",
    chapters: 15,
    coverImage: "https://images.unsplash.com/photo-1663790628011-09beb481198c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjb21pYyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY5NjM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isNew: true,
  },
];

export default function ComicSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6 space-y-16">
        {/* Popular Comics Section */}
        <section id="popular">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Komik Populer</h2>
            </div>
            <Button 
              variant="ghost" 
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
            >
              Lihat Semua
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {popularComics.map((comic, index) => (
              <ComicCard key={index} {...comic} />
            ))}
          </div>
        </section>

        {/* New Releases Section */}
        <section id="new">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Rilis Terbaru</h2>
            </div>
            <Button 
              variant="ghost" 
              className="text-green-400 hover:text-green-300 hover:bg-green-400/10"
            >
              Lihat Semua
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {newComics.map((comic, index) => (
              <ComicCard key={index} {...comic} />
            ))}
          </div>
        </section>

        {/* Genres Section
        <section id="genres">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Genre Favorit</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
        </section> */}
      </div>
    </div>
  );
}