import React, { useState } from 'react';
import { Search, Filter, User, Sparkles, Award, Film, ArrowUpDown, ChevronRight } from 'lucide-react';
import { Actor, ActorGeneration } from '../types';

interface HeroesViewProps {
  actors: Actor[];
  onSelectActor: (actor: Actor) => void;
}

export const HeroesView: React.FC<HeroesViewProps> = ({ actors, onSelectActor }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState<string>('all');
  const [debutFilter, setDebutFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'debut-asc' | 'debut-desc' | 'name-asc'>('debut-asc');

  const generations: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Generations', count: actors.length },
    { id: 'legendary', label: 'Legendary Icons', count: actors.filter((a) => a.generation === 'legendary').length },
    { id: 'senior', label: 'Senior Titans', count: actors.filter((a) => a.generation === 'senior').length },
    { id: 'established', label: 'Established Stars', count: actors.filter((a) => a.generation === 'established').length },
    { id: 'contemporary', label: 'Contemporary & Emerging', count: actors.filter((a) => a.generation === 'contemporary').length }
  ];

  const filteredActors = actors.filter((actor) => {
    // Search query
    const matchSearch =
      actor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (actor.teluguName && actor.teluguName.includes(searchQuery)) ||
      (actor.titleHonorific && actor.titleHonorific.toLowerCase().includes(searchQuery.toLowerCase())) ||
      actor.debutFilm.toLowerCase().includes(searchQuery.toLowerCase());

    // Generation
    const matchGen = selectedGeneration === 'all' || actor.generation === selectedGeneration;

    // Debut Era
    let matchDebut = true;
    if (debutFilter === 'pre-1970') matchDebut = actor.debutYear < 1970;
    else if (debutFilter === '1970-1989') matchDebut = actor.debutYear >= 1970 && actor.debutYear <= 1989;
    else if (debutFilter === '1990-2009') matchDebut = actor.debutYear >= 1990 && actor.debutYear <= 2009;
    else if (debutFilter === 'post-2010') matchDebut = actor.debutYear >= 2010;

    return matchSearch && matchGen && matchDebut;
  });

  // Sorting
  filteredActors.sort((a, b) => {
    if (sortBy === 'debut-asc') return a.debutYear - b.debutYear;
    if (sortBy === 'debut-desc') return b.debutYear - a.debutYear;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <User className="w-3.5 h-3.5" />
          <span>Telugu Cinema Hero Directory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          The Pantheon of Telugu Heroes
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Explore the legends, senior pillars, established powerhouses, and contemporary icons of Telugu cinema.
          Click any actor to inspect their complete biography, milestones, awards, and connected filmography.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-[#0e1017] border border-amber-950/40">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by hero name, title (e.g. Megastar, Superstar), or debut film..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
            >
              <option value="debut-asc">Debut Year: Earliest First</option>
              <option value="debut-desc">Debut Year: Most Recent</option>
              <option value="name-asc">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Generation Filter Tabs (Buttons with click handlers per frontend guidelines) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs text-slate-500 font-mono mr-2">Era:</span>
          {generations.map((gen) => (
            <button
              key={gen.id}
              onClick={() => setSelectedGeneration(gen.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedGeneration === gen.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {gen.label} ({gen.count})
            </button>
          ))}
        </div>
      </div>

      {/* Actor Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Showing {filteredActors.length} Telugu Heroes</span>
          <span>Click any card for full dossier & filmography</span>
        </div>

        {filteredActors.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
            <User className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-base text-slate-400">No actors found matching your criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGeneration('all');
                setDebutFilter('all');
              }}
              className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-medium hover:bg-amber-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredActors.map((actor) => (
              <div
                key={actor.id}
                onClick={() => onSelectActor(actor)}
                className="group cursor-pointer rounded-2xl bg-[#0e1017] border border-amber-950/40 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-950/20 flex flex-col"
              >
                {/* Portrait */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                  <img
                    src={actor.portraitUrl}
                    alt={actor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-400">
                    {actor.debutYear} Debut
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {actor.titleHonorific && (
                      <div className="text-[11px] font-mono uppercase text-amber-500/90 font-semibold truncate">
                        "{actor.titleHonorific}"
                      </div>
                    )}
                    <h3 className="font-serif text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                      {actor.name}
                    </h3>
                    {actor.teluguName && (
                      <div className="text-xs text-slate-400 font-medium">{actor.teluguName}</div>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {actor.biography}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>Debut: {actor.debutFilm}</span>
                      <span className="text-amber-400 font-bold tabular-nums">
                        {actor.filmography.length}+ Films
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-amber-400 group-hover:translate-x-1 transition-transform">
                      <span>Inspect Dossier</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
