import Link from "next/link";
import { LOGO_WITH_BG_PATH, STORE_NAME } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-accent/50 bg-ink text-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block">
            <img
              src={LOGO_WITH_BG_PATH}
              alt={STORE_NAME}
              width={160}
              height={48}
              className="h-12 w-auto max-w-[200px] object-left object-contain"
              decoding="async"
            />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-surface/75">
            Selecție de produse naturale prezentate în stil magazin online. Fără plată sau
            livrare automată pe acest site.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Magazin</p>
          <ul className="mt-4 space-y-2 text-sm text-surface/80">
            <li>
              <Link href="/collections/all" className="hover:text-surface">
                Toate produsele
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-surface">
                Acasă
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Informații</p>
          <ul className="mt-4 space-y-2 text-sm text-surface/80">
            <li>
              <Link href="/#despre" className="hover:text-surface">
                Despre noi
              </Link>
            </li>
            <li>
              <span className="text-surface/60">Termeni (exemplu)</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Contact</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-surface/80">
            contact@vatradinmunte.ro
            <br />
            +40 000 000 000
            <br />
            România
          </address>
        </div>
      </div>
      <div className="border-t border-surface/10 py-6 text-center text-xs text-surface/55">
        © {new Date().getFullYear()} {STORE_NAME}. Site de prezentare.
      </div>
    </footer>
  );
}
