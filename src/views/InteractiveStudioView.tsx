import React, { useState } from 'react';
import {
  Wrench,
  Camera,
  CheckSquare,
  ListTodo,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight,
  Clock,
  Layers
} from 'lucide-react';
import { CAMERA_ANGLES_EXPLORER } from '../data/seedData';
import { ShotPlanItem, ChecklistTask } from '../types';

interface InteractiveStudioViewProps {
  shotPlans: ShotPlanItem[];
  checklist: ChecklistTask[];
  onSaveShotPlan: (item: ShotPlanItem) => void;
  onDeleteShotPlan: (id: string) => void;
  onToggleChecklist: (id: string) => void;
  onResetChecklist: () => void;
}

export const InteractiveStudioView: React.FC<InteractiveStudioViewProps> = ({
  shotPlans,
  checklist,
  onSaveShotPlan,
  onDeleteShotPlan,
  onToggleChecklist,
  onResetChecklist
}) => {
  const [activeTab, setActiveTab] = useState<'angles' | 'planner' | 'checklist'>('angles');
  const [selectedAngleId, setSelectedAngleId] = useState<string>(CAMERA_ANGLES_EXPLORER[0].id);

  // New Shot Form State
  const [showAddShot, setShowAddShot] = useState(false);
  const [newSceneNo, setNewSceneNo] = useState('1');
  const [newShotNo, setNewShotNo] = useState('1A');
  const [newShotType, setNewShotType] = useState('Medium Shot');
  const [newAngle, setNewAngle] = useState('Eye Level');
  const [newMovement, setNewMovement] = useState('Static');
  const [newLens, setNewLens] = useState('50mm');
  const [newDesc, setNewDesc] = useState('');
  const [newDuration, setNewDuration] = useState('4');

  const selectedAngle = CAMERA_ANGLES_EXPLORER.find((a) => a.id === selectedAngleId) || CAMERA_ANGLES_EXPLORER[0];

  const handleCreateShot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDesc.trim()) return;

    const newShot: ShotPlanItem = {
      id: `sp-${Date.now()}`,
      sceneNo: newSceneNo,
      shotNo: newShotNo,
      shotType: newShotType,
      cameraAngle: newAngle,
      movement: newMovement,
      lensMm: newLens,
      description: newDesc.trim(),
      estDurationSec: parseFloat(newDuration) || 4,
      isCompleted: false
    };

    onSaveShotPlan(newShot);
    setNewDesc('');
    setShowAddShot(false);
  };

  // Checklist calculations
  const totalChecklist = checklist.length;
  const completedChecklist = checklist.filter((t) => t.isCompleted).length;
  const progressPercent = Math.round((completedChecklist / totalChecklist) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <Wrench className="w-3.5 h-3.5" />
          <span>Interactive Creative Suite</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          The Filmmaker's Interactive Studio
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Practical tools engineered for directors, cinematographers, and students: explore optical camera angles, architect your shooting plan, and verify production checklists.
        </p>
      </div>

      {/* Studio Nav Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
        <button
          onClick={() => setActiveTab('angles')}
          className={`flex-1 min-w-[180px] py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'angles'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Camera className="w-4 h-4" />
          <span>Camera Angle Explorer (9 Angles)</span>
        </button>
        <button
          onClick={() => setActiveTab('planner')}
          className={`flex-1 min-w-[180px] py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'planner'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ListTodo className="w-4 h-4" />
          <span>Production Shot Planner ({shotPlans.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 min-w-[180px] py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'checklist'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Production Checklist ({progressPercent}%)</span>
        </button>
      </div>

      {/* 1. CAMERA ANGLE EXPLORER */}
      {activeTab === 'angles' && (
        <div className="space-y-8">
          {/* Selector Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {CAMERA_ANGLES_EXPLORER.map((angle) => {
              const isSelected = selectedAngleId === angle.id;
              return (
                <button
                  key={angle.id}
                  onClick={() => setSelectedAngleId(angle.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-lg shadow-amber-950/40'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border-slate-800'
                  }`}
                >
                  <Camera className={`w-4 h-4 mx-auto mb-1 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span className="text-[11px] font-semibold block leading-tight truncate">
                    {angle.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Angle Display Detail Card */}
          <div className="p-8 rounded-3xl bg-[#0e1017] border border-amber-900/30 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Visual Schematic Box */}
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-black border border-amber-900/40 overflow-hidden flex flex-col justify-between p-6">
              <div className="flex justify-between items-center text-xs font-mono text-amber-400">
                <span>OPTICAL VECTOR ANALYSIS</span>
                <span>{selectedAngle.cameraHeight}</span>
              </div>

              {/* Dynamic Schematic Geometry */}
              <div className="my-auto text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-dashed border-amber-500/50 flex items-center justify-center bg-amber-500/10">
                  <Camera className="w-8 h-8 text-amber-300 animate-pulse" />
                </div>
                <div className="font-mono text-sm font-bold text-slate-200">
                  {selectedAngle.name}
                </div>
                <div className="text-xs text-amber-400/80 font-mono">
                  {selectedAngle.teluguTerm}
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                {selectedAngle.illustrationDescription}
              </div>
            </div>

            {/* Theory & Impact */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  Camera Angle & Perspective
                </span>
                <h3 className="font-serif text-3xl font-bold text-amber-100 mt-1">
                  {selectedAngle.name}
                </h3>
                <div className="text-sm text-amber-300/80 font-medium">
                  {selectedAngle.teluguTerm}
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="font-bold text-amber-300 block">Psychological & Emotional Impact:</span>
                  <p className="leading-relaxed text-slate-300">{selectedAngle.emotionalImpact}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="font-bold text-amber-300 block">Cinematic & Telugu Hero Application:</span>
                  <p className="leading-relaxed text-slate-300">{selectedAngle.cinematicUse}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. PRODUCTION SHOT PLANNER */}
      {activeTab === 'planner' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-amber-100">
                Production Daily Shot Planner
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Organize scene coverage, camera optics, focal lengths, and estimated durations.
              </p>
            </div>
            <button
              onClick={() => setShowAddShot(true)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Planned Shot</span>
            </button>
          </div>

          {/* Shot Plans Table */}
          <div className="rounded-2xl bg-[#0e1017] border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Scene / Shot</th>
                    <th className="p-3.5">Framing & Angle</th>
                    <th className="p-3.5">Movement</th>
                    <th className="p-3.5">Lens (mm)</th>
                    <th className="p-3.5">Action Description</th>
                    <th className="p-3.5">Est. Time</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {shotPlans.map((item) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-900/60 transition-colors ${
                        item.isCompleted ? 'opacity-60 bg-emerald-950/10' : ''
                      }`}
                    >
                      <td className="p-3.5">
                        <button
                          onClick={() => onSaveShotPlan({ ...item, isCompleted: !item.isCompleted })}
                          className="text-amber-400 hover:text-amber-300"
                        >
                          {item.isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-600" />
                          )}
                        </button>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-slate-200">
                        Sc {item.sceneNo} · #{item.shotNo}
                      </td>
                      <td className="p-3.5 text-slate-300">
                        <div className="font-semibold text-amber-200">{item.shotType}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{item.cameraAngle}</div>
                      </td>
                      <td className="p-3.5 font-mono text-slate-400">{item.movement}</td>
                      <td className="p-3.5 font-mono text-amber-400 font-semibold">{item.lensMm}</td>
                      <td className="p-3.5 text-slate-300 max-w-xs truncate">{item.description}</td>
                      <td className="p-3.5 font-mono text-slate-400 tabular-nums">{item.estDurationSec}s</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => onDeleteShotPlan(item.id)}
                          className="p-1 rounded text-slate-500 hover:text-rose-400"
                          title="Delete shot"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Shot Modal Form */}
          {showAddShot && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <form
                onSubmit={handleCreateShot}
                className="w-full max-w-md bg-[#0f1118] border border-amber-900/40 rounded-2xl shadow-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-serif text-lg font-bold text-amber-100">Add Shot Plan Item</h3>
                  <button
                    type="button"
                    onClick={() => setShowAddShot(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 block mb-1 font-mono uppercase">Scene #</label>
                      <input
                        type="text"
                        value={newSceneNo}
                        onChange={(e) => setNewSceneNo(e.target.value)}
                        className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1 font-mono uppercase">Shot #</label>
                      <input
                        type="text"
                        value={newShotNo}
                        onChange={(e) => setNewShotNo(e.target.value)}
                        className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 block mb-1 font-mono uppercase">Shot Type</label>
                      <select
                        value={newShotType}
                        onChange={(e) => setNewShotType(e.target.value)}
                        className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                      >
                        <option>Wide Shot</option>
                        <option>Medium Shot</option>
                        <option>Close-Up</option>
                        <option>Extreme Close-Up</option>
                        <option>Over-the-Shoulder</option>
                        <option>Extreme Wide Shot</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1 font-mono uppercase">Lens (mm)</label>
                      <input
                        type="text"
                        value={newLens}
                        onChange={(e) => setNewLens(e.target.value)}
                        placeholder="e.g. 35mm, 50mm, 85mm"
                        className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1 font-mono uppercase">Description *</label>
                    <textarea
                      required
                      rows={2}
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Character action, focal point, and camera movement..."
                      className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowAddShot(false)}
                    className="px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase"
                  >
                    Add Shot
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* 3. THREE-STAGE PRODUCTION CHECKLIST */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Production Readiness
              </span>
              <h2 className="font-serif text-2xl font-bold text-amber-100">
                Three-Stage Production Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {completedChecklist} of {totalChecklist} tasks verified ({progressPercent}% Complete)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <button
                onClick={onResetChecklist}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-slate-200"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['pre-production', 'production', 'post-production'] as const).map((stage) => {
              const stageTasks = checklist.filter((t) => t.stage === stage);
              return (
                <div key={stage} className="p-6 rounded-2xl bg-[#0e1017] border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-amber-200 uppercase">
                      {stage.replace('-', ' ')}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      {stageTasks.filter((t) => t.isCompleted).length} / {stageTasks.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {stageTasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => onToggleChecklist(task.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                          task.isCompleted
                            ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <button className="mt-0.5 shrink-0">
                          {task.isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600" />
                          )}
                        </button>
                        <div className="space-y-0.5">
                          <span
                            className={`font-semibold text-xs block ${
                              task.isCompleted ? 'line-through text-slate-400' : 'text-slate-200'
                            }`}
                          >
                            {task.title}
                          </span>
                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            {task.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
