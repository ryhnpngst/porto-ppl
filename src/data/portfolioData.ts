export interface ArtifactItem {
  id: string;
  title: string;
  category: string;
  description: string;
  context: string;
  driveUrl: string;
  embedUrl?: string;
}

export interface PortfolioConfig {
  type: "UTS" | "UAS";
  title: string;
  subtitle: string;
  badgeLabel: string;
  cycle: string;
  classLevel: string;
  topic: string;
  school: string;
  period: string;
  heroDescription: string;
  introText: string;
  lessonPlan: {
    title: string;
    description: string;
    topic: string;
    classInfo: string;
    driveUrl: string;
    embedUrl: string;
  };
  teachingVideo: {
    title: string;
    description: string;
    context: string;
    duration: string;
    driveUrl: string;
    embedUrl: string;
  };
  supportingArtifacts: ArtifactItem[];
}

export const studentProfile = {
  name: "Rayhan Pangestu Wibowo",
  role: "Mahasiswa PPG Calon Guru",
  program: "Pendidikan Profesi Guru (PPG) Calon Guru",
  studyProgram: "Informatika",
  university: "Universitas Negeri Yogyakarta",
  school: "SMK Negeri 3 Yogyakarta",
  email: "rayhan182.2025@student.uny.ac.id",
  github: "https://github.com/ryhnpngst",
  bio: "Mahasiswa PPG Calon Guru bidang Informatika yang tertarik pada pembelajaran pemrograman dan pemanfaatan teknologi dalam pendidikan.",
  focusAreas: [
    "Berpikir Komputasional (Computational Thinking)",
    "Problem-Based Learning & Project-Based Learning",
    "Integrasi Media Pembelajaran Interaktif",
    "Asesmen Formatif yang Berorientasi Perkembangan Murid",
  ],
};

export const utsPortfolio: PortfolioConfig = {
  type: "UTS",
  title: "E-Portfolio PPL Mandiri — Siklus 1",
  subtitle:
    "Dokumentasi komprehensif rancangan, video pelaksanaan, analisis artefak, dan refleksi praktik mengajar mandiri siklus 1.",
  badgeLabel: "Portofolio UTS • Siklus 1",
  cycle: "Siklus 1",
  classLevel: "Kelas X Fase E",
  topic: "Algoritma & Berpikir Komputasional (Struktur Kontrol Percabangan)",
  school: "SMK Negeri 3 Yogyakarta",
  period: "Semester Ganjil 2024/2025",
  heroDescription:
    "Dokumentasi akademik praktik mengajar mandiri Siklus 1 pada Program PPG Calon Guru. Menyajikan modul ajar lengkap, rekaman video pelaksanaan pembelajaran, analisis kritis artefak pembelajaran berbasis teori, serta refleksi evaluatif calon guru.",
  introText:
    "Portofolio ini disusun secara mandiri untuk mendokumentasikan proses pembelajaran pada Siklus 1. Fokus utama diarahkan pada penerapan model Problem-Based Learning (PBL) untuk memfasilitasi pemahaman logika pemrograman dan algoritma dasar pada murid fase awal menengah.",
  lessonPlan: {
    title: "RPP Siklus 1: Algoritma Percabangan",
    description:
      "Rancangan pembelajaran lengkap mencakup tujuan pembelajaran, asesmen diagnostik, alur aktivitas model Problem-Based Learning, diferensiasi proses, dan lembar refleksi murid.",
    topic: "Algoritma Percabangan dalam Kehidupan Sehari-hari",
    classInfo: "Kelas X Fase E • 4 JP (4 × 45 Menit)",
    driveUrl:
      "https://drive.google.com/file/d/1QUPb38XfaNV7IbHKa2xPxBttvXOuE0fv/view?usp=sharing",
    embedUrl:
      "https://drive.google.com/file/d/1QUPb38XfaNV7IbHKa2xPxBttvXOuE0fv/preview",
  },
  teachingVideo: {
    title: "Video Pelaksanaan Praktik Mengajar Siklus 1",
    description:
      "Video rekaman praktik pembelajaran mencakup kegiatan apersepsi, penyampaian materi, implementasi materi melalui kegiatan praktik, serta pengerjaan LKPD untuk memperkuat pemahaman murid.",
    context: "Praktik Tatap Muka di Laboratorium Komputer / Kelas Informatika",
    duration: "Video Pembelajaran",
    driveUrl: "https://youtu.be/dkZ9_AhsiJ8",
    embedUrl: "https://www.youtube-nocookie.com/embed/dkZ9_AhsiJ8",
  },
  supportingArtifacts: [
    {
      id: "art-01",
      title: "Modul Materi: Algoritma dan Representasinya",
      category: "Bahan Ajar",
      description:
        "Modul materi 21 bagian terstruktur yang menyajikan konsep algoritma, IPO, pseudocode, flowchart, dan analisis debugging kontekstual.",
      context:
        "Bahan bacaan mandiri dan referensi konsep bagi murid kelas X Fase E.",
      driveUrl:
        "https://drive.google.com/file/d/1NJVn40EFtx5b-Vtq48t-icZQUcvVyJiI/view?usp=sharing",
    },
    {
      id: "art-02",
      title: "LKPD: Algoritma dan Pemrograman Dasar",
      category: "LKPD / Jobsheet",
      description:
        "Lembar Kerja Peserta Didik berbasis aktivitas bertahap yang menyajikan studi kasus lampu otomatis, sistem pendingin kipas cerdas berbasis suhu, dan debugging logika.",
      context:
        "Panduan penyelidikan kelompok, representasi algoritma, pengujian nilai batas, dan refleksi mandiri murid kelas X Fase E.",
      driveUrl:
        "https://drive.google.com/file/d/1GG5G22nvyOQt-rD8YJYMkJIdzzW4054y/view?usp=sharing",
    },
    {
      id: "art-03",
      title: "Rancangan Pembelajaran (RPP / Modul Ajar)",
      category: "RPP",
      description:
        "Perencanaan pembelajaran lengkap yang telah memuat langkah-langkah kegiatan belajar serta instrumen asesmen terintegrasi.",
      context:
        "Pedoman pelaksanaan pembelajaran dan instrumen asesmen proses maupun hasil belajar murid.",
      driveUrl:
        "https://drive.google.com/file/d/1QUPb38XfaNV7IbHKa2xPxBttvXOuE0fv/view?usp=sharing",
    },
    {
      id: "art-04",
      title: "Sampel Hasil Kerja & Respon Murid (Anonim)",
      category: "Hasil Belajar",
      description:
        "Dokumentasi solusi diagram alir dan pseudocode yang dihasilkan kelompok murid.",
      context: "Bahan bukti evaluasi ketercapaian tujuan pembelajaran.",
      driveUrl: "https://drive.google.com/",
    },
  ],
};

export const uasPortfolio: PortfolioConfig = {
  type: "UAS",
  title: "E-Portfolio PPL Mandiri — Siklus Terpilih (Siklus 2)",
  subtitle:
    "Dokumentasi rancangan terbaik, video pelaksanaan, analisis artefak berbasis teori, dan refleksi profesional siklus terpilih.",
  badgeLabel: "Portofolio UAS • Siklus 2 (Siklus Terpilih)",
  cycle: "Siklus 2 (Siklus Terpilih)",
  classLevel: "Kelas X Fase E",
  topic: "Analisis Data & Visualisasi Informasi dengan Tools Digital",
  school: "SMK Negeri 3 Yogyakarta",
  period: "Semester Ganjil 2024/2025",
  heroDescription:
    "Dokumentasi akademik praktik mengajar mandiri Siklus Terpilih (Siklus 2 dari rangkaian Siklus 2–4). Mengedepankan integrasi Project-Based Learning (PjBL) untuk mengembangkan literasi data dan kemampuan interpretasi visual informasi.",
  introText:
    "Portofolio UAS ini memusatkan analisis pada siklus terbaik yang dipilih setelah evaluasi berkelanjutan dari siklus sebelumnya. Praktik ini menunjukkan peningkatan kemampuan scaffolding guru serta keterlibatan aktif murid dalam proyek analisis data nyata.",
  lessonPlan: {
    title: "Modul Ajar / RPP Siklus 2: Analisis Data Kontekstual",
    description:
      "Rancangan pembelajaran berbasis proyek (PjBL) dengan integrasi dataset lokal dan pedoman visualisasi data informatif untuk kelas X.",
    topic: "Pengolahan dan Interpretasi Data Menggunakan Aplikasi Spreadsheet",
    classInfo: "Kelas X Fase E • 3 JP (3 × 45 Menit)",
    driveUrl:
      "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing",
    embedUrl:
      "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview",
  },
  teachingVideo: {
    title: "Video Pelaksanaan Praktik Mengajar Siklus Terpilih (Siklus 2)",
    description:
      "Rekaman utuh proses pembelajaran berbasis proyek kolaboratif, menunjukkan bimbingan diferensiasi serta presentasi temuan data oleh murid.",
    context: "Praktik di Laboratorium Komputer Sekolah Mitra",
    duration: "Video Pembelajaran Utuh & Cuplikan Kunci",
    driveUrl:
      "https://drive.google.com/file/d/1a2b3c4d5e_sample_video_uas/view?usp=sharing",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  supportingArtifacts: [
    {
      id: "art-uas-01",
      title: "Modul Proyek Analisis Data & Rubrik PjBL",
      category: "Perencanaan & Asesmen",
      description:
        "Panduan proyek terstruktur mulai dari eksplorasi data mentah hingga penyajian infografis visual.",
      context:
        "Diberikan sebagai acuan kerja mandiri kelompok selama proyek berlangsung.",
      driveUrl: "https://drive.google.com/",
    },
    {
      id: "art-uas-02",
      title: "Dataset Latihan Kontekstual & Template Analisis",
      category: "Media Pembelajaran",
      description:
        "Dataset terkurasi seputar pola konsumsi energi sekolah untuk melatih penalaran analitis.",
      context: "Digunakan saat eksplorasi data di laboratorium komputer.",
      driveUrl: "https://drive.google.com/",
    },
    {
      id: "art-uas-03",
      title: "Rancangan Pembelajaran (RPP / Modul Ajar)",
      category: "RPP",
      description:
        "Perencanaan pembelajaran berbasis proyek (PjBL) yang memuat panduan aktivitas, rubrik penilaian, dan instrumen asesmen terintegrasi.",
      context:
        "Pedoman pelaksanaan pembelajaran dan instrumen asesmen proyek murid.",
      driveUrl:
        "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing",
    },
    {
      id: "art-uas-04",
      title: "Dokumentasi Karya Visualisasi & Refleksi Murid",
      category: "Hasil Belajar",
      description:
        "Dashboard visual sederhana buatan murid beserta catatan refleksi belajar mandiri mereka.",
      context:
        "Bukti keberhasilan penerapan pendekatan PjBL yang berpusat pada murid.",
      driveUrl: "https://drive.google.com/",
    },
  ],
};
