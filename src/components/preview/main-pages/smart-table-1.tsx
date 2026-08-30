"use client"

import { Fragment, useMemo, useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

type Status = "Active" | "Inactive" | "Pending" | "Banned"

type User = {
	id: number
	name: string
	registered: string
	role: "Member" | "Staff" | "Admin"
	status: Status
}

const users: User[] = [
	{ id: 1, name: "Samppa Nori", registered: "2021/03/01", role: "Member", status: "Active" },
	{ id: 2, name: "Estavan Lykos", registered: "2018/02/07", role: "Staff", status: "Banned" },
	{ id: 3, name: "Chetan Mohamed", registered: "2020/01/15", role: "Admin", status: "Inactive" },
	{ id: 4, name: "Derick Maximinus", registered: "2019/04/05", role: "Member", status: "Pending" },
	{ id: 5, name: "Friderik David", registered: "2022/03/25", role: "Staff", status: "Active" },
	{ id: 6, name: "Yiorgos Avraamu", registered: "2017/01/01", role: "Member", status: "Active" },
	{ id: 7, name: "Avram Tarasios", registered: "2016/02/12", role: "Staff", status: "Banned" },
	{ id: 8, name: "Quintin Ed", registered: "2023/01/21", role: "Admin", status: "Inactive" },
	{ id: 9, name: "Eneas Kwadwo", registered: "2024/03/10", role: "Member", status: "Pending" },
	{ id: 10, name: "Agapetus Tadeas", registered: "2015/01/10", role: "Staff", status: "Active" },
	{ id: 11, name: "Carwyn Fachtna", registered: "2014/04/01", role: "Member", status: "Active" },
	{ id: 12, name: "Nehemiah Tatius", registered: "2013/01/05", role: "Staff", status: "Banned" },
	{ id: 13, name: "Ebbe Gemariah", registered: "2012/02/25", role: "Admin", status: "Inactive" },
	{ id: 14, name: "Eustorgios Amulius", registered: "2011/03/19", role: "Member", status: "Pending" },
	{ id: 15, name: "Leopold Gaspar", registered: "2010/02/01", role: "Staff", status: "Active" },
]

const badgeStyles: Record<Status, string> = {
	Active: "bg-emerald-100 text-emerald-700",
	Inactive: "bg-slate-100 text-slate-600",
	Pending: "bg-amber-100 text-amber-700",
	Banned: "bg-red-100 text-red-700",
}

const avatarStyles = ["bg-blue-100 text-blue-700", "bg-cyan-100 text-cyan-700", "bg-violet-100 text-violet-700"]

const formatDate = (value: string) => new Date(value.replaceAll("/", "-")).toLocaleDateString("en-US", {
	year: "numeric",
	month: "short",
	day: "numeric",
})

export default function SmartTableExample() {
	const [query, setQuery] = useState("")
	const [page, setPage] = useState(1)
	const [sortAscending, setSortAscending] = useState(true)
	const [selected, setSelected] = useState<Set<number>>(new Set([3, 7, 12]))
	const [details, setDetails] = useState<Set<number>>(new Set())
	const pageSize = 5

	const filteredUsers = useMemo(() => {
		const normalizedQuery = query.toLowerCase()
		return [...users]
			.filter((user) => Object.values(user).some((value) => String(value).toLowerCase().includes(normalizedQuery)))
			.sort((first, second) => {
				const comparison = first.status.localeCompare(second.status)
				return sortAscending ? comparison : -comparison
			})
	}, [query, sortAscending])

	const pageCount = Math.max(1, Math.ceil(filteredUsers.length / pageSize))
	const currentPage = Math.min(page, pageCount)
	const visibleUsers = filteredUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize)
	const visibleSelected = visibleUsers.length > 0 && visibleUsers.every((user) => selected.has(user.id))

	const toggleSelected = (id: number) => {
		setSelected((current) => {
			const next = new Set(current)
			if (next.has(id)) next.delete(id)
			else next.add(id)
			return next
		})
	}

	const toggleAllVisible = () => {
		setSelected((current) => {
			const next = new Set(current)
			visibleUsers.forEach((user) => visibleSelected ? next.delete(user.id) : next.add(user.id))
			return next
		})
	}

	return (
		<div className="w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-3">
				<div>
					<h3 className="text-sm font-semibold text-slate-900">User management</h3>
					<p className="text-xs text-slate-500">{selected.size} selected of {users.length} users</p>
				</div>
				<label className="relative min-w-56 flex-1 sm:max-w-xs">
					<Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
					<input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1) }} placeholder="Filter users..." aria-label="Filter users" className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
				</label>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full min-w-170 border-collapse text-left text-sm">
					<thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
						<tr>
							<th className="w-12 px-3 py-3"><input type="checkbox" aria-label="Select visible users" checked={visibleSelected} onChange={toggleAllVisible} /></th>
							<th className="px-3 py-3">Name</th>
							<th className="px-3 py-3">Registered</th>
							<th className="px-3 py-3">Role</th>
							<th className="px-3 py-3"><button type="button" onClick={() => setSortAscending((current) => !current)} className="inline-flex items-center gap-1 font-semibold hover:text-slate-900">Status {sortAscending ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}</button></th>
							<th className="w-24 px-3 py-3">Details</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-100">
						{visibleUsers.map((user) => (
							<Fragment key={user.id}>
							<tr className={selected.has(user.id) ? "bg-blue-50/60" : "hover:bg-slate-50"}>
								<td className="px-3 py-3"><input type="checkbox" aria-label={`Select ${user.name}`} checked={selected.has(user.id)} onChange={() => toggleSelected(user.id)} /></td>
								<td className="px-3 py-3"><div className="flex items-center gap-3"><span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${avatarStyles[user.id % avatarStyles.length]}`}>{user.name.split(" ").map((part) => part[0]).join("")}</span><span className="font-medium text-slate-800">{user.name}</span></div></td>
								<td className="whitespace-nowrap px-3 py-3 text-slate-600">{formatDate(user.registered)}</td>
								<td className="px-3 py-3 text-slate-600">{user.role}</td>
								<td className="px-3 py-3"><span className={`rounded-full px-2 py-1 text-xs font-semibold ${badgeStyles[user.status]}`}>{user.status}</span></td>
								<td className="px-3 py-3"><button type="button" onClick={() => setDetails((current) => { const next = new Set(current); if (next.has(user.id)) next.delete(user.id); else next.add(user.id); return next })} className="rounded-md border border-blue-200 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-50">{details.has(user.id) ? "Hide" : "Show"}</button></td>
							</tr>
							{details.has(user.id) && <tr><td colSpan={6} className="bg-slate-50 px-12 py-3 text-xs text-slate-600">User since {formatDate(user.registered)}. This {user.role.toLowerCase()} account is currently {user.status.toLowerCase()}.</td></tr>}
							</Fragment>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-3 py-3 text-sm text-slate-600">
				<span>{filteredUsers.length} results</span>
				<div className="flex items-center gap-2"><button type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} className="rounded border border-slate-300 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-40">Previous</button><span>Page {currentPage} of {pageCount}</span><button type="button" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)} className="rounded border border-slate-300 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-40">Next</button></div>
			</div>
		</div>
	)
}
