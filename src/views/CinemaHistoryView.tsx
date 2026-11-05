import React, { useState } from 'react';
import { Clock, Calendar, Film, Award, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { HISTORY_TIMELINE } from '../data/seedData';
import { HistoryMilestone } from '../types';

export const CinemaHistoryView: React.FC = () => {
  const [selectedDecade, setSelectedDecade] = useState<string>('all');

  const decades = ['all', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

  const filteredHistory = selectedDecade === 'all'
    ? HISTORY_TIMELINE
    : HISTORY_TIMELINE.filter((h) => h.decade === selectedDecade);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <Clock className="w-3.5 h-3.5" />
          <span>Telugu Cinema Chronological History</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          The Decades of Telugu Cinema
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          From the arrival of sound in Bhakta Prahlada (1932) to the historic Academy Award triumph of RRR (2022).
          Explore the technological shifts, legendary directors, and landmark movies across 10 decades.
        </p>
      </div>

      {/* Decade Selector */}
      <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[#0e1017] border border-amber-950/40">
        <span className="text-xs text-slate-500 font-mono px-2">Decade:</span>
        {decades.map((dec) => (
          <button
            key={dec}
            onClick={() => setSelectedDecade(dec)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
              selectedDecade === dec
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {dec.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Chronological Vertical Timeline with Glowing Spine */}
      <div className="relative border-l-2 border-amber-900/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {filteredHistory.map((item, idx) => (
          <div key={item.year} className="relative group">
            {/* Timeline node marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#0b0c10] border-2 border-amber-500 group-hover:bg-amber-400 transition-colors shadow-lg shadow-amber-950/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-slate-950" />
            </div>

            {/* Timeline Content Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-slate-800/80 group-hover:border-amber-500/40 transition-colors space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 uppercase">
                    {item.decade} Era
                  </span>
                </div>
                <div className="text-xs font-mono text-amber-500/90 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cinematic Landmark</span>
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Significance Box */}
              <div className="p-3.5 rounded-xl bg-amber-950/15 border border-amber-900/30 text-xs sm:text-sm text-amber-200/90">
                <span className="font-bold text-amber-400 block mb-0.5">Historical Significance:</span>
                {item.significance}
              </div>

              {/* Notable Figures & Landmark Films */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-slate-400">
                <div>
                  <span className="text-slate-500 block uppercase mb-1">Pioneering Figures:</span>
                  <span className="text-slate-300">{item.notableFigures.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase mb-1">Key Milestone Films:</span>
                  <span className="text-amber-400 font-semibold">{item.keyFilms.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
