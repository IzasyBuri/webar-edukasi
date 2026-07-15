# AI Coding Agent Prompt — WebAR Edukasi Sederhana (Deadline Besok)

You are a senior frontend engineer experienced with Next.js, MindAR, A-Frame, and mobile WebAR.

Upgrade the existing `webar-edukasi` repository into a **small, stable educational demo for elementary-school children**.

Repository and production:

- `https://github.com/IzasyBuri/webar-edukasi`
- `https://webar-edukasi.vercel.app`
- deployment is automatic from GitHub `main` to Vercel.

## Non-negotiable priority

This application will be used **tomorrow**. Optimize for simplicity, stability, and easy testing today.

Do not build:

- Supabase;
- database;
- authentication;
- admin panel;
- complex upload system;
- complex X/Y/Z transform editor;
- quiz system;
- analytics;
- automatic `.mind` compilation;
- narration or text-to-speech unless every required feature is already complete and stable.

Do not overengineer the project. Use static local files and one simple data file.

## Existing working state

The repository already has:

- Next.js 16 and React 19;
- a working landing page;
- MindAR 1.2.5 and A-Frame 1.5;
- image tracking that works on Android Chrome;
- a procedural Rafflesia placeholder;
- a production Vercel deployment.

The existing mobile AR fixes must not regress:

- the AR scene uses the full portrait browser viewport with `100dvh`;
- MindAR's camera video is visible on `z-index: 0`;
- the transparent A-Frame scene/canvas is on `z-index: 1`;
- application controls are above both, around `z-index: 10`;
- the A-Frame canvas background remains transparent;
- do not force the camera video to `width: 100vw` and `height: 100dvh`;
- allow MindAR to calculate the video size and crop so tracking and model placement stay aligned;
- `targetFound` and `targetLost` must continue working;
- the object becomes visible immediately after `targetFound`;
- camera tracks must stop when leaving the AR page.

Inspect the repository and current `public/ar/index.html` before changing anything.

## Required educational assets

The application contains exactly four educational items:

1. **Rafflesia Arnoldii**
2. **Batik Kalpataru**
3. **Wayang Semar**
4. **Candi Borobudur** or **Candi Pawon**, depending on which final asset file is available

Do not add unrelated sample content.

Use correct slugs:

```text
rafflesia-arnoldii
batik-kalpataru
wayang-semar
candi-borobudur
```

If the supplied fourth asset is Candi Pawon rather than Borobudur, change only its data entry and folder slug to `candi-pawon`. Do not display Borobudur information for a Pawon asset.

## Simple asset structure

Use this folder convention:

```text
public/assets/
├── rafflesia-arnoldii/
│   ├── target.jpg
│   ├── target.mind
│   ├── object.glb
│   └── thumbnail.jpg
├── batik-kalpataru/
│   ├── target.jpg
│   ├── target.mind
│   ├── object.glb OR object.webp
│   └── thumbnail.jpg
├── wayang-semar/
│   ├── target.jpg
│   ├── target.mind
│   ├── object.glb OR object.webp
│   └── thumbnail.jpg
└── candi-borobudur/
    ├── target.jpg
    ├── target.mind
    ├── object.glb
    └── thumbnail.jpg
```

Support two display types:

- `model`: render a `.glb` using `a-gltf-model`;
- `image`: render a `.png`, `.webp`, or `.jpg` on an A-Frame plane.

This allows Batik Kalpataru and Wayang Semar to use clean 2D images if suitable 3D models are not available. Do not delay the demo by forcing every item to be a complicated 3D model.

The target image and displayed object are different concepts:

- `target.jpg` is recognized by the camera;
- `target.mind` is the compiled MindAR tracking data;
- `object.glb` or `object.webp` is what appears above the target.

## Simple data file

Create one typed data file, for example:

```text
data/ar-objects.ts
```

Each entry should contain only:

```ts
type ArObject = {
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
```

Keep `scale` as one number. Do not expose separate X/Y/Z scale controls. Hardcode a sensible position and rotation inside the viewer, with a small optional per-item override only if an asset visibly requires it.

All public catalog and AR information must come from this data file. Do not duplicate the descriptions in several HTML files.

## Child-friendly draft content

Keep every short description to one sentence. Keep the full explanation to two or three short sentences. Show exactly three facts.

### Rafflesia Arnoldii

```text
Category: Tumbuhan
Short description: Bunga raksasa yang hidup di hutan Sumatra.
Description: Rafflesia arnoldii dikenal sebagai salah satu bunga tunggal terbesar di dunia. Tumbuhan ini tidak memiliki daun, batang, dan akar sendiri. Rafflesia hidup dengan mengambil nutrisi dari tumbuhan inangnya.
Facts:
- Bunganya dapat tumbuh hingga berukuran sangat besar.
- Rafflesia hidup di kawasan hutan Sumatra.
- Aromanya membantu menarik serangga penyerbuk.
```

### Batik Kalpataru

```text
Category: Budaya
Short description: Motif batik yang terinspirasi dari pohon kehidupan.
Description: Kalpataru sering digambarkan sebagai pohon kehidupan. Dalam karya batik, motif ini dapat mengingatkan kita untuk menjaga kehidupan dan lingkungan. Bentuk serta warna motifnya dapat berbeda sesuai karya pembuatnya.
Facts:
- Kalpataru dikenal sebagai lambang pohon kehidupan.
- Motifnya mengajak kita menghargai alam.
- Batik dibuat dengan teknik dan ketelitian khusus.
```

Do not claim a specific regional origin unless the supplied Batik Kalpataru asset and source confirm it.

### Wayang Semar

```text
Category: Budaya
Short description: Tokoh wayang yang bijaksana, sederhana, dan suka memberi nasihat.
Description: Semar adalah tokoh punakawan dalam tradisi wayang Jawa. Ia sering tampil sederhana dan lucu, tetapi memiliki kebijaksanaan. Semar mengajarkan agar kita tetap rendah hati dan berbuat baik.
Facts:
- Semar termasuk kelompok tokoh punakawan.
- Ia dikenal bijaksana dan suka memberi nasihat.
- Cerita wayang mengandung banyak pelajaran kehidupan.
```

### Candi Borobudur

```text
Category: Bangunan
Short description: Candi Buddha bersejarah yang berada di Magelang, Jawa Tengah.
Description: Borobudur adalah candi Buddha besar dengan banyak relief dan stupa. Relief pada dindingnya menggambarkan cerita serta ajaran kehidupan. Candi ini merupakan warisan budaya yang perlu dijaga bersama.
Facts:
- Borobudur memiliki banyak relief pada dindingnya.
- Di bagian atas terdapat stupa-stupa berbentuk lonceng.
- Candi ini berada di wilayah Magelang, Jawa Tengah.
```

If the fourth asset is Candi Pawon, replace all Borobudur copy with short, accurate Pawon copy. Never mix the two.

## Public catalog

Update the landing page to show four large educational cards.

Each card shows:

- thumbnail;
- name;
- category;
- short description;
- one large `Mulai AR` button.

The catalog must be usable by elementary-school children:

- large readable text;
- large tap targets;
- simple Indonesian words;
- clear contrast;
- no dense paragraphs;
- no unnecessary settings;
- responsive on Android portrait screens.

If an asset file has not been supplied, show a clear `Aset belum tersedia` state rather than crashing or linking to a missing file.

## AR URLs and viewer

Create one reusable AR viewer and use clean URLs:

```text
/ar/rafflesia-arnoldii
/ar/batik-kalpataru
/ar/wayang-semar
/ar/candi-borobudur
```

Do not create four copies of the full AR implementation. The viewer must load the correct data from the slug.

The implementation may use a lightweight static viewer plus a slug/query parameter if that is safer with MindAR and A-Frame. Preserve the clean public URLs through a Next.js route or rewrite.

The viewer must:

1. show a loading message;
2. request camera permission;
3. load the correct `.mind` file;
4. load the correct GLB model or 2D image;
5. display `Mencari gambar target…` before detection;
6. show `{name} ditemukan` when detected;
7. show a friendly retry message when the target is lost;
8. never display a blank green background over the camera;
9. show a clear asset-load error without breaking the camera;
10. keep Android portrait camera alignment working.

## Information shown in AR

Before detection, the bottom card says:

```text
Arahkan kamera ke seluruh gambar.
Jaga ponsel tetap stabil dan gunakan pencahayaan yang cukup.
```

After detection, replace it with a compact card:

```text
Rafflesia Arnoldii
Bunga raksasa yang hidup di hutan Sumatra.
[Pelajari]
```

`Pelajari` opens a simple mobile bottom sheet containing:

- name;
- category;
- two or three short explanatory sentences;
- exactly three fact cards;
- a large `Tutup` button.

Do not cover the full AR object by default. The bottom sheet may cover the screen only after the child presses `Pelajari`.

Do not add audio, quiz, login, or extra navigation in this deadline version.

## Simple asset replacement workflow

Document this workflow in `README.md`:

1. create or obtain the final `.glb` or transparent image;
2. create a target image;
3. compile the target image using the official MindAR compiler:
   `https://hiukim.github.io/mind-ar-js-doc/tools/compile/`;
4. place the files in the correct `public/assets/{slug}/` folder;
5. edit one entry in `data/ar-objects.ts`;
6. run lint and build;
7. commit and push; Vercel deploys automatically.

Explain recommended asset limits:

- GLB ideally below 5 MB;
- images ideally below 2 MB;
- use compressed textures;
- use filenames without spaces;
- test every target on the actual Android phone.

## Implementation order

Work in this exact order:

1. Inspect the current repository and preserve all working camera-layer fixes.
2. Create `TASKLIST.md` with a short checklist.
3. Create the typed four-item data file.
4. Build the four-card public catalog.
5. Refactor the current AR page into one reusable slug-based viewer.
6. Support GLB and 2D image display types.
7. Add the compact information card and `Pelajari` bottom sheet.
8. Add missing-asset and load-error states.
9. Update the README with the simple replacement workflow.
10. Run lint and production build.
11. Test the four URLs on an Android portrait viewport.

Do not start optional work until these items are complete.

## Acceptance criteria

The task is complete only when:

- the landing page shows exactly four educational items;
- all text is simple Indonesian suitable for elementary-school children;
- every available item can open its own AR URL;
- the viewer loads data based on the slug;
- GLB and 2D image assets are both supported;
- the correct target file is loaded per object;
- target detection reveals the correct object;
- the camera remains visible behind the object;
- portrait layout fills the browser viewport;
- `Pelajari` shows the description and exactly three facts;
- missing files show a friendly message rather than crashing;
- replacing an asset only requires changing files and one data entry;
- `npm run lint` succeeds;
- `npm run build` succeeds.

## Final report

At completion, report only:

- files changed;
- which of the four items have complete assets;
- which asset files are still missing;
- lint and build results;
- exact steps to test each item on Android;
- any critical limitation that affects tomorrow's demonstration.

Do not claim success if only Rafflesia works or if the other three cards link to broken AR pages.
