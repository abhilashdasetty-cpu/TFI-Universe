export type ActorGeneration = 'legendary' | 'senior' | 'established' | 'contemporary';

export interface FilmographyEntry {
  id: string;
  movieId?: string;
  movieTitle: string;
  releaseYear: number;
  role: string;
  director: string;
  verdict?: 'Blockbuster' | 'Industry Hit' | 'Super Hit' | 'Classic' | 'Hit' | 'Critically Acclaimed';
  awards?: string[];
  bannerUrl?: string;
}

export interface Actor {
  id: string;
  name: string;
  teluguName?: string;
  titleHonorific?: string; // e.g., "Viswa Vikhyatha Nata Sarvabhouma", "Megastar", "Superstar", "Rebel Star"
  generation: ActorGeneration;
  debutYear: number;
  debutFilm: string;
  portraitUrl: string;
  coverUrl?: string;
  biography: string;
  earlyLife: string;
  careerMilestones: string[];
  notablePerformances: string[];
  awards: string[];
  collaborations: string[];
  upcomingProjects?: string[];
  filmography: FilmographyEntry[];
  galleryImages: string[];
  verifiedSource?: string;
  lastVerifiedDate?: string;
}

export interface MovieCastMember {
  actorId?: string;
  actorName: string;
  role: string;
}

export interface Movie {
  id: string;
  title: string;
  teluguTitle?: string;
  releaseYear: number;
  releaseDate: string;
  genre: string[];
  director: string;
  producer: string;
  musicDirector: string;
  cinematographer: string;
  editor: string;
  productionCompany: string;
  synopsis: string;
  leadCast: MovieCastMember[];
  boxOfficeVerdict?: string;
  awards: string[];
  posterUrl: string;
  backdropUrl?: string;
  budgetEstimate?: string;
  runtimeMinutes?: number;
  cbfcRating?: string;
  technicalMilestones?: string[];
}

export type ProductionStageType = 'pre-production' | 'production' | 'post-production';

export interface LessonTopic {
  id: string;
  stage: ProductionStageType;
  title: string;
  summary: string;
  detailedContent: string[];
  keyTerms: { term: string; definition: string }[];
  practicalTips: string[];
  sampleIllustration?: string;
}

export interface StoryboardPanel {
  id: string;
  panelNumber: number;
  shotType: 'Extreme Wide Shot' | 'Wide Shot' | 'Medium Shot' | 'Medium Close-Up' | 'Close-Up' | 'Extreme Close-Up' | 'Over-the-Shoulder' | 'Point-of-View';
  cameraAngle: 'Eye Level' | 'Low Angle' | 'High Angle' | 'Bird\'s Eye' | 'Worm\'s Eye' | 'Dutch Angle';
  cameraMovement: 'Static' | 'Pan' | 'Tilt' | 'Dolly / Tracking' | 'Crane / Jib' | 'Zoom' | 'Handheld';
  actionDescription: string;
  dialogueAudio: string;
  timingDurationSec: number;
  imageUrl?: string;
  sketchData?: string; // data URL or simple sketch
}

export interface StoryboardScene {
  id: string;
  sceneNumber: number;
  sceneHeading: string; // e.g. "INT. PALACE COURTYARD - NIGHT"
  description: string;
  panels: StoryboardPanel[];
}

export interface StoryboardProject {
  id: string;
  title: string;
  logline: string;
  aspectRatio: '16:9' | '2.39:1 Anamorphic' | '4:3 Academy';
  directorName: string;
  scenes: StoryboardScene[];
  createdAt: string;
  updatedAt: string;
}

export interface ShotPlanItem {
  id: string;
  sceneNo: string;
  shotNo: string;
  shotType: string;
  cameraAngle: string;
  movement: string;
  lensMm: string;
  description: string;
  estDurationSec: number;
  isCompleted: boolean;
}

export interface ChecklistTask {
  id: string;
  stage: ProductionStageType;
  category: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface HistoryMilestone {
  decade: string;
  year: number;
  title: string;
  description: string;
  significance: string;
  notableFigures: string[];
  keyFilms: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  category: 'History' | 'Filmmaking' | 'Storyboarding' | 'Actors' | 'Animation & VFX';
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Cinematography' | 'Directing' | 'Editing' | 'Sound' | 'Storyboarding' | 'Animation' | 'Telugu Cinema';
  definition: string;
  exampleInCinema?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'filmmaker' | 'enthusiast' | 'admin';
  favoriteActorIds: string[];
  favoriteMovieIds: string[];
  bookmarkedLessonIds: string[];
  savedStoryboardIds: string[];
  quizScores: { quizCategory: string; score: number; total: number; date: string }[];
}
