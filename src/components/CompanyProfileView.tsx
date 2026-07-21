import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, History, Target, Network, ShieldCheck, 
  CheckSquare, Users, Handshake, Award, Lightbulb, Leaf,
  ChevronLeft, ChevronRight, Play, Square, Sparkles, HelpCircle
} from 'lucide-react';
import { companySections, corporateValues, competitiveAdvantages } from '../data/companyProfile';
import { IMAGES } from '../data/images';
import CooperativeLogo from './CooperativeLogo';

export default function CompanyProfileView() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPitchMode, setIsPitchMode] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % companySections.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + companySections.length) % companySections.length);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-brand-accent" />;
      case 'History': return <History className="w-6 h-6 text-brand-accent" />;
      case 'Target': return <Target className="w-6 h-6 text-brand-accent" />;
      case 'Network': return <Network className="w-6 h-6 text-brand-accent" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-brand-accent" />;
      default: return <HelpCircle className="w-6 h-6 text-brand-accent" />;
    }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckSquare': return <CheckSquare className="w-8 h-8 text-amber-500" />;
      case 'Users': return <Users className="w-8 h-8 text-amber-500" />;
      case 'Handshake': return <Handshake className="w-8 h-8 text-amber-500" />;
      case 'Award': return <Award className="w-8 h-8 text-amber-500" />;
      case 'Lightbulb': return <Lightbulb className="w-8 h-8 text-amber-500" />;
      case 'Leaf': return <Leaf className="w-8 h-8 text-amber-500" />;
      default: return <Sparkles className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-16" id="company-profile-root">
      {/* Hero Cover */}
      <div className="relative rounded-3xl overflow-hidden bg-brand-card text-white min-h-[480px] flex items-center p-8 md:p-16 border border-brand-border">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.plantation} 
            alt="Garut Coffee Plantation" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-xs text-brand-accent font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            PROFIL KOPERASI EKSPOR
          </div>
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
            Koperasi Desa/Kelurahan Merah Putih <span className="text-brand-accent font-light font-sans">(KDKMP)</span>
          </h1>
          <p className="text-lg text-brand-text-muted leading-relaxed font-sans">
            Menghubungkan keindahan gunung vulkanik Garut dengan penikmat kopi spesial di seluruh belahan dunia melalui tata kelola gotong-royong modern yang berkeadilan.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setIsPitchMode(true)}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-brand-accent/25 active:scale-95"
            >
              <Play className="w-5 h-5 fill-current" />
              Mulai Presentasi Buyer
            </button>
            <a 
              href="#interactive-profile"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-brand-border text-white font-medium px-6 py-3 rounded-xl transition duration-200 active:scale-95"
            >
              Jelajahi Profil Lengkap
            </a>
          </div>
        </div>
      </div>

      {/* Pitch / Slide Deck Presentation Mode */}
      <AnimatePresence>
        {isPitchMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950 flex flex-col justify-between p-6 md:p-12 text-white"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-brand-border pb-4">
              <div className="flex items-center gap-3">
                <CooperativeLogo sizeClassName="w-8 h-8" />
                <span className="font-mono text-sm tracking-widest text-brand-text-muted">KDKMP PITCH DECK</span>
              </div>
              <button 
                onClick={() => setIsPitchMode(false)}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-xs font-mono border border-brand-border transition"
              >
                <Square className="w-3.5 h-3.5" />
                KELUAR PRESENTASI
              </button>
            </div>

            {/* Slide Body */}
            <div className="my-auto max-w-4xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center py-8">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-widest">
                  SLIDE {activeSlide + 1} OF {companySections.length} • {companySections[activeSlide].title}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">
                  {companySections[activeSlide].subtitle || companySections[activeSlide].title}
                </h2>
                
                <div className="text-brand-text-muted space-y-4 text-base md:text-lg leading-relaxed font-sans">
                  {Array.isArray(companySections[activeSlide].content) ? (
                    (companySections[activeSlide].content as string[]).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))
                  ) : (
                    <p>{companySections[activeSlide].content as string}</p>
                  )}
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="w-48 h-48 rounded-2xl bg-brand-card border border-brand-border flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center shadow-inner shadow-brand-accent/10">
                    {getIcon(companySections[activeSlide].icon)}
                  </div>
                  <span className="font-mono text-xs text-brand-text-dim tracking-wider">KODE MODUL: {companySections[activeSlide].id.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Footer / Controls */}
            <div className="flex justify-between items-center border-t border-brand-border pt-6">
              <div className="flex gap-2">
                {companySections.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-brand-accent' : 'w-2 bg-white/10'}`}
                  ></button>
                ))}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={prevSlide}
                  className="p-3 bg-brand-card hover:bg-brand-card-light border border-brand-border rounded-xl transition"
                >
                  <ChevronLeft className="w-6 h-6 text-brand-text" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3 bg-brand-accent hover:bg-brand-accent-hover rounded-xl transition"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Tabs Profile */}
      <div className="space-y-8" id="interactive-profile">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-border pb-4">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">DOKUMENTASI INTERNAL</span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
              Profil Perusahaan Interaktif
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {companySections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setActiveSlide(idx)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  activeSlide === idx 
                    ? 'bg-brand-accent text-white shadow-sm' 
                    : 'bg-white/5 text-brand-text-muted hover:bg-white/10'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-8 bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-widest">
                {companySections[activeSlide].title}
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white">
                {companySections[activeSlide].subtitle}
              </h3>
              <div className="text-brand-text-muted text-sm md:text-base leading-relaxed space-y-4">
                {Array.isArray(companySections[activeSlide].content) ? (
                  (companySections[activeSlide].content as string[]).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))
                ) : (
                  <p>{companySections[activeSlide].content as string}</p>
                )}
              </div>
            </div>

            {/* Special Callout if it's Visi & Misi */}
            {companySections[activeSlide].id === 'visi_misi' && (
              <div className="bg-white/5 border border-brand-border rounded-xl p-6 mt-6 space-y-4">
                <div className="text-xs font-mono text-amber-400 tracking-wider uppercase">MISI KOPERASI KDKMP:</div>
                <ol className="list-decimal list-inside text-brand-text-muted text-sm space-y-2.5">
                  <li>Memberdayakan petani kopi Garut melalui pendampingan berkelanjutan.</li>
                  <li>Menjaga konsistensi kualitas produk dari kebun hingga ke konsumen (seed-to-cup).</li>
                  <li>Mengembangkan perdagangan kopi berbasis koperasi yang transparan dan adil.</li>
                  <li>Mendorong ekspor produk lokal demi mengharumkan komoditas Indonesia.</li>
                  <li>Meningkatkan kesejahteraan anggota koperasi secara inklusif dan lestari.</li>
                </ol>
              </div>
            )}
          </div>

          <div className="md:col-span-4 bg-brand-card-light border border-brand-border rounded-2xl p-6 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              {getIcon(companySections[activeSlide].icon)}
            </div>
            <h4 className="font-sans font-semibold text-white">Eksportir Terpercaya</h4>
            <p className="text-brand-text-muted text-xs leading-relaxed max-w-xs">
              Sertifikasi kami mematuhi standar rantai pasok perdagangan internasional demi menghadirkan komoditas kopi Arabika premium terbaik.
            </p>
            <div className="w-full border-t border-brand-border my-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="block text-xl font-bold text-white">500+</span>
                  <span className="text-[10px] text-brand-text-dim font-mono tracking-wider uppercase">ANGGOTA PETANI</span>
                </div>
                <div className="text-center">
                  <span className="block text-xl font-bold text-white">Specialty</span>
                  <span className="text-[10px] text-brand-text-dim font-mono tracking-wider uppercase">GRADE COFFEE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nilai Perusahaan Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-mono text-xs text-brand-accent tracking-wider uppercase">ETOS DAN INTEGRITAS</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
            Nilai-Nilai KDKMP
          </h2>
          <p className="text-brand-text-muted text-sm">
            Enam pilar nilai utama yang melandasi setiap keputusan operasional dan kemitraan strategis yang kami bangun di seluruh dunia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateValues.map((val) => (
            <div 
              key={val.title}
              className="bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-lg font-sans font-semibold text-white">
                  {val.title}
                </h3>
                <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
              <div className="text-[10px] font-mono text-brand-text-dim border-t border-brand-border pt-3 tracking-widest uppercase">
                KDKMP CORE VALUE
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keunggulan Kompetitif Section */}
      <div className="bg-brand-card rounded-2xl border border-brand-border p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 space-y-4">
          <span className="font-mono text-xs text-brand-accent tracking-wider uppercase">PREMIUM ADVANTAGES</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
            Keunggulan Kompetitif Kami
          </h2>
          <p className="text-brand-text-muted text-sm leading-relaxed">
            Menghadapi persaingan kopi global, KDKMP dipersenjatai dengan keunggulan struktural dan ekologis yang sulit ditandingi oleh produsen kopi lainnya di Indonesia.
          </p>
        </div>

        <div className="md:col-span-7 space-y-4">
          {competitiveAdvantages.map((adv, idx) => {
            const [boldText, descText] = adv.split(': ');
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 bg-brand-card-light border border-brand-border p-4 rounded-xl shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-xs font-mono font-bold text-brand-accent mt-0.5 shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <span className="block font-sans font-semibold text-white text-sm">{boldText}</span>
                  <span className="block text-brand-text-muted text-xs md:text-sm leading-relaxed">{descText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
