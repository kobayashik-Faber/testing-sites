import Link from "next/link";

export function AppHeader() {
  return (
    <header className="flex items-center justify-center h-12 border-b-2">
      <nav>
        <ul className="inline-flex gap-4 font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
