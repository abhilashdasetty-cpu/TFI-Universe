import React, { useState } from 'react';
import {
  Layers,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Printer,
  Save,
  Film,
  Camera,
  Play,
  Clock,
  Eye,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  Edit3,
  X,
  Sparkles
} from 'lucide-react';
import { StoryboardProject, StoryboardScene, StoryboardPanel } from '../types';
import { storageService } from '../services/storageService';

interface StoryboardViewProps {
  projects: StoryboardProject[];
  onSaveProject: (project: StoryboardProject) => void;
  onDeleteProject: (projectId: string) => void;
}

export const StoryboardView: React.FC<StoryboardViewProps> = ({
  projects,
  onSaveProject,
  onDeleteProject
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projects.length > 0 ? projects[0].id : ''
  );
  const [activeTab, setActiveTab] = useState<'editor' | 'theory' | 'preview'>('editor');
  const [editingPanel, setEditingPanel] = useState<{
    sceneId: string;
    panel: StoryboardPanel;
  } | null>(null);

  // New Project Modal State
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newLogline, setNewLogline] = useState('');
  const [newDirector, setNewDirector] = useState('');
  const [newAspectRatio, setNewAspectRatio] = useState<'16:9' | '2.39:1 Anamorphic' | '4:3 Academy'>('2.39:1 Anamorphic');

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  // Handler to create new project
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newProject: StoryboardProject = {
      id: `proj-${Date.now()}`,
      title: newTitle.trim(),
      logline: newLogline.trim() || 'No logline specified.',
      aspectRatio: newAspectRatio,
      directorName: newDirector.trim() || 'Director',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      scenes: [
        {
          id: `sc-${Date.now()}-1`,
          sceneNumber: 1,
          sceneHeading: 'EXT. LOCATION - DAY',
          description: 'Initial scene opening shot description.',
          panels: [
            {
              id: `p-${Date.now()}-1`,
              panelNumber: 1,
              shotType: 'Wide Shot',
              cameraAngle: 'Eye Level',
              cameraMovement: 'Static',
              actionDescription: 'Opening establishing visual frame.',
              dialogueAudio: 'AMBIENCE: Natural outdoor birds and distant wind.',
              timingDurationSec: 4.0
            }
          ]
        }
      ]
    };

    onSaveProject(newProject);
    setSelectedProjectId(newProject.id);
    setShowNewProjectModal(false);
    setNewTitle('');
    setNewLogline('');
    setNewDirector('');
  };

  // Add Scene
  const handleAddScene = () => {
    if (!currentProject) return;
    const nextSceneNo = currentProject.scenes.length + 1;
    const updatedScenes: StoryboardScene[] = [
      ...currentProject.scenes,
      {
        id: `sc-${Date.now()}`,
        sceneNumber: nextSceneNo,
        sceneHeading: `INT. SCENE ${nextSceneNo} - CONTINUOUS`,
        description: 'Describe physical location and emotional shift.',
        panels: [
          {
            id: `p-${Date.now()}`,
            panelNumber: 1,
            shotType: 'Medium Shot',
            cameraAngle: 'Eye Level',
            cameraMovement: 'Static',
            actionDescription: 'Describe character movements and actions.',
            dialogueAudio: '',
            timingDurationSec: 3.0
          }
        ]
      }
    ];

    onSaveProject({ ...currentProject, scenes: updatedScenes });
  };

  // Add Panel to Scene
  const handleAddPanel = (sceneId: string) => {
    if (!currentProject) return;
    const updatedScenes = currentProject.scenes.map((scene) => {
      if (scene.id !== sceneId) return scene;
      const nextPanelNo = scene.panels.length + 1;
      const newPanel: StoryboardPanel = {
        id: `p-${Date.now()}`,
        panelNumber: nextPanelNo,
        shotType: 'Close-Up',
        cameraAngle: 'Eye Level',
        cameraMovement: 'Static',
        actionDescription: 'Action occurs within frame.',
        dialogueAudio: '',
        timingDurationSec: 3.0
      };
      return { ...scene, panels: [...scene.panels, newPanel] };
    });

    onSaveProject({ ...currentProject, scenes: updatedScenes });
  };

  // Delete Panel
  const handleDeletePanel = (sceneId: string, panelId: string) => {
    if (!currentProject) return;
    const updatedScenes = currentProject.scenes.map((scene) => {
      if (scene.id !== sceneId) return scene;
      const filtered = scene.panels.filter((p) => p.id !== panelId);
      // Re-index panel numbers
      const reindexed = filtered.map((p, idx) => ({ ...p, panelNumber: idx + 1 }));
      return { ...scene, panels: reindexed };
    });
    onSaveProject({ ...currentProject, scenes: updatedScenes });
  };

  // Move Panel
  const handleMovePanel = (sceneId: string, panelIndex: number, direction: 'up' | 'down') => {
    if (!currentProject) return;
    const updatedScenes = currentProject.scenes.map((scene) => {
      if (scene.id !== sceneId) return scene;
      const panels = [...scene.panels];
      const targetIndex = direction === 'up' ? panelIndex - 1 : panelIndex + 1;
      if (targetIndex < 0 || targetIndex >= panels.length) return scene;

      const temp = panels[panelIndex];
      panels[panelIndex] = panels[targetIndex];
      panels[targetIndex] = temp;

      const reindexed = panels.map((p, idx) => ({ ...p, panelNumber: idx + 1 }));
      return { ...scene, panels: reindexed };
    });

    onSaveProject({ ...currentProject, scenes: updatedScenes });
  };

  // Save Panel Edit
  const handleSavePanelEdit = (sceneId: string, updatedPanel: StoryboardPanel) => {
    if (!currentProject) return;
    const updatedScenes = currentProject.scenes.map((scene) => {
      if (scene.id !== sceneId) return scene;
      const panels = scene.panels.map((p) => (p.id === updatedPanel.id ? updatedPanel : p));
      return { ...scene, panels };
    });

    onSaveProject({ ...currentProject, scenes: updatedScenes });
    setEditingPanel(null);
  };

  // Total Duration Calculator
  const totalTimingSeconds = currentProject
    ? currentProject.scenes.reduce(
        (acc, sc) => acc + sc.panels.reduce((pAcc, p) => pAcc + (p.timingDurationSec || 0), 0),
        0
      )
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header & Project Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-amber-950/40 pb-6 no-print">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Storyboard Studio & Editor</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-amber-100">
            Storyboard & Pre-Visualization Studio
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl">
            Draft, sequence, annotate, and print cinema storyboard panels with professional aspect ratios, camera vectors, and timing notes.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-200 focus:outline-none focus:border-amber-500 max-w-xs"
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowNewProjectModal(true)}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs tracking-wider transition-colors flex items-center gap-1.5"
            title="Export as Printable PDF"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 no-print">
        <button
          onClick={() => setActiveTab('editor')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
            activeTab === 'editor'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-slate-200 bg-slate-900/50'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>Interactive Editor</span>
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
            activeTab === 'preview'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-slate-200 bg-slate-900/50'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Director's Animatic Preview</span>
        </button>
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${
            activeTab === 'theory'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-slate-200 bg-slate-900/50'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Storyboarding Pedagogy</span>
        </button>
      </div>

      {/* TAB 1: INTERACTIVE EDITOR */}
      {activeTab === 'editor' && currentProject && (
        <div className="space-y-8">
          {/* Project Details Ribbon */}
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-amber-400">
                Aspect Ratio: {currentProject.aspectRatio} · Director: {currentProject.directorName}
              </div>
              <h2 className="font-serif text-2xl font-bold text-amber-100">
                {currentProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 italic">
                "{currentProject.logline}"
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block uppercase">Total Scenes</span>
                <span className="text-amber-300 font-bold tabular-nums text-sm">
                  {currentProject.scenes.length}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block uppercase">Est. Timing</span>
                <span className="text-amber-300 font-bold tabular-nums text-sm">
                  {totalTimingSeconds.toFixed(1)}s
                </span>
              </div>
            </div>
          </div>

          {/* Scenes Loop */}
          <div className="space-y-10">
            {currentProject.scenes.map((scene, scIdx) => (
              <div
                key={scene.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0b0c10] border border-slate-800/80 space-y-6 storyboard-sheet"
              >
                {/* Scene Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                      Scene 0{scene.sceneNumber}
                    </span>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-slate-200">
                      {scene.sceneHeading}
                    </h3>
                    <p className="text-xs text-slate-400">{scene.description}</p>
                  </div>
                  <div className="flex items-center gap-2 no-print">
                    <button
                      onClick={() => handleAddPanel(scene.id)}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Panel</span>
                    </button>
                  </div>
                </div>

                {/* Panels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scene.panels.map((panel, pIdx) => (
                    <div
                      key={panel.id}
                      className="rounded-xl bg-[#0e1017] border border-slate-800/80 overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-colors"
                    >
                      {/* Panel Screen Frame (Aspect-Ratio Box) */}
                      <div className="relative aspect-[16/9] w-full bg-slate-950 flex items-center justify-center border-b border-slate-800 overflow-hidden">
                        {panel.imageUrl ? (
                          <img
                            src={panel.imageUrl}
                            alt={`Panel ${panel.panelNumber}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          /* Stylized Framing Schematic */
                          <div className="w-full h-full p-4 flex flex-col justify-between bg-radial from-slate-900 to-black text-slate-600 font-mono text-[11px]">
                            <div className="flex justify-between items-center text-[10px] text-amber-500/80">
                              <span>P-{panel.panelNumber}</span>
                              <span>{panel.cameraAngle}</span>
                            </div>
                            <div className="text-center my-auto">
                              <Camera className="w-6 h-6 mx-auto mb-1 text-slate-700" />
                              <span className="text-xs text-slate-400 font-semibold uppercase block">
                                {panel.shotType}
                              </span>
                              <span className="text-[10px] text-slate-500">
                                Vector: {panel.cameraMovement}
                              </span>
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-500">
                              <span>{currentProject.aspectRatio}</span>
                              <span className="text-amber-400 tabular-nums">
                                {panel.timingDurationSec}s
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Top panel badge */}
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 border border-white/10 text-[10px] font-mono font-bold text-amber-400">
                          Shot 0{panel.panelNumber}
                        </div>
                      </div>

                      {/* Panel Information */}
                      <div className="p-4 space-y-3 text-xs flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-slate-500 block">
                              Action Description:
                            </span>
                            <p className="text-slate-300 leading-relaxed font-sans">
                              {panel.actionDescription}
                            </p>
                          </div>

                          {panel.dialogueAudio && (
                            <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-amber-200/90 font-mono text-[11px]">
                              {panel.dialogueAudio}
                            </div>
                          )}
                        </div>

                        {/* Panel Controls (Reorder & Edit) */}
                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between no-print">
                          <div className="flex items-center gap-1">
                            <button
                              disabled={pIdx === 0}
                              onClick={() => handleMovePanel(scene.id, pIdx, 'up')}
                              className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                              title="Move left/up"
                            >
                              <MoveUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              disabled={pIdx === scene.panels.length - 1}
                              onClick={() => handleMovePanel(scene.id, pIdx, 'down')}
                              className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                              title="Move right/down"
                            >
                              <MoveDown className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingPanel({ sceneId: scene.id, panel })}
                              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-amber-950/40 text-amber-400 hover:text-amber-300 text-[11px] font-semibold transition-colors"
                            >
                              Edit Shot
                            </button>
                            <button
                              onClick={() => handleDeletePanel(scene.id, panel.id)}
                              className="p-1 rounded bg-slate-900 hover:bg-rose-950/40 text-slate-500 hover:text-rose-400 transition-colors"
                              title="Delete panel"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Add Scene Button */}
            <div className="text-center no-print">
              <button
                onClick={handleAddScene}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-900/40 text-amber-300 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Next Scene to Storyboard</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ANIMATIC PREVIEW */}
      {activeTab === 'preview' && currentProject && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 text-center space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Director's Storyboard Reel — {currentProject.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Sequential reading view of all scenes with timing cues and camera vectors.
            </p>
          </div>

          <div className="space-y-8">
            {currentProject.scenes.map((scene) => (
              <div key={scene.id} className="space-y-4">
                <div className="font-mono text-xs uppercase text-amber-400 font-bold border-b border-slate-800 pb-2">
                  SCENE 0{scene.sceneNumber}: {scene.sceneHeading}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {scene.panels.map((panel) => (
                    <div
                      key={panel.id}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
                        <span>PANEL 0{panel.panelNumber}</span>
                        <span className="text-slate-400">{panel.timingDurationSec}s</span>
                      </div>
                      <div className="aspect-[16/9] rounded bg-black flex items-center justify-center p-2 text-center text-xs font-mono text-slate-300 border border-slate-800">
                        <div>
                          <div className="text-amber-300 font-bold">{panel.shotType}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{panel.cameraAngle} · {panel.cameraMovement}</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-3">{panel.actionDescription}</p>
                      {panel.dialogueAudio && (
                        <p className="text-[11px] font-mono text-amber-400/90 italic truncate">
                          "{panel.dialogueAudio}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: STORYBOARDING THEORY & PEDAGOGY */}
      {activeTab === 'theory' && (
        <div className="max-w-4xl mx-auto space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
              CBSE Animator Class XI & Film Direction Curriculum
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              The Art & Science of the Storyboard
            </h2>
            <p className="text-sm text-slate-400">
              Why master storyboarding? How does it save crores in production budgets and elevate visual storytelling?
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <h3 className="font-serif text-xl font-bold text-amber-200">1. What is a Storyboard?</h3>
            <p>
              A storyboard is a sequential series of graphic illustrations, panels, and sketches displayed in chronological order for the purpose of pre-visualizing a motion picture, animation, interactive media sequence, or commercial.
            </p>
            <p>
              Invented at the Walt Disney Studios during the early 1930s by animator Webb Smith, it revolutionized narrative cinema by allowing directors to experiment with camera movement, pacing, lighting, and cutting rhythms before committing physical cameras, actors, and expensive sets.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <h3 className="font-serif text-xl font-bold text-amber-200">2. The 180-Degree Rule & Vector Continuity</h3>
            <p>
              The most fundamental law of camera blocking is the 180-degree rule. An imaginary straight axis of action is drawn between two characters who are speaking. If the camera stays on one half of this 180-degree circle, Character A will always look screen right, and Character B will always look screen left.
            </p>
            <p>
              Crossing the line causes a reverse cut error that disorients the viewer\'s spatial awareness. Storyboards make spatial violations instantly visible and preventable.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <h3 className="font-serif text-xl font-bold text-amber-200">3. Animatics & Photomatics</h3>
            <p>
              An <strong>Animatic</strong> combines storyboard panels into a timed video reel synchronized with scratch dialogue, sound effects, and musical cues. It enables the director and editor to determine exact shot durations, test comic timing or action kinetics, and identify unnecessary shots before the production schedule begins.
            </p>
          </div>
        </div>
      )}

      {/* EDIT PANEL MODAL */}
      {editingPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-[#0f1118] border border-amber-900/40 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-amber-100">
                Edit Panel #{editingPanel.panel.panelNumber}
              </h3>
              <button
                onClick={() => setEditingPanel(null)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1 font-mono uppercase">Shot Type</label>
                  <select
                    value={editingPanel.panel.shotType}
                    onChange={(e) =>
                      setEditingPanel({
                        ...editingPanel,
                        panel: { ...editingPanel.panel, shotType: e.target.value as any }
                      })
                    }
                    className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <option value="Extreme Wide Shot">Extreme Wide Shot (EWS)</option>
                    <option value="Wide Shot">Wide Shot (WS)</option>
                    <option value="Medium Shot">Medium Shot (MS)</option>
                    <option value="Medium Close-Up">Medium Close-Up (MCU)</option>
                    <option value="Close-Up">Close-Up (CU)</option>
                    <option value="Extreme Close-Up">Extreme Close-Up (ECU)</option>
                    <option value="Over-the-Shoulder">Over-the-Shoulder (OTS)</option>
                    <option value="Point-of-View">Point-of-View (POV)</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1 font-mono uppercase">Camera Angle</label>
                  <select
                    value={editingPanel.panel.cameraAngle}
                    onChange={(e) =>
                      setEditingPanel({
                        ...editingPanel,
                        panel: { ...editingPanel.panel, cameraAngle: e.target.value as any }
                      })
                    }
                    className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <option value="Eye Level">Eye Level (Neutral)</option>
                    <option value="Low Angle">Low Angle (Heroic/Dominant)</option>
                    <option value="High Angle">High Angle (Vulnerable)</option>
                    <option value="Bird's Eye">Bird's Eye (Overhead)</option>
                    <option value="Worm's Eye">Worm's Eye (Ground)</option>
                    <option value="Dutch Angle">Dutch Angle (Canted/Tense)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1 font-mono uppercase">Camera Movement</label>
                  <select
                    value={editingPanel.panel.cameraMovement}
                    onChange={(e) =>
                      setEditingPanel({
                        ...editingPanel,
                        panel: { ...editingPanel.panel, cameraMovement: e.target.value as any }
                      })
                    }
                    className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <option value="Static">Static (Locked-off)</option>
                    <option value="Pan">Pan (Horizontal Axis)</option>
                    <option value="Tilt">Tilt (Vertical Axis)</option>
                    <option value="Dolly / Tracking">Dolly / Tracking Shot</option>
                    <option value="Crane / Jib">Crane / Jib Swoop</option>
                    <option value="Zoom">Zoom</option>
                    <option value="Handheld">Handheld Dynamic</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1 font-mono uppercase">Duration (Seconds)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0.5"
                    max="60"
                    value={editingPanel.panel.timingDurationSec}
                    onChange={(e) =>
                      setEditingPanel({
                        ...editingPanel,
                        panel: {
                          ...editingPanel.panel,
                          timingDurationSec: parseFloat(e.target.value) || 3.0
                        }
                      })
                    }
                    className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1 font-mono uppercase">Action Description</label>
                <textarea
                  rows={3}
                  value={editingPanel.panel.actionDescription}
                  onChange={(e) =>
                    setEditingPanel({
                      ...editingPanel,
                      panel: { ...editingPanel.panel, actionDescription: e.target.value }
                    })
                  }
                  className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1 font-mono uppercase">Dialogue / Audio Cue</label>
                <input
                  type="text"
                  value={editingPanel.panel.dialogueAudio}
                  onChange={(e) =>
                    setEditingPanel({
                      ...editingPanel,
                      panel: { ...editingPanel.panel, dialogueAudio: e.target.value }
                    })
                  }
                  placeholder="CHARACTER: 'Spoken line' or SFX: Thunder crack"
                  className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setEditingPanel(null)}
                className="px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleSavePanelEdit(editingPanel.sceneId, editingPanel.panel)}
                className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEW PROJECT MODAL */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <form
            onSubmit={handleCreateProject}
            className="w-full max-w-md bg-[#0f1118] border border-amber-900/40 rounded-2xl shadow-2xl p-6 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-amber-100">
                Create New Storyboard Project
              </h3>
              <button
                type="button"
                onClick={() => setShowNewProjectModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Project Title *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Maya Vanam, Kasi 2898 AD"
                  className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Logline / Premise</label>
                <textarea
                  rows={2}
                  value={newLogline}
                  onChange={(e) => setNewLogline(e.target.value)}
                  placeholder="A one-sentence summary of the dramatic conflict..."
                  className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">Director Name</label>
                  <input
                    type="text"
                    value={newDirector}
                    onChange={(e) => setNewDirector(e.target.value)}
                    placeholder="Director Name"
                    className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">Aspect Ratio</label>
                  <select
                    value={newAspectRatio}
                    onChange={(e) => setNewAspectRatio(e.target.value as any)}
                    className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <option value="2.39:1 Anamorphic">2.39:1 Anamorphic</option>
                    <option value="16:9">16:9 Cinema Wide</option>
                    <option value="4:3 Academy">4:3 Classical Academy</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowNewProjectModal(false)}
                className="px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
