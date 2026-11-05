import React, { useState, useEffect, useRef } from 'react';
import { Search, X, User, Film, BookOpen, Wrench, ArrowRight } from 'lucide-react';
import { Actor, Movie, LessonTopic, GlossaryTerm } from '../types';
import { NavView } from './Header';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  actors: Actor[];
  movies: Movie[];
  lessons: LessonTopic[];
  glossary: GlossaryTerm[];
  onSelectActor: (actor: Actor) => void;
  onSelectMovie: (movie: Movie) => void;
  onSelectLesson: (lesson: LessonTopic) => void;
  onNavigate: (view: NavView) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  actors,
  movies,
  lessons,
  glossary,
  onSelectActor,
  onSelectMovie,
  onSelectLesson,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedActors = trimmed
    ? actors.filter(
        (a) =>
          a.name.toLowerCase().includes(trimmed) ||
          (a.teluguName && a.teluguName.includes(trimmed)) ||
          (a.titleHonorific && a.titleHonorific.toLowerCase().includes(trimmed))
      ).slice(0, 4)
    : [];

  const matchedMovies = trimmed
    ? movies.filter(
        (m) =>
          m.title.toLowerCase().includes(trimmed) ||
          m.director.toLowerCase().includes(trimmed) ||
          m.releaseYear.toString().includes(trimmed) ||
          m.genre.some((g) => g.toLowerCase().includes(trimmed))
      ).slice(0, 4)
    : [];

  const matchedLessons = trimmed
    ? lessons.filter(
        (l) =>
          l.title.toLowerCase().includes(trimmed) ||
          l.summary.toLowerCase().includes(trimmed) ||
          l.stage.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  const matchedGlossary = trimmed
    ? glossary.filter(
        (g) =>
          g.term.toLowerCase().includes(trimmed) ||
          g.definition.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  const hasResults =
    matchedActors.length > 0 ||
    matchedMovies.length > 0 ||
    matchedLessons.length > 0 ||
    matchedGlossary.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl bg-[#0f1118] border border-amber-900/40 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Telugu heroes, movies, filmmaking lessons, glossary..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!trimmed && (
            <div className="py-6 text-center text-slate-500 text-sm space-y-2">
              <p>Type to search across heroes, movies, cinematography guides, and academy tools.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['NTR', 'Mayabazar', 'Chiranjeevi', '3-Point Lighting', 'Prabhas', 'Animatic', 'Steadicam', 'RRR'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded bg-slate-900 hover:bg-amber-950/40 border border-slate-800 hover:border-amber-700/50 text-slate-300 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {trimmed && !hasResults && (
            <div className="py-12 text-center text-slate-500">
              <p className="text-base text-slate-400">No results found for "{query}"</p>
              <p className="text-xs text-slate-600 mt-1">Try searching by actor name, movie title, director, or camera technique.</p>
            </div>
          )}

          {/* Matched Actors */}
          {matchedActors.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <User className="w-3.5 h-3.5" />
                <span>Telugu Heroes ({matchedActors.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedActors.map((actor) => (
                  <button
                    key={actor.id}
                    onClick={() => {
                      onSelectActor(actor);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-amber-500/40 text-left transition-colors group"
                  >
                    <img
                      src={actor.portraitUrl}
                      alt={actor.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-300 truncate">
                        {actor.name}
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        {actor.titleHonorific || `${actor.debutYear} Debut`}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Movies */}
          {matchedMovies.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Film className="w-3.5 h-3.5" />
                <span>Movies & Classics ({matchedMovies.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedMovies.map((movie) => (
                  <button
                    key={movie.id}
                    onClick={() => {
                      onSelectMovie(movie);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-amber-500/40 text-left transition-colors group"
                  >
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      referrerPolicy="no-referrer"
                      className="w-8 h-11 rounded object-cover border border-slate-700 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-300 truncate">
                        {movie.title} ({movie.releaseYear})
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        Dir. {movie.director}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Lessons */}
          {matchedLessons.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Filmmaking Lessons ({matchedLessons.length})</span>
              </div>
              <div className="space-y-2">
                {matchedLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      onSelectLesson(lesson);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-amber-500/40 text-left transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs uppercase text-amber-500 font-mono">
                        {lesson.stage}
                      </div>
                      <div className="font-medium text-sm text-slate-200 group-hover:text-amber-300">
                        {lesson.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Glossary */}
          {matchedGlossary.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5" />
                <span>Glossary Terms ({matchedGlossary.length})</span>
              </div>
              <div className="space-y-2">
                {matchedGlossary.map((term) => (
                  <div
                    key={term.id}
                    className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-amber-200">{term.term}</span>
                      <span className="text-[10px] text-slate-500 font-mono uppercase">{term.category}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{term.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-950 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Navigate with click or ESC to close</span>
          <span className="font-mono text-amber-500/80">TFI UNIVERSE SEARCH</span>
        </div>
      </div>
    </div>
  );
};
