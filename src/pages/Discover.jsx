import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const places = [
  {
    cat: "Hidden Gems",
    name: "Panna Meena ka Kund",
    desc: "Ancient stepwell with perfect symmetry and quiet sunrise frames.",
    img: "https://images.unsplash.com/photo-1602391833977-358a52198938?w=1200&q=80",
  },
  {
    cat: "Cafés",
    name: "Tapri Central",
    desc: "Chai, city views and Jaipur's most loved conversations.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
  },
  {
    cat: "Rooftops",
    name: "Bar Palladio",
    desc: "Blue interiors, candlelight and royal evening energy.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  },
  {
    cat: "Markets",
    name: "Johari Bazaar",
    desc: "Jewellery lanes, pink walls and the soul of old Jaipur.",
    img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=1200&q=80",
  },
  {
    cat: "Luxury Stays",
    name: "Rambagh Palace",
    desc: "A royal escape wrapped in heritage and marble corridors.",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
  },
  {
    cat: "Royal Places",
    name: "Amber Fort",
    desc: "Golden-hour fort views straight out of a historical film.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
  },
  {
    cat: "Temples",
    name: "Galtaji Temple",
    desc: "Hidden between hills with peaceful kunds and monkeys.",
    img: "https://images.unsplash.com/photo-1587295999906-53e9b1a47e9b?w=1200&q=80",
  },
  {
    cat: "Coffee Spots",
    name: "Curious Life Coffee",
    desc: "Minimal aesthetics and one of the city's best brews.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
  },
  {
    cat: "Architecture",
    name: "City Palace",
    desc: "Pink arches, royal courtyards and timeless craftsmanship.",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80",
  },
];

const categories = [
  "All",
  "Hidden Gems",
  "Cafés",
  "Rooftops",
  "Markets",
  "Luxury Stays",
  "Royal Places",
  "Architecture",
];

export default function Discover() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-20 grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            The City Guide
          </p>

          <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95] max-w-5xl">
            Discover Jaipur,{" "}
            <span className="italic gradient-text">
              one beautiful corner at a time.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            Rooftops at sunset, hidden cafés, royal architecture and local
            stories — curated through our lens for people who want to
            experience Jaipur beyond the obvious.
          </p>
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2.5 rounded-full glass text-sm tracking-wide hover:gradient-bg hover:text-black transition-all duration-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* DISCOVER GRID */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, i) => (
              <motion.article
                key={place.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.08,
                }}
                className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-card"
              >
                {/* IMAGE */}
                <img
                  src={place.img}
                  alt={place.name}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
                    {place.cat}
                  </p>

                  <h2 className="mt-2 font-display text-3xl md:text-4xl leading-tight">
                    {place.name}
                  </h2>

                  <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-sm">
                    {place.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-white/70">
                      <MapPin className="size-3" />
                      Jaipur
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm group-hover:text-primary transition">
                      Explore
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 rounded-[2.5rem] glass p-10 md:p-16 text-center relative overflow-hidden grain">
            <div className="absolute -top-24 -right-24 size-72 rounded-full gradient-bg blur-3xl opacity-20" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Stay Updated
              </p>

              <h3 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
                The next Jaipur story is already{" "}
                <span className="italic gradient-text">being filmed.</span>
              </h3>

              <p className="mt-5 max-w-2xl mx-auto text-neutral-400 text-lg leading-relaxed">
                Follow JaipurDotCom for hidden spots, cinematic reels,
                aesthetic cafés and the most beautiful experiences across the
                Pink City.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-bg text-black font-medium glow"
              >
                Get in touch
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}