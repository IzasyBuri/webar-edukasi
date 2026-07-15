import { getArObject } from "@/data/ar-objects";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const item = getArObject(slug);

  if (!item) {
    return Response.json({ message: "Materi tidak ditemukan." }, { status: 404 });
  }

  return Response.json(item);
}
