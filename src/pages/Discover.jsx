import { MapPin } from "lucide-react";

const places = [
  { cat: "Hidden Gems", name: "Panna Meena ka Kund", img: "https://images.unsplash.com/photo-1602391833977-358a52198938?w=800&q=80" },
  { cat: "Cafes", name: "Tapri Central", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" },
  { cat: "Rooftops", name: "Bar Palladio", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { cat: "Markets", name: "Johari Bazaar", img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80" },
  { cat: "Luxury Hotels", name: "Rambagh Palace", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80" },
  { cat: "Royal Places", name: "Amber Fort", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80" },
  { cat: "Hidden Gems", name: "Galtaji Temple", img: "https://images.unsplash.com/photo-1587295999906-53e9b1a47e9b?w=800&q=80" },
  { cat: "Cafes", name: "Curious Life Coffee", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" },
  { cat: "Royal Places", name: "City Palace", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80" },
];

const cats = ["All", "Hidden Gems", "Cafes", "Rooftops", "Markets", "Luxury Hotels", "Royal Places"];

export default function Discover() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-400">The atlas</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2 max-w-4xl">
        Every <span className="gradient-text italic">corner</span> of the Pink City.
      </h1>
      <p className="mt-6 text-neutral-400 max-w-2xl">
        From rooftop bars overlooking Hawa Mahal to family-run cafés older than the city itself.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} className="px-4 py-2 rounded-full glass text-sm hover:gradient-bg hover:text-black transition-all">
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((p, i) => (
          <a key={i} href="#" className="card-zoom hover-lift group relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <img src={p.img} alt={p.name} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs uppercase tracking-widest gradient-text">{p.cat}</span>
              <h3 className="font-display text-3xl mt-1 leading-tight">{p.name}</h3>
              <div className="mt-3 flex items-center gap-1 text-xs text-neutral-400">
                <MapPin className="size-3" /> Jaipur
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
