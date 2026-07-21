import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, Layers, Compass, Sliders, Check, 
  HelpCircle, Sparkles, AlertCircle, FileText, Download
} from 'lucide-react';
import { mockupScenes } from '../data/mockupsAndPhotos';
import { IMAGES } from '../data/images';

export default function MockupView() {
  const [activeSceneId, setActiveSceneId] = useState('tampak_depan');
  const [copiedSpecs, setCopiedSpecs] = useState(false);

  const activeScene = mockupScenes.find(s => s.id === activeSceneId) || mockupScenes[0];

  const getImagePath = (key: string) => {
    switch (key) {
      case 'lifestyle_coffee_mug': return IMAGES.lifestyle;
      case 'garut_heritage_mockup':
      default:
        return IMAGES.mockup;
    }
  };

  return (
    <div className="space-y-16" id="mockup-view-root">
      {/* Intro Text */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">HIGH-END PACKAGING MOCKUP</span>
        <h1 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
          Visualisasi Kemasan Ekspor
        </h1>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Konsep visual kemasan modern bergaya minimalis premium, dirancang khusus untuk memenuhi ekspektasi butik specialty coffee di Jepang, Jerman, dan Amerika Serikat.
        </p>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Panel: Big Image Rendering */}
        <div className="lg:col-span-7 bg-brand-card border border-brand-border rounded-3xl p-4 md:p-6 shadow-sm flex flex-col justify-between space-y-6">
          <div className="relative rounded-2xl overflow-hidden bg-neutral-950 aspect-square border border-brand-border shadow-inner flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeScene.id}
                src={getImagePath(activeScene.imageKey)}
                alt={activeScene.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Packaging specifications HUD overlay */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white border border-brand-border text-[10px] font-mono rounded-lg px-3 py-2 space-y-1 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                <span>HUD OVERLAY: ACTIVE SCENE</span>
              </div>
              <p className="text-brand-text-dim font-bold tracking-wider uppercase">{activeScene.id.toUpperCase()}</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-brand-border">
            <span className="block text-[10px] text-brand-text-dim font-mono tracking-wider uppercase mb-1">MARKETING CAPTION / DESKRIPSI SENI:</span>
            <p className="text-brand-text-muted text-sm leading-relaxed italic font-sans">
              "{activeScene.caption}"
            </p>
          </div>
        </div>

        {/* Right Panel: Angle Selector & Specifications */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          {/* Angle Buttons Selector */}
          <div className="bg-brand-card border border-brand-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-brand-accent uppercase tracking-widest block">ANGLE SELECTOR</span>
              <h3 className="text-lg font-sans font-bold text-white">Sudut Pandang Kemasan</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {mockupScenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => setActiveSceneId(scene.id)}
                  className={`flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 ${
                    activeSceneId === scene.id
                      ? 'bg-brand-accent border-brand-border text-white shadow-md'
                      : 'bg-white/5 hover:bg-white/10 border-brand-border text-brand-text-muted'
                  }`}
                >
                  <span className="block text-xs font-sans font-semibold tracking-tight">{scene.title}</span>
                  <span className={`block text-[9px] font-mono tracking-wider uppercase mt-1 ${
                    activeSceneId === scene.id ? 'text-amber-400' : 'text-brand-text-dim'
                  }`}>
                    {scene.id.replace(/_/g, ' ')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs Checklist */}
          <div className="bg-brand-card-light text-white border border-brand-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block">SPECIFICATION SPECS</span>
                <h3 className="text-lg font-sans font-bold text-white">Detil Desain & Material</h3>
              </div>

              <div className="space-y-3.5">
                {activeScene.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-brand-text-muted text-xs md:text-sm font-sans leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-brand-border pt-4 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-brand-text-dim">
                <span>PRINT METHOD: FLEXOGRAPHY & HOT FOIL</span>
                <span>GRADE: EXPORT BARRIER</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    const text = activeScene.details.join('\n');
                    navigator.clipboard.writeText(text);
                    setCopiedSpecs(true);
                    setTimeout(() => setCopiedSpecs(false), 2000);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-card hover:bg-brand-card-light border border-brand-border px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-amber-400 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  {copiedSpecs ? 'Spek Disalin!' : 'Salin Spek Detil'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Front Label Requirements Blueprint */}
      <div className="bg-brand-card rounded-2xl border border-brand-border p-8 md:p-12 space-y-8">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <span className="font-mono text-xs text-brand-accent uppercase tracking-widest block">FRONT LABEL ARCHITECTURE</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
            Arsitektur Tipografi Kemasan
          </h2>
          <p className="text-brand-text-muted text-sm leading-relaxed">
            Spesifikasi posisi teks wajib (legal markings) di bagian depan kemasan ekspor sesuai dengan standar dagang internasional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-brand-card-light border border-brand-border p-6 rounded-xl shadow-sm space-y-3">
            <span className="font-mono text-[10px] text-brand-accent font-bold uppercase block">PRIMARY BRAND (01)</span>
            <h4 className="font-sans font-bold text-white text-base">Garut Heritage Arabica Coffee</h4>
            <p className="text-brand-text-muted text-xs leading-relaxed font-sans">
              Merek utama menggunakan jenis huruf serif berkelas untuk memperkuat citra "warisan sejarah" (heritage) dan artisan kopi dataran tinggi.
            </p>
          </div>

          <div className="bg-brand-card-light border border-brand-border p-6 rounded-xl shadow-sm space-y-3">
            <span className="font-mono text-[10px] text-brand-accent font-bold uppercase block">DESCRIPTIVE PROVENANCE (02)</span>
            <h4 className="font-sans font-bold text-white text-base">Premium Indonesian Coffee</h4>
            <p className="text-brand-text-muted text-xs leading-relaxed font-sans">
              Sub-heading wajib ekspor bertuliskan "Premium Indonesian Coffee - 100% Arabica" dan "Product of Indonesia" untuk klasifikasi pendaftaran bea cukai global.
            </p>
          </div>

          <div className="bg-brand-card-light border border-brand-border p-6 rounded-xl shadow-sm space-y-3">
            <span className="font-mono text-[10px] text-brand-accent font-bold uppercase block">COOPERATIVE ENDORSEMENT (03)</span>
            <h4 className="font-sans font-bold text-white text-base">Koperasi Merah Putih Label</h4>
            <p className="text-brand-text-muted text-xs leading-relaxed font-sans">
              Menempelkan label bulat merah putih "Koperasi Merah Putih" di bagian bawah sebagai bentuk akreditasi pemberdayaan masyarakat dan gotong-royong.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
