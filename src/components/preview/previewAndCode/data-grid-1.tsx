"use client";

import { useMemo, useState } from "react";
import { Download, Search, SlidersHorizontal } from "lucide-react";

const firstNames = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];
const lastNames = ["Smith", "Jones", "Brown", "Taylor", "Wilson", "Davies", "Evans", "Thomas", "Roberts", "Walker"];
const departments = ["Engineering", "Sales", "Marketing", "Support", "Finance", "People"];
const roles = ["Manager", "Lead", "Senior", "Junior", "Contractor"];
const statuses = ["active", "invited", "suspended"] as const;
const countries = ["Poland", "Germany", "France", "Spain", "Italy", "United States", "United Kingdom"];
const cities = ["Warsaw", "Berlin", "Paris", "Madrid", "Rome", "New York", "London"];

type Status = (typeof statuses)[number];
type Employee = {
	id: number;
	name: string;
	email: string;
	department: string;
	role: string;
	status: Status;
	salary: number;
	rating: number;
	projects: number;
	country: string;
	city: string;
	startDate: string;
	lastActive: string;
	phone: string;
};

type ColumnKey = keyof Employee;
type SortState = { key: ColumnKey; direction: "asc" | "desc" } | null;

const badges: Record<Status, string> = {
	active: "bg-emerald-100 text-emerald-700",
	invited: "bg-cyan-100 text-cyan-700",
	suspended: "bg-red-100 text-red-700",
};

const columns: { key: ColumnKey; label: string; width: string; filter?: "select" | "number" | "date" }[] = [
	{ key: "id", label: "#", width: "w-16" },
	{ key: "name", label: "Name", width: "w-44" },
	{ key: "email", label: "Email", width: "w-56" },
	{ key: "department", label: "Department", width: "w-40", filter: "select" },
	{ key: "role", label: "Role", width: "w-32", filter: "select" },
	{ key: "status", label: "Status", width: "w-32", filter: "select" },
	{ key: "salary", label: "Salary", width: "w-32", filter: "number" },
	{ key: "rating", label: "Rating", width: "w-28", filter: "number" },
	{ key: "projects", label: "Projects", width: "w-32", filter: "number" },
	{ key: "country", label: "Country", width: "w-40", filter: "select" },
	{ key: "city", label: "City", width: "w-36" },
	{ key: "startDate", label: "Started", width: "w-36", filter: "date" },
	{ key: "lastActive", label: "Last active", width: "w-36", filter: "date" },
	{ key: "phone", label: "Phone", width: "w-40" },
];

const items: Employee[] = Array.from({ length: 10000 }, (_, index) => ({
	id: index + 1,
	name: `${firstNames[index % firstNames.length]} ${lastNames[index % lastNames.length]}`,
	email: `user${index + 1}@example.com`,
	department: departments[index % departments.length],
	role: roles[index % roles.length],
	status: statuses[index % statuses.length],
	salary: 45000 + (index % 60) * 1500,
	rating: ((index % 9) + 1) / 2,
	projects: (index % 24) + 1,
	country: countries[index % countries.length],
	city: cities[index % cities.length],
	startDate: new Date(2021, index % 12, (index % 28) + 1).toISOString(),
	lastActive: new Date(2026, index % 6, (index % 27) + 1).toISOString(),
	phone: `+1 555 ${String(1000 + (index % 9000))}`,
}));

const currency = (value: number) => value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const formatDate = (value: string) => new Date(value).toLocaleDateString("en-US");

function getUniqueValues(key: ColumnKey) {
	return Array.from(new Set(items.map((item) => String(item[key])))).sort();
}

export default function DataGridOne() {
	const [search, setSearch] = useState("");
	const [pageSize, setPageSize] = useState(20);
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState<SortState>(null);
	const [filters, setFilters] = useState<Record<string, string>>({});
	const [selected, setSelected] = useState<Set<number>>(new Set());
	const [visibleColumns, setVisibleColumns] = useState<Set<ColumnKey>>(
		new Set(columns.map((column) => column.key).filter((key) => !["projects", "city", "lastActive", "phone"].includes(key))),
	);

	const filteredItems = useMemo(() => {
		const normalizedSearch = search.toLowerCase();
		const result = items.filter((item) => {
			const matchesSearch = !normalizedSearch || Object.values(item).some((value) => String(value).toLowerCase().includes(normalizedSearch));
			const matchesFilters = Object.entries(filters).every(([key, value]) => !value || String(item[key as ColumnKey]).toLowerCase().includes(value.toLowerCase()));
			return matchesSearch && matchesFilters;
		});

		if (!sort) return result;
		return [...result].sort((firstItem, secondItem) => {
			const firstValue = firstItem[sort.key];
			const secondValue = secondItem[sort.key];
			const comparison = firstValue < secondValue ? -1 : firstValue > secondValue ? 1 : 0;
			return sort.direction === "asc" ? comparison : -comparison;
		});
	}, [filters, search, sort]);

	const pageCount = Math.max(1, Math.ceil(filteredItems.length / pageSize));
	const currentPage = Math.min(page, pageCount);
	const visibleItems = filteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);
	const displayedColumns = columns.filter((column) => visibleColumns.has(column.key));

	const toggleSort = (key: ColumnKey) => {
		setSort((currentSort) => currentSort?.key === key
			? { key, direction: currentSort.direction === "asc" ? "desc" : "asc" }
			: { key, direction: "asc" });
		setPage(1);
	};

	const toggleSelected = (id: number) => {
		setSelected((currentSelected) => {
			const nextSelected = new Set(currentSelected);
			if (nextSelected.has(id)) nextSelected.delete(id);
			else nextSelected.add(id);
			return nextSelected;
		});
	};

	const toggleAllVisible = () => {
		setSelected((currentSelected) => {
			const nextSelected = new Set(currentSelected);
			const allSelected = visibleItems.every((item) => nextSelected.has(item.id));
			visibleItems.forEach((item) => allSelected ? nextSelected.delete(item.id) : nextSelected.add(item.id));
			return nextSelected;
		});
	};

	const exportCsv = () => {
		const header = displayedColumns.map((column) => column.label).join(",");
		const rows = filteredItems.map((item) => displayedColumns.map((column) => JSON.stringify(String(item[column.key]))).join(","));
		const blob = new Blob([[header, ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "employees.csv";
		link.click();
		URL.revokeObjectURL(link.href);
	};

	return (
		<div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-3">
				<label className="relative min-w-56 flex-1 sm:max-w-sm">
					<Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
					<input value={search} onChange={(event) => { setSearch(event.target.value); setPage(1); }} placeholder="Search employees..." className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
				</label>
				<div className="flex items-center gap-2">
					<button type="button" onClick={exportCsv} className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"><Download className="size-4" /> Export</button>
					<details className="relative">
						<summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"><SlidersHorizontal className="size-4" /> Columns</summary>
						<div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-slate-200 bg-white p-2 shadow-lg">
							{columns.filter((column) => column.key !== "id").map((column) => <label key={column.key} className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-700"><input type="checkbox" checked={visibleColumns.has(column.key)} onChange={() => setVisibleColumns((current) => { const next = new Set(current); if (next.has(column.key)) next.delete(column.key); else next.add(column.key); return next; })} /> {column.label}</label>)}
						</div>
					</details>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-[1100px] border-collapse text-left text-sm">
					<thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
						<tr>
							<th className="w-10 px-3 py-3"><input type="checkbox" aria-label="Select visible rows" checked={visibleItems.length > 0 && visibleItems.every((item) => selected.has(item.id))} onChange={toggleAllVisible} /></th>
							{displayedColumns.map((column) => <th key={column.key} className={`${column.width} px-3 py-3`}><button type="button" onClick={() => toggleSort(column.key)} className="whitespace-nowrap font-semibold hover:text-slate-900">{column.label}{sort?.key === column.key ? (sort.direction === "asc" ? " ↑" : " ↓") : ""}</button>{column.filter && <select aria-label={`Filter ${column.label}`} value={filters[column.key] ?? ""} onChange={(event) => { setFilters((current) => ({ ...current, [column.key]: event.target.value })); setPage(1); }} className="mt-2 block w-full rounded border border-slate-200 bg-white px-1 py-1 text-xs font-normal normal-case tracking-normal text-slate-600"><option value="">All</option>{getUniqueValues(column.key).map((value) => <option key={value} value={value}>{column.key === "salary" ? currency(Number(value)) : value}</option>)}</select>}</th>)}
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-100">
						{visibleItems.map((item) => <tr key={item.id} className={selected.has(item.id) ? "bg-blue-50" : "hover:bg-slate-50"}>
							<td className="px-3 py-3"><input type="checkbox" aria-label={`Select ${item.name}`} checked={selected.has(item.id)} onChange={() => toggleSelected(item.id)} /></td>
							{displayedColumns.map((column) => <td key={column.key} className="whitespace-nowrap px-3 py-3 text-slate-700">{column.key === "status" ? <span className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${badges[item.status]}`}>{item.status}</span> : column.key === "salary" ? currency(item.salary) : column.key === "startDate" || column.key === "lastActive" ? formatDate(item[column.key]) : String(item[column.key])}</td>)}
						</tr>)}
					</tbody>
				</table>
				{visibleItems.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No employees match the current filters.</p>}
			</div>
			<div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-3 py-3 text-sm text-slate-600">
				<span>{selected.size} selected · {filteredItems.length.toLocaleString()} results</span>
				<div className="flex items-center gap-2">
					<label>Rows <select value={pageSize} onChange={(event) => { setPageSize(Number(event.target.value)); setPage(1); }} className="rounded border border-slate-300 bg-white px-2 py-1"><option>10</option><option>20</option><option>50</option><option>100</option></select></label>
					<button type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} className="rounded border border-slate-300 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
					<span>Page {currentPage} of {pageCount}</span>
					<button type="button" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)} className="rounded border border-slate-300 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
				</div>
			</div>
		</div>
	);
}
