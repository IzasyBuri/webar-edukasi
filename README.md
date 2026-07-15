# WebAR Edukasi

Demo image-tracking WebAR sederhana untuk empat materi sekolah dasar:

- Rafflesia Arnoldii
- Batik Kalpataru
- Wayang Semar
- Candi Borobudur

Katalog dibuat dengan Next.js. Satu viewer statis menggunakan MindAR 1.2.5 dan A-Frame 1.5 untuk seluruh materi. Data katalog dan viewer berasal dari `data/ar-objects.ts`.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Kamera dapat digunakan melalui `localhost`. Pengujian di ponsel harus menggunakan HTTPS, misalnya deployment preview Vercel.

## URL Materi

```text
/ar/rafflesia-arnoldii
/ar/batik-kalpataru
/ar/wayang-semar
/ar/candi-borobudur
```

Setiap halaman memiliki tombol **Gambar target**. Buka gambar itu di layar lain atau cetak, lalu arahkan seluruh gambar ke kamera ponsel.

## Struktur Aset

```text
public/assets/{slug}/
├── target.png atau target.jpg
├── target.mind
├── object.glb atau object.png
└── thumbnail.png
```

`target.*` adalah gambar yang dikenali kamera. `object.*` adalah objek yang muncul di atas target. Versi deadline memakai ilustrasi 2D lokal agar keempat materi ringan dan dapat diuji tanpa model GLB final.

## Mengganti Aset

1. Siapkan model `.glb` atau gambar transparan `.png`, `.webp`, atau `.jpg`.
2. Siapkan gambar target yang jelas dan kaya detail.
3. Kompilasi gambar target dengan [MindAR Compiler resmi](https://hiukim.github.io/mind-ar-js-doc/tools/compile/).
4. Letakkan file di folder `public/assets/{slug}/` yang sesuai.
5. Ubah satu entri di `data/ar-objects.ts`, termasuk `displayType`, URL, dan `scale`.
6. Jalankan `npm run lint` dan `npm run build`.
7. Commit dan push. Vercel akan deploy otomatis.

Gunakan nama file tanpa spasi. Usahakan GLB di bawah 5 MB dan gambar di bawah 2 MB. Kompres tekstur dan selalu uji setiap target pada ponsel Android sebenarnya.

## Pengujian Android

1. Deploy ke URL HTTPS.
2. Buka salah satu URL materi di Chrome Android dalam posisi portrait.
3. Izinkan kamera belakang.
4. Tekan **Gambar target**, lalu tampilkan target pada perangkat kedua atau cetak targetnya.
5. Arahkan kamera ke seluruh gambar sampai status berubah menjadi `{nama} ditemukan`.
6. Pastikan objek terlihat, tekan **Pelajari**, periksa tiga fakta, lalu tekan **Tutup**.
7. Jauhkan kamera dari target dan pastikan pesan untuk mengarahkan kembali muncul.
8. Ulangi untuk keempat URL.

## Pemeriksaan

```bash
npm run lint
npm run build
```

Tidak ada database, autentikasi, panel admin, audio, atau kuis pada versi deadline ini.
