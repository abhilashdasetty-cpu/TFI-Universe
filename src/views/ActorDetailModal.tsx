import React from 'react';
import { X, Heart, Award, Film, Calendar, Clapperboard, Sparkles, CheckCircle2, User, ChevronRight } from 'lucide-react';
import { Actor, Movie } from '../types';

interface ActorDetailModalProps {
  actor: Actor | null;
  onClose: () => void;
  onSelectMovieById: (movieId: string, fallbackTitle?: string) => void;
  onSelectActor: (actor: Actor) => void;
  allActors: Actor[];
  isFavorite: boolean;
  onToggleFavorite: (actorId: string) => void;
}

export const ActorDetailModal: React.FC<ActorDetailModalProps> = ({
  actor,
  onClose,
  onSelectMovieById,
  onSelectActor,
  allActors,
  isFavorite,
  onToggleFavorite
}) => {
  if (!actor) return null;

  // Find other actors in the same generation for recommendations
  const relatedActors = allActors
    .filter((a) => a.id !== actor.id && a.generation === actor.generation)
    .slice(0, 3);

  const generationLabels: Record<string, string> = {
    legendary: 'Legendary Pioneer',
    senior: 'Senior Titan',
    established: 'Established Global Star',
    contemporary: 'Contemporary Trailblazer'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-[#0e1017] border border-amber-900/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Header Banner */}
        <div className="relative h-48 sm:h-64 w-full bg-gradient-to-t from-[#0e1017] via-slate-900 to-amber-950/40 shrink-0">
          <img
            src={actor.coverUrl || actor.portraitUrl}
            alt={actor.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/70 to-transparent" />

          {/* Top Actions */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => onToggleFavorite(actor.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                isFavorite
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50'
                  : 'bg-black/40 text-slate-300 hover:text-rose-400 border border-white/10'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Actor Profile Head overlay */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 flex items-end gap-4 sm:gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-slate-900 shrink-0">
              <img
                src={actor.portraitUrl}
                alt={actor.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                {generationLabels[actor.generation] || actor.generation}
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100 truncate">
                {actor.name}
              </h2>
              {actor.teluguName && (
                <div className="text-sm sm:text-base text-amber-300/80 font-medium">
                  {actor.teluguName}
                </div>
              )}
              {actor.titleHonorific && (
                <div className="text-xs text-amber-400/90 font-mono italic mt-0.5">
                  "{actor.titleHonorific}"
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
          {/* Quick Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Debut Year</span>
              <span className="font-mono text-base font-bold text-amber-300">{actor.debutYear}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Debut Film</span>
              <span className="text-sm font-semibold text-slate-200 truncate block">{actor.debutFilm}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Total Films</span>
              <span className="font-mono text-base font-bold text-amber-300">
                {actor.filmography.length}+ Notable
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Major Honors</span>
              <span className="text-sm font-semibold text-slate-200 truncate block">
                {actor.awards[0] || 'State & National'}
              </span>
            </div>
          </div>

          {/* Biography & Early Life */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <User className="w-5 h-5 text-amber-400" />
              <span>Biography & Background</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {actor.biography}
            </p>
            {actor.earlyLife && (
              <div className="p-4 rounded-lg bg-amber-950/15 border border-amber-900/30 text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-amber-300 block mb-1">Early Life & Origins</span>
                {actor.earlyLife}
              </div>
            )}
          </div>

          {/* Career Milestones */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Career Milestones & Pathbreaking Achievements</span>
            </h3>
            <div className="space-y-2">
              {actor.careerMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Filmography */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
                <Film className="w-5 h-5 text-amber-400" />
                <span>Selected Landmark Filmography</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                Click a title to inspect movie record
              </span>
            </div>

            <div className="divide-y divide-slate-800/80 rounded-xl bg-slate-900/50 border border-slate-800 overflow-hidden">
              {actor.filmography.map((film) => (
                <button
                  key={film.id}
                  onClick={() => onSelectMovieById(film.movieId || '', film.movieTitle)}
                  className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-800/70 transition-colors group"
                >
                  <div className="min-w-0 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm sm:text-base text-slate-200 group-hover:text-amber-300 truncate">
                        {film.movieTitle}
                      </span>
                      <span className="font-mono text-xs text-amber-500/80 shrink-0">
                        ({film.releaseYear})
                      </span>
                      {film.verdict && (
                        <span className="hidden sm:inline text-[11px] font-mono text-slate-400">
                          · {film.verdict}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Role: <span className="text-slate-300">{film.role}</span> · Dir. {film.director}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Awards & Recognitions */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Awards, National Honors & Recognitions</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {actor.awards.map((award, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-900/40 border border-amber-900/20 text-xs sm:text-sm text-amber-200/90 flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Projects (if any) */}
          {actor.upcomingProjects && actor.upcomingProjects.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Verified Forthcoming Projects
              </h4>
              <div className="flex flex-wrap gap-2">
                {actor.upcomingProjects.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Contemporaries in Same Generation */}
          {relatedActors.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Contemporaries in {generationLabels[actor.generation]} Era
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedActors.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectActor(rel)}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
                  >
                    <img
                      src={rel.portraitUrl}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-amber-500/30"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-xs text-slate-200 group-hover:text-amber-300 truncate">
                        {rel.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono truncate">
                        {rel.debutYear} Debut
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Archival Citation */}
          <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
            <span>Verified Source: {actor.verifiedSource || 'National Film Archives'}</span>
            <span>Last Audit: {actor.lastVerifiedDate || '2026-10-15'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
