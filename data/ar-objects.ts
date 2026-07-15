export type ArObject = {
  slug: string;
  name: string;
  category: "Tumbuhan" | "Budaya" | "Bangunan";
  shortDescription: string;
  description: string;
  facts: [string, string, string];
  thumbnailUrl: string;
  targetImageUrl: string;
  targetMindUrl: string;
  displayType: "model" | "image";
  assetUrl: string;
  scale: number;
};

export const arObjects = [
  {
    slug: "rafflesia-arnoldii",
    name: "Rafflesia Arnoldii",
    category: "Tumbuhan",
    shortDescription: "Bunga raksasa yang hidup di hutan Sumatra.",
    description: "Rafflesia arnoldii dikenal sebagai salah satu bunga tunggal terbesar di dunia. Tumbuhan ini tidak memiliki daun, batang, dan akar sendiri. Rafflesia hidup dengan mengambil nutrisi dari tumbuhan inangnya.",
    facts: [
      "Bunganya dapat tumbuh hingga berukuran sangat besar.",
      "Rafflesia hidup di kawasan hutan Sumatra.",
      "Aromanya membantu menarik serangga penyerbuk.",
    ],
    thumbnailUrl: "/assets/rafflesia-arnoldii/targets.webp",
    targetImageUrl: "/assets/rafflesia-arnoldii/targets.webp",
    targetMindUrl: "/assets/rafflesia-arnoldii/targets.mind",
    displayType: "model",
    assetUrl: "/assets/rafflesia-arnoldii/Rafflesia%20Arnoldii.glb",
    scale: 0.48,
  },
  {
    slug: "batik-kalpataru",
    name: "Batik Kalpataru",
    category: "Budaya",
    shortDescription: "Motif batik yang terinspirasi dari pohon kehidupan.",
    description: "Kalpataru sering digambarkan sebagai pohon kehidupan. Dalam karya batik, motif ini dapat mengingatkan kita untuk menjaga kehidupan dan lingkungan. Bentuk serta warna motifnya dapat berbeda sesuai karya pembuatnya.",
    facts: [
      "Kalpataru dikenal sebagai lambang pohon kehidupan.",
      "Motifnya mengajak kita menghargai alam.",
      "Batik dibuat dengan teknik dan ketelitian khusus.",
    ],
    thumbnailUrl: "/assets/batik-kalpataru/thumbnail.png",
    targetImageUrl: "/assets/batik-kalpataru/target.png",
    targetMindUrl: "/assets/batik-kalpataru/target.mind",
    displayType: "image",
    assetUrl: "/assets/batik-kalpataru/object.png",
    scale: 1.15,
  },
  {
    slug: "wayang-semar",
    name: "Wayang Semar",
    category: "Budaya",
    shortDescription: "Tokoh wayang yang bijaksana, sederhana, dan suka memberi nasihat.",
    description: "Semar adalah tokoh punakawan dalam tradisi wayang Jawa. Ia sering tampil sederhana dan lucu, tetapi memiliki kebijaksanaan. Semar mengajarkan agar kita tetap rendah hati dan berbuat baik.",
    facts: [
      "Semar termasuk kelompok tokoh punakawan.",
      "Ia dikenal bijaksana dan suka memberi nasihat.",
      "Cerita wayang mengandung banyak pelajaran kehidupan.",
    ],
    thumbnailUrl: "/assets/wayang-semar/thumbnail.png",
    targetImageUrl: "/assets/wayang-semar/target.png",
    targetMindUrl: "/assets/wayang-semar/target.mind",
    displayType: "image",
    assetUrl: "/assets/wayang-semar/object.png",
    scale: 1.2,
  },
  {
    slug: "candi-borobudur",
    name: "Candi Borobudur",
    category: "Bangunan",
    shortDescription: "Candi Buddha bersejarah yang berada di Magelang, Jawa Tengah.",
    description: "Borobudur adalah candi Buddha besar dengan banyak relief dan stupa. Relief pada dindingnya menggambarkan cerita serta ajaran kehidupan. Candi ini merupakan warisan budaya yang perlu dijaga bersama.",
    facts: [
      "Borobudur memiliki banyak relief pada dindingnya.",
      "Di bagian atas terdapat stupa-stupa berbentuk lonceng.",
      "Candi ini berada di wilayah Magelang, Jawa Tengah.",
    ],
    thumbnailUrl: "/assets/candi-borobudur/thumbnail.png",
    targetImageUrl: "/assets/candi-borobudur/target.jpg",
    targetMindUrl: "/assets/candi-borobudur/target.mind",
    displayType: "image",
    assetUrl: "/assets/candi-borobudur/object.png",
    scale: 1.15,
  },
] satisfies ArObject[];

export function getArObject(slug: string) {
  return arObjects.find((item) => item.slug === slug);
}
