import React, { useState, useEffect } from 'react';
import { storageService } from './services/storageService';
import { Actor, Movie, LessonTopic, StoryboardProject, ShotPlanItem, ChecklistTask, QuizQuestion, GlossaryTerm, UserProfile } from './types';
import { Header, NavView } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomeView } from './views/HomeView';
import { HeroesView } from './views/HeroesView';
import { MoviesView } from './views/MoviesView';
import { FilmmakingView } from './views/FilmmakingView';
import { StoryboardView } from './views/StoryboardView';
import { MultimediaView } from './views/MultimediaView';
import { CinemaHistoryView } from './views/CinemaHistoryView';
import { LearningCenterView } from './views/LearningCenterView';
import { InteractiveStudioView } from './views/InteractiveStudioView';
import { UserProfileView } from './views/UserProfileView';
import { AdminView } from './views/AdminView';
import { ActorDetailModal } from './views/ActorDetailModal';
import { MovieDetailModal } from './views/MovieDetailModal';
import { LessonDetailModal } from './views/LessonDetailModal';

export default function App() {
  // Navigation & Modal State
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LessonTopic | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Live Database State from storageService
  const [actors, setActors] = useState<Actor[]>(storageService.getActors());
  const [movies, setMovies] = useState<Movie[]>(storageService.getMovies());
  const [lessons, setLessons] = useState<LessonTopic[]>(storageService.getLessons());
  const [storyboards, setStoryboards] = useState<StoryboardProject[]>(storageService.getStoryboards());
  const [shotPlans, setShotPlans] = useState<ShotPlanItem[]>(storageService.getShotPlans());
  const [checklist, setChecklist] = useState<ChecklistTask[]>(storageService.getChecklist());
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>(storageService.getQuizzes());
  const [glossary, setGlossary] = useState<GlossaryTerm[]>(storageService.getGlossary());
  const [userProfile, setUserProfile] = useState<UserProfile>(storageService.getUserProfile());

  // Subscribe to reactive database changes
  useEffect(() => {
    const unsubscribe = storageService.subscribe(() => {
      setActors(storageService.getActors());
      setMovies(storageService.getMovies());
      setLessons(storageService.getLessons());
      setStoryboards(storageService.getStoryboards());
      setShotPlans(storageService.getShotPlans());
      setChecklist(storageService.getChecklist());
      setQuizzes(storageService.getQuizzes());
      setGlossary(storageService.getGlossary());
      setUserProfile(storageService.getUserProfile());
    });
    return () => unsubscribe();
  }, []);

  // Keyboard shortcut for search (/ or Command+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && !isSearchOpen) {
        const activeTag = document.activeElement?.tagName;
        if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
          e.preventDefault();
          setIsSearchOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Select Movie by Id or fallback title (e.g. from Actor Filmography)
  const handleSelectMovieById = (movieId: string, fallbackTitle?: string) => {
    let movie = movies.find((m) => m.id === movieId);
    if (!movie && fallbackTitle) {
      movie = movies.find((m) => m.title.toLowerCase() === fallbackTitle.toLowerCase());
    }
    if (movie) {
      setSelectedMovie(movie);
    } else {
      showToast(`Detailed record for "${fallbackTitle || movieId}" is archived in filmography catalog.`);
    }
  };

  // Select Actor by Id or name (e.g. from Movie Cast list)
  const handleSelectActorById = (actorId: string, actorName?: string) => {
    let actor = actors.find((a) => a.id === actorId);
    if (!actor && actorName) {
      actor = actors.find((a) => a.name.toLowerCase() === actorName.toLowerCase());
    }
    if (actor) {
      setSelectedActor(actor);
    } else {
      showToast(`Dossier for ${actorName || actorId} available in full heroes directory.`);
    }
  };

  // Favorites & Bookmarks Toggles
  const handleToggleFavoriteActor = (id: string) => {
    const isFav = storageService.toggleFavoriteActor(id);
    showToast(isFav ? 'Added to favorite heroes' : 'Removed from favorites');
  };

  const handleToggleFavoriteMovie = (id: string) => {
    const isFav = storageService.toggleFavoriteMovie(id);
    showToast(isFav ? 'Added to favorite movies' : 'Removed from favorites');
  };

  const handleToggleBookmarkLesson = (id: string) => {
    const isBookmarked = storageService.toggleBookmarkLesson(id);
    showToast(isBookmarked ? 'Lesson bookmarked for study' : 'Bookmark removed');
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f1f5f9] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        userProfile={userProfile}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            actors={actors}
            movies={movies}
            lessons={lessons}
            onNavigate={(v) => {
              setCurrentView(v);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectActor={(a) => setSelectedActor(a)}
            onSelectMovie={(m) => setSelectedMovie(m)}
            onSelectLesson={(l) => setSelectedLesson(l)}
          />
        )}

        {currentView === 'heroes' && (
          <HeroesView
            actors={actors}
            onSelectActor={(a) => setSelectedActor(a)}
          />
        )}

        {currentView === 'movies' && (
          <MoviesView
            movies={movies}
            actors={actors}
            onSelectMovie={(m) => setSelectedMovie(m)}
          />
        )}

        {currentView === 'filmmaking' && (
          <FilmmakingView
            lessons={lessons}
            onSelectLesson={(l) => setSelectedLesson(l)}
            bookmarkedLessonIds={userProfile.bookmarkedLessonIds}
            onToggleBookmark={handleToggleBookmarkLesson}
          />
        )}

        {currentView === 'storyboard' && (
          <StoryboardView
            projects={storyboards}
            onSaveProject={(proj) => {
              storageService.saveStoryboard(proj);
              showToast('Storyboard project saved');
            }}
            onDeleteProject={(id) => {
              storageService.deleteStoryboard(id);
              showToast('Project deleted');
            }}
          />
        )}

        {currentView === 'multimedia' && <MultimediaView />}

        {currentView === 'history' && <CinemaHistoryView />}

        {currentView === 'learning' && (
          <LearningCenterView
            quizzes={quizzes}
            glossary={glossary}
            onRecordQuizScore={(category, score, total) => {
              storageService.recordQuizScore(category, score, total);
              showToast(`Quiz score recorded: ${score}/${total}`);
            }}
          />
        )}

        {currentView === 'studio' && (
          <InteractiveStudioView
            shotPlans={shotPlans}
            checklist={checklist}
            onSaveShotPlan={(item) => {
              storageService.saveShotPlan(item);
              showToast('Shot plan updated');
            }}
            onDeleteShotPlan={(id) => {
              storageService.deleteShotPlan(id);
              showToast('Shot removed');
            }}
            onToggleChecklist={(id) => storageService.toggleChecklistItem(id)}
            onResetChecklist={() => {
              storageService.resetChecklist();
              showToast('Checklist reset');
            }}
          />
        )}

        {currentView === 'profile' && (
          <UserProfileView
            userProfile={userProfile}
            actors={actors}
            movies={movies}
            lessons={lessons}
            storyboards={storyboards}
            onSelectActor={(a) => setSelectedActor(a)}
            onSelectMovie={(m) => setSelectedMovie(m)}
            onSelectLesson={(l) => setSelectedLesson(l)}
            onUpdateProfile={(updates) => {
              storageService.updateUserProfile(updates);
              showToast('Profile updated');
            }}
            onToggleFavoriteActor={handleToggleFavoriteActor}
            onToggleFavoriteMovie={handleToggleFavoriteMovie}
            onToggleBookmarkLesson={handleToggleBookmarkLesson}
          />
        )}

        {currentView === 'admin' && (
          <AdminView
            actors={actors}
            movies={movies}
            onSaveActor={(actor) => {
              storageService.saveActor(actor);
              showToast(`Hero "${actor.name}" saved to database`);
            }}
            onDeleteActor={(id) => {
              storageService.deleteActor(id);
              showToast('Actor deleted from database');
            }}
            onSaveMovie={(movie) => {
              storageService.saveMovie(movie);
              showToast(`Movie "${movie.title}" saved to database`);
            }}
            onDeleteMovie={(id) => {
              storageService.deleteMovie(id);
              showToast('Movie deleted from database');
            }}
            onResetAll={() => {
              storageService.resetAllToSeedData();
              showToast('Database reset to verified seed state');
            }}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        actors={actors}
        movies={movies}
        lessons={lessons}
        glossary={glossary}
        onSelectActor={(a) => setSelectedActor(a)}
        onSelectMovie={(m) => setSelectedMovie(m)}
        onSelectLesson={(l) => setSelectedLesson(l)}
        onNavigate={(v) => {
          setCurrentView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Actor Detail Modal */}
      <ActorDetailModal
        actor={selectedActor}
        onClose={() => setSelectedActor(null)}
        onSelectMovieById={handleSelectMovieById}
        onSelectActor={(a) => setSelectedActor(a)}
        allActors={actors}
        isFavorite={selectedActor ? userProfile.favoriteActorIds.includes(selectedActor.id) : false}
        onToggleFavorite={handleToggleFavoriteActor}
      />

      {/* Movie Detail Modal */}
      <MovieDetailModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onSelectActorById={handleSelectActorById}
        isFavorite={selectedMovie ? userProfile.favoriteMovieIds.includes(selectedMovie.id) : false}
        onToggleFavorite={handleToggleFavoriteMovie}
      />

      {/* Lesson Detail Modal */}
      <LessonDetailModal
        lesson={selectedLesson}
        onClose={() => setSelectedLesson(null)}
        isBookmarked={selectedLesson ? userProfile.bookmarkedLessonIds.includes(selectedLesson.id) : false}
        onToggleBookmark={handleToggleBookmarkLesson}
      />

      {/* Toast Notification Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-slate-900/95 border border-amber-500/50 text-amber-200 text-xs font-mono shadow-2xl backdrop-blur-md animate-fade-in flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
