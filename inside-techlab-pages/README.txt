INSIDE TECHLAB — PAKET MULTI-HALAMAN

Struktur folder setelah diekstrak:
inside-techlab-pages/
├── index.html                  ← Landing page / pintu masuk TechLab
├── hardware-academy.html       ← Hardware Academy + Component Catalog
├── pc-builder.html             ← Smart PC Builder + Store Finder
├── troubleshooting-lab.html   ← Troubleshooting Lab
└── software-academy.html      ← Software Academy + Knowledge Quiz

CARA DEPLOY:
1. Ekstrak ZIP ini.
2. Upload folder `inside-techlab-pages` ke root repository GitHub Pages.
3. Pastikan URL landing page menjadi:
   https://insidetkj4.my.id/inside-techlab-pages/
   atau
   https://insidetkj4.my.id/inside-techlab-pages/index.html
4. Di file `index.html` utama website (yang ada di root repository), ubah HANYA link menu TechLab menjadi:
   href="inside-techlab-pages/"
   Jangan mengganti atau menimpa index.html utama website.
5. Commit perubahan dan tunggu GitHub Pages selesai deploy.

PENTING:
- `index.html` di dalam folder `inside-techlab-pages` berbeda dengan `index.html` utama karena berada di folder yang berbeda. Keduanya aman dan tidak bentrok.
- Jangan upload file-file ini langsung menimpa root repository. Semuanya harus berada di folder `inside-techlab-pages`.
- File TechLab lama di root repository jangan dihapus dulu. Hapus hanya setelah halaman baru berhasil dites dan tidak dipakai lagi.

AI GLOBAL:
Memakai Supabase Edge Function `inside-ai` dengan action `techlab_assist` dan sesi Supabase yang sama. Tidak perlu deploy Edge Function baru atau mengubah Inside.AI. Pengiriman pertanyaan membutuhkan login.
Store Finder meminta izin lokasi browser setelah tombol lokasi ditekan dan membuka Google Maps. Harga katalog adalah estimasi, bukan harga realtime.

Catatan: halaman-halaman membawa kode bersama agar modul yang sudah ada tetap berfungsi. Tes semua halaman setelah deploy.
