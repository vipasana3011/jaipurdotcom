const collage = [
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
];

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-400">Our story</p>
      <h1 className="font-display text-6xl md:text-8xl mt-2 leading-[0.95] max-w-5xl">
        We grew up in <span className="gradient-text italic">Jaipur</span>. Now we tell its story.
      </h1>

      <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
          <p>
            Jaipur.com began as a Sunday habit — three friends, one camera, and a city that
            kept revealing new corners every weekend. The pink walls of the old city, a
            thali at a 70-year-old kitchen, the silence of a stepwell at sunrise.
          </p>
          <p>
            Today we're a small media house obsessed with two things: cinematic craft and
            local truth. We don't chase trends — we chase the moments only locals know.
          </p>
          <p className="font-display text-2xl text-white italic">
            "A city this old deserves to be filmed like a film."
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {collage.map((src, i) => (
            <div key={i} className={`card-zoom relative rounded-3xl overflow-hidden glass ${i % 3 === 0 ? "aspect-[3/4] mt-8" : "aspect-square"}`}>
              <img src={src} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 grid md:grid-cols-3 gap-6">
        {[
          { n: "180+", l: "Stories told" },
          { n: "12M+", l: "Views across reels" },
          { n: "60+", l: "Brand collaborations" },
        ].map((s, i) => (
          <div key={i} className="rounded-3xl glass p-10 hover-lift">
            <div className="font-display text-6xl gradient-text">{s.n}</div>
            <div className="mt-2 text-neutral-400 uppercase tracking-widest text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
