import type { ReactNode } from "react";

type AlertColor =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "info"
	| "light"
	| "dark";

const alertStyles: Record<AlertColor, string> = {
	primary: "border-blue-200 bg-blue-100 text-blue-800",
	secondary: "border-slate-200 bg-slate-100 text-slate-800",
	success: "border-emerald-200 bg-emerald-100 text-emerald-800",
	danger: "border-red-200 bg-red-100 text-red-800",
	warning: "border-amber-200 bg-amber-100 text-amber-900",
	info: "border-cyan-200 bg-cyan-100 text-cyan-800",
	light: "border-gray-200 bg-white text-gray-800",
	dark: "border-gray-700 bg-gray-800 text-white",
};

function AlertLink({ href = "#", children }: { href?: string; children: ReactNode }) {
	return (
		<a href={href} className="font-semibold underline underline-offset-2 hover:no-underline">
			{children}
		</a>
	);
}

function Alert({ color, children }: { color: AlertColor; children: ReactNode }) {
	return (
		<div
			className={`rounded-md border px-4 py-3 text-sm font-medium ${alertStyles[color]}`}
			role="alert"
		>
			{children}
		</div>
	);
}

export const AlertLinkColorExample = () => {
	const alerts: AlertColor[] = [
		"primary",
		"secondary",
		"success",
		"danger",
		"warning",
		"info",
		"light",
		"dark",
	];

	return (
		<div className="grid gap-3">
			{alerts.map((color) => (
				<Alert key={color} color={color}>
					A simple {color} alert with <AlertLink>an example link</AlertLink>. Give it a click if you
					like.
				</Alert>
			))}
		</div>
	);
};

export default AlertLinkColorExample;
