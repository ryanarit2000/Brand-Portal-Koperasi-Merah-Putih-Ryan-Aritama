import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PenTool, Eye, Sliders, Check, 
  Sparkles, Layers, Image, Minimize2, Copy
} from 'lucide-react';
import { logoApplications } from '../data/mockupsAndPhotos';
import { IMAGES } from '../data/images';

export default function LogoView() {
  const [selectedAppId, setSelectedAppId] = useState('app_kemasan');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const activeApp = logoApplications.find(a => a.id === selectedAppId) || logoApplications[0];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // High fidelity custom SVG of the Logo concept
  const renderSVGLogo = (variant: 'main' | 'mono' | 'gold') => {
    const leafColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#FBBF24' : '#C8102E'; // brand red
    const beanColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#FBBF24' : '#FFFFFF'; // white / outline
    const ringColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#F59E0B' : '#C8102E'; // brand red ring
    const secondaryColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#D97706' : '#10B981'; // green or white for secondary

    return (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-md">
        {/* Outer Circle of Unity / Persatuan */}
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          fill="none" 
          stroke={ringColor} 
          strokeWidth="3.5" 
          strokeDasharray="1 1.5"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="42" 
          fill="none" 
          stroke={ringColor} 
          strokeWidth="1.5" 
        />

        {/* Coffee Leaf Representation - Left Wing */}
        <path 
          d="M 50 15 C 30 25, 25 45, 50 75 C 50 75, 40 45, 50 15 Z" 
          fill={leafColor} 
          opacity="0.85"
        />

        {/* Coffee Bean Representation - Right Wing */}
        <path 
          d="M 50 15 C 70 25, 75 45, 50 75 C 50 75, 60 45, 50 15 Z" 
          fill={beanColor} 
          stroke={ringColor} 
          strokeWidth="1"
        />
        {/* Bean split line (S-Curve) */}
        <path 
          d="M 50 15 Q 60 40, 50 75" 
          fill="none" 
          stroke={ringColor} 
          strokeWidth="1.5" 
        />

        {/* Center Hands representation (Gotong royong interlocking arch) */}
        <path 
          d="M 32 60 Q 50 82, 68 60" 
          fill="none" 
          stroke={variant === 'gold' ? '#F59E0B' : '#FFFFFF'} 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        <path 
          d="M 36 64 Q 50 85, 64 64" 
          fill="none" 
          stroke={leafColor} 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div className="space-y-16" id="logo-view-root">
      {/* Intro section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">BRAND GUIDELINES BOOKLET</span>
        <h1 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight animate-fade-in">
          Sistem Identitas Logo KDKMP
        </h1>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Koperasi Merah Putih mengusung filosofi bersahaja dan modern. Logo menyatukan unsur gotong royong, daun dan biji kopi dalam satu kesatuan lingkaran yang kokoh.
        </p>
      </div>

      {/* Logo Variations Presentation */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Colored Logo */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 shadow-sm">
          <div className="bg-brand-card-light w-36 h-36 rounded-full flex items-center justify-center shadow-inner border border-brand-border">
            {renderSVGLogo('main')}
          </div>
          <div className="space-y-2">
            <h3 className="font-sans font-bold text-white">01. Logo Utama (Ofisial)</h3>
            <p className="text-brand-text-muted text-xs">
              Digunakan untuk semua kemasan utama, surat formal, papan nama kantor pusat, serta media promosi digital premier.
            </p>
          </div>
        </div>

        {/* Monochrome Logo */}
        <div className="bg-[#141414] border border-brand-border text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 shadow-sm">
          <div className="bg-brand-card w-36 h-36 rounded-full flex items-center justify-center border border-brand-border">
            {renderSVGLogo('mono')}
          </div>
          <div className="space-y-2">
            <h3 className="font-sans font-bold text-white">02. Logo Monokrom (Hitam Putih)</h3>
            <p className="text-brand-text-muted text-xs">
              Dikhususkan untuk media cetak faks, stempel dokumen resmi karantina ekspor, atau kebutuhan sablon satu warna pada kardus pengiriman luar negeri.
            </p>
          </div>
        </div>

        {/* Metallic Gold / Premium Export */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 shadow-sm">
          <div className="bg-brand-card-light w-36 h-36 rounded-full flex items-center justify-center border border-brand-border">
            {renderSVGLogo('gold')}
          </div>
          <div className="space-y-2">
            <h3 className="font-sans font-bold text-white">03. Logo Emas (Luxury Export Only)</h3>
            <p className="text-brand-text-muted text-xs">
              Diaplikasikan khusus pada edisi terbatas "Signature Micro-lot" ekspor menggunakan cetak stiker hot foil berkilau premium.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Merchandise / Application Simulator */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-border pb-4">
          <div>
            <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">PHYSICAL APPLICATION SIMULATOR</span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-white">
              Aplikasi Logo pada Media Fisik
            </h2>
            <p className="text-brand-text-muted text-xs md:text-sm max-w-xl">
              Pilih item di samping kanan untuk menyimulasikan implementasi visual logo KDKMP pada berbagai merchandise kopi dan korespondensi korporat secara interaktif.
            </p>
          </div>

          <div className="flex bg-white/5 p-1 rounded-xl border border-brand-border overflow-x-auto self-start md:self-auto shrink-0">
            {logoApplications.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedAppId === app.id 
                    ? 'bg-brand-accent text-white shadow-xs' 
                    : 'text-brand-text-muted hover:text-white'
                }`}
              >
                {app.name.split(' pada ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Beautiful CSS Interactive Merchandise Canvas */}
          <div className="lg:col-span-6 bg-brand-card-light border border-brand-border rounded-3xl p-6 md:p-12 flex items-center justify-center min-h-[380px] shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-40"></div>
            
            {/* Dynamic Physical Renders */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full flex justify-center"
              >
                {activeApp.previewType === 'kemasan' && (
                  <div className="w-56 h-76 bg-brand-card border border-brand-border rounded-2xl p-6 shadow-xl relative flex flex-col justify-between items-center text-center">
                    {/* Metallic line on bag */}
                    <div className="absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-b from-brand-accent via-white to-brand-accent"></div>
                    <div className="space-y-4 flex flex-col items-center">
                      <span className="text-[8px] font-mono tracking-widest text-brand-text-dim">KOPERASI MERAH PUTIH</span>
                      <div className="scale-75 py-2">
                        {renderSVGLogo('gold')}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-sans font-bold text-amber-400 tracking-wider">GARUT HERITAGE ARABICA</h4>
                      <p className="text-[8px] font-mono text-brand-text-dim">100% Arabica | Specialty Grade</p>
                    </div>
                  </div>
                )}

                {activeApp.previewType === 'mug' && (
                  <div className="w-48 h-48 bg-brand-card border border-brand-border rounded-t-3xl rounded-b-xl shadow-lg relative flex flex-col items-center justify-center">
                    {/* Mug handle */}
                    <div className="absolute top-1/4 bottom-1/4 right-[-24px] w-8 border-[12px] border-brand-card rounded-r-full shadow-md z-0"></div>
                    <div className="relative z-10 scale-75 flex flex-col items-center">
                      {renderSVGLogo('main')}
                      <span className="text-[10px] font-sans font-bold text-white tracking-wider mt-3">KDKMP ESPRESO</span>
                    </div>
                  </div>
                )}

                {activeApp.previewType === 'totebag' && (
                  <div className="w-60 h-68 bg-white/5 border border-brand-border rounded-md p-6 shadow-md relative flex flex-col items-center justify-center text-brand-text-muted">
                    {/* Handles */}
                    <div className="absolute top-[-40px] w-24 h-24 border-[8px] border-white/10 rounded-t-full z-0"></div>
                    <div className="relative z-10 scale-90 flex flex-col items-center text-center space-y-4">
                      {renderSVGLogo('main')}
                      <div>
                        <h4 className="text-xs font-sans font-bold text-white">KOPERASI DESA MERAH PUTIH</h4>
                        <p className="text-[9px] font-mono text-brand-text-dim tracking-wider mt-1">ORGANIC & SUSTAINABLE COFFEE</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeApp.previewType === 'kop_surat' && (
                  <div className="w-64 h-80 bg-white border border-brand-border p-6 shadow-lg flex flex-col justify-between font-serif text-[8px] text-neutral-800">
                    <div className="border-b border-neutral-300 pb-2 flex justify-between items-start">
                      <div className="flex gap-2 items-center">
                        <div className="scale-40 origin-top-left">
                          {renderSVGLogo('main')}
                        </div>
                        <div className="text-left leading-tight">
                          <strong className="block text-[8px] font-sans text-neutral-900 font-bold">KDKMP MERAH PUTIH</strong>
                          <span className="block text-[6px] font-mono text-neutral-400">Cigedug, Garut, Jawa Barat, Indonesia</span>
                        </div>
                      </div>
                      <span className="font-mono text-[5px] text-neutral-400">LETTER NO: EXP/2026/047</span>
                    </div>
                    <div className="space-y-2 py-4 flex-1">
                      <div className="h-1 w-1/3 bg-neutral-200"></div>
                      <div className="h-1 w-full bg-neutral-100"></div>
                      <div className="h-1 w-full bg-neutral-100"></div>
                      <div className="h-1 w-full bg-neutral-100"></div>
                      <div className="h-1 w-2/3 bg-neutral-100"></div>
                    </div>
                    <div className="border-t border-neutral-100 pt-2 flex justify-between text-[5px] font-mono text-neutral-400">
                      <span>www.merahputih-kdkmp.co.id</span>
                      <span>Sertifikasi Karantina Pertanian RI</span>
                    </div>
                  </div>
                )}

                {activeApp.previewType === 'kartu_nama' && (
                  <div className="w-72 h-44 bg-brand-card border border-brand-border rounded-xl p-5 shadow-2xl relative flex justify-between items-center text-white">
                    {/* Card background styling lines */}
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-accent/10 to-transparent"></div>
                    <div className="scale-65 shrink-0">
                      {renderSVGLogo('gold')}
                    </div>
                    <div className="text-right space-y-1 font-sans">
                      <strong className="block text-sm font-bold text-white tracking-wide">Rian Sukmana</strong>
                      <span className="block text-[8px] font-mono text-amber-400 tracking-wider">DIREKTUR UTAMA KDKMP</span>
                      <div className="h-0.5 w-12 bg-brand-accent ml-auto my-2"></div>
                      <span className="block text-[7px] text-brand-text-muted">rian@merahputih-kdkmp.co.id</span>
                      <span className="block text-[7px] text-brand-text-muted">+62-812-3456-7890</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Technical Explanation of Application */}
          <div className="lg:col-span-6 bg-brand-card border border-brand-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-accent uppercase tracking-widest block">IMPLEMENTATION SPECS</span>
              <h3 className="text-xl font-sans font-bold text-white">
                {activeApp.name}
              </h3>
              <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                {activeApp.description}
              </p>
            </div>

            {/* Print Color Guidelines */}
            <div className="space-y-3 pt-6 border-t border-brand-border">
              <span className="block text-xs font-mono text-brand-text-dim tracking-wider uppercase">PANDUAN WARNA PALET:</span>
              <div className="grid grid-cols-2 gap-4">
                {/* Red Color */}
                <div 
                  onClick={() => handleCopyHex('#DC2626')}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-brand-border hover:border-brand-accent transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-accent shadow-inner"></div>
                  <div className="text-left font-sans text-xs">
                    <strong className="block font-semibold text-white">Merah Solid (SCA Red)</strong>
                    <span className="block font-mono text-brand-text-dim text-[10px]">{copiedColor === '#DC2626' ? 'Disalin!' : '#DC2626'}</span>
                  </div>
                </div>

                {/* Gold Color */}
                <div 
                  onClick={() => handleCopyHex('#F59E0B')}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-brand-border hover:border-brand-accent transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500 shadow-inner"></div>
                  <div className="text-left font-sans text-xs">
                    <strong className="block font-semibold text-white">Emas Metalik (Hot Foil)</strong>
                    <span className="block font-mono text-brand-text-dim text-[10px]">{copiedColor === '#F59E0B' ? 'Disalin!' : '#F59E0B'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vector Logo Concept Meta-spec Display */}
      <div className="bg-brand-card rounded-2xl border border-brand-border p-8 md:p-12 space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">LOGO METADATA SPECIFICATIONS</span>
          <h3 className="text-xl font-sans font-bold text-white">Filosofi Geometri Logo</h3>
        </div>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Seni rancang logo KDKMP dibuat tidak sekadar indah, melainkan memiliki pertanggungjawaban filosofi bentuk di setiap goresannya untuk merepresentasikan ketahanan ekonomi koperasi di panggung dunia.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="space-y-2 p-4 bg-brand-card-light rounded-xl border border-brand-border">
            <span className="block font-sans font-semibold text-white text-sm">01. Bentuk Lingkaran Sempurna</span>
            <span className="block text-brand-text-muted text-xs leading-relaxed">
              Melambangkan tekad bulat persatuan, kedaulatan ekonomi gotong-royong, dan integrasi petani tanpa batas yang abadi.
            </span>
          </div>

          <div className="space-y-2 p-4 bg-brand-card-light rounded-xl border border-brand-border">
            <span className="block font-sans font-semibold text-white text-sm">02. Daun Kopi Arabika</span>
            <span className="block text-brand-text-muted text-xs leading-relaxed">
              Melambangkan kemakmuran, kepedulatan hulu agroforestry, kelestarian alam pegunungan, serta pertumbuhan ekonomi hijau.
            </span>
          </div>

          <div className="space-y-2 p-4 bg-brand-card-light rounded-xl border border-brand-border">
            <span className="block font-sans font-semibold text-white text-sm">03. Biji Kopi S-Curve</span>
            <span className="block text-brand-text-muted text-xs leading-relaxed">
              Melambangkan komoditas kopi specialty grade ekspor, penanganan pasca-panen modern berbasis presisi ilmiah pangan.
            </span>
          </div>

          <div className="space-y-2 p-4 bg-brand-card-light rounded-xl border border-brand-border">
            <span className="block font-sans font-semibold text-white text-sm">04. Lengkungan Tangan</span>
            <span className="block text-brand-text-muted text-xs leading-relaxed">
              Melambangkan jabat gotong-royong petani, komitmen kemitraan "Direct-Trade" global yang saling percaya dan berkelanjutan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
