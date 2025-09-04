import { Star, Heart, Eye, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ComicCardProps {
  title: string;
  author: string;
  genre: string;
  rating: number;
  views: string;
  chapters: number;
  coverImage: string;
  isNew?: boolean;
  isHot?: boolean;
}

export default function ComicCard({
  title,
  author,
  genre,
  rating,
  views,
  chapters,
  coverImage,
  isNew = false,
  isHot = false,
}: ComicCardProps) {
  return (
    <div className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          )}
          {isHot && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              HOT
            </span>
          )}
        </div>
        
        {/* Genre Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            {genre}
          </span>
        </div>
        
        {/* Quick Actions (shown on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-3">
            <Button
              size="sm"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              Baca
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-white/70 line-clamp-1">{author}</p>
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{chapters} ch</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${Math.random() * 70 + 10}%` }}
          />
        </div>
      </div>
    </div>
  );
}