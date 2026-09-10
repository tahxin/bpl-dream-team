import { useState } from 'react';
import type { FormEvent } from 'react';
import { FiArrowRight, FiInstagram, FiYoutube } from 'react-icons/fi';
import logo from '../assets/logo-footer.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
  };
  return (
    <footer className="bg-[#10251d] text-[#f6f4ee]">
      <section className="border-b border-white/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-18">
          <div><p className="text-sm font-semibold tracking-[0.15em] text-[#b7dc55]">THE DRESSING ROOM</p><h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">Get the squad news worth opening.</h2><p className="mt-4 max-w-lg text-base leading-7 text-white/65">One considered matchday note each week: player form, selection calls and the fixtures that matter. No transfer-rumour noise.</p></div>
          <div className="self-end"><form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row" noValidate><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required value={email} onInvalid={() => setStatus('error')} onChange={(event) => { setEmail(event.target.value); setStatus('idle'); }} placeholder="you@example.com" className="min-h-13 flex-1 border border-white/25 bg-white/8 px-4 text-white outline-none placeholder:text-white/45 focus:border-[#b7dc55]" /><button type="submit" className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#b7dc55] px-5 font-bold text-[#10251d] transition-colors hover:bg-[#d1f572]">Join the list <FiArrowRight /></button></form><p className="mt-3 min-h-5 text-sm text-white/55" aria-live="polite">{status === 'success' ? 'Signup UI confirmed. Connect an email provider before launch to deliver updates.' : status === 'error' ? 'Enter a valid email address to continue.' : 'By subscribing, you agree to receive our weekly email.'}</p></div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8"><div className="grid gap-10 md:grid-cols-[1.2fr_.6fr_.6fr]"><div><img src={logo} alt="BPL Dream Team" className="h-12 w-auto brightness-0 invert" /><p className="mt-4 max-w-xs text-sm leading-6 text-white/60">Build a XI you can stand behind. Every coin is a call.</p></div><div><h3 className="text-sm font-bold tracking-wide text-white">Explore</h3><ul className="mt-4 space-y-3 text-sm text-white/60"><li><a className="hover:text-[#b7dc55]" href="#players">Player pool</a></li><li><a className="hover:text-[#b7dc55]" href="#squad">Your squad</a></li><li><a className="hover:text-[#b7dc55]" href="#top">Match centre</a></li></ul></div><div><h3 className="text-sm font-bold tracking-wide text-white">Follow the game</h3><div className="mt-4 flex gap-3"><a className="grid h-10 w-10 place-items-center border border-white/20 text-white hover:border-[#b7dc55] hover:text-[#b7dc55]" href="https://www.instagram.com/" aria-label="Instagram"><FiInstagram /></a><a className="grid h-10 w-10 place-items-center border border-white/20 text-white hover:border-[#b7dc55] hover:text-[#b7dc55]" href="https://www.youtube.com/" aria-label="YouTube"><FiYoutube /></a></div></div></div><div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 BPL Dream Team. Built for the love of the league.</p><p>Make your picks. Back your XI.</p></div></div>
    </footer>
  );
}
