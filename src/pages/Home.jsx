import { Link } from 'react-router-dom'
import myProfile from '../image/profile.jpeg'
import bgImage from '../image/images.jpeg'

const floatingWords = [
  { text: 'MongoDB',    top: '12%',  left: '5%',   delay: '0s'   },
  { text: 'Express',    top: '22%',  left: '75%',  delay: '1s'   },
  { text: 'React',      top: '60%',  left: '80%',  delay: '2s'   },
  { text: 'Node.js',    top: '75%',  left: '8%',   delay: '0.5s' },
  { text: 'JavaScript', top: '40%',  left: '88%',  delay: '1.5s' },
  { text: 'REST API',   top: '85%',  left: '60%',  delay: '2.5s' },
  { text: 'Git',        top: '10%',  left: '55%',  delay: '3s'   },
  { text: 'HTML5',      top: '50%',  left: '2%',   delay: '0.8s' },
  { text: 'CSS3',       top: '30%',  left: '18%',  delay: '1.8s' },
  { text: 'JSON',       top: '90%',  left: '30%',  delay: '2.2s' },
  { text: 'npm',        top: '68%',  left: '48%',  delay: '3.5s' },
  { text: 'Vite',       top: '18%',  left: '38%',  delay: '1.2s' },
]

const codeLines = [
  "const app = express()",
  "mongoose.connect(MONGO_URI)",
  "useState([])",
  "router.get('/api', ...)",
  "npm install",
  "useEffect(() => {}, [])",
  "Schema({ name: String })",
  "res.json({ success: true })",
  "import React from 'react'",
  ".find().populate('user')",
]

export default function Home() {
    const imageStyle = {
  width: '150px',      
  height: '150px',     
  borderRadius: '50%', 
  objectFit: 'cover',   
  border: '2px solid #333' 
};
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
            <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* SVG Circuit Board */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dotgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(110,231,183,0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />

          <g stroke="rgba(110,231,183,0.12)" strokeWidth="1" fill="none">
            <polyline points="0,150 120,150 160,190 400,190" />
            <polyline points="400,190 440,150 700,150" />
            <polyline points="700,150 740,110 900,110 940,150 1200,150" />
            <polyline points="0,400 80,400 120,360 300,360 340,400 560,400" />
            <polyline points="560,400 600,440 800,440 840,400 1200,400" />
            <polyline points="200,0 200,110 240,150" />
            <polyline points="600,0 600,110" />
            <polyline points="900,150 900,0" />
            <polyline points="340,400 340,700" />
            <polyline points="800,440 800,700" />
            <polyline points="1050,0 1050,110 990,170 990,360 1050,420 1050,700" />
          </g>

          <g fill="rgba(110,231,183,0.35)">
            <circle cx="160" cy="190" r="3" />
            <circle cx="440" cy="150" r="3" />
            <circle cx="740" cy="110" r="3" />
            <circle cx="940" cy="150" r="3" />
            <circle cx="120" cy="360" r="3" />
            <circle cx="340" cy="400" r="3" />
            <circle cx="600" cy="440" r="3" />
            <circle cx="840" cy="400" r="3" />
            <circle cx="990" cy="170" r="3" />
            <circle cx="990" cy="360" r="3" />
          </g>

          <g fill="rgba(129,140,248,0.5)">
            <circle cx="400" cy="190" r="5" />
            <circle cx="700" cy="150" r="5" />
            <circle cx="560" cy="400" r="5" />
            <circle cx="800" cy="440" r="5" />
          </g>

          <circle cx="400" cy="190" r="10" fill="none" stroke="rgba(110,231,183,0.4)" strokeWidth="1">
            <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="150" r="10" fill="none" stroke="rgba(129,140,248,0.4)" strokeWidth="1">
            <animate attributeName="r" values="8;20;8" dur="4s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="800" cy="440" r="10" fill="none" stroke="rgba(110,231,183,0.4)" strokeWidth="1">
            <animate attributeName="r" values="8;20;8" dur="3.5s" repeatCount="indefinite" begin="2s" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" repeatCount="indefinite" begin="2s" />
          </circle>
        </svg>

        {/* Glow blobs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-400 opacity-10 blur-[80px] -top-24 -left-24 animate-pulse" />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-indigo-400 opacity-10 blur-[80px] -bottom-20 -right-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-sky-400 opacity-[0.07] blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Floating tech words */}
        {floatingWords.map(({ text, top, left, delay }) => (
          <span
            key={text}
            className="absolute font-mono text-[11px] font-medium tracking-widest text-emerald-400/25 whitespace-nowrap animate-bounce"
            style={{ top, left, animationDelay: delay, animationDuration: '4s' }}
          >
            {text}
          </span>
        ))}

         {/* Scrolling code lines — left */}
        <div className="absolute left-0 top-0 hidden md:flex flex-col gap-2.5 opacity-[0.08] font-mono text-[11px] text-emerald-400 overflow-hidden h-full">
          <div className="flex flex-col gap-2.5 animate-[scrollCode_25s_linear_infinite]">
            {[...codeLines, ...codeLines].map((line, i) => (
              <div key={i} className="px-3 whitespace-nowrap">
                <span className="inline-block w-5 text-right mr-2 text-indigo-400/60">
                  {(i % codeLines.length) + 1}
                </span>
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling code lines — right */}
        <div className="absolute right-0 top-0 hidden md:flex flex-col gap-2.5 opacity-[0.08] font-mono text-[11px] text-emerald-400 overflow-hidden h-full">
          <div className="flex flex-col gap-2.5 animate-[scrollCode_30s_linear_infinite_reverse]">
            {[...codeLines.slice(5), ...codeLines, ...codeLines.slice(0, 5)].map((line, i) => (
              <div key={i} className="px-3 whitespace-nowrap">
                <span className="inline-block w-5 text-right mr-2 text-indigo-400/60">
                  {(i % codeLines.length) + 1}
                </span>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* ── Hero Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-[8%] py-20 max-w-[1200px] mx-auto text-center md:text-left">

        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Hi there, I'm
          </p>
      
          <h1
            className="font-extrabold text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Shani Patel
          </h1>      
          <h2
            className="font-light text-slate-400 mb-6"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
          >
            Full Stack Developer
          </h2>  
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-8 mx-auto md:mx-0">
            I build fast, scalable web apps using the MERN stack.
            Passionate about clean code, great UX, and solving real problems.
          </p>
           {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-2.5 rounded-lg bg-emerald-400 text-[#0a0a0f] font-semibold text-sm hover:bg-emerald-300 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg border border-white/10 text-white text-sm hover:border-emerald-400 hover:text-emerald-400 transition-all"
            >
              Contact Me
            </Link>
          </div>

                 {/* Social links */}
          <div className="flex gap-6 justify-center md:justify-start">
            {[
              { label: 'GitHub',   href: 'https://github.com/shani-patel14' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patel-shani?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
              { label: 'Resume',   href: '/resume.pdf' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-400 border-b border-transparent pb-0.5 hover:text-emerald-400 hover:border-emerald-400 transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      {/* Right: Avatar with animated rings */}
        <div className="shrink-0 flex items-center justify-center relative w-72 h-72">
          <div
            className="absolute w-72 h-72 rounded-full border border-indigo-400/10 animate-ping"
            style={{ animationDuration: '4s' }}
          />
          <div
            className="absolute w-60 h-60 rounded-full border border-emerald-400/15 animate-ping"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
          <div className="absolute w-52 h-52 rounded-full border border-emerald-400/10" />

          {/* Avatar circle */}
          <div className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-emerald-400 to-indigo-400 flex items-center justify-center text-[#0a0a0f] font-extrabold text-5xl shadow-2xl shadow-emerald-500/20">
            <img
             src={myProfile} 
             alt="Shani's Profile" 
             style={imageStyle} />
          </div>
        </div>

      </div>
    </section>
  )
}
