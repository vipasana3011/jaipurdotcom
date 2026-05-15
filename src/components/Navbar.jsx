import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/discover", label: "Discover" },
  { to: "/reels", label: "Reels" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "py-5"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="size-9 rounded-full gradient-bg grid place-items-center glow">
            <Sparkles className="size-4 text-black" />
          </span>
          <span className="font-display text-2xl tracking-tight">
            Jaipur<span className="gradient-text">.com</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm tracking-wide transition-colors relative group ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-black text-sm font-medium hover:scale-105 transition-transform glow"
        >
          Collaborate
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-10 grid place-items-center rounded-full glass"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong mt-3 mx-4 rounded-2xl p-4 animate-fade-up">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-white/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 rounded-xl gradient-bg text-black font-medium"
              >
                Collaborate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
