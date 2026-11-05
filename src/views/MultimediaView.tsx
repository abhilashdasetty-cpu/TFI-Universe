import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Volume2,
  Video,
  PenTool,
  CheckCircle2,
  Cpu,
  Monitor,
  Eye,
  Activity,
  Sliders,
  ShieldCheck
} from 'lucide-react';

export const MultimediaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'animation' | 'vfx' | 'graphics' | 'audio' | 'video'>('animation');

  const animationPrinciples = [
    { num: '01', name: 'Squash & Stretch', desc: 'Gives flexibility, weight, and volume to characters. As a bouncing ball squashes on impact, its total mass volume remains constant.' },
    { num: '02', name: 'Anticipation', desc: 'Prepares the audience for an action (e.g., crouching down before leaping up or pulling back a fist before punching).' },
    { num: '03', name: 'Staging', desc: 'Presenting an idea completely unmistakably: lighting, camera angle, and silhouette so the viewer\'s eye is guided immediately to the focal action.' },
    { num: '04', name: 'Straight Ahead & Pose to Pose', desc: 'Straight Ahead animates frame by frame sequentially for chaotic fluids/fire; Pose to Pose draws extreme key poses first and in-betweens later for dramatic scenes.' },
    { num: '05', name: 'Follow Through & Overlapping Action', desc: 'Nothing stops all at once. When a running hero halts, hair, cloaks, and weapons continue forward in motion before settling.' },
    { num: '06', name: 'Slow In & Slow Out (Ease)', desc: 'Natural movement accelerates from rest and decelerates before stopping. More frames are placed near the start and end of a movement arc.' },
    { num: '07', name: 'Arcs', desc: 'Almost all natural organic movements (arm swings, head turns, sword slashes) follow a circular or parabolic curved arc, never mechanical straight lines.' },
    { num: '08', name: 'Secondary Action', desc: 'Subordinate movements that enrich the primary action (e.g., a person whistling while walking or twirling a cane).' },
    { num: '09', name: 'Timing & Spacing', desc: 'The number of frames between poses dictates physical weight and speed. Fewer frames mean rapid motion; more frames convey heavy ponderous mass.' },
    { num: '10', name: 'Exaggeration', desc: 'Pushing facial expressions or physical dynamics beyond reality while remaining true to the essence of the emotion.' },
    { num: '11', name: 'Solid Drawing', desc: 'Understanding anatomical 3D space, balance, weight, volume, perspective, and avoidance of symmetrical "twinning".' },
    { num: '12', name: 'Appeal', desc: 'Charismatic design and magnetic personality that captivates audiences, applicable equally to heroes, villains, and CG creatures.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multimedia & Animation Learning Centre</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100">
          The Digital Arts & Animation Academy
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive curriculum based on CBSE Animator Class XI standards and international VFX production workflows: from 2D animation principles to complex 3D digital creature pipelines.
        </p>
      </div>

      {/* Module Selector Ribbon */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
        {[
          { id: 'animation', label: '12 Principles of Animation', icon: Activity },
          { id: 'vfx', label: 'VFX & CGI Pipeline', icon: Cpu },
          { id: 'graphics', label: 'Digital Graphics', icon: Layers },
          { id: 'audio', label: 'Digital Audio & Acoustics', icon: Volume2 },
          { id: 'video', label: 'Video Engineering & Formats', icon: Video }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: ANIMATION */}
      {activeTab === 'animation' && (
        <div className="space-y-10">
          {/* Hero Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/20 via-[#0e1017] to-slate-900 border border-amber-900/30 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Foundation of Classical & 3D Animation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
                The 12 Core Principles of Animation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Formulated by Disney masters Frank Thomas and Ollie Johnston in 1981, these 12 physical and psychological laws govern everything from hand-drawn frame animation to cutting-edge 3D rigging in modern cinema.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/50 border border-amber-900/30 text-xs font-mono space-y-2 text-slate-300">
              <div className="text-amber-400 font-bold uppercase">Case Study in Telugu Cinema</div>
              <p>
                In S. S. Rajamouli\'s <em>Eega (2012)</em>, Makuta VFX animators applied these exact principles—especially Squash & Stretch and Exaggeration—to turn a common housefly into an emotionally expressive hero.
              </p>
            </div>
          </div>

          {/* 12 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animationPrinciples.map((p) => (
              <div
                key={p.num}
                className="p-6 rounded-2xl bg-[#0e1017] border border-slate-800/80 hover:border-amber-500/40 transition-colors space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-amber-500/70 group-hover:text-amber-400 transition-colors">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-500">Core Principle</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Animation Pipeline Comparison: 2D vs 3D vs Stop-Motion */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <h3 className="font-serif text-xl font-bold text-amber-100">
              Animation Mediums: Technical Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
              <div className="p-5 rounded-xl bg-[#0b0c10] border border-slate-800 space-y-2">
                <span className="font-bold text-amber-300 text-base block">Traditional & 2D Vector</span>
                <p className="text-slate-400 leading-relaxed">
                  Drawn on physical pegboards or digital tablets (Toon Boom / Flash). Animators draw keyframes on "ones" (24 fps) or "twos" (12 unique drawings per second).
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#0b0c10] border border-slate-800 space-y-2">
                <span className="font-bold text-amber-300 text-base block">3D Computer CGI</span>
                <p className="text-slate-400 leading-relaxed">
                  Digital geometry models built from polygons, textured with PBR shaders, rigged with inverse kinematics (IK) digital skeletons, and animated via spline curves.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#0b0c10] border border-slate-800 space-y-2">
                <span className="font-bold text-amber-300 text-base block">Stop-Motion Physical</span>
                <p className="text-slate-400 leading-relaxed">
                  Tactile armatures, clay, and puppets manipulated by hand millimeter by millimeter between physical camera exposures. Requires extraordinary patience.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VFX & CGI */}
      {activeTab === 'vfx' && (
        <div className="space-y-8">
          <div className="relative rounded-3xl overflow-hidden border border-amber-900/30">
            <img
              src="/src/assets/images/animation_vfx_studio_1793882524998.jpg"
              alt="VFX Studio"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-6 sm:p-10">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase text-amber-400">
                  Hollywood & Indian Cinema Pipeline
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Visual Effects: From Green Screen to Photoreal Worlds
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  How movies like Baahubali, RRR, and Kalki 2898 AD fuse physical live-action photography with complex digital simulations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '1. Matchmove & Camera Tracking',
                desc: 'Extracting the exact mathematical 3D camera vector, focal length, and movement from live-action footage so digital assets align seamlessly.'
              },
              {
                title: '2. Rotoscoping & Cleanplate',
                desc: 'Manually isolating foreground actors frame-by-frame and painting out safety harnesses, stunt wires, and tracking markers.'
              },
              {
                title: '3. FX Simulations',
                desc: 'Procedural physics calculations for hyper-realistic fire, volumetric smoke, turbulent water splashes, dust storms, and debris destruction.'
              },
              {
                title: '4. Node-Based Compositing',
                desc: 'Merging live plates, CG character passes (diffuse, specular, ambient occlusion, depth), and color grading into one unified photoreal frame.'
              }
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0e1017] border border-slate-800 space-y-2">
                <span className="font-bold text-sm text-amber-300 block">{step.title}</span>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: GRAPHICS */}
      {activeTab === 'graphics' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Digital Graphics Fundamentals
            </h2>
            <p className="text-sm text-slate-400">
              Raster pixels, vector math, color profiles, resolution, and typographic discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <span className="font-bold text-base text-amber-300 block">Raster Graphics (Bitmap)</span>
              <p className="text-slate-300 leading-relaxed">
                Composed of a rectangular grid of discrete pixels, each storing a specific color value.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>• File Formats: JPEG, PNG, TIFF, OpenEXR, WebP</li>
                <li>• Dependent on resolution: Enlarging causes pixelation and blur.</li>
                <li>• Standard for live-action camera sensor photography and digital painting.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <span className="font-bold text-amber-300 text-base block">Vector Graphics</span>
              <p className="text-slate-300 leading-relaxed">
                Composed of mathematical formulas defining coordinates, lines, curves, and fills (Bézier curves).
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>• File Formats: SVG, EPS, AI, PDF</li>
                <li>• Resolution-independent: Infinitely scalable without any loss of crispness.</li>
                <li>• Standard for typography, movie logo titles, and 2D character assets.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AUDIO */}
      {activeTab === 'audio' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Digital Audio & Cinematic Sound Design
            </h2>
            <p className="text-sm text-slate-400">
              Sample rates, bit depth, microphone polar patterns, Foley, and 7.1 surround mixing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-300 block">Sample Rate & Bit Depth</span>
              <p className="text-slate-400 leading-relaxed">
                48 kHz / 24-bit is the professional film delivery standard. Nyquist-Shannon sampling theorem dictates the sample rate must be double the highest audible frequency (20kHz x 2 = 40kHz minimum).
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-300 block">Microphone Polar Patterns</span>
              <p className="text-slate-400 leading-relaxed">
                Shotgun / Hypercardioid microphones reject off-axis ambient room noise and pinpoint actor dialogue from 4 to 8 feet away on set.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-300 block">Dolby Atmos Spatial Audio</span>
              <p className="text-slate-400 leading-relaxed">
                Moves beyond traditional channel-based audio (5.1/7.1) by treating individual sounds as 3D audio objects positioned precisely across overhead ceiling and surround speakers.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: VIDEO */}
      {activeTab === 'video' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0e1017] border border-amber-900/30 space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-100">
              Video Engineering, Frame Rates & Codecs
            </h2>
            <p className="text-sm text-slate-400">
              24.000 fps cinematic motion blur, shutter angle rules, dynamic range, and digital cinema delivery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="font-semibold text-amber-300 text-base">The 180-Degree Shutter Rule</div>
            <p className="leading-relaxed">
              To achieve natural cinematic motion blur identical to human vision, the camera shutter speed should always be set to 1 / (2 x Frame Rate). At standard cinema speed of 24 fps, shutter speed must be exactly 1/48th of a second.
            </p>
            <div className="p-4 rounded-xl bg-[#0b0c10] border border-slate-800 text-xs font-mono text-slate-400">
              <div>• 24 fps (1/48s Shutter): Cinematic natural motion blur.</div>
              <div>• High Shutter (1/250s - 1/500s): Crisp, jittery visceral combat (e.g., Gladiator, Saving Private Ryan, Pushpa fight scenes).</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
