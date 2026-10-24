# Design System — E-Portfolio PPL Mandiri

**Versi:** 2.0  
**Proyek:** E-Portfolio PPL Mandiri UTS dan UAS  
**Framework:** Astro  
**Bahasa:** HTML, CSS, JavaScript seperlunya  
**Tipografi:** Poppins  
**Gaya visual:** Modern Academic Portfolio

---

## 1. Gambaran Umum

### 1.1 Tujuan

Design system ini menjadi pedoman desain dan implementasi antarmuka untuk dua website e-portfolio Praktik Mengajar Mandiri pada PPL Mandiri.

Kedua website dikembangkan dalam satu proyek Astro dengan komponen yang dapat digunakan ulang, tetapi tetap memiliki konten, identitas, dan ruang lingkup yang berbeda.

- **Website UTS:** berfokus pada praktik mengajar mandiri Siklus 1.
- **Website UAS:** berfokus pada salah satu siklus terpilih dari Siklus 2, 3, atau 4.

Masing-masing website mempunyai tiga halaman utama:

1. Beranda
2. Analisis Artefak
3. Refleksi

### 1.2 Tujuan desain

Desain harus membantu dosen dan pembaca untuk:

- Mengenali identitas dan konteks praktik mengajar.
- Menemukan RPP serta video praktik mengajar dengan mudah.
- Memahami artefak pembelajaran dan analisis kritisnya.
- Membaca refleksi serta rencana pengembangan kompetensi guru.
- Menjelajahi website dengan nyaman melalui desktop maupun perangkat seluler.

### 1.3 Prinsip desain

**1. Academic and professional**

Tampilan harus merepresentasikan portofolio akademik calon guru Informatika yang terstruktur dan dapat dipertanggungjawabkan.

**2. Content-first**

Bukti praktik, dokumen pembelajaran, video, analisis, dan refleksi menjadi fokus utama. Elemen dekoratif tidak boleh mengganggu isi.

**3. Clear hierarchy**

Judul, deskripsi, metadata, artefak, dan analisis dibedakan melalui ukuran teks, jarak, dan komposisi.

**4. Consistent and reusable**

Kedua website menggunakan sistem desain dan komponen bersama. Perbedaan ditentukan melalui konfigurasi konten.

**5. Responsive and accessible**

Seluruh halaman harus tetap terbaca dan dapat digunakan di berbagai ukuran layar serta mendukung navigasi keyboard.

**6. Lightweight and maintainable**

Utamakan HTML semantik, CSS native, dan JavaScript seperlunya. Hindari dependensi yang tidak diperlukan.

---

## 2. Identitas Visual

### 2.1 Konsep visual

Konsep visual menggunakan gaya modern, minimalis, dan akademis dengan karakter teknologi pendidikan.

Karakter yang ingin ditampilkan:

- Bersih dan tidak berlebihan.
- Profesional tetapi tetap ramah.
- Terstruktur dan mudah dipahami.
- Memiliki aksen biru yang konsisten.
- Mengutamakan keterbacaan dan kemudahan navigasi.

Gunakan ruang kosong yang cukup, kartu dengan border tipis, sudut membulat, dan bayangan halus. Hindari penggunaan terlalu banyak gradien, animasi, ornamen, atau warna tambahan.

### 2.2 Warna utama

Tiga warna berikut menjadi identitas utama seluruh website.

| Nama                | Hex       | Peran                                                  |
| ------------------- | --------- | ------------------------------------------------------ |
| Primary Blue        | `#3F72AF` | Aksen utama, tombol, tautan aktif, dan elemen navigasi |
| Secondary Blue-Gray | `#DBE2EF` | Latar sekunder, panel informasi, dan sorotan           |
| Soft White          | `#F9F7F7` | Latar utama halaman                                    |

### 2.3 Warna pendukung

Warna pendukung digunakan untuk keterbacaan, batas elemen, dan keadaan interaktif. Warna ini tidak menggantikan identitas utama.

| Token                    | Nilai     | Penggunaan                  |
| ------------------------ | --------- | --------------------------- |
| `--color-text`           | `#222831` | Teks utama dan heading      |
| `--color-text-muted`     | `#526174` | Deskripsi dan metadata      |
| `--color-surface`        | `#FFFFFF` | Kartu dan permukaan konten  |
| `--color-border`         | `#C9D4E4` | Border dan garis pemisah    |
| `--color-primary-hover`  | `#315D91` | Hover tombol dan tautan     |
| `--color-primary-active` | `#274B75` | Status tombol aktif         |
| `--color-on-primary`     | `#FFFFFF` | Teks di atas tombol biru    |
| `--color-focus`          | `#3F72AF` | Indikator fokus keyboard    |
| `--color-warning-bg`     | `#FFF4D6` | Latar peringatan            |
| `--color-warning-text`   | `#76530A` | Teks peringatan             |
| `--color-danger`         | `#B42318` | Kesalahan atau status gagal |
| `--color-success`        | `#246B4A` | Status berhasil             |

Warna status seperti peringatan, kesalahan, dan keberhasilan hanya digunakan ketika diperlukan.

### 2.4 Aturan penggunaan warna

- Gunakan `#F9F7F7` sebagai latar utama halaman.
- Gunakan `#FFFFFF` untuk kartu, area preview, dan panel konten.
- Gunakan `#3F72AF` untuk tombol utama, tautan, ikon penting, dan navigasi aktif.
- Gunakan `#DBE2EF` untuk latar hero tertentu, panel sorotan, badge, atau bagian yang ingin dibedakan.
- Gunakan `#222831` untuk teks utama agar tetap mudah dibaca.
- Gunakan `#526174` untuk metadata dan teks sekunder.
- Gunakan border tipis daripada menambahkan banyak warna baru.
- Jangan menggunakan biru pada seluruh elemen sekaligus karena dapat mengurangi hierarki visual.
- Jangan mengandalkan warna sebagai satu-satunya indikator status.

### 2.5 Identitas visual UTS dan UAS

Kedua website menggunakan sistem visual yang sama. Perbedaan ditampilkan melalui label, judul, informasi siklus, dan konten.

| Elemen      | Website UTS                   | Website UAS                          |
| ----------- | ----------------------------- | ------------------------------------ |
| Label       | Portofolio UTS                | Portofolio UAS                       |
| Fokus       | Siklus 1                      | Siklus terpilih dari Siklus 2–4      |
| Judul hero  | Mengacu pada praktik Siklus 1 | Mengacu pada praktik siklus terpilih |
| Palet warna | Palet utama bersama           | Palet utama bersama                  |
| Tipografi   | Poppins                       | Poppins                              |
| Komponen    | Komponen bersama              | Komponen bersama                     |

Jangan membuat dua desain berbeda hanya untuk membedakan UTS dan UAS. Identitas masing-masing website harus ditentukan oleh konten dan konfigurasi.

---

## 3. Sistem Tipografi

### 3.1 Font utama: Poppins

Poppins digunakan sebagai font utama untuk seluruh elemen antarmuka, meliputi heading, paragraf, navigasi, tombol, kartu, metadata, dan formulir.

Poppins dipilih karena memiliki bentuk geometris modern yang sesuai dengan karakter portofolio pendidikan berbasis teknologi.

Gunakan bobot font berikut:

| Weight   | Nilai | Penggunaan                            |
| -------- | ----: | ------------------------------------- |
| Regular  | `400` | Paragraf dan teks isi                 |
| Medium   | `500` | Navigasi, label, dan penekanan ringan |
| SemiBold | `600` | Heading dan judul kartu               |
| Bold     | `700` | Judul hero atau penekanan utama       |

Hindari penggunaan bobot 700 pada terlalu banyak elemen agar halaman tidak terlihat berat.

### 3.2 Memuat font

Untuk menggunakan Google Fonts, tambahkan kode berikut di bagian `<head>` layout utama Astro:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Jika website harus berjalan tanpa ketergantungan pada layanan eksternal, Poppins dapat disimpan dan disajikan secara lokal dengan tetap memperhatikan lisensi font.

### 3.3 Skala tipografi

| Token         | Ukuran                      | Penggunaan                        |
| ------------- | --------------------------- | --------------------------------- |
| `--text-xs`   | `0.75rem`                   | Label kecil                       |
| `--text-sm`   | `0.875rem`                  | Metadata dan keterangan           |
| `--text-base` | `1rem`                      | Teks isi                          |
| `--text-lg`   | `1.125rem`                  | Pengantar atau paragraf penekanan |
| `--text-xl`   | `1.25rem`                   | Judul kartu                       |
| `--text-2xl`  | `1.5rem`                    | Judul bagian sekunder             |
| `--text-3xl`  | `1.875rem`                  | Judul bagian utama                |
| `--text-4xl`  | `clamp(2rem, 4vw, 3.25rem)` | Judul hero                        |

### 3.4 Aturan tipografi

- Gunakan satu H1 pada setiap halaman.
- Pertahankan urutan heading H1, H2, dan H3 secara semantik.
- Gunakan line-height sekitar `1.7` untuk paragraf.
- Gunakan line-height sekitar `1.2–1.35` untuk heading.
- Batasi lebar paragraf panjang sekitar `65–75ch`.
- Hindari teks isi yang terlalu kecil.
- Jangan menggunakan huruf kapital penuh pada judul panjang.
- Gunakan teks tebal hanya untuk informasi penting.
- Gunakan font monospace hanya untuk kode atau informasi teknis yang sesuai.

---

## 4. Layout dan Spacing

### 4.1 Sistem layout

Website menggunakan layout terpusat dengan lebar konten maksimum agar nyaman dibaca pada layar besar.

| Token               |    Nilai | Fungsi                     |
| ------------------- | -------: | -------------------------- |
| `--container-width` | `1120px` | Lebar maksimum konten      |
| `--reading-width`   |  `760px` | Lebar teks panjang         |
| `--page-gutter`     |   `32px` | Padding horizontal desktop |
| Padding tablet      |   `24px` | Padding horizontal tablet  |
| Padding ponsel      |   `16px` | Padding horizontal ponsel  |

Konten panjang seperti analisis dan refleksi sebaiknya lebih sempit daripada area kartu atau galeri artefak.

### 4.2 Skala spacing

Semua jarak menggunakan kelipatan `4px`.

| Token        |  Nilai | Penggunaan            |
| ------------ | -----: | --------------------- |
| `--space-1`  |  `4px` | Jarak sangat rapat    |
| `--space-2`  |  `8px` | Jarak ikon dan label  |
| `--space-3`  | `12px` | Jarak elemen kecil    |
| `--space-4`  | `16px` | Jarak standar         |
| `--space-5`  | `20px` | Jarak antarelemen     |
| `--space-6`  | `24px` | Padding kartu         |
| `--space-8`  | `32px` | Jarak antarkomponen   |
| `--space-10` | `40px` | Jarak antarkelompok   |
| `--space-12` | `48px` | Jarak antarbagian     |
| `--space-16` | `64px` | Padding bagian besar  |
| `--space-20` | `80px` | Padding vertikal hero |

Gunakan jarak besar untuk memisahkan bagian utama dan jarak kecil untuk elemen yang saling berkaitan.

### 4.3 Border radius

| Token           |   Nilai | Penggunaan                   |
| --------------- | ------: | ---------------------------- |
| `--radius-sm`   |   `6px` | Badge dan kontrol kecil      |
| `--radius-md`   |  `12px` | Kartu, tombol, dan input     |
| `--radius-lg`   |  `20px` | Hero dan panel sorotan       |
| `--radius-xl`   |  `24px` | Panel khusus bila diperlukan |
| `--radius-pill` | `999px` | Badge kapsul                 |

Jangan menggunakan terlalu banyak variasi radius pada halaman yang sama.

### 4.4 Shadow

| Token            | Nilai                                | Penggunaan             |
| ---------------- | ------------------------------------ | ---------------------- |
| `--shadow-card`  | `0 6px 24px rgba(34, 40, 49, 0.06)`  | Kartu                  |
| `--shadow-hover` | `0 10px 28px rgba(34, 40, 49, 0.10)` | Hover kartu interaktif |

Gunakan border sebagai pembeda utama dan shadow sebagai aksen tambahan.

---

## 5. Struktur Navigasi dan Halaman

Setiap website mempunyai tepat tiga halaman utama.

### 5.1 Navbar

Komponen navbar harus:

- Menampilkan wordmark atau nama portofolio di sisi kiri.
- Menampilkan tiga tautan utama di sisi kanan pada layar lebar.
- Menunjukkan halaman aktif dengan jelas.
- Beralih menjadi menu ringkas pada layar kecil.
- Mendukung navigasi keyboard.
- Tidak menutupi konten ketika pengguna mengikuti tautan anchor.

Label navigasi:

- Beranda
- Analisis Artefak
- Refleksi

Wordmark yang disarankan:

- `E-Portfolio PPL | UTS`
- `E-Portfolio PPL | UAS`

Tautan harus tetap berada pada lingkup website masing-masing. Navigasi UTS tidak boleh mengarah ke halaman UAS secara tidak sengaja.

### 5.2 Beranda

Beranda berfungsi sebagai pintu masuk dan ringkasan portofolio.

Urutan bagian yang direkomendasikan:

1. Navbar.
2. Hero.
3. Profil singkat.
4. Konteks praktik mengajar.
5. Artefak utama.
6. Ringkasan portofolio.
7. Kontak profesional jika diperlukan.
8. Footer.

#### Hero

Hero harus memuat:

- Label UTS atau UAS.
- Judul spesifik sesuai siklus.
- Deskripsi singkat.
- Informasi ringkas konteks pembelajaran.
- Tombol menuju artefak atau bagian penting.

Gunakan latar `#DBE2EF` atau `#F9F7F7` dengan teks gelap. Warna biru utama digunakan untuk tombol dan elemen penekanan.

#### Profil

Tampilkan informasi yang relevan dengan konteks akademik:

- Nama.
- Program studi.
- Konteks PPL.
- Pendekatan atau minat mengajar yang relevan.

Foto profil bersifat opsional. Jangan menampilkan data pribadi yang tidak diperlukan.

#### Artefak utama

RPP atau modul ajar dan video praktik mengajar harus terlihat jelas di Beranda. Gunakan kartu dengan judul, deskripsi singkat, preview bila sesuai, dan tautan sumber.

### 5.3 Analisis Artefak

Halaman ini menyajikan analisis mendalam terhadap artefak pembelajaran.

Struktur yang disarankan:

1. Pengantar ruang lingkup analisis.
2. Daftar atau navigasi artefak.
3. Bagian analisis setiap artefak.
4. Bukti pendukung.
5. Sintesis dan kesimpulan analisis.

Setiap analisis dapat mencakup:

- Identitas artefak.
- Konteks penggunaan.
- Tujuan.
- Landasan teori atau prinsip pedagogis.
- Kekuatan.
- Keterbatasan.
- Bukti atau dampak yang dapat diamati.
- Rekomendasi perbaikan.

Gunakan heading dan panel yang konsisten. Hindari menampilkan seluruh isi dalam satu paragraf panjang.

### 5.4 Refleksi

Halaman Refleksi harus menunjukkan perkembangan profesional sebagai calon guru.

Struktur yang disarankan:

1. Pengantar pengalaman praktik.
2. Filosofi dan model guru yang ingin diwujudkan.
3. Hal yang sudah berjalan baik.
4. Tantangan dan aspek yang perlu ditingkatkan.
5. Pembelajaran utama dari praktik.
6. Rencana tindak lanjut.
7. Indikator keberhasilan atau evaluasi.

Refleksi harus spesifik dan terhubung dengan pengalaman atau bukti yang tersedia. Hindari pernyataan umum tanpa contoh.

---

## 6. Sistem Komponen UI

Komponen dibuat menggunakan Astro dan dipakai ulang pada kedua website. Konten yang berbeda disediakan melalui props atau konfigurasi.

### 6.1 `SiteHeader`

**Tujuan:** menyediakan navigasi utama.

Konten:

- Wordmark.
- Label UTS/UAS.
- Tautan tiga halaman.
- Status halaman aktif.

### 6.2 `SiteFooter`

**Tujuan:** memberikan penutup halaman yang konsisten.

Konten:

- Nama pemilik portofolio.
- Program studi atau konteks akademik.
- Tautan kontak profesional jika ingin dipublikasikan.
- Tahun atau informasi kepemilikan karya.

### 6.3 `PortfolioHero`

**Tujuan:** memperkenalkan fokus portofolio.

Props yang disarankan:

- `eyebrow`
- `title`
- `description`
- `cycle`
- `primaryActionLabel`
- `primaryActionHref`

### 6.4 `ProfileSection`

**Tujuan:** menampilkan profil singkat.

Konten:

- Nama.
- Program studi.
- Konteks PPL.
- Minat atau pendekatan pembelajaran.
- Foto opsional.

### 6.5 `SectionHeading`

**Tujuan:** menjaga konsistensi judul bagian.

Props:

- `eyebrow` opsional.
- `title`.
- `description` opsional.

### 6.6 `ArtifactCard`

**Tujuan:** menyajikan ringkasan artefak.

Props:

- `title`
- `category`
- `description`
- `context`
- `href` atau `driveUrl`

Aturan:

- Judul dan deskripsi harus ringkas.
- Label tautan menjelaskan tujuan.
- Jangan membuat seluruh kartu menjadi satu tautan jika terdapat beberapa aksi berbeda.
- Gunakan ikon hanya jika membantu pemahaman.

### 6.7 `ArtifactPreview`

**Tujuan:** menampilkan atau membuka dokumen dan video.

Konten:

- Judul.
- Deskripsi.
- Area embed.
- Tautan sumber asli.

Aturan:

- Embed harus responsif.
- Setiap iframe memiliki judul yang sesuai.
- Sediakan fallback ketika embed gagal.
- Sediakan tautan alternatif ke Google Drive.
- Uji izin akses sebelum deployment.

### 6.8 `ArtifactAnalysis`

**Tujuan:** menampilkan analisis artefak dalam format yang konsisten.

Bagian yang dapat digunakan:

- Konteks.
- Tujuan.
- Landasan teori.
- Kekuatan.
- Keterbatasan.
- Bukti.
- Rekomendasi.

Sesuaikan struktur dengan jenis artefak. Jangan mengisi bagian yang tidak relevan hanya demi mengikuti format.

### 6.9 `ReflectionSection`

**Tujuan:** menyajikan refleksi dan rencana pengembangan.

Bagian:

- Pengalaman utama.
- Kekuatan.
- Tantangan.
- Perubahan yang direncanakan.
- Rencana tindak lanjut.
- Indikator evaluasi.

### 6.10 `Badge`

**Tujuan:** menampilkan label singkat, seperti kategori artefak atau identitas siklus.

Aturan:

- Gunakan latar `#DBE2EF` dan teks gelap untuk badge standar.
- Gunakan badge hanya ketika memberikan informasi.
- Hindari penggunaan badge dekoratif secara berlebihan.

### 6.11 `Button`

**Tujuan:** menonjolkan aksi penting.

Varian:

- **Primary:** latar `#3F72AF`, teks putih.
- **Secondary:** latar `#DBE2EF`, teks gelap.
- **Outline:** latar transparan, border biru, teks biru.
- **Text link:** tanpa latar atau border.

Tombol harus mempunyai status default, hover, focus-visible, dan active yang jelas.

---

## 7. Panduan Embed Google Drive

### 7.1 Prinsip

Google Drive digunakan sebagai sumber penyimpanan artefak, sedangkan website bertugas menyajikan konteks, preview, analisis, dan tautan menuju berkas.

Jenis artefak dapat mencakup:

- RPP atau modul ajar.
- Materi pembelajaran.
- Media pembelajaran.
- Video praktik mengajar.
- LKPD atau jobsheet.
- Instrumen penilaian.
- Hasil kerja murid yang telah dianonimkan.
- Umpan balik atau dokumentasi refleksi.

### 7.2 Tata letak embed

- Letakkan judul dan deskripsi sebelum preview.
- Gunakan kontainer dengan border tipis.
- Pertahankan rasio video yang sesuai, umumnya `16:9`.
- Sesuaikan tinggi preview dokumen dengan jenis konten.
- Sediakan tautan **Buka di Google Drive**.
- Jangan menampilkan terlalu banyak iframe sekaligus jika memperlambat halaman.

Contoh CSS:

```css
.embed-frame {
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
}

.embed-frame iframe {
  display: block;
  width: 100%;
  min-height: 420px;
  border: 0;
}

.embed-frame--video iframe {
  aspect-ratio: 16 / 9;
  min-height: 0;
}
```

Sesuaikan tinggi dokumen dan video berdasarkan kebutuhan preview.

### 7.3 Fallback

Jika preview tidak tersedia:

- Tampilkan keterangan bahwa preview tidak dapat dimuat.
- Sediakan tautan ke sumber asli.
- Jangan membiarkan area embed kosong tanpa penjelasan.
- Jangan menganggap semua tautan berbagi Google Drive dapat langsung digunakan sebagai URL iframe.

### 7.4 Privasi

- Periksa izin akses sebelum memublikasikan website.
- Anonimkan identitas murid jika diperlukan.
- Jangan memublikasikan nilai, nama lengkap, wajah, atau data pribadi tanpa izin yang sesuai.
- Periksa isi video, audio, dan tangkapan layar untuk mencegah kebocoran informasi.
- Uji akses menggunakan akun lain atau jendela privat.

---

## 8. Desain Responsif

### 8.1 Pendekatan

Gunakan pendekatan mobile-first. Semua halaman harus dapat digunakan pada layar kecil tanpa horizontal scrolling yang tidak diperlukan.

### 8.2 Breakpoint acuan

| Breakpoint | Rentang         | Perilaku                                |
| ---------- | --------------- | --------------------------------------- |
| Mobile     | `320–639px`     | Satu kolom dan navigasi ringkas         |
| Tablet     | `640–899px`     | Layout satu atau dua kolom              |
| Desktop    | `900px` ke atas | Layout multi-kolom dan navigasi lengkap |

Breakpoint dapat disesuaikan berdasarkan kebutuhan komponen.

### 8.3 Aturan responsif

- Gunakan CSS Grid dan Flexbox.
- Kartu beralih menjadi satu kolom pada ponsel.
- Hero menyesuaikan ukuran heading secara dinamis.
- Tombol dan tautan memiliki area interaksi yang nyaman.
- Embed mengikuti lebar kontainer.
- Hindari lebar tetap yang menyebabkan konten terpotong.
- Menu seluler dapat dibuka, ditutup, dan digunakan dengan keyboard.
- Periksa layout pada lebar `320px`, `375px`, `768px`, dan `1280px`.

---

## 9. Aksesibilitas

Targetkan praktik yang sejalan dengan WCAG 2.2 level AA sejauh dapat diterapkan.

### Aturan utama

- Gunakan HTML semantik.
- Pastikan navigasi dapat dilakukan dengan keyboard.
- Sediakan indikator fokus yang terlihat.
- Gunakan teks alternatif yang sesuai untuk gambar informatif.
- Berikan `title` pada iframe.
- Gunakan label tautan yang menjelaskan tujuan.
- Pastikan heading tersusun secara logis.
- Jangan menggunakan warna sebagai satu-satunya indikator status.
- Hormati preferensi `prefers-reduced-motion`.
- Pastikan kontras teks dan latar memadai.
- Sediakan pesan fallback yang jelas ketika konten eksternal gagal dimuat.

Contoh indikator fokus:

```css
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}
```

### Catatan kontras

Gunakan teks gelap pada `#DBE2EF` dan `#F9F7F7`. Untuk tombol `#3F72AF`, teks putih merupakan pilihan utama. Periksa kembali kontras untuk teks kecil dan elemen interaktif sebelum deployment.

---

## 10. Interaksi dan Animasi

Interaksi harus membantu pengguna memahami respons antarmuka, bukan menjadi dekorasi utama.

### Aturan

- Transisi standar sekitar `150–200ms`.
- Hover kartu boleh menambahkan shadow ringan.
- Tombol berubah ke warna hover yang lebih gelap.
- Tautan aktif harus tetap terlihat tanpa hover.
- Informasi penting tidak boleh hanya muncul saat hover.
- Hindari animasi berlebihan dan efek parallax.
- Hormati pengaturan pengurangan gerakan pada perangkat.

Contoh CSS:

```css
.button,
.artifact-card {
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.button--primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.button--primary:hover {
  background: var(--color-primary-hover);
}

.artifact-card:hover {
  box-shadow: var(--shadow-hover);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Design Tokens CSS

Tempatkan token global di `src/styles/tokens.css`. File ini menjadi sumber utama warna, tipografi, spacing, radius, dan shadow.

```css
:root {
  /* Primary color palette */
  --color-primary: #3f72af;
  --color-primary-hover: #315d91;
  --color-primary-active: #274b75;
  --color-primary-light: #dbe2ef;
  --color-background: #f9f7f7;

  /* Supporting colors */
  --color-surface: #ffffff;
  --color-text: #222831;
  --color-text-muted: #526174;
  --color-border: #c9d4e4;
  --color-on-primary: #ffffff;
  --color-focus: #3f72af;

  /* Status colors */
  --color-warning-bg: #fff4d6;
  --color-warning-text: #76530a;
  --color-danger: #b42318;
  --color-success: #246b4a;

  /* Typography */
  --font-body: "Poppins", sans-serif;
  --font-heading: "Poppins", sans-serif;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: clamp(2rem, 4vw, 3.25rem);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Layout */
  --container-width: 1120px;
  --reading-width: 760px;
  --page-gutter: 32px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-pill: 999px;

  /* Shadow */
  --shadow-card: 0 6px 24px rgba(34, 40, 49, 0.06);
  --shadow-hover: 0 10px 28px rgba(34, 40, 49, 0.1);

  /* Motion */
  --transition-fast: 180ms ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-body);
  font-weight: var(--font-regular);
  font-size: var(--text-base);
  line-height: 1.7;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-semibold);
  line-height: 1.3;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: var(--color-primary);
  text-underline-offset: 0.18em;
}

a:hover {
  color: var(--color-primary-hover);
}

button,
input,
textarea,
select {
  font: inherit;
}

.container {
  width: min(calc(100% - 2 * var(--page-gutter)), var(--container-width));
  margin-inline: auto;
}

.prose {
  max-width: var(--reading-width);
}

:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

@media (max-width: 899px) {
  :root {
    --page-gutter: 24px;
  }
}

@media (max-width: 639px) {
  :root {
    --page-gutter: 16px;
  }
}
```

### Aturan implementasi token

- Jangan menuliskan kode warna berulang pada banyak komponen jika token sudah tersedia.
- Gunakan token untuk menjaga konsistensi kedua website.
- Tambahkan token baru hanya jika memiliki fungsi yang jelas.
- Hindari mendefinisikan ulang token global pada komponen individual tanpa alasan kuat.

---

## 12. Panduan Konten dan Microcopy

### 12.1 Gaya bahasa

Gunakan bahasa Indonesia yang jelas, akademis, profesional, dan reflektif.

Gunakan istilah secara konsisten:

- Murid.
- Praktik mengajar.
- Artefak pembelajaran.
- Analisis artefak.
- Refleksi.
- Rencana tindak lanjut.

### 12.2 Penulisan konten

- Bedakan fakta, interpretasi, dan rencana perbaikan.
- Jelaskan konteks sebelum menganalisis artefak.
- Hubungkan klaim dengan bukti yang tersedia.
- Hindari klaim dampak pembelajaran yang tidak dapat dibuktikan.
- Hindari paragraf yang terlalu panjang.
- Periksa ejaan dan tata bahasa sebelum publikasi.
- Hindari teks placeholder ketika website siap dinilai.

### 12.3 Label aksi

Gunakan label yang spesifik:

- `Lihat RPP`
- `Tonton Video Praktik`
- `Buka Artefak di Google Drive`
- `Baca Analisis`
- `Lihat Refleksi`
- `Lihat Rencana Tindak Lanjut`

Hindari label yang tidak menjelaskan tujuan, seperti “Klik di sini” atau “Lihat selengkapnya” tanpa konteks.

---

## 13. Struktur Berkas yang Disarankan

Struktur berikut merupakan rekomendasi untuk menjaga komponen dan gaya tetap terorganisasi.

```text
src/
├── components/
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   ├── PortfolioHero.astro
│   ├── ProfileSection.astro
│   ├── SectionHeading.astro
│   ├── ArtifactCard.astro
│   ├── ArtifactPreview.astro
│   ├── ArtifactAnalysis.astro
│   └── ReflectionSection.astro
├── layouts/
│   └── PortfolioLayout.astro
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── components.css
├── content/
│   └── portfolios/
│       ├── uts/
│       └── uas/
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

### Prinsip arsitektur

- Gunakan layout bersama untuk kerangka halaman.
- Gunakan komponen bersama untuk pola antarmuka yang sama.
- Pisahkan konten UTS dan UAS melalui konfigurasi atau koleksi konten.
- Hindari menggandakan markup hanya karena konten berbeda.
- Jangan menanamkan nama siklus, URL, atau label UTS/UAS secara permanen dalam komponen bersama.
- Pastikan seluruh tautan dan aset berfungsi dengan konfigurasi `base` Astro pada lingkungan deployment.

---

## 14. Checklist Quality Assurance

### Visual

- [ ] Tiga warna utama diterapkan secara konsisten.
- [ ] Poppins digunakan pada seluruh elemen antarmuka.
- [ ] Warna teks dan latar nyaman dibaca.
- [ ] Jarak antarkomponen konsisten.
- [ ] Kartu dan panel menggunakan border serta shadow secara moderat.
- [ ] Tampilan UTS dan UAS konsisten tetapi memiliki konten berbeda.

### Navigasi

- [ ] Setiap website memiliki Beranda, Analisis Artefak, dan Refleksi.
- [ ] Halaman aktif terlihat jelas.
- [ ] Navigasi bekerja pada desktop dan ponsel.
- [ ] Tautan UTS dan UAS tidak tertukar.
- [ ] Navigasi dapat dioperasikan dengan keyboard.

### Konten dan artefak

- [ ] RPP dan video praktik mudah ditemukan di Beranda.
- [ ] Preview artefak mempunyai judul dan deskripsi.
- [ ] Setiap embed memiliki tautan sumber alternatif.
- [ ] Tautan Google Drive dapat diakses oleh penilai.
- [ ] Analisis mencakup aspek yang relevan dan didukung bukti.
- [ ] Refleksi mempunyai rencana tindak lanjut yang konkret.
- [ ] Tidak ada informasi murid yang dipublikasikan secara tidak semestinya.

### Responsivitas dan aksesibilitas

- [ ] Halaman tidak mengalami horizontal scrolling yang tidak diperlukan.
- [ ] Teks dapat dibaca pada layar kecil.
- [ ] Gambar informatif mempunyai teks alternatif.
- [ ] Iframe memiliki judul.
- [ ] Fokus keyboard terlihat jelas.
- [ ] Kontras warna telah diperiksa.
- [ ] Animasi menghormati `prefers-reduced-motion`.
- [ ] Embed memiliki fallback yang berfungsi.

### Teknis

- [ ] Build Astro berhasil.
- [ ] Semua halaman dapat diakses melalui URL deployment yang benar.
- [ ] Tidak ada tautan rusak atau halaman kosong.
- [ ] Aset dan stylesheet dimuat dengan benar.
- [ ] Font Poppins dimuat atau memiliki fallback.
- [ ] Tidak ada kesalahan konsol yang mengganggu fungsi website.

---

## 15. Kriteria Selesai

Design system dianggap diterapkan dengan baik apabila:

1. Kedua website menggunakan warna utama `#3F72AF`, `#DBE2EF`, dan `#F9F7F7`.
2. Poppins menjadi font utama dengan fallback yang sesuai.
3. Komponen, tipografi, spacing, dan navigasi konsisten.
4. Masing-masing website memiliki tiga halaman utama yang jelas.
5. RPP, video, analisis artefak, dan refleksi mudah ditemukan.
6. Seluruh konten dapat diakses melalui desktop, tablet, dan ponsel.
7. Aksesibilitas, privasi, dan integritas artefak diperhatikan.
8. Website siap dipublikasikan tanpa tautan rusak atau konten placeholder.

**Prinsip akhir:** desain harus membantu dosen menemukan, memahami, dan menilai bukti perkembangan kompetensi mengajar. Visual mendukung isi portofolio, bukan menggantikannya.
