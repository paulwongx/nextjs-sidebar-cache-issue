import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

type RevalidatePathType = "page" | "layout" | undefined;

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  const type = (request.nextUrl.searchParams.get("type") ||
    undefined) as RevalidatePathType;

  console.log("api.revalidate.route.path", path, type);

  if (path) {
    revalidatePath(path, type);
    return Response.json({ revalidated: true, path, type, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
