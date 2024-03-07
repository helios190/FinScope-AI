"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  // header does not appear in landing page
  return usePathname() == "/" ? (
    <></>
  ) : (
    <div className="flex items-center bg-neutral-400 h-24 px-12">
      <p className="font-bold text-4xl">FinScope AI</p>
    </div>
  );
}
