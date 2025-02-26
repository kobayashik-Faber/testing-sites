"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function AppHeader() {
  const searchParams = useSearchParams();

  return (
    <header className="flex items-center justify-center h-12 border-b-2">
      <nav>
        <ul className="inline-flex gap-4 font-bold">
          <li>
            <Link href={`/?${searchParams.toString()}`}>Home</Link>
          </li>
          <li>
            <Link href={`/about/?${searchParams.toString()}`}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
