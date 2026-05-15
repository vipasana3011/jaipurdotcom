import { Link } from "react-router-dom";
import { ArrowRight, Play, MapPin, Sparkles } from "lucide-react";

const trending = [
  { name: "Hawa Mahal at dawn", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80", tag: "Heritage" },
  { name: "Amber Fort sunset", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80", tag: "Royal" },
  { name: "Bapu Bazaar nights", img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=1200&q=80", tag: "Markets" },
  { name: "City Palace courtyard", img: "https://images.unsplash.com/photo-1587295999906-53e9b1a47e9b?w=1200&q=80", tag: "Palace" },
];

const reels = [
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80",
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden noise">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=2000&q=85" alt="Hawa Mahal Jaipur" className="size-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-widest uppercase">
            <Sparkles className="size-3 gradient-text" /> Pink City Edition · 2026
          </div>
          <h1 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl">
            Discover the <span className="gradient-text italic">soul</span> of Jaipur
          </h1>
          <p className="mt-8 max-w-xl text-lg text-neutral-400 leading-relaxed">
            A cinematic guide to the palaces, rooftops, hidden cafés and royal corners
            of India's pinkest city — curated through the lens of a new generation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/discover" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-bg text-black font-medium glow hover:scale-[1.03] transition-transform">
              Start exploring <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/reels" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass hover:bg-white/10 transition">
              <Play className="size-4" /> Watch reels
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-400">Trending now</p>
            <h2 className="font-display text-4xl md:text-6xl mt-2">Where Jaipur is happening</h2>
          </div>
          <Link to="/discover" className="hidden md:inline-flex items-center gap-2 text-neutral-400 hover:text-white">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trending.map((p, i) => (
            <Link to="/discover" key={i} className="card-zoom hover-lift group relative aspect-[3/4] rounded-3xl overflow-hidden glass">
              <img src={p.img} alt={p.name} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs uppercase tracking-widest gradient-text">{p.tag}</span>
                <h3 className="font-display text-2xl mt-1">{p.name}</h3>
                <div className="mt-3 flex items-center gap-1 text-xs text-neutral-400">
                  <MapPin className="size-3" /> Jaipur, RJ
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-400">Featured reels</p>
            <h2 className="font-display text-4xl md:text-6xl mt-2">Jaipur, in motion</h2>
          </div>
          <Link to="/reels" className="hidden md:inline-flex items-center gap-2 text-neutral-400 hover:text-white">
            All reels <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reels.map((src, i) => (
            <Link to="/reels" key={i} className="card-zoom hover-lift group relative aspect-[9/14] rounded-3xl overflow-hidden glass">
              <img src={src} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="size-16 rounded-full glass-strong grid place-items-center group-hover:gradient-bg group-hover:text-black transition-all">
                  <Play className="size-6 fill-current" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-20 noise">
          <div className="absolute -top-20 -right-20 size-80 rounded-full gradient-bg blur-3xl opacity-30" />
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl">
            Building a brand in Jaipur? Let's make it <span className="gradient-text italic">unforgettable</span>.
          </h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-bg text-black font-medium glow">
            Work with us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
