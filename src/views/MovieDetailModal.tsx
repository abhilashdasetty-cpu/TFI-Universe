import React from 'react';
import { X, Heart, Award, Film, Users, Sparkles, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Movie, Actor } from '../types';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
  onSelectActorById: (actorId: string, actorName?: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (movieId: string) => void;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({
  movie,
  onClose,
  onSelectActorById,
  isFavorite,
  onToggleFavorite
}) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-[#0e1017] border border-amber-900/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Backdrop Banner */}
        <div className="relative h-48 sm:h-64 w-full bg-gradient-to-t from-[#0e1017] via-slate-900 to-amber-950/40 shrink-0">
          <img
            src={movie.backdropUrl || movie.posterUrl}
            alt={movie.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/75 to-transparent" />

          {/* Top Actions */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => onToggleFavorite(movie.id)}
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

          {/* Title and Year Header */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 flex items-end gap-4 sm:gap-6">
            <div className="w-20 h-28 sm:w-28 sm:h-40 rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-slate-900 shrink-0">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-amber-400">
                <span>{movie.releaseYear}</span>
                <span>·</span>
                <span>{movie.genre.join(' / ')}</span>
                {movie.cbfcRating && (
                  <>
                    <span>·</span>
                    <span className="text-slate-400">CBFC: {movie.cbfcRating}</span>
                  </>
                )}
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100 truncate">
                {movie.title}
              </h2>
              {movie.teluguTitle && (
                <div className="text-sm sm:text-base text-amber-300/80 font-medium">
                  {movie.teluguTitle}
                </div>
              )}
              {movie.boxOfficeVerdict && (
                <div className="text-xs text-amber-500 font-mono font-semibold mt-1">
                  Status: {movie.boxOfficeVerdict}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
          {/* Quick Details Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Director</span>
              <span className="text-sm font-semibold text-slate-200 truncate block">{movie.director}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Music Director</span>
              <span className="text-sm font-semibold text-slate-200 truncate block">{movie.musicDirector}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Cinematographer</span>
              <span className="text-sm font-semibold text-slate-200 truncate block">{movie.cinematographer}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block">Editor</span>
              <span className="text-sm font-semibold text-slate-200 truncate block">{movie.editor}</span>
            </div>
          </div>

          {/* Synopsis */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <Film className="w-5 h-5 text-amber-400" />
              <span>Synopsis & Plot Overview</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Lead Cast with Direct Actor Profile Links */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>Principal Cast</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                Click an actor to view profile
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {movie.leadCast.map((cast, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectActorById(cast.actorId || '', cast.actorName)}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-left transition-colors group"
                >
                  <div>
                    <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-300">
                      {cast.actorName}
                    </div>
                    <div className="text-xs text-slate-400">
                      Role: <span className="text-slate-300">{cast.role}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Technical Milestones & Innovations */}
          {movie.technicalMilestones && movie.technicalMilestones.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Technical Milestones & Cinematic Innovations</span>
              </h3>
              <div className="space-y-2">
                {movie.technicalMilestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-amber-950/15 border border-amber-900/30 text-xs sm:text-sm text-amber-200/90 leading-relaxed"
                  >
                    {milestone}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards */}
          {movie.awards && movie.awards.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Awards & Official Festival Honors</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {movie.awards.map((award, i) => (
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
          )}

          {/* Production House & Meta */}
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
            <span>Production Company: {movie.productionCompany}</span>
            <span>Producer: {movie.producer}</span>
            {movie.runtimeMinutes && <span>Runtime: {movie.runtimeMinutes} mins</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
