import { Chat } from "@/lib/data";
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = (await req.json()) as Chat;

	const filePath = path.join(process.cwd(), "lib", "data.json");
	const raw = await fs.promises.readFile(filePath, "utf-8");
	let chats = JSON.parse(raw);
	chats.push(body);

	await fs.promises.writeFile(filePath, JSON.stringify(chats), "utf-8");

  const updated = await fs.promises.readFile(filePath, "utf-8");
	return NextResponse.json(JSON.parse(updated));
}
