import {
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 99999 99999",
    href: "https://wa.me/919999999999",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@jaipur.com",
    href: "https://instagram.com",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@jaipur.com",
    href: "mailto:hello@jaipur.com",
  },
  {
    icon: MapPin,
    title: "Visit",
    value: "Jaipur, Rajasthan, IN",
    href: "#",
  },
];

export default function Contact() {
  return (
    <div className="pb-32">

      {/* HERO */}
      <section className="pt-32 pb-12 grain">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Contact
          </p>

          <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            Say hi. <span className="italic">We reply quickly.</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-400 max-w-xl">
            Brand collab, press, or just a coffee in Jaipur — pick a channel,
            we usually reply within a day.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative rounded-3xl glass p-8 overflow-hidden hover-lift transition-all"
            >
              {/* glow */}
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-30 transition" />

              <div className="flex items-start justify-between">
                <span className="size-14 rounded-2xl bg-gradient-sunset grid place-items-center text-white">
                  <c.icon className="size-6" />
                </span>

                <ArrowUpRight className="size-5 text-neutral-400 group-hover:text-white transition" />
              </div>

              <div className="mt-6 text-xs uppercase tracking-widest text-neutral-400">
                {c.title}
              </div>

              <div className="font-display text-3xl mt-1">{c.value}</div>
            </a>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-16 grain">
          <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-primary/30 blur-3xl opacity-30" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-[0.95]">
                Have a campaign in mind?
              </h2>
              <p className="mt-4 text-neutral-400">
                Skip the inbox. Start a WhatsApp chat and tell us what you're
                building.
              </p>
            </div>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-black font-medium hover:opacity-90 transition"
            >
              Start collaboration <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* STUDIO VISIT */}
        <div className="mt-10 relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-16">
          <div className="absolute -top-20 -right-20 size-80 rounded-full bg-primary/20 blur-3xl opacity-30" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                Studio visit
              </h2>
              <p className="mt-4 text-neutral-400">
                C-Scheme, Jaipur, Rajasthan 302001 — Mon to Sat, 10am to 7pm.
              </p>
            </div>

            <a
              href="mailto:hello@jaipur.com"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-black font-medium hover:scale-105 transition"
            >
              Send a brief <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}