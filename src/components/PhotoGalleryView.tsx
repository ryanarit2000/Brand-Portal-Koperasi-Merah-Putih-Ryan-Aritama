import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, Eye, Sliders, Check, 
  Sparkles, Layers, Download, Copy, Calendar
} from 'lucide-react';
import { photoAssets } from '../data/mockupsAndPhotos';
import { IMAGES } from '../data/images';

export default function PhotoGalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Commercial' | 'Lifestyle' | 'Luxury' | 'Studio'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPhotos = selectedCategory === 'All' 
    ? photoAssets 
    : photoAssets.filter(p => p.category === selectedCategory);

  const getPhotoPath = (id: string) => {
    switch (id) {
      case 'photo_1': // Roasted beans / Studio
        return IMAGES.mockup;
      case 'photo_2': // Lifestyle brew
        return IMAGES.lifestyle;
      case 'photo_3': // Luxury crate / plantation
        return IMAGES.plantation;
      case 'photo_4': // Packshot / Studio
      default:
        return IMAGES.mockup;
    }
  };

  const handleCopyCaption = (id: string, caption: string) => {
    navigator.clipboard.writeText(caption);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-16" id="photo-gallery-root">
      {/* Intro text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs text-brand-accent tracking-wider block uppercase">COMMERCIAL PHOTOGRAPHY BOOK</span>
          <h1 className="text-3xl font-sans font-bold text-white tracking-tight">
            Katalog Fotografi Komersial
          </h1>
          <p className="text-brand-text-muted text-sm max-w-xl font-sans">
            Portofolio foto produk berlisensi premium dengan tata cahaya studio dan skenario gaya hidup kelas atas untuk materi promosi B2B.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-white/5 p-1.5 rounded-xl border border-brand-border self-start md:self-auto overflow-x-auto">
          {(['All', 'Commercial', 'Lifestyle', 'Luxury', 'Studio'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 shrink-0 ${
                selectedCategory === cat 
                  ? 'bg-brand-accent text-white shadow-sm' 
                  : 'text-brand-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Photos */}
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={photo.id}
              className="bg-brand-card border border-brand-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative overflow-hidden group aspect-[4/3] bg-neutral-900 border-b border-brand-border">
                <img 
                  src={getPhotoPath(photo.id)} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Category overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#121212]/95 backdrop-blur-md border border-brand-border text-[10px] font-mono text-white tracking-widest uppercase">
                  <Camera className="w-3 h-3 text-brand-accent" />
                  {photo.category} PHOTO
                </div>
              </div>

              {/* Descriptions & Specs */}
              <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest block">PHOTO SHOT {photo.id.toUpperCase()}</span>
                    <h3 className="text-xl font-sans font-bold text-white tracking-tight">{photo.title}</h3>
                  </div>

                  <p className="text-brand-text-muted text-sm italic font-sans leading-relaxed border-l-2 border-brand-accent pl-3">
                    "{photo.caption}"
                  </p>

                  {/* Production specs table */}
                  <div className="bg-white/5 rounded-xl p-4 border border-brand-border space-y-2 text-xs font-sans text-brand-text-muted">
                    <div className="flex justify-between border-b border-brand-border pb-1.5">
                      <span className="font-mono text-[10px] text-brand-text-dim uppercase">PHOTOGRAPHY STYLE</span>
                      <strong className="text-white font-semibold">{photo.style}</strong>
                    </div>
                    <div className="flex justify-between border-b border-brand-border pb-1.5">
                      <span className="font-mono text-[10px] text-brand-text-dim uppercase">LIGHTING SETUP</span>
                      <strong className="text-white font-semibold">{photo.lighting}</strong>
                    </div>
                    <div className="flex justify-between pb-0.5">
                      <span className="font-mono text-[10px] text-brand-text-dim uppercase">HERO ELEMENTS</span>
                      <strong className="text-white font-semibold">{photo.elements.join(', ')}</strong>
                    </div>
                  </div>
                </div>

                {/* Utilities buttons */}
                <div className="pt-4 border-t border-brand-border flex gap-4">
                  <button
                    onClick={() => handleCopyCaption(photo.id, photo.caption)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-brand-border hover:bg-white/5 text-xs font-mono text-brand-text-muted transition cursor-pointer"
                  >
                    {copiedId === photo.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        Caption Disalin!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Salin Caption Promosi
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Production Guidelines Callout */}
      <div className="bg-brand-card text-white border border-brand-border rounded-3xl p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-accent/10 border border-brand-accent/20 text-xs text-brand-accent font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            SOP PRODUCTION
          </div>
          <h3 className="text-2xl font-sans font-bold leading-tight">Panduan Pemotretan Komersial KDKMP</h3>
          <p className="text-brand-text-muted text-xs md:text-sm font-sans leading-relaxed">
            Semua agensi periklanan mitra KDKMP di seluruh dunia wajib mematuhi standar pencitraan produk kami demi menjaga konsistensi ekuitas merek.
          </p>
        </div>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-brand-card-light border border-brand-border rounded-xl space-y-2">
            <strong className="block text-amber-400 text-sm font-sans font-semibold">Tonalitas Warna Hangat (Warm Tones)</strong>
            <span className="block text-brand-text-muted text-xs font-sans leading-relaxed">
              Utamakan pencahayaan alami (golden hour) atau lampu studio berpijar kuning lembut hangat untuk menonjolkan keaslian produk organik pegunungan.
            </span>
          </div>

          <div className="p-4 bg-brand-card-light border border-brand-border rounded-xl space-y-2">
            <strong className="block text-amber-400 text-sm font-sans font-semibold">Resolusi dan Ketajaman Ekstrem</strong>
            <span className="block text-brand-text-muted text-xs font-sans leading-relaxed">
              Fokus mutlak harus tertuju pada logo "Garut Heritage" dan penulisan teks legal "Product of Indonesia". Defect debu atau sidik jari pada pouch harus dieleminasi di pra-produksi.
            </span>
          </div>

          <div className="p-4 bg-brand-card-light border border-brand-border rounded-xl space-y-2">
            <strong className="block text-amber-400 text-sm font-sans font-semibold">Keaslian Elemen Pendukung</strong>
            <span className="block text-brand-text-muted text-xs font-sans leading-relaxed">
              Biji kopi pendukung haruslah biji kopi Arabika Garut asli, bukan biji kopi sintetis atau jenis Robusta berukuran besar demi kejujuran komersial.
            </span>
          </div>

          <div className="p-4 bg-brand-card-light border border-brand-border rounded-xl space-y-2">
            <strong className="block text-amber-400 text-sm font-sans font-semibold">Penyajian Uap yang Natural</strong>
            <span className="block text-brand-text-muted text-xs font-sans leading-relaxed">
              Gunakan uap panas asli dari hasil seduhan segar manual brew, hindari pemakaian asap kimia buatan untuk menjaga ketulusan foto.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
