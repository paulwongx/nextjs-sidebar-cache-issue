"use client";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React from "react";

export function Input() {
	const router = useRouter();
	const inputRef = React.useRef<any>();

	return (
		<div className="absolute bottom-1/2 flex flex-col h-28">
			<div className="flex flex-col space-y-8">
				<label className="text-white">Input Field Below:</label>
				<textarea ref={inputRef} className="text-black w-96 h-48" />
				<button
					className="bg-green-900 px-6 py-3"
					onClick={async () => {
						const value = inputRef?.current.value;
						const chatId = nanoid();
						await fetch("/api/chats/update", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ id: chatId, message: value }),
						}).then(res => res.json());

            await fetch(`/api/revaliadte?path=/chat&type=layout`, {cache: "no-store"});
						router.refresh();
						router.push("/chat/" + chatId);
					}}
				>
					Submit
				</button>
			</div>
		</div>
	);
}
