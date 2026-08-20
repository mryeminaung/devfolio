"use client";

import { useEffect } from "react";

export default function CodeBlockCopy() {
	useEffect(() => {
		const pres = document.querySelectorAll(".prose-blog pre");

		pres.forEach((pre) => {
			if (pre.querySelector(".code-copy-btn")) return;

			const btn = document.createElement("button");
			btn.className = "code-copy-btn";
			btn.textContent = "Copy";
			btn.addEventListener("click", () => {
				const code = pre.querySelector("code");
				if (code) {
					navigator.clipboard.writeText(code.textContent || "");
					btn.textContent = "Copied!";
					setTimeout(() => (btn.textContent = "Copy"), 2000);
				}
			});
			pre.appendChild(btn);
		});
	}, []);

	return null;
}
