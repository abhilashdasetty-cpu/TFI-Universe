import React, { useState } from 'react';
import { Clapperboard, Award, Film, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { NavView } from './Header';

interface FooterProps {
  onNavigate: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#07080a] border-t border-amber-950/40 text-slate-400 mt-24">
      {/* Newsletter Strip */}
      <div className="border-b border-slate-900 bg-gradient-to-r from-amber-950/20 via-slate-950 to-amber-950/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl text-amber-100 font-bold tracking-wide">
              The Telugu Cinema & Filmmaking Dispatch
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Curated masterclasses, script breakdowns, archival Telugu cinema history retrospectives, and storyboard techniques delivered monthly.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
        {subscribed && (
          <div className="max-w-5xl mx-auto mt-3 text-center text-xs text-amber-400 flex items-center justify-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Thank you for subscribing to the TFI Universe Filmmaking dispatch.
          </div>
        )}
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Philosophy */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
              <Clapperboard className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wider text-amber-100">
              TFI UNIVERSE
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Beyond the screen. Into the world of Telugu cinema.
            Dedicated to honoring the legends, empowering future filmmakers, and democratizing pre-production storyboarding tools.
          </p>
          <div className="pt-2 text-xs text-slate-500 space-y-1 font-mono">
            <div>EST. 2026 · HYDERABAD & GLOBAL DIASPORA</div>
            <div>VERIFIED CINEMATIC ARCHIVE & INTERACTIVE ACADEMY</div>
          </div>
        </div>

        {/* Col 2: Telugu Heroes & Generations */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">
            Telugu Heroes
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => onNavigate('heroes')} className="hover:text-amber-300 transition-colors">
                Legendary Generation (NTR, ANR, Krishna)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('heroes')} className="hover:text-amber-300 transition-colors">
                Senior Generation (Chiranjeevi, NBK, Nag, Venky)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('heroes')} className="hover:text-amber-300 transition-colors">
                Established Stars (Pawan, Mahesh, Prabhas, Tarak, Bunny, Charan)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('heroes')} className="hover:text-heroes transition-colors">
                Contemporary Trailblazers (Nani, Vijay, Sesh)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('movies')} className="hover:text-amber-300 transition-colors">
                Industry Hits & Classics
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Filmmaking Academy */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">
            Filmmaking Academy
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => onNavigate('filmmaking')} className="hover:text-amber-300 transition-colors">
                Pre-Production & Script Breakdown
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('filmmaking')} className="hover:text-amber-300 transition-colors">
                Cinematography & 3-Point Lighting
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('filmmaking')} className="hover:text-amber-300 transition-colors">
                Editing, J-Cuts & Sound Design
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('multimedia')} className="hover:text-amber-300 transition-colors">
                12 Principles of Animation
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('multimedia')} className="hover:text-amber-300 transition-colors">
                VFX Pipeline & Compositing
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Creative Studio & Tools */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">
            Interactive Studio
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => onNavigate('storyboard')} className="hover:text-amber-300 transition-colors">
                Interactive Storyboard Creator
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('studio')} className="hover:text-amber-300 transition-colors">
                Camera Angle Explorer
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('studio')} className="hover:text-amber-300 transition-colors">
                Production Shot Planner
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('studio')} className="hover:text-amber-300 transition-colors">
                Three-Stage Production Checklist
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('learning')} className="hover:text-amber-300 transition-colors">
                Filmmaking Glossary & Quizzes
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Citation & Copyright Bar */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} TFI UNIVERSE. All rights reserved.</span>
            <span>·</span>
            <span className="text-slate-400">Curated with historical reverence & educational rigor.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-500">
            <span>Sources: NFAI Archives</span>
            <span>·</span>
            <span>Directorate of Film Festivals</span>
            <span>·</span>
            <span>CBFC Records</span>
            <span>·</span>
            <span>CBSE Animator Curriculum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
