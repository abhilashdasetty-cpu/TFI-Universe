import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  Trash2,
  Edit2,
  Search,
  RotateCcw,
  Film,
  User,
  CheckCircle2,
  AlertTriangle,
  X
} from 'lucide-react';
import { Actor, Movie, ActorGeneration } from '../types';

interface AdminViewProps {
  actors: Actor[];
  movies: Movie[];
  onSaveActor: (actor: Actor) => void;
  onDeleteActor: (id: string) => void;
  onSaveMovie: (movie: Movie) => void;
  onDeleteMovie: (id: string) => void;
  onResetAll: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  actors,
  movies,
  onSaveActor,
  onDeleteActor,
  onSaveMovie,
  onDeleteMovie,
  onResetAll
}) => {
  const [activeTab, setActiveTab] = useState<'actors' | 'movies'>('actors');
  const [searchFilter, setSearchFilter] = useState('');

  // Editing Actor State
  const [editingActor, setEditingActor] = useState<Actor | null>(null);
  const [isActorModalOpen, setIsActorModalOpen] = useState(false);

  // Editing Movie State
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  // Confirmation modal state
  const [confirmDelete, setConfirmDelete] = useState<{
    type: 'actor' | 'movie' | 'reset';
    id?: string;
    title: string;
  } | null>(null);

  // Filtered actors for table
  const filteredActors = actors.filter(
    (a) =>
      a.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      a.generation.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Filtered movies for table
  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      m.director.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Open New Actor
  const handleOpenNewActor = () => {
    setEditingActor({
      id: `actor-${Date.now()}`,
      name: '',
      teluguName: '',
      titleHonorific: '',
      generation: 'contemporary',
      debutYear: new Date().getFullYear(),
      debutFilm: '',
      portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      biography: '',
      earlyLife: '',
      careerMilestones: ['Breakthrough performance in debut feature film.'],
      notablePerformances: ['Lead character in acclaimed drama'],
      awards: ['Nandi Special Mention'],
      collaborations: ['Top Directors'],
      filmography: [],
      galleryImages: [],
      verifiedSource: 'Administrator Entry',
      lastVerifiedDate: new Date().toISOString().split('T')[0]
    });
    setIsActorModalOpen(true);
  };

  // Open New Movie
  const handleOpenNewMovie = () => {
    setEditingMovie({
      id: `movie-${Date.now()}`,
      title: '',
      teluguTitle: '',
      releaseYear: new Date().getFullYear(),
      releaseDate: new Date().toISOString().split('T')[0],
      genre: ['Action', 'Drama'],
      director: '',
      producer: '',
      musicDirector: '',
      cinematographer: '',
      editor: '',
      productionCompany: '',
      synopsis: '',
      leadCast: [{ actorName: 'Lead Actor', role: 'Protagonist' }],
      awards: [],
      posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
      boxOfficeVerdict: 'Super Hit'
    });
    setIsMovieModalOpen(true);
  };

  // Save Actor Submit
  const handleSaveActorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingActor || !editingActor.name.trim()) return;
    onSaveActor(editingActor);
    setIsActorModalOpen(false);
    setEditingActor(null);
  };

  // Save Movie Submit
  const handleSaveMovieSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMovie || !editingMovie.title.trim()) return;
    onSaveMovie(editingMovie);
    setIsMovieModalOpen(false);
    setEditingMovie(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-amber-950/40 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Administrative Management Console</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
            TFI Universe Content Control Center
          </h1>
          <p className="text-sm text-slate-400">
            Manage actor directories, verified filmographies, movie metadata, and database states.
          </p>
        </div>

        <button
          onClick={() => setConfirmDelete({ type: 'reset', title: 'Reset all database records to verified seed state?' })}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restore Default Database</span>
        </button>
      </div>

      {/* Tabs & Table Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('actors')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'actors'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Manage Heroes ({actors.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('movies')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'movies'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Manage Movies ({movies.length})</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search table..."
              className="pl-9 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
            />
          </div>

          {activeTab === 'actors' ? (
            <button
              onClick={handleOpenNewActor}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Hero</span>
            </button>
          ) : (
            <button
              onClick={handleOpenNewMovie}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Movie</span>
            </button>
          )}
        </div>
      </div>

      {/* ACTORS TABLE */}
      {activeTab === 'actors' && (
        <div className="rounded-2xl bg-[#0e1017] border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[11px] border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Actor</th>
                  <th className="p-3.5">Era / Generation</th>
                  <th className="p-3.5">Debut Year & Film</th>
                  <th className="p-3.5">Films Logged</th>
                  <th className="p-3.5">Top Honor</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredActors.map((actor) => (
                  <tr key={actor.id} className="hover:bg-slate-900/60 transition-colors">
                    <td className="p-3.5 flex items-center gap-3">
                      <img
                        src={actor.portraitUrl}
                        alt={actor.name}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-200">{actor.name}</div>
                        <div className="text-[11px] text-amber-500 font-mono">{actor.titleHonorific || '—'}</div>
                      </div>
                    </td>
                    <td className="p-3.5 font-mono uppercase text-slate-300">{actor.generation}</td>
                    <td className="p-3.5 text-slate-300 font-mono">
                      {actor.debutYear} · {actor.debutFilm}
                    </td>
                    <td className="p-3.5 font-mono text-amber-400 tabular-nums">
                      {actor.filmography.length} entries
                    </td>
                    <td className="p-3.5 text-slate-400 truncate max-w-xs">
                      {actor.awards[0] || 'State / National'}
                    </td>
                    <td className="p-3.5 text-right space-x-2">
                      <button
                        onClick={() => {
                          setEditingActor(actor);
                          setIsActorModalOpen(true);
                        }}
                        className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-amber-400"
                        title="Edit actor"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() =>
                          setConfirmDelete({
                            type: 'actor',
                            id: actor.id,
                            title: `Delete record for ${actor.name}?`
                          })
                        }
                        className="p-1.5 rounded bg-slate-900 hover:bg-rose-950/40 text-slate-500 hover:text-rose-400"
                        title="Delete actor"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MOVIES TABLE */}
      {activeTab === 'movies' && (
        <div className="rounded-2xl bg-[#0e1017] border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[11px] border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Movie Title</th>
                  <th className="p-3.5">Year</th>
                  <th className="p-3.5">Director</th>
                  <th className="p-3.5">Genres</th>
                  <th className="p-3.5">Verdict</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredMovies.map((movie) => (
                  <tr key={movie.id} className="hover:bg-slate-900/60 transition-colors">
                    <td className="p-3.5 flex items-center gap-3">
                      <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        referrerPolicy="no-referrer"
                        className="w-8 h-11 rounded object-cover shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-200">{movie.title}</div>
                        <div className="text-[11px] text-slate-500">{movie.productionCompany}</div>
                      </div>
                    </td>
                    <td className="p-3.5 font-mono text-amber-400 tabular-nums">{movie.releaseYear}</td>
                    <td className="p-3.5 text-slate-300 font-medium">{movie.director}</td>
                    <td className="p-3.5 text-slate-400">{movie.genre.join(', ')}</td>
                    <td className="p-3.5 font-mono text-xs text-amber-300">{movie.boxOfficeVerdict || 'Hit'}</td>
                    <td className="p-3.5 text-right space-x-2">
                      <button
                        onClick={() => {
                          setEditingMovie(movie);
                          setIsMovieModalOpen(true);
                        }}
                        className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-amber-400"
                        title="Edit movie"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() =>
                          setConfirmDelete({
                            type: 'movie',
                            id: movie.id,
                            title: `Delete movie record "${movie.title}"?`
                          })
                        }
                        className="p-1.5 rounded bg-slate-900 hover:bg-rose-950/40 text-slate-500 hover:text-rose-400"
                        title="Delete movie"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* EDIT / ADD ACTOR MODAL */}
      {isActorModalOpen && editingActor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <form
            onSubmit={handleSaveActorSubmit}
            className="w-full max-w-2xl bg-[#0f1118] border border-amber-900/40 rounded-2xl shadow-2xl p-6 space-y-4 my-8"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-amber-100">
                {editingActor.name ? `Edit Hero: ${editingActor.name}` : 'Add New Telugu Hero'}
              </h3>
              <button
                type="button"
                onClick={() => setIsActorModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Actor Name *</label>
                <input
                  type="text"
                  required
                  value={editingActor.name}
                  onChange={(e) => setEditingActor({ ...editingActor, name: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Telugu Script Name</label>
                <input
                  type="text"
                  value={editingActor.teluguName || ''}
                  onChange={(e) => setEditingActor({ ...editingActor, teluguName: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Title Honorific</label>
                <input
                  type="text"
                  placeholder="e.g. Megastar, Superstar"
                  value={editingActor.titleHonorific || ''}
                  onChange={(e) => setEditingActor({ ...editingActor, titleHonorific: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Generation *</label>
                <select
                  value={editingActor.generation}
                  onChange={(e) =>
                    setEditingActor({ ...editingActor, generation: e.target.value as ActorGeneration })
                  }
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                >
                  <option value="legendary">Legendary</option>
                  <option value="senior">Senior</option>
                  <option value="established">Established</option>
                  <option value="contemporary">Contemporary & Emerging</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Debut Year</label>
                <input
                  type="number"
                  value={editingActor.debutYear}
                  onChange={(e) =>
                    setEditingActor({ ...editingActor, debutYear: parseInt(e.target.value) || 2000 })
                  }
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Debut Film</label>
                <input
                  type="text"
                  value={editingActor.debutFilm}
                  onChange={(e) => setEditingActor({ ...editingActor, debutFilm: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Portrait Image URL</label>
                <input
                  type="url"
                  value={editingActor.portraitUrl}
                  onChange={(e) => setEditingActor({ ...editingActor, portraitUrl: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Biography</label>
                <textarea
                  rows={3}
                  value={editingActor.biography}
                  onChange={(e) => setEditingActor({ ...editingActor, biography: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsActorModalOpen(false)}
                className="px-4 py-2 rounded bg-slate-900 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase"
              >
                Save Hero
              </button>
            </div>
          </form>
        </div>
      )}

      {/* EDIT / ADD MOVIE MODAL */}
      {isMovieModalOpen && editingMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <form
            onSubmit={handleSaveMovieSubmit}
            className="w-full max-w-2xl bg-[#0f1118] border border-amber-900/40 rounded-2xl shadow-2xl p-6 space-y-4 my-8"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-amber-100">
                {editingMovie.title ? `Edit Movie: ${editingMovie.title}` : 'Add New Movie'}
              </h3>
              <button
                type="button"
                onClick={() => setIsMovieModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Movie Title *</label>
                <input
                  type="text"
                  required
                  value={editingMovie.title}
                  onChange={(e) => setEditingMovie({ ...editingMovie, title: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Telugu Script Title</label>
                <input
                  type="text"
                  value={editingMovie.teluguTitle || ''}
                  onChange={(e) => setEditingMovie({ ...editingMovie, teluguTitle: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Release Year</label>
                <input
                  type="number"
                  value={editingMovie.releaseYear}
                  onChange={(e) =>
                    setEditingMovie({ ...editingMovie, releaseYear: parseInt(e.target.value) || 2020 })
                  }
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Director</label>
                <input
                  type="text"
                  value={editingMovie.director}
                  onChange={(e) => setEditingMovie({ ...editingMovie, director: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Music Director</label>
                <input
                  type="text"
                  value={editingMovie.musicDirector}
                  onChange={(e) => setEditingMovie({ ...editingMovie, musicDirector: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Cinematographer</label>
                <input
                  type="text"
                  value={editingMovie.cinematographer}
                  onChange={(e) => setEditingMovie({ ...editingMovie, cinematographer: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Synopsis</label>
                <textarea
                  rows={3}
                  value={editingMovie.synopsis}
                  onChange={(e) => setEditingMovie({ ...editingMovie, synopsis: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Poster URL</label>
                <input
                  type="url"
                  value={editingMovie.posterUrl}
                  onChange={(e) => setEditingMovie({ ...editingMovie, posterUrl: e.target.value })}
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsMovieModalOpen(false)}
                className="px-4 py-2 rounded bg-slate-900 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase"
              >
                Save Movie
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CONFIRMATION DIALOG */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-[#0f1118] border border-amber-900/40 rounded-2xl p-6 space-y-4 text-center">
            <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">Confirmation Required</h4>
            <p className="text-xs text-slate-300">{confirmDelete.title}</p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (confirmDelete.type === 'actor' && confirmDelete.id) {
                    onDeleteActor(confirmDelete.id);
                  } else if (confirmDelete.type === 'movie' && confirmDelete.id) {
                    onDeleteMovie(confirmDelete.id);
                  } else if (confirmDelete.type === 'reset') {
                    onResetAll();
                  }
                  setConfirmDelete(null);
                }}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
