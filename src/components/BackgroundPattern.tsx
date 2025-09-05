export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient semi-dark elegan */}
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" /> {/* slate-800 */}
            <stop offset="100%" stopColor="#0f172a" /> {/* slate-900 */}
          </linearGradient>

          {/* Pattern garis tipis minimalis */}
          <pattern
            id="line-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="80"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Background utama */}
        <rect width="100%" height="100%" fill="url(#bg-gradient)" />
        <rect width="100%" height="100%" fill="url(#line-pattern)" />

        {/* Lingkaran neon elegan ala anime */}
        <g opacity="0.15">
          <circle
            cx="25%"
            cy="35%"
            r="180"
            stroke="#38bdf8" // cyan neon
            strokeWidth="1.5"
            fill="none"
            className="animate-[pulse_8s_ease-in-out_infinite]"
          />
          <circle
            cx="75%"
            cy="65%"
            r="220"
            stroke="#a78bfa" // violet neon
            strokeWidth="1.5"
            fill="none"
            className="animate-[pulse_10s_ease-in-out_infinite]"
          />
        </g>

        {/* Aksen polygon minimalis */}
        <g opacity="0.2">
          <polygon
            points="50,120 110,60 170,120 110,180"
            fill="#38bdf8"
          />
          <polygon
            points="200,300 260,240 320,300 260,360"
            fill="#a78bfa"
          />
        </g>
      </svg>

      {/* Overlay lembut biar keliatan luxury */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-slate-800/40" />
    </div>
  );
}
