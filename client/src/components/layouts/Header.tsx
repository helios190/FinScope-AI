"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  // header does not appear in landing page
  return usePathname() == "/" ? (
    <></>
  ) : (
    <div className="flex items-center bg-primary-600 h-24 px-12">
      <Link href="/">
        <p className="text-white font-bold text-4xl">FinScope AI</p>
      </Link>
    </div>
  );
}
