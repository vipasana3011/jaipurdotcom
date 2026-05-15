import { Link } from "react-router-dom";
import {
  Film,
  Coffee,
  Users,
  Camera,
  Sparkles,
  Shirt,
  Megaphone,
  MapPin,
  Clapperboard,
  ArrowRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Reel Promotions",
    desc: "Cinematic short-form reels designed to boost engagement, reach and brand identity across Jaipur.",
    price: "from ₹15k",
  },
  {
    icon: Coffee,
    title: "Café Promotions",
    desc: "Transform your café into Jaipur’s next must-visit aesthetic destination with creator-led storytelling.",
    price: "from ₹12k",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Collaborate with curated Jaipur creators who deliver authentic engagement and local trust.",
    price: "Custom",
  },
  {
    icon: Camera,
    title: "Event Coverage",
    desc: "Luxury weddings, launches, concerts and fashion events captured with editorial-grade visuals.",
    price: "from ₹35k",
  },
  {
    icon: Sparkles,
    title: "UGC Content",
    desc: "Authentic user-style videos and photos built for modern brands and high-performing campaigns.",
    price: "from ₹8k",
  },
  {
    icon: Shirt,
    title: "Fashion Shoots",
    desc: "Creative direction, styling and premium fashion campaigns across Jaipur’s best locations.",
    price: "from ₹50k",
  },
  {
    icon: Star,
    title: "Brand Collaborations",
    desc: "Long-term partnerships crafted with storytelling, strategy and cinematic visual identity.",
    price: "Custom",
  },
  {
    icon: MapPin,
    title: "Jaipur Promotions",
    desc: "Hyper-local campaigns tailored specifically for Jaipur audiences and lifestyle culture.",
    price: "Custom",
  },
  {
    icon: Megaphone,
    title: "Story Promotions",
    desc: "Mass story distribution across creators and pages for instant local visibility.",
    price: "from ₹6k",
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-28 md:py-36 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">
            Services
          </p>

          <h1 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
            Built for brands that{" "}
            <span className="gradient-text italic">
              care about aesthetics.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            From cinematic reels to creator campaigns, Jaipur.com helps brands
            grow through storytelling, visuals and hyper-local influence.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500"
              >
                {/* GLOW */}
                <div className="absolute -top-16 -right-16 size-44 rounded-full bg-orange-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* ICON */}
                <div className="relative z-10 size-16 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 text-white grid place-items-center shadow-xl group-hover:scale-110 transition duration-500">
                  <s.icon className="size-7" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="mt-7 font-display text-3xl">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.25em] text-orange-300">
                      {s.price}
                    </span>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-white transition"
                    >
                      Enquire
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1f140f] via-[#120d0b] to-black border border-white/10 p-10 md:p-16">
            {/* BLUR EFFECTS */}
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
                  Let's create something iconic
                </p>

                <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[0.95]">
                  Your brand deserves{" "}
                  <span className="gradient-text italic">
                    cinematic storytelling.
                  </span>
                </h2>

                <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-xl">
                  Whether you're launching a café, promoting an event or
                  building a luxury brand — we help you stand out through
                  premium visuals and creator-driven reach.
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-7 py-4 text-black font-semibold hover:scale-105 transition"
                >
                  Start a Campaign
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 text-white hover:border-orange-400 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}