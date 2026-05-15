const collage = [
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80",
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
];

const values = [
  {
    number: "01",
    title: "Cinematic storytelling",
    desc: "We capture Jaipur with film-like visuals, emotion and timeless aesthetics.",
  },
  {
    number: "02",
    title: "Local-first culture",
    desc: "Every reel, café and hidden gem comes from people who actually know the city.",
  },
  {
    number: "03",
    title: "Creative excellence",
    desc: "From creators to brands, we focus on quality, originality and meaningful impact.",
  },
];

const stats = [
  { n: "180+", l: "Stories told" },
  { n: "12M+", l: "Views across reels" },
  { n: "60+", l: "Brand collaborations" },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-28 md:py-36 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">
            About Jaipur.com
          </p>

          <h1 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] max-w-6xl">
            A love letter to{" "}
            <span className="gradient-text italic">Jaipur</span>,
            <br />
            told through frames.
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            Jaipur.com is a modern digital media platform capturing the soul of
            Jaipur — from hidden cafés and luxury stays to creators, culture,
            architecture and cinematic storytelling.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* IMAGE */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=80"
                alt="Jaipur"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
              Our Story
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Started with one camera and a city we loved.
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
              Jaipur.com began as a passion project between creators who wanted
              to showcase Jaipur differently — not just as a tourist city, but
              as a living culture full of stories, aesthetics and emotion.
            </p>

            <p className="mt-5 text-neutral-400 leading-relaxed text-lg">
              Today, we collaborate with brands, cafés, hotels, creators and
              local businesses to create visually rich content that feels
              authentic, cinematic and unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/join-team"
                className="px-6 py-3 rounded-full gradient-bg text-black font-semibold hover:scale-105 transition"
              >
                Join Our Team
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-full border border-white/10 hover:border-orange-400 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-gradient-to-b from-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 hover:-translate-y-2 transition duration-500"
              >
                <p className="font-display text-6xl gradient-text">
                  {item.number}
                </p>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLAGE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
              Jaipur through our lens
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              More than content.
              <span className="gradient-text italic"> A visual identity.</span>
            </h2>

            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              We believe cities should feel emotional online. Every frame we
              create is designed to make people experience Jaipur — not just see
              it.
            </p>

            <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
              From luxury cafés to heritage streets, we blend modern aesthetics
              with authentic storytelling.
            </p>
          </div>

          {/* RIGHT COLLAGE */}
          <div className="grid grid-cols-2 gap-5">
            {collage.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[2rem] group ${
                  i % 2 === 0
                    ? "aspect-[3/4]"
                    : "aspect-square mt-10"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 hover:-translate-y-2 transition duration-500"
            >
              <div className="font-display text-6xl gradient-text">
                {s.n}
              </div>

              <div className="mt-3 uppercase tracking-[0.25em] text-sm text-neutral-400">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}