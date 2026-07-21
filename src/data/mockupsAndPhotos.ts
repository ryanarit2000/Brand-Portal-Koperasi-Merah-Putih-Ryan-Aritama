import { MockupScene, PhotoAsset, LogoApplication } from '../types';

export const mockupScenes: MockupScene[] = [
  {
    id: 'tampak_depan',
    title: 'Kemasan Tampak Depan',
    description: 'Desain kemasan depan yang menampilkan identitas utama merek untuk pasar ekspor.',
    imageKey: 'garut_heritage_mockup', // will map to the generated mockup image
    caption: 'Tampilan depan kemasan standing pouch premium berwarna hitam doff bertekstur, dihiasi tulisan emas berkelas dan aksen merah putih yang melambangkan kebanggaan produk Indonesia.',
    details: [
      'Nama Produk: Garut Heritage Arabica Coffee',
      'Keterangan: Premium Indonesian Coffee | 100% Arabica',
      'Berat Bersih: Netto 250 gr',
      'Asal: Product of Indonesia',
      'Sertifikasi: Logo Koperasi Merah Putih & Indikasi Geografis'
    ]
  },
  {
    id: 'tampak_belakang',
    title: 'Kemasan Tampak Belakang',
    description: 'Bagian edukatif yang memuat informasi ketertelusuran produk dan panduan penyeduhan.',
    imageKey: 'garut_heritage_mockup', // can use mockup with text description
    caption: 'Tampilan belakang kemasan dengan stiker label putih minimalis yang memuat panduan penyeduhan, peta elevasi kebun, profil rasa, QR Code traceability, dan barcode ekspor.',
    details: [
      'Panduan Seduh: V60, Espresso, French Press',
      'Flavor Wheel & Sensory Profile',
      'Informasi Petani & Elevasi Kebun',
      'QR Code: Pindai untuk melihat koordinat kebun dan biodata petani',
      'Katup Gas Satu Arah (Wicovalve)'
    ]
  },
  {
    id: 'kemasan_berdiri',
    title: 'Kemasan Berdiri Mandiri',
    description: 'Kestabilan dan estetika kemasan saat diletakkan di rak butik kopi internasional.',
    imageKey: 'garut_heritage_mockup',
    caption: 'Mockup standing pouch berdiri tegak secara kokoh di bawah pencahayaan softbox studio, menonjolkan bentuk ergonomis pouch dan presisi segel ritsleting (zipper locking) di bagian atas.',
    details: [
      'Bahan: Multi-layer Matte Foil dengan perlindungan Aluminum Barrier',
      'Kekokohan: Bottom Gusset lebar untuk stabilitas maksimal di rak display',
      'Segel: Reusable Zipper untuk menjaga aroma kopi setelah dibuka'
    ]
  },
  {
    id: 'kemasan_cangkir',
    title: 'Kemasan Berdampingan dengan Cangkir Kopi',
    description: 'Visualisasi penyajian kopi premium dalam gaya gaya hidup modern.',
    imageKey: 'lifestyle_coffee_mug', // will map to lifestyle_coffee_mug
    caption: 'Visual kemasan kopi yang diletakkan berdampingan dengan secangkir porselen putih berisi kopi seduh manual yang masih mengepulkan uap, mengesankan kesegaran produk dari kebun langsung ke cangkir.',
    details: [
      'Estetika: Menggabungkan kehangatan sajian dengan keanggunan kemasan',
      'Fokus: Kedalaman ruang (DOF) tajam pada cangkir kopi dan logo kemasan',
      'Vibe: Café specialty kelas atas di Tokyo atau Hamburg'
    ]
  },
  {
    id: 'kemasan_biji',
    title: 'Kemasan Dihiasi Taburan Biji Kopi Sangrai',
    description: 'Menonjolkan kualitas roasted beans Specialty Grade yang seragam.',
    imageKey: 'lifestyle_coffee_mug',
    caption: 'Kemasan premium dikelilingi oleh taburan biji kopi Arabika Garut hasil sangrai (roasted beans) medium yang seragam, tanpa cacat pecah, mengkilap mengeluarkan minyak esensial aromatik.',
    details: [
      'Kualitas Biji: Menampilkan biji kopi utuh berukuran seragam (screen size 16-18)',
      'Warna Sangrai: Konsistensi warna medium brown khas City Roast',
      'Komposisi: Taburan artistik di sekitar dasar kemasan'
    ]
  },
  {
    id: 'kemasan_meja_kayu',
    title: 'Kemasan di Atas Meja Kayu Oak Rustic',
    description: 'Membawa kesan alami, organik, dan ramah lingkungan.',
    imageKey: 'garut_heritage_mockup',
    caption: 'Kemasan diletakkan di atas permukaan meja kayu oak rustic dengan guratan serat kayu alami yang kontras, diterangi cahaya matahari pagi dari jendela samping, memberikan nuansa organik dan artisan.',
    details: [
      'Material Pendukung: Meja kayu ek tebal dengan tekstur alami',
      'Pencahayaan: Side lighting alami (Golden Hour)',
      'Nilai Estetika: Menghubungkan produk premium dengan kelestarian alam'
    ]
  }
];

export const photoAssets: PhotoAsset[] = [
  {
    id: 'photo_1',
    category: 'Commercial',
    title: 'Signature Roasted Beans Display',
    caption: 'Biji kopi Arabika Garut pilihan tersaji indah di atas sendok cupping profesional, menonjolkan kerataan tingkat kematangan sangrai medium-dark dan integritas fisik biji kopi specialty grade yang sempurna.',
    style: 'Commercial Product Photography / High Contrast',
    lighting: 'Dual Studio Softbox dengan rim light keemasan di bagian belakang',
    elements: ['Biji kopi sangrai utuh', 'Sendok cupping perak', 'Latar belakang hitam bertekstur']
  },
  {
    id: 'photo_2',
    category: 'Lifestyle',
    title: 'The Perfect Pour in Golden Hour',
    caption: 'Aliran air hangat dituangkan secara perlahan menggunakan teko leher angsa (gooseneck kettle) ke atas bubuk kopi di dalam dripper V60, memicu proses "blooming" gelembung gas karbon dioksida yang harum di bawah siraman cahaya matahari sore.',
    style: 'Lifestyle Coffee Photography / Warm & Intimate',
    lighting: 'Cahaya matahari sore alami (backlighting) menembus sela-sela jendela',
    elements: ['Teko tembaga leher angsa', 'Dripper kaca Hario V60', 'Uap air hangat yang mengepul halus']
  },
  {
    id: 'photo_3',
    category: 'Luxury',
    title: 'The Export Shipment Wooden Crate',
    caption: 'Kemasan eksklusif Garut Heritage Arabica tertata rapi di dalam peti kayu ekspor berstempel KDKMP dan Bea Cukai Indonesia, dikelilingi karung goni tebal dengan label tujuan Hamburg, Jerman.',
    style: 'Luxury Commercial Still Life / Editorial',
    lighting: 'Chiaroscuro (pencahayaan dramatis gelap-terang khas lukisan klasik)',
    elements: ['Peti kayu ekspor berstempel', 'Karung goni serat alami', 'Kemasan hitam doff KDKMP']
  },
  {
    id: 'photo_4',
    category: 'Studio',
    title: 'Pure Minimalist Packshot',
    caption: 'Kemasan standing pouch hitam doff Garut Heritage Arabica berdiri kokoh di atas latar belakang putih bersih tanpa bayangan (shadowless white background), memberikan fokus mutlak pada keindahan kemasan dan ketajaman teks.',
    style: 'Catalog Photography / Clean Packshot',
    lighting: 'High-key studio lighting dengan reflektor merata dari seluruh sisi',
    elements: ['Kemasan KDKMP tampak depan', 'Latar belakang putih solid tanpa bayangan']
  }
];

export const logoApplications: LogoApplication[] = [
  {
    id: 'app_kemasan',
    name: 'Logo pada Kemasan Kopi',
    description: 'Diaplikasikan pada bagian tengah atas standing pouch premium. Menggunakan hot stamping foil berwarna emas metalik yang berkilau elegan di atas latar belakang hitam doff.',
    bgClass: 'bg-neutral-900 border-neutral-800 text-neutral-100',
    textClass: 'text-amber-400',
    previewType: 'kemasan'
  },
  {
    id: 'app_mug',
    name: 'Logo pada Mug Porselen Café',
    description: 'Diaplikasikan pada mug keramik tebal berwarna putih gading (ivory white) di kedai kopi binaan koperasi. Dicetak dengan teknik dekal bakar (fired decal) warna merah-putih solid tahan gores.',
    bgClass: 'bg-neutral-50 border-neutral-200 text-neutral-800',
    textClass: 'text-red-600',
    previewType: 'mug'
  },
  {
    id: 'app_totebag',
    name: 'Logo pada Tote Bag Kanvas Organik',
    description: 'Dicetak menggunakan tinta sablon ramah lingkungan (eco-friendly waterbase ink) berwarna hitam atau merah gelap di atas bahan kanvas blacu organik tanpa pemutih, menyebarkan pesan keberlanjutan.',
    bgClass: 'bg-amber-50/50 border-amber-100 text-amber-900',
    textClass: 'text-stone-800',
    previewType: 'totebag'
  },
  {
    id: 'app_kop',
    name: 'Logo pada Kop Surat & Dokumen Resmi',
    description: 'Terpampang di pojok kiri atas kop surat resmi ekspor KDKMP. Dicetak menggunakan kertas Concorde premium dengan cetak timbul (embossed) berukuran presisi untuk korespondensi internasional.',
    bgClass: 'bg-white border-stone-200 text-stone-900',
    textClass: 'text-neutral-900',
    previewType: 'kop_surat'
  },
  {
    id: 'app_kartu_nama',
    name: 'Logo pada Kartu Nama Ofisial',
    description: 'Kartu nama dua sisi untuk direksi koperasi. Sisi depan menampilkan logo utama berwarna emas dengan spot UV berkilau di atas kertas kartu hitam mewah bertekstur (matte black card).',
    bgClass: 'bg-neutral-900 border-neutral-800 text-neutral-100',
    textClass: 'text-amber-300',
    previewType: 'kartu_nama'
  }
];
