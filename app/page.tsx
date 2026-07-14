const demoTarget = "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.png";
const steps = [
  { number: "01", title: "Siapkan gambar", text: "Buka kartu contoh di perangkat lain atau cetak gambarnya." },
  { number: "02", title: "Mulai kamera", text: "Tekan Mulai AR dan izinkan browser menggunakan kamera belakang." },
  { number: "03", title: "Arahkan kamera", text: "Pastikan seluruh gambar terlihat. Bunga 3D akan muncul di atasnya." },
];

export default function Home() {
  return <main>
    <nav className="nav shell">
      <a className="brand" href="#top"><span className="brand-mark">AR</span><span>WebAR Edukasi</span></a>
      <a className="nav-link" href="#cara-kerja">Cara kerja</a>
    </nav>
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Prototipe pembelajaran interaktif</p>
        <h1>Gambar yang bisa <em>hidup.</em></h1>
        <p className="lede">Arahkan kamera ke sebuah gambar dan lihat objek 3D muncul tepat di atasnya—langsung dari browser, tanpa instal aplikasi.</p>
        <div className="actions">
          <a className="button primary" href="/ar/index.html">Mulai pengalaman AR <span>↗</span></a>
          <a className="button secondary" href={demoTarget} target="_blank" rel="noreferrer">Buka gambar target</a>
        </div>
        <p className="compatibility"><span>●</span> Gunakan Chrome atau Safari di ponsel dengan kamera</p>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="flower">
          {Array.from({ length: 7 }).map((_, index) => <span key={index} style={{ "--petal": index } as React.CSSProperties} />)}
          <i />
        </div>
        <div className="scan-line" /><p>IMAGE TARGET <strong>TERDETEKSI</strong></p>
      </div>
    </section>
    <section className="how shell" id="cara-kerja">
      <div className="section-heading"><p className="eyebrow"><span /> Tiga langkah sederhana</p><h2>Dari gambar menjadi pengalaman.</h2></div>
      <div className="steps">{steps.map(step => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>
    <footer className="shell"><span>WebAR Edukasi · MVP</span><span>Next.js · MindAR · A-Frame</span></footer>
  </main>;
}
