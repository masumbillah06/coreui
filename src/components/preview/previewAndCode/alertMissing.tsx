"use client";

import { useState } from "react";


export const AlertDismissingExample = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	const handleClose = () => {
		alert("👋 Well, hi there! Thanks for dismissing me.");
		setIsVisible(false);
	};

	return (
		<div
			className="flex items-center justify-between gap-4 rounded-md border border-amber-200 bg-amber-100 px-4 py-3 text-sm text-amber-900"
			role="alert"
		>
			<div>
				<strong className="font-semibold">Go right ahead</strong> and click that dismiss over there
				on the right.
			</div>
			<button
				type="button"
				className="shrink-0 rounded px-2 text-lg leading-none text-amber-900/70 hover:bg-amber-200 hover:text-amber-950"
				aria-label="Dismiss alert"
				onClick={handleClose}
			>
				&times;
			</button>
		</div>
	);
};

export default AlertDismissingExample;
