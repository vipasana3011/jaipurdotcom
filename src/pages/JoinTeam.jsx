import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  BadgeCheck,
  ShieldX,
  Loader2,
  Search,
  Download,
} from "lucide-react";

const certificates = {
  "JDC-2025-001": {
    candidate_name: "Rahul Sharma",
    domain: "Frontend Development Internship",
    duration: "3 Months",

    start_date: "01 January 2025",
    end_date: "31 March 2025",

    issue_date: "15 May 2025",

    status: "Successfully Completed",

    certificate_number: "JDC-2025-001",

    certificateUrl: "/certificates/demo-certificate.pdf",
  },

  "JDC-2025-002": {
    candidate_name: "Priya Mehta",
    domain: "Graphic Design Internship",
    duration: "2 Months",

    start_date: "01 February 2025",
    end_date: "31 March 2025",

    issue_date: "20 May 2025",

    status: "Successfully Completed",

    certificate_number: "JDC-2025-002",

    certificateUrl: "/certificates/demo-certificate.pdf",
  },
};

export default function JoinTeam() {
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    insta: "",
    portfolio: "",
    role: "Content Creator",
    why: "",
  });

  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const update = (k, v) => {
    setForm((f) => ({
      ...f,
      [k]: v,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setDone(true);

    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hi JaipurDotCom! I'd like to join the team.

• Name: ${form.name}
• Email: ${form.email}
• Phone: ${form.phone}
• Instagram: ${form.insta}
• Portfolio: ${form.portfolio}
• Role: ${form.role}

Why: ${form.why}`
      );

      window.open(
        `https://wa.me/919999999999?text=${msg}`,
        "_blank"
      );
    }, 500);
  };

  async function verifyCertificate(e) {
    e.preventDefault();

    if (!num.trim()) return;

    setLoading(true);
    setResult(null);
    setNotFound(false);

    setTimeout(() => {
      const data =
        certificates[num.trim().toUpperCase()];

      setLoading(false);

      if (data) {
        setResult(data);
      } else {
        setNotFound(true);
      }
    }, 1000);
  }

  return (
    <div className="min-h-screen pb-24 overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px]" />

      {/* HERO */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-xs uppercase tracking-[0.35em] text-orange-300">
            Join the Team
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl leading-[0.95] font-bold max-w-5xl">
            Build Jaipur's{" "}
            <span className="gradient-text italic">
              Digital Culture
            </span>{" "}
            With Us.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-white/60 leading-relaxed">
            We’re looking for creators, editors,
            photographers, developers and dreamers
            who want to shape Jaipur.com.
          </p>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 relative z-10">

        {done ? (
          <div className="lg:col-span-12 rounded-[2rem] glass-strong p-16 text-center border border-white/10">
            <div className="size-20 mx-auto rounded-full bg-orange-500/20 flex items-center justify-center">
              <Check className="size-9 text-orange-300" />
            </div>

            <h2 className="mt-8 text-5xl font-bold">
              Application Sent 🚀
            </h2>

            <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto">
              WhatsApp has been opened with your
              details. Our team will connect with
              you soon.
            </p>
          </div>
        ) : (
          <>
            {/* FORM */}
            <form
              onSubmit={onSubmit}
              className="lg:col-span-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-5 shadow-2xl"
            >

              <Field
                label="Full Name"
                value={form.name}
                onChange={(v) => update("name", v)}
                required
              />

              <Field
                label="Email Address"
                value={form.email}
                onChange={(v) => update("email", v)}
                required
                type="email"
              />

              <Field
                label="Phone Number"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                required
              />

              <Field
                label="Instagram Username"
                value={form.insta}
                onChange={(v) => update("insta", v)}
                placeholder="@username"
              />

              <div className="md:col-span-2">
                <Field
                  label="Portfolio Link"
                  value={form.portfolio}
                  onChange={(v) => update("portfolio", v)}
                  placeholder="Behance / Drive / Website"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.25em] text-white/50">
                  Role Interested In
                </label>

                <select
                  value={form.role}
                  onChange={(e) =>
                    update("role", e.target.value)
                  }
                  className="mt-2 w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 outline-none"
                >
                  {[
                    "Content Creator",
                    "Photographer",
                    "Videographer",
                    "Video Editor",
                    "Frontend Developer",
                    "Social Media Manager",
                    "Writer",
                    "Intern",
                  ].map((o) => (
                    <option
                      key={o}
                      className="bg-black"
                    >
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.25em] text-white/50">
                  Why do you want to join?
                </label>

                <textarea
                  required
                  rows={5}
                  value={form.why}
                  onChange={(e) =>
                    update("why", e.target.value)
                  }
                  className="mt-2 w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 outline-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-transform">
                  Submit Application
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </form>

            {/* SIDE */}
            <aside className="lg:col-span-4 space-y-5">

              <div className="rounded-[2rem] bg-gradient-to-br from-[#1f1b16] to-[#120f0c] text-white p-8 border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
                  What You'll Do
                </p>

                <ul className="mt-6 space-y-4 text-lg text-white/80">
                  <li>• Shoot cinematic Jaipur reels</li>
                  <li>• Edit engaging content</li>
                  <li>• Work with real brands</li>
                  <li>• Explore hidden places</li>
                  <li>• Build your portfolio</li>
                </ul>
              </div>

              <div className="rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
                  Perks
                </p>

                <p className="mt-5 text-xl text-white/80 leading-relaxed">
                  Real projects. Real exposure.
                  Networking opportunities.
                  Coffee on us ☕
                </p>
              </div>
            </aside>
          </>
        )}
      </section>

      {/* CERTIFICATE SECTION */}
      <section className="max-w-5xl mx-auto px-6 mt-32 relative z-10">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-orange-300 text-sm mb-4">
            Verification Portal
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Verify Your{" "}
            <span className="gradient-text">
              Certificate
            </span>
          </h2>

          <p className="text-white/60 mt-5 text-lg">
            Enter your certificate ID to verify
            authenticity.
          </p>
        </div>

        {/* SEARCH */}
        <form
          onSubmit={verifyCertificate}
          className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl flex flex-col sm:flex-row gap-4"
        >
          <input
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="JDC-2025-001"
            className="flex-1 rounded-full border border-white/10 bg-black/20 px-6 py-4 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            {loading ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <Search className="size-5" />
            )}

            Verify
          </button>
        </form>

        {/* VERIFIED */}
        {result && (
          <div className="mt-10 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1f1b16] to-[#120f0c] p-8 text-white shadow-[0_0_80px_rgba(249,115,22,0.15)] border border-orange-500/20">

            <div className="absolute top-6 right-6">
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 text-xs uppercase tracking-[0.25em]">
                Officially Verified
              </div>
            </div>

            <div className="flex items-center gap-3 text-emerald-400">
              <BadgeCheck className="size-6" />

              <span className="text-sm uppercase tracking-[0.25em]">
                Verified Certificate
              </span>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <div className="size-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-3xl font-bold">
                {result.candidate_name?.charAt(0)}
              </div>

              <div>
                <h2 className="text-4xl font-bold">
                  {result.candidate_name}
                </h2>

                <p className="text-white/50 mt-2">
                  JaipurDotCom Certified Intern
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                Internship Domain
              </p>

              <h3 className="mt-3 text-2xl text-orange-300 font-semibold">
                {result.domain}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/50 uppercase text-xs">
                  Certificate ID
                </p>

                <p className="mt-2 text-lg">
                  {result.certificate_number}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/50 uppercase text-xs">
                  Duration
                </p>

                <p className="mt-2 text-lg">
                  {result.duration}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/50 uppercase text-xs">
                  Start Date
                </p>

                <p className="mt-2 text-lg">
                  {result.start_date}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/50 uppercase text-xs">
                  End Date
                </p>

                <p className="mt-2 text-lg">
                  {result.end_date}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/50 uppercase text-xs">
                  Issue Date
                </p>

                <p className="mt-2 text-lg">
                  {result.issue_date}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white/50 uppercase text-xs">
                  Status
                </p>

                <p className="mt-2 text-emerald-400 font-semibold">
                  {result.status}
                </p>
              </div>
            </div>

            <a
              href={result.certificateUrl}
              download
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-7 py-4 text-sm font-semibold text-white shadow-xl hover:scale-105 transition-transform"
            >
              <Download className="size-4" />
              Download Certificate
            </a>
          </div>
        )}

        {/* NOT FOUND */}
        {notFound && (
          <div className="mt-10 rounded-[2rem] border border-red-500/20 bg-red-500/10 p-10 text-center">
            <ShieldX className="size-10 text-red-400 mx-auto" />

            <h3 className="mt-5 text-3xl font-bold text-white">
              Certificate Not Found
            </h3>

            <p className="mt-3 text-white/60">
              Please check your certificate ID and try again.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-white/50">
        {label}
      </label>

      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 outline-none transition focus:border-orange-400"
      />
    </div>
  );
}