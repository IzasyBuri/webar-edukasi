import Image from "next/image";
import { arObjects } from "@/data/ar-objects";

const visibleObjects = arObjects.filter(
  (item) => item.slug === "rafflesia-arnoldii" || item.slug === "candi-borobudur",
);

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="WebAR Edukasi, kembali ke atas">
          <span className="brand-mark">AR</span>
          <span>WebAR Edukasi</span>
        </a>
        <span className="header-note">Belajar lewat kamera</span>
      </header>

      <section className="intro shell" id="top">
        <p className="eyebrow">Jelajah Indonesia</p>
        <h1>Temukan cerita di balik gambar.</h1>
        <p className="lede">Pilih satu materi, izinkan kamera, lalu arahkan ponsel ke gambar targetnya.</p>
      </section>

      <section className="catalog shell" aria-labelledby="catalog-title">
        <div className="section-title">
          <h2 id="catalog-title">Pilih materi</h2>
          <span>{visibleObjects.length} pilihan</span>
        </div>
        <div className="cards">
          {visibleObjects.map((item, index) => (
            <article className="card" key={item.slug}>
              <div className="thumbnail">
                <Image src={item.thumbnailUrl} alt={`Ilustrasi ${item.name}`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="card-body">
                <p className="category">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.shortDescription}</p>
                <a className="start-button" href={`/ar/${item.slug}`}>
                  Mulai AR <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="shell">Gunakan Chrome di ponsel Android dan izinkan akses kamera.</footer>
    </main>
  );
}
