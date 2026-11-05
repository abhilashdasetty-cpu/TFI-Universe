import React, { useState } from 'react';
import {
  Clapperboard,
  Film,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Compass,
  Play,
  Layers,
  CheckCircle2,
  ChevronRight,
  Camera,
  Scissors,
  Volume2,
  PenTool,
  Clock,
  Heart
} from 'lucide-react';
import { Actor, Movie, LessonTopic } from '../types';
import { NavView } from '../components/Header';
import { HISTORY_TIMELINE } from '../data/seedData';

interface HomeViewProps {
  actors: Actor[];
  movies: Movie[];
  lessons: LessonTopic[];
  onNavigate: (view: NavView) => void;
  onSelectActor: (actor: Actor) => void;
  onSelectMovie: (movie: Movie) => void;
  onSelectLesson: (lesson: LessonTopic) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  actors,
  movies,
  lessons,
  onNavigate,
  onSelectActor,
  onSelectMovie,
  onSelectLesson
}) => {
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);

  const pipelineStages = [
    { title: 'Concept', stage: 'pre-production', icon: PenTool, desc: 'Premise, logline & core dramatic conflict' },
    { title: 'Script', stage: 'pre-production', icon: BookOpen, desc: '3-Act screenplay & formatted master scene drafts' },
    { title: 'Storyboard', stage: 'pre-production', icon: Layers, desc: 'Visual camera continuity & shot animatics' },
    { title: 'Planning', stage: 'pre-production', icon: Compass, desc: 'Breakdowns, recce, casting & stripboard scheduling' },
    { title: 'Shooting', stage: 'production', icon: Camera, desc: 'Cinematography, 3-point lighting & camera blocking' },
    { title: 'Editing', stage: 'post-production', icon: Scissors, desc: 'Rough cut, pacing, J-cuts & fine picture lock' },
    { title: 'Sound', stage: 'post-production', icon: Volume2, desc: 'Foley, ADR dubbing, 7.1 mix & Keeravani-grade BGM' },
    { title: 'VFX', stage: 'post-production', icon: Sparkles, desc: 'CGI, rotoscoping, digital set extensions & color grading' },
    { title: 'Final DCP', stage: 'post-production', icon: Film, desc: 'DCI-P3 mastering, theatrical certification & release' }
  ];

  const featuredHeroes = actors.slice(0, 4);
  const legendaryHeroes = actors.filter((a) => a.generation === 'legendary');
  const featuredMovies = movies.slice(0, 4);

  const cinemaFacts = [
    {
      title: 'First South Indian 70mm',
      fact: 'Superstar Krishna brought the first 70mm 6-track stereophonic sound release to South India with Simhasanam (1986).'
    },
    {
      title: 'Academy Award for Best Original Song',
      fact: 'M. M. Keeravani and Chandrabose won the Oscar for "Naatu Naatu" from RRR (2022), the first Indian feature film song ever honored.'
    },
    {
      title: 'Optical Marvel Before CGI',
      fact: 'Marcus Bartley shot the magical illusions of Mayabazar (1957) entirely on optical multi-exposures and glass miniatures without computers.'
    },
    {
      title: 'The Steadicam Revolution',
      fact: 'Ram Gopal Varma and S. Gopala Reddy introduced the Steadicam to South Indian action cinema in Shiva (1989), transforming chase kinetics.'
    }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-amber-950/30">
        {/* Background Image with Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_cinematic_banner_1793882521924.jpg"
            alt="Cinematic production set"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-60 contrast-110 scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered film grade scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/70 to-[#0b0c10]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0b0c10]/50 to-[#0b0c10]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md text-amber-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Definitive Telugu Cinema & Filmmaking Hub</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
            Beyond the Screen. <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Into the World of Telugu Cinema.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Discover legendary and contemporary Telugu heroes, unravel the 3-stage filmmaking process, and build real movie animatics with our interactive storyboard studio.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('heroes')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2 group"
            >
              <span>Explore Telugu Heroes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('filmmaking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400/60 text-amber-200 font-semibold text-sm tracking-wide uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Clapperboard className="w-4 h-4 text-amber-400" />
              <span>Discover Filmmaking</span>
            </button>
          </div>

          {/* Trust & Scope Strip */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-slate-400 border-t border-slate-800/80">
            <div>
              <span className="text-amber-400 font-bold text-sm tabular-nums block">4 Generations</span>
              <span>Telugu Male Icons</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-800" />
            <div>
              <span className="text-amber-400 font-bold text-sm tabular-nums block">49+ Production Topics</span>
              <span>Pre, Prod & Post</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-800" />
            <div>
              <span className="text-amber-400 font-bold text-sm tabular-nums block">Interactive Studio</span>
              <span>Storyboard & Shot Planner</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE STAGES OF FILM PRODUCTION PIPELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block">
            End-To-End Filmmaking Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
            The Interactive Production Pipeline
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            From initial concept to final theatrical DCP. Click any stage to explore the real craft behind Telugu cinema productions.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 p-2 rounded-2xl bg-[#0e1017] border border-amber-900/20">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activePipelineStage === idx;
            return (
              <button
                key={stage.title}
                onClick={() => setActivePipelineStage(idx)}
                className={`p-3 rounded-xl flex flex-col items-center text-center transition-all relative ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-lg shadow-amber-950/50'
                    : 'bg-slate-900/50 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span className="text-[10px] font-mono text-slate-500 mb-1">0{idx + 1}</span>
                <Icon className={`w-5 h-5 mb-1.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold whitespace-nowrap">{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0e1017] border border-amber-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono uppercase text-amber-400">
              <span>Stage 0{activePipelineStage + 1}</span>
              <span>·</span>
              <span className="capitalize">{pipelineStages[activePipelineStage].stage}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-amber-100">
              {pipelineStages[activePipelineStage].title}: {pipelineStages[activePipelineStage].desc}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Learn how master Telugu directors like S. S. Rajamouli, Sukumar, and K. V. Reddy architected this exact milestone with precision and technical discipline.
            </p>
          </div>
          <button
            onClick={() => onNavigate('filmmaking')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Learn {pipelineStages[activePipelineStage].title} Deep Dive</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. FEATURED TELUGU HEROES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block">
              The Pantheon
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
              Featured Telugu Heroes
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Celebrating male actors whose performances and screen presence defined eras.
            </p>
          </div>
          <button
            onClick={() => onNavigate('heroes')}
            className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
          >
            <span>View All Heroes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Hero Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHeroes.map((actor) => (
            <div
              key={actor.id}
              onClick={() => onSelectActor(actor)}
              className="group cursor-pointer rounded-2xl bg-[#0e1017] border border-amber-950/40 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-950/20 flex flex-col"
            >
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
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-mono uppercase text-amber-500/80">
                    {actor.titleHonorific || actor.generation}
                  </div>
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
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{actor.filmography.length}+ Notable Films</span>
                  <span className="text-amber-400 group-hover:translate-x-1 transition-transform">Profile →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STORYBOARDING STUDIO & CREATIVE SUITE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#12141d] to-[#0a0b10] border border-amber-900/30 overflow-hidden p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
              <PenTool className="w-3.5 h-3.5" />
              <span>Interactive Storyboard Creator</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100 leading-tight">
              Pre-Visualize Your Movie Before Shooting a Single Frame.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Experience our browser-based Storyboard Editor: assemble scenes, define camera angles, track shot timing, annotate action and dialogue, reorder panels, and export printable industry-standard PDF sheets.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>9 Camera Angles & Movement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Shot Timing & Dialogue</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Multi-Scene Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Printable PDF Export</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('storyboard')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Launch Storyboard Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Showcase Graphic */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-slate-900">
            <img
              src="/src/assets/images/storyboard_creative_desk_1793882524138.jpg"
              alt="Storyboard workspace"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-amber-400">Pre-Production Workbench</span>
                <h4 className="font-serif text-lg font-bold text-white">Veera Vanam (Sample Project Included)</h4>
                <p className="text-xs text-slate-300">Click to load pre-built scene panels or draft your own narrative.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR & FEATURED MOVIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block">
              Telugu Filmography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
              Landmark & Pan-Indian Classics
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Historical milestones from Mayabazar to global sensations like RRR and Kalki 2898 AD.
            </p>
          </div>
          <button
            onClick={() => onNavigate('movies')}
            className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
          >
            <span>Browse Full Filmography</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onSelectMovie(movie)}
              className="group cursor-pointer rounded-2xl bg-[#0e1017] border border-slate-800/80 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
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
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 truncate">
                    {movie.genre.join(' / ')}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1">Dir. {movie.director}</div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-amber-400 font-mono flex items-center justify-between">
                  <span>{movie.boxOfficeVerdict || 'Classic'}</span>
                  <span>Inspect →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CINEMA HISTORY THROUGH THE DECADES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold block">
              1930s to 2020s
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
              Telugu Cinema Through the Decades
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              From the first talkie in 1932 to Oscar glory in 2023: nearly a century of cinematic reinvention.
            </p>
          </div>
          <button
            onClick={() => onNavigate('history')}
            className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Full History Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HISTORY_TIMELINE.slice(0, 3).map((item) => (
            <div
              key={item.year}
              className="p-6 rounded-2xl bg-[#0e1017] border border-amber-950/40 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-amber-400">{item.decade}</span>
                <span className="text-xs font-mono text-slate-500">{item.year} Milestone</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-amber-100">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
              <div className="pt-2 text-xs text-amber-300/80 font-mono">
                Key Films: {item.keyFilms.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CINEMA FACTS & TECHNICAL TRIVIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Verified Cinema Records
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              Fascinating Facts of Telugu Cinema
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cinemaFacts.map((fact, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0b0c10] border border-slate-800/80 space-y-2">
                <span className="font-bold text-sm text-amber-300 block">{fact.title}</span>
                <p className="text-xs text-slate-400 leading-relaxed">{fact.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
