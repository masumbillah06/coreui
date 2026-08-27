"use client";

import {
  User,
  Users,
  CreditCard,
  Wallet,
  Smartphone,
  Coins,
  KeyRound,
  Landmark,
} from "lucide-react";
import { FaGoogle, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { OpenAI } from "@lobehub/icons";


const stats = [
  { label: "New Clients", value: "9,123", color: "border-blue-500" },
  { label: "Recurring Clients", value: "22,643", color: "border-red-500" },
  { label: "Pageviews", value: "78,623", color: "border-amber-400" },
  { label: "Organic", value: "49,123", color: "border-emerald-500" },
];

const weekly = [
  { day: "Monday", newClients: 42, recurring: 78 },
  { day: "Tuesday", newClients: 62, recurring: 96 },
  { day: "Wednesday", newClients: 25, recurring: 56 },
  { day: "Thursday", newClients: 54, recurring: 88 },
  { day: "Friday", newClients: 35, recurring: 70 },
  { day: "Saturday", newClients: 60, recurring: 82 },
  { day: "Sunday", newClients: 32, recurring: 68 },
];

const gender = [
  { label: "Male", value: 53 },
  { label: "Female", value: 43 },
];

const sources = [
  { label: "Organic Search", value: 191235, pct: 56, icon: "google" },
  { label: "ChatGPT", value: 51223, pct: 15, icon: "chatgpt" },
  { label: "X", value: 37564, pct: 11, icon: "x" },
  { label: "YouTube", value: 27319, pct: 8, icon: "youtube" },
];

const users = [
  {
    name: "Yiorgos Avraamu",
    tag: "New",
    registered: "Mar 15, 2025",
    country: "🇺🇸",
    usage: 50,
    barColor: "bg-emerald-500",
    range: "Mar 1, 2026 - Apr 30, 2026",
    payment: "coins",
    activity: "10 seconds ago",
    status: "online",
    initials: "YA",
    avatarColor: "bg-sky-200 text-sky-800",
  },
  {
    name: "Avram Tarasios",
    tag: "Recurring",
    registered: "Aug 22, 2024",
    country: "🇧🇷",
    usage: 22,
    barColor: "bg-blue-500",
    range: "Jan 15, 2026 - Feb 14, 2026",
    payment: "visa",
    activity: "5 minutes ago",
    status: "online",
    initials: "AT",
    avatarColor: "bg-indigo-200 text-indigo-800",
  },
  {
    name: "Quintin Ed",
    tag: "New",
    registered: "Nov 7, 2024",
    country: "🇮🇳",
    usage: 74,
    barColor: "bg-amber-400",
    range: "Feb 10, 2026 - Mar 11, 2026",
    payment: "stripe",
    activity: "1 hour ago",
    status: "online",
    initials: "QE",
    avatarColor: "bg-orange-200 text-orange-800",
  },
  {
    name: "Enéas Kwadwo",
    tag: "New",
    registered: "Jan 30, 2025",
    country: "🇫🇷",
    usage: 98,
    barColor: "bg-red-500",
    range: "Apr 1, 2026 - Apr 30, 2026",
    payment: "paypal",
    activity: "1 week ago",
    status: "online",
    initials: "EK",
    avatarColor: "bg-stone-300 text-stone-800",
  },
  {
    name: "Agapetus Tadeáš",
    tag: "New",
    registered: "Jun 12, 2024",
    country: "🇪🇸",
    usage: 22,
    barColor: "bg-indigo-500",
    range: "Mar 20, 2026 - Apr 19, 2026",
    payment: "apple",
    activity: "3 months ago",
    status: "online",
    initials: "AT",
    avatarColor: "bg-rose-200 text-rose-800",
  },
  {
    name: "Friderik Dávid",
    tag: "New",
    registered: "Dec 3, 2025",
    country: "🇵🇱",
    usage: 43,
    barColor: "bg-emerald-500",
    range: "Apr 5, 2026 - May 4, 2026",
    payment: "key",
    activity: "1 year ago",
    status: "offline",
    initials: "FD",
    avatarColor: "bg-teal-200 text-teal-800",
  },
];

function SourceIcon({ icon }: { icon: string }) {
  const className = "h-4 w-4 shrink-0";
  switch (icon) {
    case "google":
      return <FaGoogle className={className} color="#4285F4" aria-hidden="true" />;
    case "chatgpt":
      return <OpenAI className={className} color="#10A37F" aria-hidden="true" />;
    case "x":
      return <FaXTwitter className={className} color="#111827" aria-hidden="true" />;
    case "youtube":
      return <FaYoutube className={className} color="#FF0000" aria-hidden="true" />;
    default:
      return null;
  }
}

function PaymentIcon({ type }: { type: string }) {
  const wrap = "flex h-6 w-8 items-center justify-center rounded-md bg-slate-800 text-white";
  const iconProps = { size: 14, strokeWidth: 2 };
  switch (type) {
    case "visa":
      return (
        <div className={wrap}>
          <CreditCard {...iconProps} />
        </div>
      );
    case "stripe":
      return (
        <div className={wrap}>
          <Landmark {...iconProps} />
        </div>
      );
    case "paypal":
      return (
        <div className={wrap}>
          <Wallet {...iconProps} />
        </div>
      );
    case "apple":
      return (
        <div className={wrap}>
          <Smartphone {...iconProps} />
        </div>
      );
    case "key":
      return (
        <div className={wrap}>
          <KeyRound {...iconProps} />
        </div>
      );
    default:
      return (
        <div className={wrap}>
          <Coins {...iconProps} />
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function TrafficSalesCard() {
  const maxDay = Math.max(...weekly.map((d) => Math.max(d.newClients, d.recurring)));
  const maxSource = Math.max(...sources.map((s) => s.value));

  return (
    <div className="w-full rounded-lg border border-gray-300 bg-white text-sm shadow-sm">
      {/* Title */}
      <div className="border-b border-gray-200 bg-gray-100 px-5 py-3"> 
        <h2 className="text-[13px] font-medium text-gray-600">Traffic &amp; Sales</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div className="border-b border-gray-100 md:border-b-0 md:border-r">
          {/* stats */}
          <div className="grid grid-cols-2 border-b border-gray-100">
            {stats.slice(0, 2).map((s) => (
              <div key={s.label} className={`border-l-4 ${s.color} px-5 py-4`}>
                <p className="text-gray-400">{s.label}</p>
                <p className="mt-1 text-xl font-semibold text-gray-700">{s.value}</p>
              </div>
            ))}
          </div>

          {/* weekly chart */}
          <div className="space-y-7 px-5 py-5">
            {weekly.map((d) => (
              <div key={d.day} className="flex items-center gap-4">
                <span className="w-20 shrink-0 text-xs text-gray-600">{d.day}</span>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="h-1 w-full rounded-full bg-gray-100">
                    <div
                      className="h-1 rounded-full bg-indigo-500"
                      style={{ width: `${(d.newClients / maxDay) * 100}%` }}
                    />
                  </div>
                  <div className="h-1 w-full rounded-full bg-gray-100">
                    <div
                      className="h-1 rounded-full bg-red-500"
                      style={{ width: `${(d.recurring / maxDay) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div>
          {/* stats */}
          <div className="grid grid-cols-2 border-b border-gray-100">
            {stats.slice(2, 4).map((s) => (
              <div key={s.label} className={`border-l-4 ${s.color} px-5 py-4`}>
                <p className="text-gray-400">{s.label}</p>
                <p className="mt-1 text-xl font-semibold text-gray-700">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="px-5 py-5">
            {/* gender */}
            <div className="space-y-3 border-b border-gray-100 pb-5">
              {gender.map((g) => (
                <div key={g.label} className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2">
                  <User size={16} className="shrink-0 text-gray-400" />
                  <span className="text-gray-500">{g.label}</span>
                  <span className="w-9 shrink-0 text-right text-gray-500">{g.value}%</span>
                  <div className="col-span-3 h-1 rounded-full bg-gray-100">
                    <div
                      className="h-1 rounded-full bg-amber-400"
                      style={{ width: `${g.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* sources */}
            <div className="space-y-3 pt-5">
              {sources.map((s) => (
                <div key={s.label} className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2">
                  <SourceIcon icon={s.icon} />
                  <span className="text-gray-500">{s.label}</span>
                  <span className="shrink-0 whitespace-nowrap text-right text-gray-500">
                    {s.value.toLocaleString()} <span className="text-gray-400">({s.pct}%)</span>
                  </span>
                  <div className="col-span-3 h-1 rounded-full bg-gray-100">
                    <div
                      className="h-1 rounded-full bg-emerald-600"
                      style={{ width: `${(s.value / maxSource) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="overflow-x-auto m-3 border border-gray-300">
        <table className="w-full min-w-[860px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-slate-100 text-gray-900">
              <th className="w-12 px-5 py-2 text-left font-bold">
                <Users size={16} />
              </th>
              <th className="px-2 py-2 text-left font-bold">User</th>
              <th className="px-2 py-2 text-left font-bold">Country</th>
              <th className="px-2 py-2 text-left font-bold">Usage</th>
              <th className="px-2 py-2 text-left font-bold">Payment Method</th>
              <th className="px-5 py-2 text-left font-bold">Activity</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.name} className="border-b border-gray-250 last:border-b-0">
                <td className="px-5 py-3">
                  <div className="relative h-9 w-9">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${u.avatarColor}`}
                    >
                      {u.initials}
                    </div>
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${
                        u.status === "online" ? "bg-emerald-500" : "bg-red-500"
                      }`}
                    />
                  </div>
                </td>
                <td className="px-2 py-3">
                  <p className="font-medium text-gray-900">{u.name}</p>
                  <p className="text-gray-600">
                    {u.tag} | Registered: {u.registered}
                  </p>
                </td>
                <td className="px-2 py-3 text-lg">{u.country}</td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 shrink-0 font-medium text-gray-800">{u.usage}%</span>
                    <div className="h-1 w-24 rounded-full bg-gray-100">
                      <div
                        className={`h-1 rounded-full ${u.barColor}`}
                        style={{ width: `${u.usage}%` }}
                      />
                    </div>
                    <span className="whitespace-nowrap text-gray-600">{u.range}</span>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <PaymentIcon type={u.payment} />
                </td>
                <td className="px-5 py-3">
                  <p className="text-gray-600">Last login</p>
                  <p className="text-gray-800">{u.activity}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
