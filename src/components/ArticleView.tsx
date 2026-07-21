import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, Clock, FileText, Copy, Check, 
  ChevronRight, AlignLeft, ArrowUpCircle, Share2
} from 'lucide-react';
import { articleTitle, articleSections } from '../data/article';

export default function ArticleView() {
  const [activeHeading, setActiveHeading] = useState('pendahuluan');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [copiedFull, setCopiedFull] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Calculate word count
  const totalWords = articleSections.reduce((acc, sec) => {
    const secWords = sec.content.reduce((sum, p) => sum + p.split(/\s+/).length, 0);
    const quoteWords = sec.quote ? sec.quote.text.split(/\s+/).length : 0;
    return acc + secWords + quoteWords;
  }, 0);

  const readingTime = Math.ceil(totalWords / 200); // 200 words per minute average reading speed

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setReadingProgress((window.scrollY / docHeight) * 100);
      }

      // Check which section is in view
      for (const section of articleSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 350) {
            setActiveHeading(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyText = (sectionId: string, title: string, paragraphs: string[], quoteText?: string) => {
    const textToCopy = `${title}\n\n${paragraphs.join('\n\n')}${quoteText ? `\n\n"${quoteText}"` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const copyFullArticle = () => {
    const fullText = `${articleTitle}\n\n` + articleSections.map(sec => {
      return `${sec.title}\n\n${sec.content.join('\n\n')}${sec.quote ? `\n\n"${sec.quote.text}" - ${sec.quote.author} (${sec.quote.role})` : ''}`;
    }).join('\n\n---\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedFull(true);
    setTimeout(() => setCopiedFull(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHeading(id);
    }
  };

  return (
    <div className="space-y-12" id="article-view-root">
      {/* Reading Progress Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-brand-accent transition-all duration-100" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header Banner */}
      <div className="bg-brand-card border border-brand-border rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="flex flex-wrap gap-4 items-center font-mono text-xs text-brand-text-dim">
          <span className="px-2.5 py-1 rounded bg-brand-accent/10 text-brand-accent font-semibold uppercase tracking-wider">BISNIS & KOPERASI</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-text-dim" />
            <span>EST. MEMBACA: {readingTime} MENIT</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-brand-text-dim" />
            <span>JUMLAH KATA: ~{totalWords} KATA</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
          {articleTitle}
        </h1>

        <p className="text-lg text-brand-text-muted leading-relaxed font-sans font-light max-w-4xl">
          Bagaimana model ekonomi gotong-royong petani kecil di pelosok Kabupaten Garut dikonversi menjadi standar kualitas korporasi kelas dunia untuk menguasai pasar kopi specialty di Jepang dan Jerman.
        </p>

        <div className="pt-6 border-t border-brand-border flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm">KM</div>
            <div className="text-xs font-sans">
              <span className="block font-semibold text-white">Koperasi Merah Putih Press</span>
              <span className="block text-brand-text-dim">Diterbitkan: 21 Juli 2026</span>
            </div>
          </div>

          <button
            onClick={copyFullArticle}
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs px-5 py-3 rounded-xl transition shadow-sm active:scale-95 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            {copiedFull ? 'ARTIKEL UTUH DISALIN!' : 'SALIN ARTIKEL UTUH'}
          </button>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Left Sidebar Navigation */}
        <aside className="lg:col-span-4 sticky top-24 hidden lg:block bg-brand-card border border-brand-border rounded-2xl p-6 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-brand-accent tracking-widest uppercase block">TABLE OF CONTENTS</span>
            <h3 className="font-sans font-bold text-white text-sm">Daftar Isi Artikel</h3>
          </div>

          <nav className="space-y-2 text-xs font-sans">
            {articleSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-150 cursor-pointer ${
                  activeHeading === sec.id
                    ? 'bg-brand-accent text-white font-medium shadow-sm'
                    : 'text-brand-text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${activeHeading === sec.id ? 'text-amber-400' : 'text-brand-text-dim'}`} />
                <span>{sec.title.substring(3)}</span>
              </button>
            ))}
          </nav>

          <div className="border-t border-brand-border pt-4 text-center">
            <span className="text-[10px] text-brand-text-dim font-mono tracking-wider block uppercase">KDKMP MEDIA RELATIONS PRESS KIT</span>
          </div>
        </aside>

        {/* Right Panel: Article Reading Canvas */}
        <article className="lg:col-span-8 bg-brand-card border border-brand-border rounded-3xl p-6 md:p-10 shadow-sm space-y-12">
          {articleSections.map((section) => (
            <section 
              key={section.id} 
              id={section.id} 
              className="space-y-6 scroll-mt-24 pb-8 border-b border-brand-border last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">
                  {section.title}
                </h2>
                <button
                  onClick={() => handleCopyText(section.id, section.title, section.content, section.quote?.text)}
                  className="p-2 text-brand-text-dim hover:text-white rounded-lg hover:bg-white/5 transition cursor-pointer"
                  title="Salin Bagian Ini"
                >
                  {copiedSection === section.id ? (
                    <Check className="w-4 h-4 text-emerald-500 animate-pulse" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Paragraphs rendering */}
              <div className="text-brand-text-muted text-sm md:text-base leading-relaxed space-y-5 font-sans font-normal">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="indent-8 text-justify">
                    {p}
                  </p>
                ))}
              </div>

              {/* Pull Quotes rendering if available */}
              {section.quote && (
                <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-2xl p-6 md:p-8 my-8 shadow-sm">
                  <p className="text-white font-sans font-semibold italic text-base md:text-lg leading-relaxed mb-4">
                    "{section.quote.text}"
                  </p>
                  <div className="text-xs font-mono text-brand-accent">
                    <strong className="block font-bold">{section.quote.author}</strong>
                    <span className="block text-brand-text-dim mt-0.5">{section.quote.role}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </article>
      </div>

      {/* Floating Back to Top Button for better reading navigation */}
      <div className="flex justify-center pt-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-card hover:bg-brand-card-light border border-brand-border text-brand-text-muted hover:text-white text-xs font-mono font-medium transition active:scale-95 shadow-sm cursor-pointer"
        >
          <ArrowUpCircle className="w-4 h-4" />
          KEMBALI KE ATAS ARTIKEL
        </button>
      </div>
    </div>
  );
}
