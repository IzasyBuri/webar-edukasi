# WebAR Edukasi

Starter **image-tracking WebAR** untuk pengalaman belajar interaktif. Pengguna membuka website, mengizinkan kamera, lalu mengarahkan ponsel ke gambar target. Objek 3D akan muncul dan mengikuti posisi gambar tersebut.

## Fitur MVP

- landing page responsif berbahasa Indonesia;
- image tracking menggunakan MindAR;
- AR langsung dari browser tanpa instalasi aplikasi;
- bunga Rafflesia 3D procedural sebagai placeholder;
- target demo resmi MindAR agar proyek langsung dapat diuji;
- struktur folder untuk target kustom dan model GLB;
- siap di-deploy ke Vercel;
- CI untuk lint dan production build.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Kamera dapat digunakan melalui `localhost`, tetapi pengujian pada ponsel memerlukan HTTPS. Cara termudah adalah deployment preview ke Vercel.

## Menguji AR

1. Buka kartu demo melalui tombol **Buka gambar target** di komputer.
2. Buka website melalui ponsel.
3. Tekan **Mulai pengalaman AR** dan izinkan kamera.
4. Arahkan kamera ponsel ke seluruh gambar target.
5. Bunga 3D akan muncul di atas gambar.

Untuk mengganti target, ikuti [`public/targets/README.md`](public/targets/README.md).

## Struktur utama

```text
app/
├── layout.tsx          # Metadata dan root layout
├── page.tsx            # Landing page
└── globals.css         # Tampilan landing page
public/
├── ar/index.html       # Kamera MindAR + A-Frame
├── models/             # Model .glb produksi
└── targets/            # Gambar target dan targets.mind
.github/workflows/      # Pemeriksaan otomatis
```

## Deployment Vercel

1. Import repository ini di Vercel.
2. Framework akan terdeteksi sebagai **Next.js**.
3. Gunakan build command bawaan `npm run build`.
4. Deploy. MVP tidak memerlukan environment variable.

HTTPS dari Vercel diperlukan agar kamera dapat digunakan secara aman di ponsel.

## Tahap berikutnya

- mengganti target demo dengan ilustrasi Rafflesia;
- mengganti bunga procedural dengan `rafflesia.glb`;
- menambahkan audio narasi anak;
- menambahkan panel fakta dan kuis;
- mendukung beberapa kartu edukasi sekaligus.

## Teknologi

Next.js 16 · React 19 · MindAR 1.2.5 · A-Frame 1.5 · Vercel
