import React, { useState } from 'react';
import { Search, Film, Filter, Calendar, Award, Sparkles, ArrowUpDown, ChevronRight } from 'lucide-react';
import { Movie, Actor } from '../types';

interface MoviesViewProps {
  movies: Movie[];
  actors: Actor[];
  onSelectMovie: (movie: Movie) => void;
}

export const MoviesView: React.FC<MoviesViewProps> = ({ movies, actors, onSelectMovie }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc' | 'title-asc'>('year-desc');

  // Extract all unique genres
  const allGenres = Array.from(new Set(movies.flatMap((m) => m.genre))).sort();

  const filteredMovies = movies.filter((movie) => {
    // Search
    const matchSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (movie.teluguTitle && movie.teluguTitle.includes(searchQuery)) ||
      movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.musicDirector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.leadCast.some((c) => c.actorName.toLowerCase().includes(searchQuery.toLowerCase()));

    // Genre
    const matchGenre = selectedGenre === 'all' || movie.genre.includes(selectedGenre);

    // Era
    let matchEra = true;
    if (selectedEra === 'golden') matchEra = movie.releaseYear < 1980;
    else if (selectedEra === '80s-90s') matchEra = movie.releaseYear >= 1980 && movie.releaseYear < 2000;
    else if (selectedEra === '2000s') matchEra = movie.releaseYear >= 2000 && movie.releaseYear < 2015;
    else if (selectedEra === 'pan-india') matchEra = movie.releaseYear >= 2015;

    return matchSearch && matchGenre && matchEra;
  });

  filteredMovies.sort((a, b) => {
    if (sortBy === 'year-desc') return b.releaseYear - a.releaseYear;
    if (sortBy === 'year-asc') return a.releaseYear - b.releaseYear;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <Film className="w-3.5 h-3.5" />
          <span>Telugu Cinema Filmography Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          Landmark Telugu Movies & Classics
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          From golden-era mythological treasures like Mayabazar to global sensations like Baahubali, RRR, and Kalki 2898 AD.
          Click any film to explore cast connections, technical milestones, and verified awards.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-[#0e1017] border border-amber-950/40">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, director (e.g. Rajamouli), music director (Keeravani), or lead actor..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
            >
              <option value="year-desc">Release Year: Newest First</option>
              <option value="year-asc">Release Year: Oldest First</option>
              <option value="title-asc">Movie Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs text-slate-500 font-mono mr-2">Era:</span>
          {[
            { id: 'all', label: 'All Eras' },
            { id: 'golden', label: 'Golden Classical (<1980)' },
            { id: '80s-90s', label: 'Mass Commercial Era (80s-90s)' },
            { id: '2000s', label: 'New Millennium (2000-2014)' },
            { id: 'pan-india', label: 'Pan-India Era (2015+)' }
          ].map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedEra === era.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {era.label}
            </button>
          ))}
        </div>

        {/* Genre Selector */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs text-slate-500 font-mono mr-2">Genre:</span>
          <button
            onClick={() => setSelectedGenre('all')}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              selectedGenre === 'all'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All
          </button>
          {allGenres.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                selectedGenre === g
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Displaying {filteredMovies.length} Landmark Movies</span>
          <span>Click any card for technical breakdown</span>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
            <Film className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-base text-slate-400">No movies found matching criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('all');
                setSelectedEra('all');
              }}
              className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-medium hover:bg-amber-500/30 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onSelectMovie(movie)}
                className="group cursor-pointer rounded-2xl bg-[#0e1017] border border-slate-800/80 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-950/20 flex flex-col"
              >
                {/* Poster */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-400">
                    {movie.releaseYear}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400 truncate">
                      {movie.genre.join(' · ')}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                      {movie.title}
                    </h3>
                    {movie.teluguTitle && (
                      <div className="text-xs text-slate-400 font-medium">{movie.teluguTitle}</div>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {movie.synopsis}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="text-xs text-slate-400">
                      Dir. <span className="text-slate-200 font-medium">{movie.director}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                      <span>{movie.boxOfficeVerdict || 'Classic'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
