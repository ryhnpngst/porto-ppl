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
  program: "Pendidikan Profesi Guru (PPG) Calon Guru",
  studyProgram: "Informatika",
  university: "Universitas Negeri Yogyakarta",
  school: "SMK Negeri 3 Yogyakarta",
  email: "rayhan182.2025@student.uny.ac.id",
  github: "https://github.com/ryhnpngst",
  bio: "Mahasiswa PPG Calon Guru bidang Informatika yang tertarik pada pembelajaran pemrograman dan pemanfaatan teknologi dalam pendidikan.",
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
  ],
};

export const uasPortfolio: PortfolioConfig = {
  type: "UAS",
  title: "E-Portfolio PPL Mandiri — Siklus Terpilih (Siklus 3)",
  subtitle:
    "Dokumentasi rancangan terbaik, video pelaksanaan, analisis artefak berbasis teori, dan refleksi profesional siklus terpilih.",
  badgeLabel: "Portofolio UAS • Siklus 3 (Siklus Terpilih)",
  cycle: "Siklus 3 (Siklus Terpilih)",
  classLevel: "Kelas X Fase E",
  topic: "Pemrograman Python Dasar",
  school: "SMK Negeri 3 Yogyakarta",
  period: "Semester Ganjil 2024/2025",
  heroDescription:
    "Dokumentasi akademik praktik mengajar mandiri pada siklus terpilih (Siklus 3 dari rangkaian Siklus 2–4), dengan mengintegrasikan model Problem-Based Learning (PBL) untuk mengembangkan kemampuan pemecahan masalah dan penerapan konsep pemrograman Python dasar.",
  introText:
    "Portofolio UAS ini memusatkan analisis pada siklus terbaik yang dipilih setelah evaluasi berkelanjutan dari siklus sebelumnya. Praktik ini menunjukkan peningkatan kemampuan scaffolding guru serta keterlibatan aktif murid dalam proyek analisis data nyata.",
  lessonPlan: {
    title: "Modul Ajar / RPP Siklus 3: Analisis Data Kontekstual",
    description:
      "Rancangan pembelajaran berbasis masalah yang mengintegrasikan latihan pemrograman Python dasar melalui analisis masalah kontekstual, penyusunan algoritma, penulisan kode, serta pengujian dan perbaikan program untuk kelas X.",
    topic: "Pemrograman Dasar Python",
    classInfo: "Kelas X Fase E • 8 JP (8 × 45 Menit)",
    driveUrl:
      "https://drive.google.com/file/d/1tbnSo2PdhYbjxcVl--p0wRaaqylVGUsc/view?usp=sharing",
    embedUrl:
      "https://drive.google.com/file/d/1tbnSo2PdhYbjxcVl--p0wRaaqylVGUsc/preview",
  },
  teachingVideo: {
    title: "Video Pelaksanaan Praktik Mengajar Siklus Terpilih (Siklus 3)",
    description:
      "Rekaman pembelajaran berbasis PBL yang menampilkan praktik Python secara langsung, pendampingan guru, dan pengerjaan LKPD oleh murid.",
    context: "Praktik di Laboratorium Komputer Sekolah Mitra",
    duration: "Video Pembelajaran",
    driveUrl: "https://youtu.be/dkZ9_AhsiJ8",
    embedUrl: "https://www.youtube-nocookie.com/embed/dkZ9_AhsiJ8",
  },
  supportingArtifacts: [
    {
      id: "art-uas-01",
      title: "Modul Pemrograman Python Dasar",
      category: "Media & Bahan Ajar",
      description:
        "Panduan pembelajaran terstruktur untuk memahami dasar-dasar Python, mulai dari pengenalan sintaks dan variabel.",
      context:
        "Diberikan sebagai panduan kerja mandiri atau kelompok dalam mempelajari konsep dasar Python dan menyelesaikan latihan pemrograman secara bertahap.",
      driveUrl:
        "https://drive.google.com/file/d/1X-L7zGj1DGv5HC4qNckr9-5MJ-fAUZgV/view?usp=sharing",
    },
    {
      id: "art-uas-02",
      title: "LKPD: Pemrograman Python Dasar",
      category: "LKPD",
      description:
        "Panduan latihan terstruktur untuk mempelajari sintaks Python, penggunaan variabel dan tipe data, struktur percabangan, perulangan, serta list melalui penyelesaian masalah kontekstual.",
      context:
        "Digunakan sebagai panduan praktik mandiri atau kelompok di laboratorium komputer untuk menulis, menjalankan, menguji, dan memperbaiki kode Python dasar.",
      driveUrl:
        "https://drive.google.com/file/d/17hY_1m5Gnr0GUBjHfZXiCBfodW9YK9cu/view?usp=sharing",
    },
    {
      id: "art-uas-03",
      title: "Rancangan Pembelajaran (RPP / Modul Ajar)",
      category: "RPP",
      description:
        "Perencanaan pembelajaran berbasis masalah (Problem-Based Learning atau PBL) yang memuat tahapan pemecahan masalah, aktivitas pembelajaran, serta instrumen asesmen untuk mengukur pemahaman konsep dan keterampilan pemrograman Python dasar.",
      context:
        "Pedoman pelaksanaan pembelajaran berbasis masalah dan acuan asesmen untuk mengevaluasi kemampuan murid dalam menganalisis masalah, menyusun algoritma, menulis kode Python, serta menguji dan memperbaiki program.",
      driveUrl:
        "https://drive.google.com/file/d/1tbnSo2PdhYbjxcVl--p0wRaaqylVGUsc/view?usp=sharing",
    },
  ],
};
