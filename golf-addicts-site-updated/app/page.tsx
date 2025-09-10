'use client';

import { useState } from 'react';
import { ArrowRight, CalendarDays, Trophy, Wallet, Twitter, Instagram, Ticket, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import LockerRoom from '@/components/LockerRoom';

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase backdrop-blur">
      {children}
    </span>
  );
}

function Section({ id, title, eyebrow, children }: { id?: string; title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-8 text-center">
        {eyebrow && <Pill>{eyebrow}</Pill>}
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Page() {
  const [email, setEmail] = useState('');
  const [logoUrl, setLogoUrl] = useState<string>('/golf-addicts-logo.png');

  return (
    <div className="min-h-screen text-slate-100">
      {/* Top logo helper */}
      <div className="sticky top-0 z-50 border-b border-emerald-400/20 bg-black/50 px-4 py-2 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 text-xs text-white/70">
          <span className="hidden sm:inline">Logo URL (paste an image link):</span>
          <input
            placeholder="/golf-addicts-logo.png"
            className="h-8 flex-1 rounded-md border border-white/10 bg-black/40 px-2 outline-none focus:ring focus:ring-emerald-400/30"
            onChange={(e) => setLogoUrl(e.target.value || '/golf-addicts-logo.png')}
          />
          <button onClick={() => setLogoUrl('/golf-addicts-logo.png')} className="rounded-md border border-white/10 px-2 py-1">Reset</button>
        </div>
      </div>

      {/* Nav */}
      <header className="z-40 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-purple-600 text-black shadow-lg shadow-emerald-500/20">
              <img src={logoUrl} alt="Golf Addicts Logo" className="h-8 w-8 object-contain" />
            </span>
            <div>
              <div className="text-lg font-extrabold tracking-tight">Golf Addicts</div>
              <div className="-mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60">Play • Web3 • Community</div>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a className="hover:text-white/90" href="#about">About</a>
            <a className="hover:text-white/90" href="#tourney">Tournament</a>
            <a className="hover:text-white/90" href="#tee-time-crypto">Tee Time Crypto</a>
            <a className="hover:text-white/90" href="#locker-room">Locker Room</a>
            <a className="hover:text-white/90" href="#sponsors">Sponsors</a>
            <a className="hover:text-white/90" href="#join">Join</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://magiceden.us/marketplace/golf_addicts"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl"
            >
              Join on Magic Eden
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(147,51,234,0.15),transparent)]" />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>Golf • Web3 • IRL Events</Pill>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              The Home of <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-purple-300 bg-clip-text text-transparent">Golf Addicts</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
              We blend golf culture with crypto-native experiences. Join our tournaments, earn perks, and book tee times with crypto through our Tee Time Crypto partner.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#tourney" className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-3 text-sm font-bold text-black shadow-xl shadow-emerald-500/20 transition hover:translate-y-[-1px]">
                View Upcoming Event
              </a>
              <a href="#tee-time-crypto" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5">
                Book with Crypto
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1"><Wallet className="h-4 w-4" /> Solana-friendly</span>
              <span className="inline-flex items-center gap-1"><Trophy className="h-4 w-4" /> Prizes & Perks</span>
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> IRL & virtual</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl grid place-items-center bg-black/20">
                <img src={logoUrl} alt="Golf Addicts Hero" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-[10px] text-white/70">
                <div className="rounded-lg border border-white/10 bg-black/30 p-2">Solana-powered perks</div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2">Crypto tee-time booking</div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2">Community-run events</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="Golf, but make it degen (in a good way)." eyebrow="What is Golf Addicts?">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: <Trophy className="h-5 w-5" />, title: "Community Tournaments", text: "IRL golf meetups, scrambles, and skills challenges with crypto-friendly prize pools." },
            { icon: <Wallet className="h-5 w-5" />, title: "Tee Time Crypto", text: "Book tee times using crypto. Courses get fiat, you keep the on-chain flex." },
            { icon: <Ticket className="h-5 w-5" />, title: "Member Perks", text: "Early access, merch drops, sponsor discounts, and NFT-powered rewards." },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="mb-3 inline-flex items-center gap-2 text-emerald-300">
                {f.icon}
                <span className="text-xs uppercase tracking-wider">Feature</span>
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/80">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tournament */}
      <Section id="tourney" title="Next Tournament" eyebrow="IRL Event">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg:white/5 p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-white/70">San Diego, CA</div>
              <Pill>Target: Early 2026</Pill>
            </div>
            <h3 className="mt-2 text-2xl font-bold">Golf Addicts Open</h3>
            <p className="mt-2 text-sm text-white/80">Crypto-sponsored scramble, range games, and 19th-hole meetup. Looking for partner courses, sponsors, and players.</p>
            <ul className="mt-4 list-disc pl-6 text-sm text:white/80">
              <li>Player slots: 72 (TBD)</li>
              <li>Format: 4-person scramble</li>
              <li>Divisions: Open / Casual</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#join" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black shadow">Get Notified</a>
              <a href="#sponsors" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white/90">Become a Sponsor</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold">Schedule (Draft)</h4>
            <div className="mt-3 space-y-3 text-sm text-white/80">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
                <span>8:00a – Check-in & Range</span>
                <Pill>Skills comps</Pill>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
                <span>10:00a – Shotgun Start</span>
                <Pill>Scramble</Pill>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
                <span>3:00p – Awards & 19th-Hole</span>
                <Pill>Prizes</Pill>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/60">Exact venue & times subject to confirmation with partner course.</p>
          </div>
        </div>
      </Section>

      {/* Tee Time Crypto */}
      <Section id="tee-time-crypto" title="Book tee times with crypto" eyebrow="Powered by partners">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-teal-500/5 to-purple-600/10 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold">Tee Time Crypto</h3>
              <p className="mt-2 text-sm text-white/80">We’re integrating a seamless flow to pay with SOL or stablecoins while courses receive USD. Until then, request a tee time and we’ll concierge the booking.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href="#request-tee-time" className="rounded-xl bg-white px-4 py-2 font-bold text-black">Request Tee Time</a>
                <a href="#join" className="rounded-xl border border-white/15 px-4 py-2 font-semibold text-white/90">Get Early Access</a>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs uppercase tracking-wide text-white/60">Supported Networks</div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                <li>• Solana (SOL, USDC)</li>
                <li>• EVM coming soon</li>
              </ul>
              <div className="mt-4 text-xs text:white/60">Merchant payout: fiat via partner processor.</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Locker Room (token-gated) */}
      <LockerRoom />

      {/* Sponsors */}
      <Section id="sponsors" title="Sponsors & Partners" eyebrow="Get involved">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Title Sponsor", perk: "Hero logo, on-course branding, podium mentions" },
              { title: "Hole Sponsor", perk: "Tee box signage + social feature" },
              { title: "Prize Sponsor", perk: "Closest-to-pin, long drive, raffle" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-white/80">{s.perk}</p>
                <a href="#join" className="mt-4 inline-block rounded-xl bg-white px-4 py-2 text-sm font-bold text-black">Request Deck</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-white/60">Custom packages available. Web3-native brands welcome.</p>
        </div>
      </Section>

      {/* Join / Newsletter */}
      <Section id="join" title="Join the club" eyebrow="Stay in the loop">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/80">Become a Golf Addict by grabbing our collection on Magic Eden. Perks, events, and more.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://magiceden.us/marketplace/golf_addicts"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-black shadow hover:translate-y-[-1px]"
            >
              Join on Magic Eden
            </a>
            <a
              href="mailto:blueweb3@proton.me?subject=Sponsor%20or%20Volunteer"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5"
            >
              📧 Contact for Sponsorships
            </a>
          </div>
          <p className="mt-3 text-xs text-white/60">Prefer updates by email? We can add a newsletter later.</p>
        </div>
      </Section>

      {/* Contact (Sponsor) */}
      <Section id="contact" title="Sponsor Contact" eyebrow="Get in touch">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm text-white/80">
            We’re looking for partners to help make Golf Addicts tournaments amazing. Reach out directly at:
          </p>
          <a
            href="mailto:blueweb3@proton.me?subject=Sponsor%20Inquiry"
            className="mt-4 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-black shadow hover:translate-y-[-1px]"
          >
            📧 blueweb3@proton.me
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="FAQ" eyebrow="Good to know">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4">
          {[
            { q: "Is this only for advanced golfers?", a: "Nope. We welcome all skill levels. Scramble formats keep it fun and competitive for everyone." },
            { q: "How do crypto payments work?", a: "You’ll pay in SOL/USDC and our partner processor settles to the course in USD." },
            { q: "Can I sponsor the event?", a: "Yes! We have sponsor tiers and custom activations. Hit the ‘Request Deck’ button above." },
          ].map((item, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer list-none font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-white/80">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Golf Addicts. All rights reserved.</div>
          <div className="text-xs text-white/50">Built with love for the degen golfers 🫶</div>
        </div>
      </footer>
    </div>
  );
}
