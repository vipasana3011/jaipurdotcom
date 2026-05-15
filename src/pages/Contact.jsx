import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Instagram, label: "Instagram", value: "@jaipur.com", href: "https://instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98000 00000", href: "https://wa.me/919800000000" },
  { icon: Mail, label: "Email", value: "hello@jaipur.com", href: "mailto:hello@jaipur.com" },
];

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-400">Say hello</p>
      <h1 className="font-display text-6xl md:text-8xl mt-2 leading-[0.95] max-w-5xl">
        Let's <span className="gradient-text italic">create</span> something.
      </h1>
      <p className="mt-6 text-lg text-neutral-400 max-w-xl">
        Brand collab, press, or just a coffee in C-Scheme — pick a channel, we reply within a day.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {channels.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noreferrer" className="hover-lift group relative rounded-3xl glass p-8 overflow-hidden">
            <div className="absolute -top-12 -right-12 size-40 rounded-full gradient-bg blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="flex items-start justify-between">
              <span className="size-14 rounded-2xl glass grid place-items-center group-hover:gradient-bg group-hover:text-black transition-all">
                <c.icon className="size-6" />
              </span>
              <ArrowUpRight className="size-5 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <div className="mt-6 text-sm uppercase tracking-widest text-neutral-400">{c.label}</div>
            <div className="font-display text-3xl mt-1">{c.value}</div>
          </a>
        ))}
      </div>

      <div className="mt-20 relative overflow-hidden rounded-[2.5rem] glass p-10 md:p-16 noise">
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full gradient-bg blur-3xl opacity-30" />
        <div className="grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Studio visit</h2>
            <p className="mt-4 text-neutral-400">
              C-Scheme, Jaipur, Rajasthan 302001 — open Mon to Sat, 10am to 7pm.
            </p>
          </div>
          <a href="mailto:hello@jaipur.com" className="justify-self-start md:justify-self-end inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-bg text-black font-medium glow">
            Send a brief
          </a>
        </div>
      </div>
    </section>
  );
}
