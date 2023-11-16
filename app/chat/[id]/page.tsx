import { getChat, getChats } from "@/actions";
import { Chat } from "@/lib/data";
import React from "react";
import { Input } from "../_input";

export default async function Page({
	children,
	params,
}: {
	children: React.ReactNode;
	params: {
		id: string;
	};
}) {
	console.log("[id].page", params.id);
	const chat = (await getChat(params.id)) as Chat;

	return (
		<div className="flex flex-col h-full w-48 px-6 self-start">
			<h2>Main Chat Showing Area</h2>
			<p>Id: {chat.id}</p>
			<p>Message: {chat.message}</p>
			<Input />
		</div>
	);
}
