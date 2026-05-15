import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="size-9 rounded-full gradient-bg grid place-items-center">
              <Sparkles className="size-4 text-black" />
            </span>
            <span className="font-display text-2xl">
              Jaipur<span className="gradient-text">.com</span>
            </span>
          </Link>
          <p className="mt-4 text-neutral-400 max-w-md leading-relaxed">
            A cinematic media house celebrating the soul of the Pink City — its palaces,
            people, and untold corners.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Youtube, MessageCircle, Mail].map((Icon, i) => (
              <a key={i} href="#" className="size-10 grid place-items-center rounded-full glass hover:gradient-bg hover:text-black transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">Explore</h4>
          <ul className="space-y-2">
            {["Discover", "Reels", "Services", "About"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="hover:text-white text-neutral-400 transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">Reach Us</h4>
          <ul className="space-y-2 text-neutral-400">
            <li>hello@jaipur.com</li>
            <li>+91 98000 00000</li>
            <li>C-Scheme, Jaipur</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Jaipur.com — Crafted in the Pink City.
      </div>
    </footer>
  );
}
