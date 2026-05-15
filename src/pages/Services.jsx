import { Link } from "react-router-dom";
import { Film, Coffee, Users, Camera, Sparkles, Shirt, ArrowRight } from "lucide-react";

const services = [
  { icon: Film, title: "Reel Promotions", desc: "Cinematic short-form built to convert. Shot, edited, and seeded across our network." },
  { icon: Coffee, title: "Café Promotions", desc: "Position your space as the next must-visit address in the city." },
  { icon: Users, title: "Influencer Marketing", desc: "Hand-picked creators, real Jaipur audiences, measurable results." },
  { icon: Camera, title: "Event Coverage", desc: "Weddings, launches, fashion weeks — captured with editorial polish." },
  { icon: Sparkles, title: "UGC Content", desc: "Authentic user-style content engineered for social-first brands." },
  { icon: Shirt, title: "Fashion Shoots", desc: "Direction, location, styling — full production for designers and labels." },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-400">What we do</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2 max-w-4xl">
        Studio-grade media for <span className="gradient-text italic">modern brands</span>.
      </h1>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="hover-lift group relative rounded-3xl glass p-8 overflow-hidden">
            <div className="absolute -top-12 -right-12 size-40 rounded-full gradient-bg blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            <span className="size-14 rounded-2xl glass grid place-items-center group-hover:gradient-bg group-hover:text-black transition-all">
              <s.icon className="size-6" />
            </span>
            <h3 className="font-display text-3xl mt-6">{s.title}</h3>
            <p className="mt-3 text-neutral-400 leading-relaxed">{s.desc}</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm gradient-text">
              Enquire <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-16 noise text-center">
        <h2 className="font-display text-4xl md:text-6xl">
          Tell us your <span className="gradient-text italic">story</span>.
        </h2>
        <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
          We'll turn it into film, frames, and footprints across Jaipur.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-bg text-black font-medium glow">
          Book a call <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
