import { Link } from "react-router-dom";
import {
  Instagram,
  Youtube,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-night text-white grain">

      {/* GLOW BACKGROUND */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-jaipur-pink/20 blur-3xl pointer-events-none" />

      {/* SKYLINE */}
      <svg
        viewBox="0 0 1440 220"
        className="absolute bottom-0 inset-x-0 w-full text-jaipur-pink/10"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,180 L60,160 L80,170 L110,120 L130,160 L160,150 L180,90 L200,160 L240,150 L260,100 L280,160 L320,140 L340,80 L360,140 L390,150 L420,110 L450,160 L480,120 L520,160 L560,150 L600,90 L640,160 L680,140 L720,70 L760,140 L800,150 L840,110 L880,160 L920,120 L960,160 L1000,150 L1040,90 L1080,160 L1120,140 L1160,80 L1200,140 L1240,150 L1280,110 L1320,160 L1360,120 L1400,160 L1440,150 L1440,220 L0,220 Z"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-10">

        <div className="grid lg:grid-cols-12 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="size-10 rounded-full gradient-bg grid place-items-center glow group-hover:scale-105 transition">
                <Sparkles className="size-4 text-black" />
              </span>

              <span className="font-display text-3xl md:text-4xl tracking-tight">
                Jaipur<span className="text-jaipur-pink">.com</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-neutral-300 leading-relaxed">
              A cinematic media house celebrating the soul of Jaipur —
              its palaces, people, cafés, creators and untold corners.
            </p>

            {/* SOCIAL */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[Instagram, Youtube, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-11 grid place-items-center rounded-full glass hover:gradient-bg hover:text-black transition-all hover:scale-105"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Explore
            </p>

            <ul className="mt-5 space-y-3 text-neutral-300">
              {["Discover", "Reels", "Services", "About"].map((l) => (
                <li key={l}>
                  <Link
                    to={`/${l.toLowerCase()}`}
                    className="hover:text-jaipur-pink transition"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Connect
            </p>

            <ul className="mt-5 space-y-3 text-neutral-300">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-jaipur-pink" />
                hello@jaipur.com
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="size-4 text-jaipur-pink" />
                +91 98000 00000
              </li>

              <li className="flex items-center gap-3">
                <Sparkles className="size-4 text-jaipur-pink" />
                C-Scheme, Jaipur
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-jaipur-pink hover:text-white transition"
            >
              Start a collaboration →
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-400 italic">
            Made with stories from Jaipur
          </p>

          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
            © {new Date().getFullYear()} Jaipur.com
          </p>
        </div>

        {/* BIG TEXT */}
        <div className="mt-10 text-center">
          <p className="font-display text-[12vw] md:text-[8vw] leading-none text-white/[0.04] select-none">
            Where Jaipur Lives Digitally.
          </p>
        </div>
      </div>
    </footer>
  );
}