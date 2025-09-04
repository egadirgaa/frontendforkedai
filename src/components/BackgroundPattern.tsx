export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated geometric pattern */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="comic-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="60"
              cy="60"
              r="2"
              fill="rgb(255 255 255 / 0.05)"
              className="animate-pulse"
            />
            <circle
              cx="20"
              cy="20"
              r="1.5"
              fill="rgb(139 69 19 / 0.1)"
            />
            <circle
              cx="100"
              cy="40"
              r="1"
              fill="rgb(59 130 246 / 0.1)"
            />
          </pattern>
          
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(15 23 42)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="rgb(30 41 59)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(15 23 42)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#bg-gradient)" />
        <rect width="100%" height="100%" fill="url(#comic-pattern)" />
        
        {/* Floating comic book elements */}
        <g opacity="0.1">
          <polygon
            points="150,50 200,100 150,150 100,100"
            fill="rgb(234 179 8)"
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          />
          <polygon
            points="300,200 350,250 300,300 250,250"
            fill="rgb(239 68 68)"
            className="animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '4s' }}
          />
          <polygon
            points="500,100 550,150 500,200 450,150"
            fill="rgb(34 197 94)"
            className="animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
          />
        </g>
        
        {/* Comic speech bubble shapes */}
        <g opacity="0.08">
          <ellipse cx="80%" cy="20%" rx="40" ry="25" fill="rgb(168 85 247)" />
          <ellipse cx="20%" cy="70%" rx="35" ry="20" fill="rgb(236 72 153)" />
          <ellipse cx="70%" cy="80%" rx="30" ry="18" fill="rgb(14 165 233)" />
        </g>
      </svg>
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-800/20" />
    </div>
  );
}