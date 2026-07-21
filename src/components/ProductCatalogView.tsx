import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, MapPin, Compass, Sliders, ChevronRight, CheckCircle, 
  Award, ShieldAlert, Sparkles, BookOpen, Flame
} from 'lucide-react';
import { mainProduct, roastProfiles } from '../data/productCatalog';
import { IMAGES } from '../data/images';

export default function ProductCatalogView() {
  const [selectedRoast, setSelectedRoast] = useState<'Light' | 'Medium' | 'Dark'>('Medium');

  const activeRoast = roastProfiles.find(p => p.level === selectedRoast) || roastProfiles[1];

  return (
    <div className="space-y-16" id="product-catalog-root">
      {/* Product Highlight / Hero Banner */}
      <div className="grid lg:grid-cols-12 gap-8 items-center bg-brand-card border border-brand-border rounded-3xl p-6 md:p-10 shadow-sm">
        {/* Left: Product Mockup Illustration/Visual */}
        <div className="lg:col-span-5 relative group flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-brand-accent/10 rounded-2xl blur-2xl group-hover:opacity-100 transition opacity-50"></div>
          <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-neutral-900 max-w-sm w-full shadow-lg">
            <img 
              src={IMAGES.mockup} 
              alt="Garut Heritage Arabica Coffee Bag" 
              className="w-full h-auto object-cover aspect-square transition duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-neutral-950 text-[10px] font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 fill-current" />
              SPECIALTY EXPORT
            </div>
          </div>
        </div>

        {/* Right: Technical Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-accent tracking-wider uppercase">
              <Coffee className="w-3.5 h-3.5" />
              PRODUK UNGGULAN EKSPOR
            </div>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              {mainProduct.name}
            </h1>
            <p className="text-brand-text-muted text-sm leading-relaxed font-sans max-w-xl">
              Cita rasa warisan kebun Garut yang legendaris, dikurasi secara ketat dan disangrai dengan ketelitian sains pangan guna memikat pasar internasional.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-brand-border">
            <div className="space-y-1">
              <span className="block text-[10px] text-brand-text-dim font-mono tracking-wider uppercase">ORIGIN</span>
              <span className="block text-xs font-semibold text-white font-sans">Garut, Jawa Barat</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-brand-text-dim font-mono tracking-wider uppercase">ELEVATION</span>
              <span className="block text-xs font-semibold text-white font-sans">1.400 - 1.700 MDPL</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-brand-text-dim font-mono tracking-wider uppercase">VARIETY</span>
              <span className="block text-xs font-semibold text-white font-sans">Sigarar Utang, Ateng</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-brand-text-dim font-mono tracking-wider uppercase">PROCESS</span>
              <span className="block text-xs font-semibold text-white font-sans">Full-Washed / Yeast</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block text-xs font-mono font-bold text-brand-text-dim uppercase tracking-widest">SPESIFIKASI LENGKAP:</span>
            <div className="space-y-1.5 text-sm font-sans text-brand-text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                <span><strong className="text-white">Lokasi Kebun:</strong> {mainProduct.origin}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-accent shrink-0" />
                <span><strong className="text-white">Varietas Tanaman:</strong> {mainProduct.variety}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Tasting & Sensory Configurator */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-border pb-4">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">INTERACTIVE SENSORY SIMULATOR</span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
              Konfigurator Roast Level
            </h2>
            <p className="text-brand-text-muted text-xs md:text-sm max-w-xl">
              Pilih tingkat kematangan sangrai (Roast Level) untuk mensimulasikan profil rasa, aroma, keasaman, dan ketebalan rasa yang dihasilkan.
            </p>
          </div>
          <div className="flex bg-white/5 p-1.5 rounded-xl border border-brand-border shrink-0 self-start md:self-auto">
            {(['Light', 'Medium', 'Dark'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedRoast(level)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  selectedRoast === level 
                    ? 'bg-brand-accent text-white shadow-sm' 
                    : 'text-brand-text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${selectedRoast === level ? 'text-amber-400' : 'text-brand-text-dim'}`} />
                {level} Roast
              </button>
            ))}
          </div>
        </div>

        {/* Sensory Dashboard layout */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Profile Detail */}
          <div className="md:col-span-7 bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono font-semibold ${activeRoast.colorClass}`}>
                {activeRoast.level.toUpperCase()} ROAST ACTIVE
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white">
                {activeRoast.roastName}
              </h3>
              <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                {activeRoast.description}
              </p>
            </div>

            {/* Flavor Notes Tag Cloud */}
            <div className="space-y-3 pt-4 border-t border-brand-border">
              <span className="block text-xs font-mono text-brand-text-dim tracking-wider uppercase">FLAVOR NOTES (CATATAN RASA):</span>
              <div className="flex flex-wrap gap-2">
                {activeRoast.flavorNotes.map((note) => (
                  <span 
                    key={note}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-brand-border text-xs font-medium text-amber-400 font-sans shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Sensory Indicator Bars */}
          <div className="md:col-span-5 bg-brand-card-light text-white border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h4 className="font-mono text-xs text-brand-accent tracking-widest uppercase">SENSORY METRIC ANALYSES</h4>
              
              {/* Aroma Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-brand-text-muted">AROMA PROFILE</span>
                  <span className="text-amber-400 font-mono font-semibold uppercase">{activeRoast.aroma}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: selectedRoast === 'Light' ? '95%' : selectedRoast === 'Medium' ? '85%' : '70%' }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-accent to-amber-500 rounded-full"
                  />
                </div>
              </div>

              {/* Acidity Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-brand-text-muted">ACIDITY LEVEL</span>
                  <span className="text-amber-400 font-mono font-semibold uppercase">{activeRoast.acidity}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: selectedRoast === 'Light' ? '90%' : selectedRoast === 'Medium' ? '65%' : '20%' }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-accent to-amber-500 rounded-full"
                  />
                </div>
              </div>

              {/* Body Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-brand-text-muted">BODY (TEXTURE)</span>
                  <span className="text-amber-400 font-mono font-semibold uppercase">{activeRoast.body}</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: selectedRoast === 'Light' ? '30%' : selectedRoast === 'Medium' ? '65%' : '95%' }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-accent to-amber-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-brand-border pt-4 text-center">
              <span className="block text-[10px] text-brand-text-dim font-mono uppercase tracking-widest">KATEGORI KHAS SPECIALTY</span>
              <span className="block text-sm font-sans font-bold text-white mt-1">SCA Score: {selectedRoast === 'Medium' ? '85.50' : selectedRoast === 'Light' ? '84.75' : '84.00'} / 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brewing Guide / Panduan Seduh */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-mono text-xs text-brand-accent tracking-wider uppercase">BREWING SCIENCE</span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
            Panduan Penyeduhan Presisi
          </h2>
          <p className="text-brand-text-muted text-sm">
            Tiga metode penyeduhan terstandar untuk memaksimalkan ekstraksi rasa kopi berdasarkan tingkat kematangan sangrai.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mainProduct.brewingInstructions.map((brew, idx) => (
            <div 
              key={idx}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center font-mono font-bold text-brand-accent text-sm border border-brand-accent/20">
                    0{idx + 1}
                  </div>
                  <h3 className="font-sans font-semibold text-white text-base">{brew.method}</h3>
                </div>

                <div className="space-y-2 pt-2 text-xs font-sans text-brand-text-muted">
                  <div className="flex justify-between border-b border-brand-border pb-1.5">
                    <span>Brewing Ratio</span>
                    <strong className="text-white">{brew.ratio}</strong>
                  </div>
                  <div className="flex justify-between border-b border-brand-border pb-1.5">
                    <span>Water Temperature</span>
                    <strong className="text-white">{brew.temp}</strong>
                  </div>
                  <div className="flex justify-between pb-1.5">
                    <span>Grind Size</span>
                    <strong className="text-white">{brew.grind}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-border">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-accent uppercase">
                  <BookOpen className="w-3.5 h-3.5" />
                  SOP BARISTA RESMI
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keunggulan & Sertifikasi Double Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Keunggulan Produk */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-brand-accent tracking-wider uppercase block">QUALITY GUARANTEE</span>
            <h3 className="text-xl font-sans font-bold text-white">Keunggulan Kopi KDKMP</h3>
          </div>
          <div className="space-y-3.5">
            {mainProduct.advantages.map((adv, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-brand-text-muted text-sm leading-relaxed">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikat Resmi */}
        <div className="bg-[#141414] border border-brand-border text-white rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-xs text-amber-500 tracking-wider uppercase block">LEGALITY & CERTIFICATIONS</span>
              <h3 className="text-xl font-sans font-bold text-white">Sertifikasi & Kepatuhan Dagang</h3>
            </div>
            <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed font-sans">
              Kami memenuhi semua perizinan keamanan pangan nasional dan internasional untuk mempermudah pendaftaran karantina ekspor ke berbagai negara.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {mainProduct.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-brand-border">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-xs font-sans text-brand-text-muted leading-tight">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-brand-border pt-4 text-center">
            <span className="text-[10px] text-brand-text-dim font-mono tracking-widest uppercase block">QR-CODE TRACEABLE PACKAGING COMPLIANT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
