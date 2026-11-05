import React, { useState } from 'react';
import {
  Clapperboard,
  BookOpen,
  Camera,
  Scissors,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Layers,
  Volume2,
  PenTool,
  Film,
  Compass,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { LessonTopic, ProductionStageType } from '../types';

interface FilmmakingViewProps {
  lessons: LessonTopic[];
  onSelectLesson: (lesson: LessonTopic) => void;
  bookmarkedLessonIds: string[];
  onToggleBookmark: (lessonId: string) => void;
}

export const FilmmakingView: React.FC<FilmmakingViewProps> = ({
  lessons,
  onSelectLesson,
  bookmarkedLessonIds,
  onToggleBookmark
}) => {
  const [activeStage, setActiveStage] = useState<ProductionStageType>('pre-production');

  const stageDescriptions: Record<ProductionStageType, { title: string; subtitle: string; icon: any }> = {
    'pre-production': {
      title: 'Stage A: Pre-Production',
      subtitle: 'The Architectural Blueprint: Idea, Screenplay, Storyboarding & Logistics',
      icon: PenTool
    },
    production: {
      title: 'Stage B: Production',
      subtitle: 'The Creation on Set: Cinematography, Direction, Lighting & On-Set Audio',
      icon: Camera
    },
    'post-production': {
      title: 'Stage C: Post-Production',
      subtitle: 'The Final Alchemy: Editing Rhythm, Sound Foley, Score, VFX & DCP Mastering',
      icon: Scissors
    }
  };

  const filteredLessons = lessons.filter((l) => l.stage === activeStage);

  const pipeline = [
    { name: 'Concept', stage: 'pre-production' as ProductionStageType },
    { name: 'Script', stage: 'pre-production' as ProductionStageType },
    { name: 'Storyboard', stage: 'pre-production' as ProductionStageType },
    { name: 'Planning', stage: 'pre-production' as ProductionStageType },
    { name: 'Shooting', stage: 'production' as ProductionStageType },
    { name: 'Editing', stage: 'post-production' as ProductionStageType },
    { name: 'Sound & Foley', stage: 'post-production' as ProductionStageType },
    { name: 'VFX & Color', stage: 'post-production' as ProductionStageType },
    { name: 'Final DCP', stage: 'post-production' as ProductionStageType }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <Clapperboard className="w-3.5 h-3.5" />
          <span>Filmmaking & Production Masterclass</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          The Three Stages of Film Production
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Master the complete filmmaking pipeline from the inception of a logline to theatrical distribution.
          Explore the exact technical principles utilized across Telugu cinema epics and international cinema.
        </p>
      </div>

      {/* Production Pipeline Process Diagram */}
      <div className="p-6 rounded-3xl bg-[#0e1017] border border-amber-900/30 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
            Interactive Production Pipeline
          </span>
          <span className="text-xs text-slate-500 font-mono hidden sm:inline">
            Click any node to filter stage
          </span>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
          {pipeline.map((step, idx) => {
            const isCurrentStage = activeStage === step.stage;
            return (
              <React.Fragment key={step.name}>
                <button
                  onClick={() => setActiveStage(step.stage)}
                  className={`flex-1 min-w-[100px] p-2.5 rounded-xl border text-center transition-all ${
                    isCurrentStage
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-950/40'
                      : 'bg-slate-900/50 hover:bg-slate-800 text-slate-400 border-slate-800'
                  }`}
                >
                  <div className="text-[10px] font-mono text-slate-500">0{idx + 1}</div>
                  <div className="text-xs font-semibold whitespace-nowrap">{step.name}</div>
                </button>
                {idx < pipeline.length - 1 && (
                  <span className="hidden lg:inline text-slate-600 font-mono text-xs">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Stage Selector Tabs */}
      <div className="flex items-center justify-center p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-xl mx-auto">
        {(['pre-production', 'production', 'post-production'] as ProductionStageType[]).map((stage) => {
          const isActive = activeStage === stage;
          return (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {stage.replace('-', ' ')}
            </button>
          );
        })}
      </div>

      {/* Stage Overview Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0e1017] to-slate-900 border border-amber-900/30 flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          {React.createElement(stageDescriptions[activeStage].icon, { className: 'w-7 h-7' })}
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            {stageDescriptions[activeStage].title}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
            {stageDescriptions[activeStage].subtitle}
          </h2>
        </div>
      </div>

      {/* Lesson Topics Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLessons.map((lesson) => {
            const isBookmarked = bookmarkedLessonIds.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                      {lesson.stage} Lesson
                    </span>
                    <button
                      onClick={() => onToggleBookmark(lesson.id)}
                      className={`p-2 rounded-lg border transition-colors ${
                        isBookmarked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-amber-300'
                      }`}
                      title={isBookmarked ? 'Bookmarked' : 'Bookmark lesson'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {lesson.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2">
                    {lesson.detailedContent.slice(0, 2).map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Terms Preview */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {lesson.keyTerms.map((kt) => (
                      <span
                        key={kt.term}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-amber-400/90"
                      >
                        {kt.term}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    {lesson.practicalTips.length} Practical Director Tips
                  </span>
                  <button
                    onClick={() => onSelectLesson(lesson)}
                    className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <span>Read Masterclass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
