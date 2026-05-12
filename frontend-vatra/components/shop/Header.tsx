import Link from "next/link";
import { LOGO_PATH, STORE_NAME } from "@/lib/brand";

function IconSearch() {
  return (
    <span className="text-ink" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3-3" />
      </svg>
    </span>
  );
}

function IconBag() {
  return (
    <span className="text-ink" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M6 8h15l-1.5 11H7.5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2" />
      </svg>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent/40 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 items-center justify-between gap-6 px-4 py-2 sm:px-6 md:min-h-[4.5rem]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-lg font-semibold tracking-tight text-ink"
        >
          <img
            src={LOGO_PATH}
            alt=""
            width={64}
            height={64}
            className="h-12 w-auto sm:h-14 md:h-[3.25rem]"
            decoding="async"
          />
          <span>{STORE_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/90 md:flex">
          <Link href="/" className="transition hover:text-ink/60">
            Acasă
          </Link>
          <Link href="/collections/all" className="transition hover:text-ink/60">
            Toate produsele
          </Link>
          <Link href="/#despre" className="transition hover:text-ink/60">
            Despre
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full p-2 opacity-70"
            aria-label="Căutare (decorație)"
            disabled
          >
            <IconSearch />
          </button>
          <button
            type="button"
            className="relative rounded-full p-2 opacity-70"
            aria-label="Coș (decorație)"
            disabled
          >
            <IconBag />
            <span className="absolute right-0.5 top-0.5 h-4 min-w-4 rounded-full bg-accent px-1 text-[10px] font-semibold leading-4 text-ink">
              0
            </span>
          </button>
        </div>
      </div>
      <nav className="flex border-t border-accent/30 px-4 py-2 text-xs font-medium text-ink/85 md:hidden">
        <div className="mx-auto flex w-full max-w-6xl justify-around gap-2">
          <Link href="/" className="py-1">
            Acasă
          </Link>
          <Link href="/collections/all" className="py-1">
            Produse
          </Link>
          <Link href="/#despre" className="py-1">
            Despre
          </Link>
        </div>
      </nav>
    </header>
  );
}
