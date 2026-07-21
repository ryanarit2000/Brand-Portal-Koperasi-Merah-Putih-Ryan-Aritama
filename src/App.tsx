import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, Briefcase, FileText, Camera, HelpCircle,
  Award, Globe, Mail, MapPin, Clock, Send, CheckCircle,
  ChevronRight, Sparkles, Sliders, Layers
} from 'lucide-react';

// Import Views
import CompanyProfileView from './components/CompanyProfileView';
import ProductCatalogView from './components/ProductCatalogView';
import MockupView from './components/MockupView';
import PhotoGalleryView from './components/PhotoGalleryView';
import ArticleView from './components/ArticleView';
import LogoView from './components/LogoView';
import CooperativeLogo from './components/CooperativeLogo';

type TabType = 'profile' | 'catalog' | 'mockup' | 'photos' | 'article' | 'logo';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    email: '',
    country: 'Jepang',
    volume: '1000 kg (1 Ton)',
    notes: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Company Profile', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'catalog', label: 'Spesifikasi Produk', icon: <Coffee className="w-4 h-4" /> },
    { id: 'mockup', label: 'Mockup Kemasan', icon: <Layers className="w-4 h-4" /> },
    { id: 'photos', label: 'Galeri Foto', icon: <Camera className="w-4 h-4" /> },
    { id: 'article', label: 'Artikel Bisnis', icon: <FileText className="w-4 h-4" /> },
    { id: 'logo', label: 'Panduan Logo', icon: <Award className="w-4 h-4" /> }
  ] as const;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setShowInquiryModal(false);
      setInquiryForm({
        name: '',
        company: '',
        email: '',
        country: 'Jepang',
        volume: '1000 kg (1 Ton)',
        notes: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col justify-between selection:bg-brand-accent selection:text-white">
      {/* Top Professional Header */}
      <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3">
            <CooperativeLogo sizeClassName="w-10 h-10" />
            <div className="text-left">
              <span className="block font-sans font-extrabold text-white tracking-tight text-base leading-none">
                KDKMP MERAH PUTIH
              </span>
              <span className="block font-mono text-[9px] text-brand-text-dim tracking-widest mt-0.5">
                EXPORTS PORTAL & BRAND BOOK
              </span>
            </div>
          </div>

          {/* Quick Stats / Info pill */}
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-brand-text-muted">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-text-dim" />
              <span>EXPORT DESK: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-text-dim" />
              <span>EST TIME: GMT+7 (WEST JAVA)</span>
            </div>
          </div>

          {/* Call to action button */}
          <div>
            <button 
              onClick={() => setShowInquiryModal(true)}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-mono font-semibold tracking-wider uppercase px-4 py-2.5 rounded-lg transition duration-200 shadow-sm active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              B2B BUYER DESK
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="border-t border-brand-border bg-brand-bg/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 shrink-0 ${
                      isActive 
                        ? 'bg-brand-accent text-white shadow-sm' 
                        : 'text-brand-text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'profile' && <CompanyProfileView />}
            {activeTab === 'catalog' && <ProductCatalogView />}
            {activeTab === 'mockup' && <MockupView />}
            {activeTab === 'photos' && <PhotoGalleryView />}
            {activeTab === 'article' && <ArticleView />}
            {activeTab === 'logo' && <LogoView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Exquisite Footer */}
      <footer className="bg-brand-bg text-white border-t border-brand-border py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8">
          {/* Brand block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <CooperativeLogo sizeClassName="w-8 h-8" />
              <strong className="font-sans font-bold text-white tracking-tight">KOPERASI MERAH PUTIH</strong>
            </div>
            <p className="text-brand-text-muted text-xs leading-relaxed max-w-sm font-sans">
              Menyatukan tekad gotong-royong petani kopi Garut untuk mengharumkan nama kopi specialty Indonesia di panggung dunia lewat kualitas tanpa kompromi.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-[10px] text-brand-text-dim font-mono tracking-widest uppercase">NAVIGASI MEDIA</span>
            <ul className="text-xs text-brand-text-muted space-y-2.5 font-sans">
              <li>
                <button onClick={() => setActiveTab('profile')} className="hover:text-white transition">Company Profile</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('catalog')} className="hover:text-white transition">Katalog Kopi</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('mockup')} className="hover:text-white transition">Mockup Pouch</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('photos')} className="hover:text-white transition">Katalog Foto</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('article')} className="hover:text-white transition">Artikel Ekspor</button>
              </li>
              <li>
                <button onClick={() => setActiveTab('logo')} className="hover:text-white transition">Panduan Logo</button>
              </li>
            </ul>
          </div>

          {/* B2B Contact desk */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-[10px] text-brand-text-dim font-mono tracking-widest uppercase">TENTANG KAMI</span>
            <div className="text-xs text-brand-text-muted space-y-2 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Jl. Raya Cigedug No. 45, Kecamatan Cigedug, Kabupaten Garut, Jawa Barat, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 pt-2 text-brand-text-muted font-mono text-[10px]">
                <Globe className="w-3.5 h-3.5 text-brand-text-dim" />
                <span>www.merahputih-kdkmp.co.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-brand-border mt-12 pt-6 text-center text-[10px] font-mono text-brand-text-dim flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; 2026 KDKMP KOPERASI DESA MERAH PUTIH. ALL RIGHTS RESERVED.</span>
          <span>DRAFTED BY KDKMP BRAND AND DESIGN CONSULTING DESK</span>
        </div>
      </footer>

      {/* Interactive B2B inquiry desk Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInquiryModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg bg-brand-card rounded-2xl border border-brand-border overflow-hidden shadow-2xl"
            >
              <div className="bg-brand-card-light text-white p-6 md:p-8 space-y-2 border-b border-brand-border">
                <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block">B2B INQUIRY DESK</span>
                <h3 className="text-lg font-sans font-bold text-white">Hubungi Export Officer KDKMP</h3>
                <p className="text-brand-text-muted text-xs font-sans">
                  Kirimkan permohonan sampel green beans atau negosiasi kontrak pasokan kopi "Garut Heritage Arabica" secara formal.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="p-8 text-center space-y-4 flex flex-col items-center justify-center min-h-[300px]">
                  <CheckCircle className="w-16 h-16 text-brand-accent animate-bounce" />
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-white text-base">Inquiry Berhasil Dikirim!</h4>
                    <p className="text-brand-text-muted text-xs font-sans">
                      Export Officer kami akan segera menghubungi Anda dalam 1x24 jam untuk mengirimkan sampel dan rincian harga CIF.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="p-6 md:p-8 space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-medium text-brand-text-muted">Nama Lengkap</label>
                      <input 
                        required
                        type="text" 
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-accent bg-white/5 text-white placeholder-white/20"
                        placeholder="Contoh: Ryan Sukmana"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-medium text-brand-text-muted">Nama Perusahaan / Roastery</label>
                      <input 
                        required
                        type="text" 
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({...inquiryForm, company: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-accent bg-white/5 text-white placeholder-white/20"
                        placeholder="Contoh: Tokyo Artisan Roast"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-medium text-brand-text-muted">Alamat Email Bisnis</label>
                    <input 
                      required
                      type="email" 
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-accent bg-white/5 text-white placeholder-white/20"
                      placeholder="Contoh: buyer@tokyoroast.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-medium text-brand-text-muted">Negara Tujuan Ekspor</label>
                      <select 
                        value={inquiryForm.country}
                        onChange={(e) => setInquiryForm({...inquiryForm, country: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-accent bg-white/5 text-white"
                      >
                        <option value="Jepang" className="bg-brand-card">Jepang</option>
                        <option value="Jerman" className="bg-brand-card">Jerman</option>
                        <option value="Amerika Serikat" className="bg-brand-card">Amerika Serikat</option>
                        <option value="Domestik (Indonesia)" className="bg-brand-card">Domestik (Indonesia)</option>
                        <option value="Lainnya" className="bg-brand-card">Lainnya</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-medium text-brand-text-muted">Estimasi Volume Kontrak</label>
                      <select 
                        value={inquiryForm.volume}
                        onChange={(e) => setInquiryForm({...inquiryForm, volume: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-accent bg-white/5 text-white"
                      >
                        <option value="Sampel Saja (1 kg)" className="bg-brand-card">Sampel Saja (1 kg)</option>
                        <option value="250 kg" className="bg-brand-card">250 kg</option>
                        <option value="1000 kg (1 Ton)" className="bg-brand-card">1000 kg (1 Ton)</option>
                        <option value="10000 kg (10 Ton)" className="bg-brand-card">10000 kg (10 Ton)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-medium text-brand-text-muted">Catatan Khusus / Permintaan Profil Roast</label>
                    <textarea 
                      rows={3}
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({...inquiryForm, notes: e.target.value})}
                      className="w-full px-3 py-2.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-accent bg-white/5 text-white placeholder-white/20 resize-none"
                      placeholder="Contoh: Kami meminta green beans dengan fermentasi Carbonic Maceration..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      type="button"
                      onClick={() => setShowInquiryModal(false)}
                      className="flex-1 px-4 py-3 rounded-lg border border-brand-border hover:bg-white/5 font-medium font-sans text-brand-text-muted transition"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-accent hover:bg-brand-accent-hover font-sans font-semibold text-white transition shadow-md"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      Kirim Formulir Ekspor
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
