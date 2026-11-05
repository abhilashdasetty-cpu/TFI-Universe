import React, { useState } from 'react';
import { Search, Film, User, ShieldCheck, Menu, X, Bookmark, Clapperboard } from 'lucide-react';
import { UserProfile } from '../types';

export type NavView = 
  | 'home' 
  | 'heroes' 
  | 'movies' 
  | 'filmmaking' 
  | 'storyboard' 
  | 'multimedia' 
  | 'history' 
  | 'studio' 
  | 'learning' 
  | 'profile' 
  | 'admin';

interface HeaderProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenSearch: () => void;
  userProfile: UserProfile;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  userProfile
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { view: NavView; label: string }[] = [
    { view: 'heroes', label: 'Telugu Heroes' },
    { view: 'movies', label: 'Movies & Filmography' },
    { view: 'filmmaking', label: 'Filmmaking' },
    { view: 'storyboard', label: 'Storyboard Studio' },
    { view: 'multimedia', label: 'Multimedia & VFX' },
    { view: 'history', label: 'History' },
    { view: 'studio', label: 'Interactive Studio' },
    { view: 'learning', label: 'Learning & Quizzes' }
  ];

  const handleNavClick = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0c10]/90 backdrop-blur-md border-b border-amber-900/20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 flex items-center justify-center shadow-lg shadow-amber-900/30">
            <div className="w-full h-full bg-[#0e1017] rounded-[7px] flex items-center justify-center">
              <Clapperboard className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-amber-100 group-hover:text-amber-300 transition-colors">
              TFI UNIVERSE
            </span>
            <span className="hidden sm:block text-[10px] tracking-widest uppercase text-amber-500/80 font-mono">
              Telugu Cinema & Filmmaking Academy
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`whitespace-nowrap transition-colors relative py-1 hover:text-amber-300 text-xs tracking-wide uppercase font-semibold ${
                  isActive ? 'text-amber-400 font-bold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Search + Profile / Admin) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-2 text-xs"
            title="Global Search (Press / to search)"
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline text-slate-400 font-mono text-[11px]">Search...</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400 font-mono">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={() => handleNavClick('profile')}
            className={`p-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-2 ${
              currentView === 'profile'
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-200'
                : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-300'
            }`}
            title="User Profile & Saved Projects"
          >
            <User className="w-4 h-4 text-amber-400" />
            <span className="hidden lg:inline">{userProfile.name.split(' ')[0]}</span>
            {userProfile.favoriteActorIds.length + userProfile.favoriteMovieIds.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('admin')}
            className={`p-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'admin'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Admin Console"
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="hidden md:inline">Admin</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-amber-900/30 bg-[#0e1017] px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border-l-2 border-amber-400'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => handleNavClick('profile')}
              className="flex-1 py-2 px-3 text-xs bg-slate-900 rounded border border-slate-800 text-slate-300 flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-amber-400" />
              <span>My Profile & Projects</span>
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="py-2 px-3 text-xs bg-amber-600/20 border border-amber-500/40 rounded text-amber-300 flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
