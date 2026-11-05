import {
  Actor,
  Movie,
  LessonTopic,
  StoryboardProject,
  ShotPlanItem,
  ChecklistTask,
  QuizQuestion,
  GlossaryTerm,
  UserProfile
} from '../types';
import {
  INITIAL_ACTORS,
  INITIAL_MOVIES,
  PRODUCTION_LESSONS,
  QUIZ_QUESTIONS,
  GLOSSARY_TERMS,
  PRODUCTION_CHECKLIST_TEMPLATE,
  SAMPLE_STORYBOARD_PROJECT
} from '../data/seedData';

const KEYS = {
  ACTORS: 'tfi_actors_v1',
  MOVIES: 'tfi_movies_v1',
  LESSONS: 'tfi_lessons_v1',
  STORYBOARDS: 'tfi_storyboards_v1',
  SHOT_PLANS: 'tfi_shot_plans_v1',
  CHECKLIST: 'tfi_checklist_v1',
  QUIZZES: 'tfi_quizzes_v1',
  GLOSSARY: 'tfi_glossary_v1',
  USER_PROFILE: 'tfi_user_profile_v1'
};

const DEFAULT_PROFILE: UserProfile = {
  id: 'usr-default',
  name: 'K. S. Narayana',
  email: 'filmmaker@tfi-universe.org',
  role: 'filmmaker',
  favoriteActorIds: ['actor-ntr', 'actor-chiranjeevi', 'actor-prabhas'],
  favoriteMovieIds: ['movie-mayabazar', 'movie-rrr', 'movie-shiva'],
  bookmarkedLessonIds: ['lesson-cinematography-lighting', 'lesson-editing-rhythm'],
  savedStoryboardIds: ['proj-sample-1'],
  quizScores: [
    { quizCategory: 'History', score: 3, total: 3, date: '2026-10-25' }
  ]
};

const INITIAL_SHOT_PLANS: ShotPlanItem[] = [
  { id: 'sp-1', sceneNo: '1', shotNo: '1A', shotType: 'Extreme Wide Shot', cameraAngle: 'Low Angle', movement: 'Static', lensMm: '24mm', description: 'Ancient fortress arch, dawn horizon, silhouette of horse rider', estDurationSec: 5, isCompleted: true },
  { id: 'sp-2', sceneNo: '1', shotNo: '1B', shotType: 'Medium Close-Up', cameraAngle: 'Eye Level', movement: 'Dolly In', lensMm: '50mm', description: 'Hero eye level, wind blowing dust, intense look', estDurationSec: 4, isCompleted: false },
  { id: 'sp-3', sceneNo: '1', shotNo: '2A', shotType: 'Over-the-Shoulder', cameraAngle: 'Low Angle', movement: 'Handheld', lensMm: '35mm', description: 'Confrontation with warlord across the flaming pyre', estDurationSec: 6, isCompleted: false }
];

class StorageService {
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.ensureInitialized();
  }

  private ensureInitialized() {
    if (!localStorage.getItem(KEYS.ACTORS)) {
      localStorage.setItem(KEYS.ACTORS, JSON.stringify(INITIAL_ACTORS));
    }
    if (!localStorage.getItem(KEYS.MOVIES)) {
      localStorage.setItem(KEYS.MOVIES, JSON.stringify(INITIAL_MOVIES));
    }
    if (!localStorage.getItem(KEYS.LESSONS)) {
      localStorage.setItem(KEYS.LESSONS, JSON.stringify(PRODUCTION_LESSONS));
    }
    if (!localStorage.getItem(KEYS.STORYBOARDS)) {
      localStorage.setItem(KEYS.STORYBOARDS, JSON.stringify([SAMPLE_STORYBOARD_PROJECT]));
    }
    if (!localStorage.getItem(KEYS.SHOT_PLANS)) {
      localStorage.setItem(KEYS.SHOT_PLANS, JSON.stringify(INITIAL_SHOT_PLANS));
    }
    if (!localStorage.getItem(KEYS.CHECKLIST)) {
      localStorage.setItem(KEYS.CHECKLIST, JSON.stringify(PRODUCTION_CHECKLIST_TEMPLATE));
    }
    if (!localStorage.getItem(KEYS.QUIZZES)) {
      localStorage.setItem(KEYS.QUIZZES, JSON.stringify(QUIZ_QUESTIONS));
    }
    if (!localStorage.getItem(KEYS.GLOSSARY)) {
      localStorage.setItem(KEYS.GLOSSARY, JSON.stringify(GLOSSARY_TERMS));
    }
    if (!localStorage.getItem(KEYS.USER_PROFILE)) {
      localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(DEFAULT_PROFILE));
    }
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  // --- ACTORS ---
  public getActors(): Actor[] {
    try {
      const data = localStorage.getItem(KEYS.ACTORS);
      return data ? JSON.parse(data) : INITIAL_ACTORS;
    } catch {
      return INITIAL_ACTORS;
    }
  }

  public getActorById(id: string): Actor | undefined {
    return this.getActors().find((a) => a.id === id);
  }

  public saveActor(actor: Actor): void {
    const actors = this.getActors();
    const index = actors.findIndex((a) => a.id === actor.id);
    if (index >= 0) {
      actors[index] = actor;
    } else {
      actors.push(actor);
    }
    localStorage.setItem(KEYS.ACTORS, JSON.stringify(actors));
    this.notify();
  }

  public deleteActor(id: string): void {
    const actors = this.getActors().filter((a) => a.id !== id);
    localStorage.setItem(KEYS.ACTORS, JSON.stringify(actors));
    this.notify();
  }

  // --- MOVIES ---
  public getMovies(): Movie[] {
    try {
      const data = localStorage.getItem(KEYS.MOVIES);
      return data ? JSON.parse(data) : INITIAL_MOVIES;
    } catch {
      return INITIAL_MOVIES;
    }
  }

  public getMovieById(id: string): Movie | undefined {
    return this.getMovies().find((m) => m.id === id);
  }

  public saveMovie(movie: Movie): void {
    const movies = this.getMovies();
    const index = movies.findIndex((m) => m.id === movie.id);
    if (index >= 0) {
      movies[index] = movie;
    } else {
      movies.push(movie);
    }
    localStorage.setItem(KEYS.MOVIES, JSON.stringify(movies));
    this.notify();
  }

  public deleteMovie(id: string): void {
    const movies = this.getMovies().filter((m) => m.id !== id);
    localStorage.setItem(KEYS.MOVIES, JSON.stringify(movies));
    this.notify();
  }

  // --- LESSONS ---
  public getLessons(): LessonTopic[] {
    try {
      const data = localStorage.getItem(KEYS.LESSONS);
      return data ? JSON.parse(data) : PRODUCTION_LESSONS;
    } catch {
      return PRODUCTION_LESSONS;
    }
  }

  public saveLesson(lesson: LessonTopic): void {
    const lessons = this.getLessons();
    const index = lessons.findIndex((l) => l.id === lesson.id);
    if (index >= 0) {
      lessons[index] = lesson;
    } else {
      lessons.push(lesson);
    }
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
    this.notify();
  }

  public deleteLesson(id: string): void {
    const lessons = this.getLessons().filter((l) => l.id !== id);
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(lessons));
    this.notify();
  }

  // --- STORYBOARDS ---
  public getStoryboards(): StoryboardProject[] {
    try {
      const data = localStorage.getItem(KEYS.STORYBOARDS);
      return data ? JSON.parse(data) : [SAMPLE_STORYBOARD_PROJECT];
    } catch {
      return [SAMPLE_STORYBOARD_PROJECT];
    }
  }

  public getStoryboardById(id: string): StoryboardProject | undefined {
    return this.getStoryboards().find((s) => s.id === id);
  }

  public saveStoryboard(project: StoryboardProject): void {
    const projects = this.getStoryboards();
    const index = projects.findIndex((p) => p.id === project.id);
    project.updatedAt = new Date().toISOString().split('T')[0];
    if (index >= 0) {
      projects[index] = project;
    } else {
      projects.unshift(project);
    }
    localStorage.setItem(KEYS.STORYBOARDS, JSON.stringify(projects));
    this.notify();
  }

  public deleteStoryboard(id: string): void {
    const projects = this.getStoryboards().filter((p) => p.id !== id);
    localStorage.setItem(KEYS.STORYBOARDS, JSON.stringify(projects));
    this.notify();
  }

  // --- SHOT PLANS ---
  public getShotPlans(): ShotPlanItem[] {
    try {
      const data = localStorage.getItem(KEYS.SHOT_PLANS);
      return data ? JSON.parse(data) : INITIAL_SHOT_PLANS;
    } catch {
      return INITIAL_SHOT_PLANS;
    }
  }

  public saveShotPlan(item: ShotPlanItem): void {
    const items = this.getShotPlans();
    const index = items.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      items[index] = item;
    } else {
      items.push(item);
    }
    localStorage.setItem(KEYS.SHOT_PLANS, JSON.stringify(items));
    this.notify();
  }

  public deleteShotPlan(id: string): void {
    const items = this.getShotPlans().filter((i) => i.id !== id);
    localStorage.setItem(KEYS.SHOT_PLANS, JSON.stringify(items));
    this.notify();
  }

  // --- CHECKLIST ---
  public getChecklist(): ChecklistTask[] {
    try {
      const data = localStorage.getItem(KEYS.CHECKLIST);
      return data ? JSON.parse(data) : PRODUCTION_CHECKLIST_TEMPLATE;
    } catch {
      return PRODUCTION_CHECKLIST_TEMPLATE;
    }
  }

  public toggleChecklistItem(id: string): void {
    const items = this.getChecklist();
    const task = items.find((t) => t.id === id);
    if (task) {
      task.isCompleted = !task.isCompleted;
      localStorage.setItem(KEYS.CHECKLIST, JSON.stringify(items));
      this.notify();
    }
  }

  public resetChecklist(): void {
    localStorage.setItem(KEYS.CHECKLIST, JSON.stringify(PRODUCTION_CHECKLIST_TEMPLATE));
    this.notify();
  }

  // --- GLOSSARY ---
  public getGlossary(): GlossaryTerm[] {
    try {
      const data = localStorage.getItem(KEYS.GLOSSARY);
      return data ? JSON.parse(data) : GLOSSARY_TERMS;
    } catch {
      return GLOSSARY_TERMS;
    }
  }

  public saveGlossaryTerm(term: GlossaryTerm): void {
    const list = this.getGlossary();
    const index = list.findIndex((t) => t.id === term.id);
    if (index >= 0) {
      list[index] = term;
    } else {
      list.push(term);
    }
    localStorage.setItem(KEYS.GLOSSARY, JSON.stringify(list));
    this.notify();
  }

  public deleteGlossaryTerm(id: string): void {
    const list = this.getGlossary().filter((t) => t.id !== id);
    localStorage.setItem(KEYS.GLOSSARY, JSON.stringify(list));
    this.notify();
  }

  // --- QUIZZES ---
  public getQuizzes(): QuizQuestion[] {
    try {
      const data = localStorage.getItem(KEYS.QUIZZES);
      return data ? JSON.parse(data) : QUIZ_QUESTIONS;
    } catch {
      return QUIZ_QUESTIONS;
    }
  }

  public saveQuizQuestion(question: QuizQuestion): void {
    const list = this.getQuizzes();
    const index = list.findIndex((q) => q.id === question.id);
    if (index >= 0) {
      list[index] = question;
    } else {
      list.push(question);
    }
    localStorage.setItem(KEYS.QUIZZES, JSON.stringify(list));
    this.notify();
  }

  public deleteQuizQuestion(id: string): void {
    const list = this.getQuizzes().filter((q) => q.id !== id);
    localStorage.setItem(KEYS.QUIZZES, JSON.stringify(list));
    this.notify();
  }

  // --- USER PROFILE & FAVORITES ---
  public getUserProfile(): UserProfile {
    try {
      const data = localStorage.getItem(KEYS.USER_PROFILE);
      return data ? JSON.parse(data) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  }

  public toggleFavoriteActor(actorId: string): boolean {
    const profile = this.getUserProfile();
    const index = profile.favoriteActorIds.indexOf(actorId);
    let isFav = false;
    if (index >= 0) {
      profile.favoriteActorIds.splice(index, 1);
      isFav = false;
    } else {
      profile.favoriteActorIds.push(actorId);
      isFav = true;
    }
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
    this.notify();
    return isFav;
  }

  public toggleFavoriteMovie(movieId: string): boolean {
    const profile = this.getUserProfile();
    const index = profile.favoriteMovieIds.indexOf(movieId);
    let isFav = false;
    if (index >= 0) {
      profile.favoriteMovieIds.splice(index, 1);
      isFav = false;
    } else {
      profile.favoriteMovieIds.push(movieId);
      isFav = true;
    }
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
    this.notify();
    return isFav;
  }

  public toggleBookmarkLesson(lessonId: string): boolean {
    const profile = this.getUserProfile();
    const index = profile.bookmarkedLessonIds.indexOf(lessonId);
    let isBookmarked = false;
    if (index >= 0) {
      profile.bookmarkedLessonIds.splice(index, 1);
      isBookmarked = false;
    } else {
      profile.bookmarkedLessonIds.push(lessonId);
      isBookmarked = true;
    }
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
    this.notify();
    return isBookmarked;
  }

  public recordQuizScore(quizCategory: string, score: number, total: number): void {
    const profile = this.getUserProfile();
    profile.quizScores.push({
      quizCategory,
      score,
      total,
      date: new Date().toISOString().split('T')[0]
    });
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
    this.notify();
  }

  public updateUserProfile(updates: Partial<UserProfile>): void {
    const profile = { ...this.getUserProfile(), ...updates };
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
    this.notify();
  }

  public resetAllToSeedData(): void {
    localStorage.setItem(KEYS.ACTORS, JSON.stringify(INITIAL_ACTORS));
    localStorage.setItem(KEYS.MOVIES, JSON.stringify(INITIAL_MOVIES));
    localStorage.setItem(KEYS.LESSONS, JSON.stringify(PRODUCTION_LESSONS));
    localStorage.setItem(KEYS.STORYBOARDS, JSON.stringify([SAMPLE_STORYBOARD_PROJECT]));
    localStorage.setItem(KEYS.SHOT_PLANS, JSON.stringify(INITIAL_SHOT_PLANS));
    localStorage.setItem(KEYS.CHECKLIST, JSON.stringify(PRODUCTION_CHECKLIST_TEMPLATE));
    localStorage.setItem(KEYS.QUIZZES, JSON.stringify(QUIZ_QUESTIONS));
    localStorage.setItem(KEYS.GLOSSARY, JSON.stringify(GLOSSARY_TERMS));
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(DEFAULT_PROFILE));
    this.notify();
  }
}

export const storageService = new StorageService();
