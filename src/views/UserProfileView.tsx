import React, { useState } from 'react';
import {
  User,
  Heart,
  Bookmark,
  Award,
  Layers,
  Film,
  Calendar,
  Sparkles,
  CheckCircle2,
  Trash2,
  ChevronRight,
  Edit2
} from 'lucide-react';
import { UserProfile, Actor, Movie, LessonTopic, StoryboardProject } from '../types';

interface UserProfileViewProps {
  userProfile: UserProfile;
  actors: Actor[];
  movies: Movie[];
  lessons: LessonTopic[];
  storyboards: StoryboardProject[];
  onSelectActor: (actor: Actor) => void;
  onSelectMovie: (movie: Movie) => void;
  onSelectLesson: (lesson: LessonTopic) => void;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onToggleFavoriteActor: (actorId: string) => void;
  onToggleFavoriteMovie: (movieId: string) => void;
  onToggleBookmarkLesson: (lessonId: string) => void;
}

export const UserProfileView: React.FC<UserProfileViewProps> = ({
  userProfile,
  actors,
  movies,
  lessons,
  storyboards,
  onSelectActor,
  onSelectMovie,
  onSelectLesson,
  onUpdateProfile,
  onToggleFavoriteActor,
  onToggleFavoriteMovie,
  onToggleBookmarkLesson
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [roleInput, setRoleInput] = useState(userProfile.role);

  const favoriteActors = actors.filter((a) => userProfile.favoriteActorIds.includes(a.id));
  const favoriteMovies = movies.filter((m) => userProfile.favoriteMovieIds.includes(m.id));
  const bookmarkedLessons = lessons.filter((l) => userProfile.bookmarkedLessonIds.includes(l.id));

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      name: nameInput.trim() || userProfile.name,
      role: roleInput
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Profile Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/20 via-[#0e1017] to-slate-900 border border-amber-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-18 h-18 rounded-2xl bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center text-amber-400 font-serif text-3xl font-black shrink-0">
            {userProfile.name.charAt(0)}
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-amber-400 tracking-wider">
              {userProfile.role} Account
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              {userProfile.name}
            </h1>
            <p className="text-xs text-slate-400 font-mono">{userProfile.email}</p>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
        >
          <Edit2 className="w-4 h-4 text-amber-400" />
          <span>{isEditing ? 'Close Profile Editor' : 'Edit Profile'}</span>
        </button>
      </div>

      {/* Edit Form */}
      {isEditing && (
        <form
          onSubmit={handleSaveProfile}
          className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-xl space-y-4"
        >
          <h3 className="font-serif text-lg font-bold text-amber-100">Update Profile Details</h3>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Full Name</label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Role / Passion</label>
              <select
                value={roleInput}
                onChange={(e) => setRoleInput(e.target.value as any)}
                className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200"
              >
                <option value="filmmaker">Aspiring Filmmaker</option>
                <option value="student">Film & Media Student</option>
                <option value="enthusiast">Cinema Enthusiast</option>
                <option value="admin">Platform Administrator</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase"
          >
            Save Changes
          </button>
        </form>
      )}

      {/* 1. FAVORITE ACTORS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="font-serif text-2xl font-bold text-amber-100 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <span>Favorite Telugu Heroes ({favoriteActors.length})</span>
          </h2>
          <span className="text-xs text-slate-500 font-mono">Saved in local profile</span>
        </div>

        {favoriteActors.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No favorite actors saved yet. Browse heroes to bookmark them!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteActors.map((actor) => (
              <div
                key={actor.id}
                className="p-3.5 rounded-xl bg-[#0e1017] border border-slate-800 flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => onSelectActor(actor)}
                  className="flex items-center gap-3 cursor-pointer min-w-0 flex-1"
                >
                  <img
                    src={actor.portraitUrl}
                    alt={actor.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-slate-200 group-hover:text-amber-300 truncate">
                      {actor.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">{actor.debutYear} Debut</div>
                  </div>
                </div>
                <button
                  onClick={() => onToggleFavoriteActor(actor.id)}
                  className="p-1.5 text-rose-400 hover:text-rose-300"
                  title="Remove"
                >
                  <Heart className="w-4 h-4 fill-rose-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. FAVORITE MOVIES */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="font-serif text-2xl font-bold text-amber-100 flex items-center gap-2">
            <Film className="w-5 h-5 text-amber-400" />
            <span>Favorite Movies ({favoriteMovies.length})</span>
          </h2>
        </div>

        {favoriteMovies.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No favorite movies saved yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteMovies.map((movie) => (
              <div
                key={movie.id}
                className="p-3.5 rounded-xl bg-[#0e1017] border border-slate-800 flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => onSelectMovie(movie)}
                  className="flex items-center gap-3 cursor-pointer min-w-0 flex-1"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-14 rounded object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-slate-200 group-hover:text-amber-300 truncate">
                      {movie.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {movie.releaseYear} · Dir. {movie.director}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onToggleFavoriteMovie(movie.id)}
                  className="p-1.5 text-rose-400 hover:text-rose-300"
                  title="Remove"
                >
                  <Heart className="w-4 h-4 fill-rose-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. BOOKMARKED LESSONS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="font-serif text-2xl font-bold text-amber-100 flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400" />
            <span>Bookmarked Filmmaking Masterclasses ({bookmarkedLessons.length})</span>
          </h2>
        </div>

        {bookmarkedLessons.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No bookmarked lessons yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookmarkedLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="p-4 rounded-xl bg-[#0e1017] border border-slate-800 flex items-center justify-between gap-4 group"
              >
                <div
                  onClick={() => onSelectLesson(lesson)}
                  className="cursor-pointer min-w-0 flex-1"
                >
                  <div className="text-[10px] uppercase font-mono text-amber-400">
                    {lesson.stage}
                  </div>
                  <h4 className="font-serif font-bold text-base text-slate-200 group-hover:text-amber-300 truncate">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{lesson.summary}</p>
                </div>
                <button
                  onClick={() => onToggleBookmarkLesson(lesson.id)}
                  className="p-1.5 text-amber-400 hover:text-amber-300"
                  title="Remove bookmark"
                >
                  <Bookmark className="w-4 h-4 fill-amber-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. QUIZ EVALUATION HISTORY */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="font-serif text-2xl font-bold text-amber-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Quiz & Assessment Records ({userProfile.quizScores.length})</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {userProfile.quizScores.map((scoreItem, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                <span className="text-amber-400 font-bold uppercase">{scoreItem.quizCategory}</span>
                <span>{scoreItem.date}</span>
              </div>
              <div className="font-mono text-2xl font-black text-amber-300 tabular-nums">
                {scoreItem.score} / {scoreItem.total}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">Verified Score</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
