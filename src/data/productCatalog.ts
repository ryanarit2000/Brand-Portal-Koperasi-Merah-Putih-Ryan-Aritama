import { ProductDetails, RoastProfile } from '../types';

export const mainProduct: ProductDetails = {
  name: 'Garut Heritage Arabica Coffee',
  origin: 'Cigedug & Cikajang, Lereng Gunung Cikuray, Garut, Jawa Barat, Indonesia',
  variety: 'Sigarar Utang, Ateng Super, Kartika (Multi-Varietas Specialty)',
  elevation: '1.400 - 1.700 MDPL (Meter Di atas Permukaan Laut)',
  process: 'Full-Washed Dry Fermentation (Serrated Process) & Carbonic Maceration',
  brewingInstructions: [
    {
      method: 'V60 Pour Over (Manual Brew)',
      ratio: '1:15 (15g Kopi, 225ml Air)',
      temp: '90°C - 92°C',
      grind: 'Medium-Fine (seukuran garam meja)'
    },
    {
      method: 'Espresso (Machine)',
      ratio: '1:2 (18g Kopi menghasilkan 36g espresso)',
      temp: '92°C - 94°C',
      grind: 'Very Fine (seukuran tepung halus)'
    },
    {
      method: 'French Press (Immersion)',
      ratio: '1:14 (15g Kopi, 210ml Air)',
      temp: '94°C',
      grind: 'Coarse (seukuran garam kasar)'
    }
  ],
  advantages: [
    '100% Single-Origin Arabica dari petani lokal Garut binaan langsung KDKMP.',
    'Pemetikan buah merah 100% manual (Strict Red Cherry Pick).',
    'Diproses menggunakan mata air pegunungan alami bebas polusi.',
    'Sertifikasi Keamanan Pangan & Sistem Ketertelusuran Berbasis Kode QR.',
    'Defect Rate kurang dari 1%, sesuai standar Specialty Grade Asosiasi Kopi Spesial Indonesia (AKSI).'
  ],
  certifications: [
    'Sertifikat Halal Indonesia (BPJPH)',
    'Sertifikat P-IRT Dinas Kesehatan',
    'Indikasi Geografis Kopi Arabika Garut (Kemenkumham RI)',
    'Standard Organic Indonesia (SNI Organic - Dalam Proses Verifikasi Ekspor)'
  ]
};

export const roastProfiles: RoastProfile[] = [
  {
    level: 'Light',
    roastName: 'Light Cinnamon Roast (New England Style)',
    flavorNotes: ['Jasmine Floral', 'Lemon Zest', 'White Peach', 'Honey Sweetness'],
    aroma: 'Sweet Jasmine & Freshly Cut Bergamot',
    body: 'Tea-like, Clean, Elegant & Silky',
    acidity: 'Vibrant, Crisp Phosphoric & Citric',
    description: 'Tingkat sangrai ringan ini mempertahankan integritas asam buah alami (acidity) serta kompleksitas aroma bunga jasmine khas pegunungan Garut yang tinggi. Sangat direkomendasikan untuk seduhan manual (V60 atau Chemex) guna mengeksplorasi cita rasa asli kopi mikro-lot kami.',
    colorClass: 'bg-amber-100 border-amber-400 text-amber-900',
    textClass: 'text-amber-800'
  },
  {
    level: 'Medium',
    roastName: 'City Roast (Balanced Signature Style)',
    flavorNotes: ['Red Apple', 'Warm Caramel', 'Toasted Almond', 'Brown Sugar'],
    aroma: 'Sweet Toffee & Roasted Nutty Essence',
    body: 'Smooth, Medium Balanced & Velvet-like',
    acidity: 'Bright, Juicy Sweet Citrus',
    description: 'Profil sangrai khas andalan kami yang paling disukai oleh kedai kopi nasional dan pembeli internasional. Mempertemukan keasaman apel merah yang manis dengan karamelisasi gula kelapa alami yang pekat. Sangat fleksibel untuk dinikmati sebagai seduhan filter maupun espresso modern.',
    colorClass: 'bg-yellow-950/20 border-amber-600 text-amber-950',
    textClass: 'text-amber-900'
  },
  {
    level: 'Dark',
    roastName: 'Full City Roast (Bold European Style)',
    flavorNotes: ['Dark Cocoa', 'Roasted Hazelnut', 'Black Treacle', 'Spicy Cinnamon'],
    aroma: 'Rich Smokey Chocolate & Sweet Cedarwood',
    body: 'Heavy, Creamy, Syrupy & Bold',
    acidity: 'Very Low, Subdued Warm Bitterness',
    description: 'Bagi pencinta kopi dengan cita rasa yang mantap dan tebal. Sangrai gelap ini meminimalkan tingkat keasaman, mengekstraksi minyak alami biji kopi untuk memunculkan sensasi cokelat hitam premium dan rempah-rempah eksotis tanah Priangan. Sempurna sebagai basis kopi susu seperti Latte atau Cappuccino.',
    colorClass: 'bg-stone-900 border-stone-700 text-stone-100',
    textClass: 'text-stone-300'
  }
];
