"use client";

import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cibFacebook,
  cibYoutube,
  cibLinkedin,
} from "@coreui/icons";

const socialStats = [
  {
    name: "Facebook",
    icon: cibFacebook,
    color: "bg-[#3b5998]",
    stats: [
      { title: "Friends", value: "89K" },
      { title: "Feeds", value: "459" },
    ],
  },
  {
    name: "YouTube",
    icon: cibYoutube,
    color: "bg-[#FF0000]",
    stats: [
      { title: "Subscribers", value: "973K" },
      { title: "Videos", value: "1.2K" },
    ],
  },
  {
    name: "LinkedIn",
    icon: cibLinkedin,
    color: "bg-[#0A66C2]",
    stats: [
      { title: "Followers", value: "128K" },
      { title: "Posts", value: "342" },
    ],
  },
];

export function WidgetStatsDSocial() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {socialStats.map((social) => (
        <div
          key={social.name}
          className="overflow-hidden rounded-lg bg-white shadow-sm"
        >
          {/* Brand / Logo section */}
          <div
            className={`${social.color} flex h-32 items-center justify-center`}
          >
            <CIcon
              icon={social.icon}
              className="text-white [&_path]:fill-current"
              height={52}
            />
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2">
            {social.stats.map((stat) => (
              <div
                key={stat.title}
                className="px-4 py-4 text-center"
              >
                <div className="text-lg font-semibold text-slate-800">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}