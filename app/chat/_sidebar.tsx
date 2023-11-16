import { getChats } from "@/actions";
import Link from "next/link";

export async function Sidebar() {
	const chats = await getChats();
  console.log("Sidebar.chats.latest", chats.at(-1))

	return (
		<div className="flex flex-col h-full px-6 min-h-screen">
			<h2 className="font-bold underline">Sidebar</h2>
      <Link href="/chat">New Chat</Link>
			{chats.map((chat, index) => (
				<p className="whitespace-nowrap" key={index}>{chat.message.slice(0,20)}</p>
			))}
		</div>
	);
}
