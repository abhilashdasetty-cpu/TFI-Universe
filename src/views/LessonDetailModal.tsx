import React from 'react';
import { X, Bookmark, BookOpen, CheckCircle2, Lightbulb, Clapperboard, HelpCircle } from 'lucide-react';
import { LessonTopic } from '../types';

interface LessonDetailModalProps {
  lesson: LessonTopic | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (lessonId: string) => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  lesson,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  if (!lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-[#0e1017] border border-amber-900/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-950/30 via-slate-900 to-[#0e1017] border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Stage: {lesson.stage.replace('-', ' ')}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
              {lesson.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(lesson.id)}
              className={`p-2.5 rounded-full border transition-colors ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark lesson'}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold block mb-1">Pedagogical Overview:</span>
            {lesson.summary}
          </div>

          {/* Detailed Content Modules */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Core Theoretical Principles & Execution</span>
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {lesson.detailedContent.map((paragraph, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Terminology Matrix */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Key Cinematic Terminology</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lesson.keyTerms.map((kt) => (
                <div
                  key={kt.term}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1"
                >
                  <span className="font-bold text-sm text-amber-300 block">{kt.term}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{kt.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Tips from Master Filmmakers */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-amber-100 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Practical Advice for the Film Set</span>
            </h3>
            <div className="space-y-2">
              {lesson.practicalTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs sm:text-sm text-amber-200/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between font-mono">
          <span>CBSE Animator Class XI & TFI Academic Curriculum</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300"
          >
            Close Masterclass
          </button>
        </div>
      </div>
    </div>
  );
};
