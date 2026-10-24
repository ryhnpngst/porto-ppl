# PRD — E-Portfolio PPL Mandiri UTS & UAS

## 1. Gambaran Umum

E-Portfolio PPL Mandiri merupakan website akademik yang dikembangkan untuk mendokumentasikan, menganalisis, dan merefleksikan pengalaman praktik mengajar mandiri selama kegiatan PPG Calon Guru.

Proyek ini dibuat menggunakan Astro dalam satu repositori untuk menghasilkan dua website e-portfolio yang berbeda, yaitu E-Portfolio UTS dan E-Portfolio UAS. Keduanya menggunakan struktur halaman, komponen, dan sistem desain yang sama, tetapi memiliki konten, artefak, analisis, dan refleksi yang berbeda.

Setiap website memiliki tiga halaman utama:

1. **Beranda** — berisi profil mahasiswa, kontak, dan pengantar e-portfolio, serta menyajikan bukti utama praktik mengajar berupa rancangan pembelajaran dan video pelaksanaan.
2. **Analisis Artefak** — berisi pembahasan mendalam mengenai konteks, tujuan, kelebihan, kekurangan, dan analisis artefak berdasarkan kajian teori.
3. **Refleksi** — berisi refleksi tentang model guru yang dituju, filosofi mengajar, evaluasi diri, kekuatan, kelemahan, dan rencana tindak lanjut.

Seluruh dokumen dan video disimpan di Google Drive, kemudian ditampilkan melalui preview atau embed pada website.

## 2. Tujuan Proyek

1. Menghasilkan dua website e-portfolio yang dapat diakses dan dinilai secara mandiri.
2. Mendokumentasikan praktik mengajar mandiri siklus 1 untuk UTS.
3. Mendokumentasikan satu siklus terbaik dari siklus 2–4 untuk UAS.
4. Menampilkan rancangan pembelajaran lengkap dan video pelaksanaan yang saling berkaitan.
5. Menyajikan analisis artefak berbasis teori secara mendalam dan kritis.
6. Menampilkan refleksi profesional yang mencakup kekuatan, kelemahan, dan rencana tindak lanjut.
7. Mengembangkan website yang profesional, responsif, mudah dinavigasi, dan mudah dipelihara.

## 3. Sasaran Pengguna

- **Dosen:** menilai kelengkapan bukti praktik, analisis, dan refleksi.
- **Guru pamong:** meninjau praktik mengajar dan perkembangan kompetensi calon guru.
- **Mahasiswa:** mendokumentasikan serta mengevaluasi perkembangan kompetensi profesional.
- **Pengunjung akademik:** memahami pengalaman dan pendekatan pembelajaran yang diterapkan.

## 4. Ruang Lingkup

### 4.1. E-Portfolio UTS

- Fokus pada praktik mengajar mandiri siklus 1.
- Menampilkan rancangan atau perencanaan pembelajaran lengkap terbaik dari siklus 1.
- Menampilkan video pelaksanaan praktik mengajar berdasarkan rancangan tersebut.
- Menyajikan artefak pendukung yang relevan.
- Menyajikan analisis artefak berbasis kajian teori.
- Menyajikan refleksi pembelajaran dan rencana tindak lanjut.

### 4.2. E-Portfolio UAS

- Fokus pada satu siklus terbaik yang dipilih dari siklus 2–4.
- Menampilkan rancangan atau perencanaan pembelajaran lengkap terbaik dari siklus terpilih.
- Menampilkan video pelaksanaan praktik mengajar berdasarkan rancangan tersebut.
- Menyajikan artefak pendukung yang relevan.
- Menyajikan analisis artefak berbasis kajian teori.
- Menyajikan refleksi pembelajaran dan rencana tindak lanjut.

Siklus yang dipilih untuk UAS harus dinyatakan dengan jelas pada beranda dan menjadi acuan seluruh konten portofolio.

## 5. Arsitektur Website dan URL

Kedua website dikembangkan dalam satu repositori Astro, tetapi memiliki URL dan beranda masing-masing.

| Website         | URL               |
| --------------- | ----------------- |
| E-Portfolio UTS | `/porto-ppl/uts/` |
| E-Portfolio UAS | `/porto-ppl/uas/` |

Masing-masing URL langsung membuka beranda website yang bersangkutan. Pengunjung tidak perlu melalui halaman pemilihan UTS atau UAS.

Ketentuan:

- Kedua website dapat diakses secara mandiri.
- Navigasi utama masing-masing website terdiri atas tiga halaman.
- Data dan konten UTS serta UAS dikelola secara terpisah.
- Komponen dan sistem desain dapat digunakan bersama.
- Tidak ada ketergantungan navigasi yang mengharuskan pengunjung membuka website lainnya.

Konfigurasi URL produksi perlu disesuaikan dengan pengaturan `base` Astro agar tidak menghasilkan prefiks URL ganda.

## 6. Struktur Informasi (Information Architecture)

Setiap website memiliki tiga halaman utama yang sama, yaitu Beranda, Analisis Artefak, dan Refleksi.

### 6.1. Halaman Beranda

Beranda berfungsi sebagai halaman pengenalan mahasiswa dan gambaran umum praktik mengajar yang didokumentasikan.

**A. Navbar**

Navbar berisi tiga tautan utama:

- Beranda
- Analisis Artefak
- Refleksi

Navbar digunakan secara konsisten pada ketiga halaman.

**B. Hero section**

Berisi:

- Nama mahasiswa.
- Program studi dan program PPG.
- Judul E-Portfolio PPL Mandiri.
- Pengantar singkat.
- Informasi fokus praktik mengajar.

Pada UTS, fokus yang ditampilkan adalah siklus 1. Pada UAS, fokusnya adalah siklus terpilih dari siklus 2–4.

**C. Profil mahasiswa**

Berisi informasi akademik yang relevan, latar belakang singkat, dan minat dalam bidang pendidikan Informatika.

**D. Pengantar e-portfolio**

Menjelaskan tujuan portofolio, konteks pelaksanaan PPL Mandiri, serta gambaran isi dan manfaat dokumentasi praktik mengajar.

**E. Bukti utama praktik mengajar**

Beranda tetap menampilkan dua produk utama sesuai instruksi tugas:

1. **Rancangan atau perencanaan pembelajaran lengkap**
   - Judul dan deskripsi singkat.
   - Informasi kelas dan topik.
   - Preview dokumen dari Google Drive.
   - Tautan untuk membuka dokumen sumber.

2. **Video pelaksanaan praktik mengajar**
   - Video yang sesuai dengan rancangan pembelajaran.
   - Informasi singkat tentang konteks pelaksanaan.
   - Preview atau embed video dari Google Drive.
   - Tautan alternatif jika video tidak dapat ditampilkan.

Bagian ini merupakan bukti utama, bukan tempat untuk memuat seluruh analisis secara mendalam.

**F. Kontak**

Berisi alamat email atau kontak profesional yang memang ingin dipublikasikan.

**G. Footer**

Berisi identitas akademik dan informasi singkat portofolio.

### 6.2. Halaman Analisis Artefak

Halaman ini berfungsi untuk menjelaskan dan mengevaluasi artefak praktik mengajar secara mendalam. Setiap artefak disertai konteks, tujuan, kelebihan, kekurangan, dan kajian teori yang relevan.

**A. Pengantar halaman**

Berisi penjelasan tentang tujuan analisis artefak serta hubungannya dengan evaluasi praktik mengajar dan pengembangan kompetensi calon guru.

**B. Daftar artefak**

Artefak disusun berdasarkan kategori, misalnya:

- Perencanaan pembelajaran.
- Materi pembelajaran.
- Media pembelajaran.
- LKPD atau jobsheet.
- Video pelaksanaan pembelajaran.
- Instrumen asesmen.
- Hasil kerja murid yang telah dianonimkan.
- Umpan balik guru pamong atau dosen, jika tersedia.

Kategori dapat disesuaikan dengan artefak yang benar-benar dimiliki.

**C. Struktur analisis setiap artefak**

Setiap artefak dianalisis menggunakan struktur berikut:

1. **Identitas artefak:** nama, jenis, dan tautan atau preview dokumen.
2. **Konteks:** latar belakang pembuatan dan situasi penggunaannya.
3. **Tujuan:** kebutuhan pembelajaran yang ingin dipenuhi.
4. **Kajian teori:** teori, prinsip, atau konsep perkuliahan yang mendukung keputusan pembelajaran.
5. **Kelebihan:** aspek yang telah berjalan baik dan alasan artefak dinilai efektif.
6. **Kekurangan:** keterbatasan, ketidaksesuaian, atau aspek yang belum optimal.
7. **Analisis kritis:** hubungan antara teori dan praktik, termasuk kesesuaian dengan kebutuhan murid.
8. **Rekomendasi perbaikan:** perubahan konkret yang dapat diterapkan pada praktik selanjutnya.

Analisis harus menghubungkan teori dengan bukti praktik, bukan hanya menyebutkan teori atau mendeskripsikan isi dokumen.

**D. Penutup halaman**

Berisi sintesis temuan utama dari seluruh analisis artefak serta pelajaran yang diperoleh untuk pengembangan pembelajaran berikutnya.

### 6.3. Halaman Refleksi

Halaman ini berisi refleksi profesional berdasarkan pengalaman praktik mengajar yang didokumentasikan dalam portofolio.

**A. Pengantar refleksi**

Menjelaskan pentingnya refleksi sebagai proses mengevaluasi pengalaman, memahami perkembangan diri, dan merencanakan peningkatan kompetensi guru.

**B. Model guru yang dituju**

Menjelaskan karakteristik guru profesional yang ingin dikembangkan, misalnya:

- Reflektif dan terbuka terhadap masukan.
- Peduli terhadap kebutuhan murid.
- Menguasai materi dan strategi pembelajaran.
- Adaptif terhadap kondisi kelas dan keterbatasan sarana.
- Mampu membangun lingkungan belajar yang inklusif.

Karakteristik tersebut dijelaskan melalui alasan dan kaitannya dengan pengalaman praktik mengajar.

**C. Filosofi mengajar**

Menguraikan keyakinan tentang proses belajar, peran guru, kebutuhan murid, penggunaan teknologi, asesmen, dan penciptaan lingkungan belajar yang mendukung.

Filosofi harus menunjukkan bagaimana keyakinan tersebut diterapkan atau perlu diterapkan dalam praktik pembelajaran Informatika.

**D. Refleksi akhir**

Membahas pengalaman praktik mengajar secara kritis, mencakup:

- Hal yang berjalan baik.
- Tantangan yang dihadapi.
- Faktor yang mendukung keberhasilan.
- Faktor yang menghambat pembelajaran.
- Penyesuaian yang telah dilakukan.
- Pelajaran penting yang diperoleh.

**E. Kekuatan dan kelemahan diri**

Menjelaskan kekuatan yang sudah terlihat selama praktik mengajar serta kelemahan yang masih perlu diperbaiki.

Pembahasan harus disertai contoh atau bukti yang relevan, bukan hanya pernyataan umum.

**F. Rencana tindak lanjut**

Memuat langkah pengembangan diri yang konkret, misalnya:

- Memperbaiki pengelolaan waktu.
- Menyiapkan alternatif kegiatan ketika komputer tidak tersedia.
- Mengembangkan strategi untuk menjaga fokus dan meningkatkan partisipasi murid.
- Menyesuaikan pendampingan dengan kemampuan murid.
- Mengembangkan asesmen formatif untuk memeriksa pemahaman selama pembelajaran.

Setiap rencana tindak lanjut perlu menjelaskan tindakan yang akan dilakukan dan indikator sederhana untuk mengevaluasi keberhasilannya.

**G. Penutup refleksi**

Berisi komitmen untuk terus mengembangkan kompetensi pedagogik, profesional, sosial, dan kepribadian sebagai calon guru Informatika.

## 7. Kebutuhan Fungsional

### FR-01 — Navigasi tiga halaman

Setiap website harus memiliki navbar yang mengarah ke Beranda, Analisis Artefak, dan Refleksi.

### FR-02 — Beranda mandiri

Setiap beranda harus menampilkan profil, kontak, pengantar e-portfolio, serta preview rancangan pembelajaran dan video pelaksanaan.

### FR-03 — Preview Google Drive

Dokumen dan video ditampilkan melalui preview atau embed Google Drive jika format dan izin akses mendukung.

Setiap artefak harus memiliki tautan alternatif untuk membuka sumber aslinya.

### FR-04 — Analisis artefak

Halaman Analisis Artefak menyediakan pembahasan mendalam mengenai konteks, tujuan, kelebihan, kekurangan, kajian teori, analisis kritis, dan rekomendasi perbaikan.

### FR-05 — Refleksi profesional

Halaman Refleksi memuat model guru yang dituju, filosofi mengajar, refleksi akhir, kekuatan, kelemahan, dan rencana tindak lanjut.

### FR-06 — Pemisahan konten

Konten, artefak, analisis, dan refleksi UTS serta UAS harus dikelola secara terpisah.

### FR-07 — Desain responsif

Website harus dapat digunakan pada desktop, tablet, dan ponsel tanpa mengganggu keterbacaan atau fungsi navigasi.

### FR-08 — Validitas bukti

Website hanya menampilkan artefak, hasil asesmen, umpan balik, dan dokumentasi yang benar-benar tersedia. Informasi yang belum tersedia tidak boleh direkayasa.

## 8. Strategi Integrasi Google Drive

Google Drive digunakan sebagai repositori utama dokumen dan video, sedangkan Astro digunakan untuk menampilkan preview dan penjelasan akademik.

### Struktur folder

```text
E-Portfolio PPL Mandiri/
├── UTS - Siklus 1/
│   ├── 01 Perencanaan Pembelajaran/
│   ├── 02 Materi Pembelajaran/
│   ├── 03 Media Pembelajaran/
│   ├── 04 Video Praktik Mengajar/
│   ├── 05 Asesmen dan Hasil Kerja/
│   ├── 06 Umpan Balik/
│   └── 07 Refleksi/
│
└── UAS - Siklus Terpilih/
    ├── 01 Perencanaan Pembelajaran/
    ├── 02 Materi Pembelajaran/
    ├── 03 Media Pembelajaran/
    ├── 04 Video Praktik Mengajar/
    ├── 05 Asesmen dan Hasil Kerja/
    ├── 06 Umpan Balik/
    └── 07 Refleksi/
```

### Ketentuan teknis

- Gunakan URL preview atau embed yang sesuai dengan jenis file.
- Pastikan izin berbagi sesuai dengan pihak yang akan menilai.
- Uji seluruh preview melalui browser privat atau akun lain.
- Sediakan tautan untuk membuka dokumen sumber.
- Hindari menyimpan kredensial atau token Google Drive di repositori publik.
- Anonimkan data murid dan periksa izin publikasi foto atau video.

Integrasi Google Drive tidak memerlukan API khusus selama pengelolaan file dilakukan secara manual dan mekanisme embed memenuhi kebutuhan.

## 9. Model Konten

### 9.1. Konfigurasi portofolio

Setiap website memiliki konfigurasi terpisah yang mencakup:

- `type`: UTS atau UAS.
- `title`: judul portofolio.
- `description`: pengantar portofolio.
- `cycle`: nomor siklus.
- `class`: kelas yang diajar.
- `topic`: topik pembelajaran.
- `lessonPlan`: referensi rancangan pembelajaran.
- `teachingVideo`: referensi video.
- `artifacts`: daftar artefak.
- `reflection`: konten refleksi.
- `followUpPlan`: rencana tindak lanjut.

### 9.2. Konfigurasi artefak

Setiap artefak memiliki:

- `id`
- `title`
- `category`
- `description`
- `context`
- `objective`
- `driveUrl`
- `embedUrl`
- `theory`
- `strengths`
- `limitations`
- `evidence`
- `impact`
- `improvement`

Analisis yang panjang dapat disimpan dalam berkas Markdown terpisah dan ditautkan ke artefak terkait.

## 10. Desain dan Pengalaman Pengguna

### Arah desain

Gunakan gaya modern academic portfolio yang profesional, bersih, dan mudah dibaca.

Karakter desain:

- Warna utama hijau dengan warna netral.
- Tipografi yang jelas dan konsisten.
- Hierarki judul yang mudah dipahami.
- Ruang kosong yang cukup.
- Kartu artefak yang terstruktur.
- Preview dokumen dan video yang responsif.
- Navigasi yang sederhana.
- Tampilan konsisten pada UTS dan UAS.

### Komponen yang digunakan ulang

- `SiteHeader`
- `SiteFooter`
- `PortfolioHero`
- `ProfileSection`
- `ContactSection`
- `ArtifactPreview`
- `ArtifactCard`
- `ArtifactAnalysis`
- `ReflectionSection`
- `ReferenceList`

Komponen harus menerima data melalui props agar dapat digunakan oleh UTS dan UAS tanpa mencampur konten.

## 11. Arsitektur Teknis Astro

Gunakan Astro dengan pendekatan static-first karena website bersifat informatif dan tidak membutuhkan backend khusus.

Struktur konseptual:

```text
src/
├── components/
├── layouts/
│   └── PortfolioLayout.astro
├── content/
│   └── portfolios/
│       ├── uts/
│       │   ├── index.md
│       │   ├── artifacts/
│       │   └── reflection.md
│       └── uas/
│           ├── index.md
│           ├── artifacts/
│           └── reflection.md
└── pages/
    └── porto-ppl/
        ├── uts/
        │   ├── index.astro
        │   ├── analisis-artefak.astro
        │   └── refleksi.astro
        └── uas/
            ├── index.astro
            ├── analisis-artefak.astro
            └── refleksi.astro
```

Struktur di atas merupakan rancangan konseptual. Lokasi konten dan konfigurasi route dapat disesuaikan dengan pendekatan Astro yang dipilih.

Prinsip implementasi:

- Gunakan satu layout bersama.
- Gunakan komponen yang dapat dipakai ulang.
- Pisahkan data UTS dan UAS.
- Pastikan masing-masing website memiliki tiga halaman.
- Konfigurasikan `base` sesuai deployment.
- Hindari duplikasi komponen dan logika tampilan.
- Tidak menggunakan backend jika tidak diperlukan.

## 12. Kebutuhan Nonfungsional

### Performa

- Menggunakan pendekatan static-first.
- Meminimalkan JavaScript.
- Mengoptimalkan gambar.
- Menghindari pemuatan embed yang tidak diperlukan.

### Kompatibilitas

- Mendukung browser modern.
- Responsif pada desktop dan perangkat seluler.
- Preview tidak menyebabkan halaman melebar keluar dari layar.

### Pemeliharaan

- Komponen dapat digunakan ulang.
- Konten dapat diperbarui tanpa mengubah struktur utama.
- UTS dan UAS dapat dikelola secara terpisah.

### Aksesibilitas

- Menggunakan struktur heading semantik.
- Menyediakan teks alternatif pada gambar.
- Memastikan kontras warna memadai.
- Menggunakan label tautan yang jelas.
- Mendukung navigasi keyboard.
- Memberikan judul yang sesuai pada elemen embed.

## 13. Pemetaan Rubrik Penilaian

| Kriteria                   | Strategi pemenuhan                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| Beranda — 20 poin          | Profil, kontak, pengantar, desain profesional, dan navigasi jelas                             |
| Artefak — 20 poin          | RPP lengkap, video, media, materi, asesmen, hasil kerja anonim, dan umpan balik jika tersedia |
| Analisis Artefak — 20 poin | Konteks, tujuan, kelebihan, kekurangan, kajian teori, dan rekomendasi perbaikan               |
| Refleksi — 20 poin         | Model guru, filosofi mengajar, refleksi akhir, kekuatan, kelemahan, dan rencana tindak lanjut |
| Tata Bahasa — 20 poin      | Bahasa Indonesia baku, istilah pendidikan konsisten, ejaan tepat, dan referensi jelas         |

Target pengembangan adalah kategori Sangat Baik pada setiap kriteria, dengan nilai aktual tetap bergantung pada kualitas isi dan penilaian dosen.

## 14. Kriteria Penerimaan

### Beranda

- [ ] UTS dan UAS memiliki beranda masing-masing.
- [ ] Profil, kontak, dan pengantar tersedia.
- [ ] Rancangan pembelajaran dan video ditampilkan.
- [ ] Preview dan tautan sumber dapat digunakan.

### Analisis Artefak

- [ ] Semua artefak utama memiliki analisis.
- [ ] Konteks dan tujuan dijelaskan.
- [ ] Kelebihan dan kekurangan dianalisis.
- [ ] Kajian teori terhubung dengan praktik.
- [ ] Rekomendasi perbaikan disertakan.

### Refleksi

- [ ] Model guru yang dituju dijelaskan.
- [ ] Filosofi mengajar dijelaskan.
- [ ] Refleksi akhir membahas pengalaman dan tantangan.
- [ ] Kekuatan dan kelemahan diidentifikasi.
- [ ] Rencana tindak lanjut konkret dan dapat dievaluasi.

### Teknis

- [ ] Navbar memiliki tiga halaman pada masing-masing website.
- [ ] URL UTS dan UAS dapat dibuka secara mandiri.
- [ ] Konten kedua website tidak tercampur.
- [ ] Semua tautan dan embed telah diuji.
- [ ] Website responsif dan mudah digunakan.
- [ ] Data pribadi murid terlindungi.

## 15. Risiko dan Mitigasi

| Risiko                          | Mitigasi                                           |
| ------------------------------- | -------------------------------------------------- |
| Preview Google Drive gagal      | Periksa izin dan sediakan tautan alternatif        |
| Konten UTS dan UAS tercampur    | Pisahkan konfigurasi dan direktori konten          |
| Analisis hanya berupa deskripsi | Gunakan struktur analisis berbasis teori dan bukti |
| Refleksi terlalu umum           | Hubungkan refleksi dengan pengalaman nyata         |
| Siklus UAS belum ditentukan     | Gunakan konfigurasi yang mudah diperbarui          |
| Data murid terpublikasi         | Anonimkan data dan periksa izin                    |
| URL deployment salah            | Uji konfigurasi `base` dan route produksi          |
| Website terlalu panjang         | Pisahkan konten menjadi tiga halaman sesuai IA     |

## 16. Tahapan Pengembangan

### Tahap 1 — Persiapan konten

- Menginventarisasi artefak siklus 1.
- Menginventarisasi artefak siklus 2–4.
- Memilih siklus terbaik untuk UAS.
- Mengatur folder dan izin Google Drive.

### Tahap 2 — Fondasi Astro

- Menyiapkan proyek.
- Menentukan strategi deployment dan routing.
- Membuat layout, komponen, dan sistem desain.
- Memisahkan konfigurasi UTS dan UAS.

### Tahap 3 — Implementasi tiga halaman

- Membuat beranda UTS dan UAS.
- Membuat halaman Analisis Artefak.
- Membuat halaman Refleksi.
- Mengimplementasikan navbar yang konsisten.

### Tahap 4 — Integrasi artefak

- Menampilkan rancangan pembelajaran.
- Menampilkan video.
- Menambahkan preview Google Drive.
- Menambahkan tautan sumber dan informasi pendamping.

### Tahap 5 — Penulisan analisis dan refleksi

- Menganalisis konteks, tujuan, kelebihan, dan kekurangan artefak.
- Menghubungkan praktik dengan kajian teori.
- Menulis refleksi profesional.
- Menentukan rencana tindak lanjut.

### Tahap 6 — Pengujian dan publikasi

- Menguji seluruh URL dan embed.
- Menguji tampilan desktop dan seluler.
- Memeriksa tata bahasa dan referensi.
- Memastikan privasi terjaga.
- Memeriksa kesesuaian terhadap rubrik.
- Melakukan deployment dan pengujian akhir.

## 17. Indikator Keberhasilan

Proyek dinyatakan berhasil apabila:

1. Dua website dapat diakses secara mandiri dari satu proyek Astro.
2. Setiap website memiliki tiga halaman utama sesuai struktur informasi.
3. Beranda menampilkan profil, kontak, pengantar, rancangan pembelajaran, dan video.
4. Analisis Artefak menyajikan pembahasan mendalam dan berbasis teori.
5. Refleksi menyajikan identitas guru yang dituju, filosofi mengajar, evaluasi diri, dan rencana tindak lanjut.
6. Preview artefak dapat diakses oleh pihak yang dituju.
7. Website responsif, mudah dinavigasi, dan tidak memiliki tautan rusak.
8. Konten sesuai dengan siklus masing-masing dan didukung bukti nyata.

## 18. Keputusan Produk Akhir

- Satu repositori Astro digunakan untuk dua website e-portfolio.
- UTS berfokus pada siklus 1.
- UAS berfokus pada satu siklus terbaik dari siklus 2–4.
- Setiap website memiliki tiga halaman: Beranda, Analisis Artefak, dan Refleksi.
- Kedua website menggunakan komponen dan desain yang sama, tetapi kontennya dipisahkan.
- Google Drive digunakan untuk menyimpan dokumen dan video.
- Astro menampilkan preview artefak beserta analisis dan refleksinya.
- Pengembangan mengutamakan kelengkapan bukti, kedalaman analisis, kualitas refleksi, dan kemudahan navigasi.

**Prinsip akhir:** satu proyek untuk efisiensi pengembangan, dua website mandiri untuk memenuhi kebutuhan tugas, dan tiga halaman yang terstruktur untuk menyajikan bukti, analisis, serta refleksi secara jelas.
