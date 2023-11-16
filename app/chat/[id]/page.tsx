import { getChat, getChats } from "@/actions";
import { Chat } from "@/lib/types";
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
	const chat = await getChat(params.id);
  if (!chat) return;

	return (
		<div className="flex flex-col h-full flex-1 px-6">
			<h2 className="font-bold underline">Main Chat Showing Area</h2>
			<p>Id: {chat?.id}</p>
			<p>Message: {chat?.message}</p>
			<Input />
		</div>
	);
}
