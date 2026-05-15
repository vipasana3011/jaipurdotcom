import { Play, Heart, Eye } from "lucide-react";

const reels = [
  { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", h: "tall", title: "Hawa Mahal at golden hour" },
  { src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80", h: "short", title: "City Palace walkthrough" },
  { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", h: "tall", title: "Amber Fort by drone" },
  { src: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80", h: "tall", title: "Bazaar nights" },
  { src: "https://images.unsplash.com/photo-1587295999906-53e9b1a47e9b?w=800&q=80", h: "short", title: "Galtaji monkeys" },
  { src: "https://images.unsplash.com/photo-1602391833977-358a52198938?w=800&q=80", h: "tall", title: "Stepwell symmetry" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", h: "short", title: "Coffee at Tapri" },
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80", h: "tall", title: "Rambagh dreams" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", h: "short", title: "Morning brews" },
];

export default function Reels() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-400">Reels</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2 max-w-4xl">
        Jaipur, <span className="gradient-text italic">frame by frame</span>.
      </h1>

      <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-5 [&>*]:mb-5">
        {reels.map((r, i) => (
          <a key={i} href="#" className={`card-zoom hover-lift group relative block rounded-3xl overflow-hidden glass break-inside-avoid ${r.h === "tall" ? "aspect-[9/16]" : "aspect-[9/12]"}`}>
            <img src={r.src} alt={r.title} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
            <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="size-16 rounded-full gradient-bg grid place-items-center text-black glow">
                <Play className="size-6 fill-current" />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="font-display text-xl">{r.title}</h3>
              <div className="mt-2 flex items-center gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1"><Eye className="size-3" /> 12K</span>
                <span className="flex items-center gap-1"><Heart className="size-3" /> 2.1K</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
