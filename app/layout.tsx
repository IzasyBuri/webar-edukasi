import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebAR Edukasi",
  description: "Belajar melalui gambar yang hidup dengan teknologi WebAR.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#081713" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
