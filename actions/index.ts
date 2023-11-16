import { Chat, chats } from "@/lib/types";
import fs from "fs";
import path from "path";

export async function getChats() {
	const filePath = path.join(process.cwd(), "lib", "data.json");
	const raw = await fs.promises.readFile(filePath, "utf-8");
	let chats = JSON.parse(raw) as Chat[];
	return chats;
}

export async function getChat(chatId: string) {
	const filePath = path.join(process.cwd(), "lib", "data.json");
	const raw = await fs.promises.readFile(filePath, "utf-8");
	let chats = JSON.parse(raw) as Chat[];
	const chat = chats.filter(chat => chat.id === chatId)[0];
	return chat;
}

// export async function updateChats(chat: Chat) {
//   const updated = chats.push(chat);
//   return updated;
// }
