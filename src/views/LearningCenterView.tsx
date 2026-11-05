import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  HelpCircle,
  Search,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';
import { QuizQuestion, GlossaryTerm } from '../types';

interface LearningCenterViewProps {
  quizzes: QuizQuestion[];
  glossary: GlossaryTerm[];
  onRecordQuizScore: (category: string, score: number, total: number) => void;
}

export const LearningCenterView: React.FC<LearningCenterViewProps> = ({
  quizzes,
  glossary,
  onRecordQuizScore
}) => {
  const [activeTab, setActiveTab] = useState<'quizzes' | 'glossary'>('quizzes');

  // Quiz Engine State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Glossary State
  const [glossarySearch, setGlossarySearch] = useState('');
  const [glossaryCategory, setGlossaryCategory] = useState<string>('all');

  const quizCategories = ['All', 'History', 'Filmmaking', 'Storyboarding', 'Actors', 'Animation & VFX'];

  const filteredQuizzes = selectedCategory === 'All'
    ? quizzes
    : quizzes.filter((q) => q.category === selectedCategory);

  const currentQ = filteredQuizzes[currentQuestionIdx];

  // Handle Option Select
  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  // Submit Answer
  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctOptionIndex) {
      setScore((prev) => prev + 1);
    }
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIdx < filteredQuizzes.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      onRecordQuizScore(
        selectedCategory,
        selectedOption === currentQ.correctOptionIndex ? score + 1 : score,
        filteredQuizzes.length
      );
    }
  };

  // Reset Quiz
  const handleResetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Change Quiz Category
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Filtered Glossary
  const filteredGlossary = glossary.filter((term) => {
    const matchQuery =
      term.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      term.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    const matchCat = glossaryCategory === 'all' || term.category === glossaryCategory;
    return matchQuery && matchCat;
  });

  const glossaryCategories = Array.from(new Set(glossary.map((g) => g.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Cinema Learning Centre</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          Knowledge Hub & Certification Quizzes
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Test your mastery of Telugu cinema history and filmmaking fundamentals, or lookup industry-standard cinematography and editing terminology.
        </p>
      </div>

      {/* Main Mode Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'quizzes'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'bg-slate-900/60 text-slate-400 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Interactive Quizzes ({quizzes.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('glossary')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'glossary'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'bg-slate-900/60 text-slate-400 hover:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Filmmaking Glossary ({glossary.length})</span>
        </button>
      </div>

      {/* TAB 1: INTERACTIVE QUIZ ENGINE */}
      {activeTab === 'quizzes' && (
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
            {quizCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredQuizzes.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#0e1017] border border-slate-800 text-slate-400">
              No questions found for this category.
            </div>
          ) : quizFinished ? (
            /* Quiz Results Card */
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0e1017] border border-amber-900/40 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Quiz Completed
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">Your Evaluation Score</h3>
                <div className="font-mono text-5xl font-black text-amber-300 py-3 tabular-nums">
                  {score} / {filteredQuizzes.length}
                </div>
                <p className="text-sm text-slate-400">
                  {score === filteredQuizzes.length
                    ? 'Phenomenal! You possess master-level command over Telugu cinema & filmmaking.'
                    : score >= filteredQuizzes.length / 2
                    ? 'Great performance! Your cinematic and production instincts are sharp.'
                    : 'Good attempt. Re-read the masterclasses and explore the timeline to deepen your knowledge.'}
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={handleResetQuiz}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retry Quiz</span>
                </button>
              </div>
            </div>
          ) : (
            /* Question Active Card */
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1017] border border-amber-900/30 space-y-6 shadow-2xl">
              {/* Question progress and category */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                <span className="text-amber-400 uppercase font-semibold">
                  Category: {currentQ.category}
                </span>
                <span>
                  Question {currentQuestionIdx + 1} of {filteredQuizzes.length}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctOptionIndex;

                  let optionStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-amber-500/40';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                    } else {
                      optionStyle = 'bg-slate-900/30 border-slate-800 text-slate-500 opacity-50';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-xs font-mono shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation once submitted */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs sm:text-sm">
                  <div className="font-bold text-amber-400 font-mono uppercase text-[11px]">
                    Detailed Explanation:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Current Score: {score}
                </span>

                {!isAnswerSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleSubmitAnswer}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <span>
                      {currentQuestionIdx < filteredQuizzes.length - 1 ? 'Next Question' : 'View Results'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SEARCHABLE GLOSSARY */}
      {activeTab === 'glossary' && (
        <div className="space-y-8">
          {/* Search & Filter Bar */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#0e1017] border border-amber-950/40 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Search filmmaking & cinema terms (e.g., Anamorphic, Foley, Steadicam, DCP)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">Category:</span>
              <select
                value={glossaryCategory}
                onChange={(e) => setGlossaryCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Disciplines</option>
                {glossaryCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Glossary Terms Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGlossary.map((term) => (
              <div
                key={term.id}
                className="p-6 rounded-2xl bg-[#0e1017] border border-slate-800/80 hover:border-amber-500/40 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-500 uppercase">{term.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-100">{term.term}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {term.definition}
                  </p>
                </div>

                {term.exampleInCinema && (
                  <div className="pt-3 border-t border-slate-800/80 text-xs text-amber-300/80 font-mono italic">
                    Example: {term.exampleInCinema}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
