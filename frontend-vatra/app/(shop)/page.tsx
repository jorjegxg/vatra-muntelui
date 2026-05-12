import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/shop/Hero";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { getFeaturedProducts } from "@/lib/shop-data";

const tile = (id: string) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80`;

const COLLECTIONS = [
  {
    title: "Îngrijire personală",
    subtitle: "Șampon, pastă, duș",
    href: "/collections/all",
    image: tile("1523381210434-271e8be1f52b"),
  },
  {
    title: "Săpunuri & mâini",
    subtitle: "Solid și lichid",
    href: "/collections/all",
    image: tile("1556228578-0d85b1a4d571"),
  },
  {
    title: "Menaj eco",
    subtitle: "Rufe și bucătărie",
    href: "/collections/all",
    image: tile("1576091160550-2173dba999ef"),
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts(4);

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Colecții</h2>
          <Link
            href="/collections/all"
            className="text-sm font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline"
          >
            Vezi tot catalogul
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <li key={c.title}>
              <Link
                href={c.href}
                className="group relative block overflow-hidden rounded-2xl border border-accent/40"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 text-surface">
                    <p className="text-xs font-medium uppercase tracking-wide text-accent">
                      {c.subtitle}
                    </p>
                    <p className="mt-1 text-lg font-semibold">{c.title}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-accent/40 bg-accent/25">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Recomandate</h2>
          <p className="mt-2 max-w-xl text-sm text-ink/75">
            Produse de igienă și curățenie ultra naturale — fiecare cu ingredientele afișate
            clar.
          </p>
          <div className="mt-10">
            <ProductGrid products={featured} />
          </div>
        </div>
      </section>

      <section id="despre" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Despre noi</h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Suntem un magazin conceptual inspirat de viața la munte: ingrediente curate,
              formulări blânde pentru piele și casă. Acest site este{' '}
              <strong>doar de prezentare</strong> — poți răsfoi produsele ca într-un magazin
              online, fără coș real sau checkout.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Ne concentrăm pe formule cât mai simple: plante, minerale blânde și surfactanți
              din surse vegetale. Pe fiecare pagină de produs vezi lista de ingrediente, ușor de
              citit.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-accent/50">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=675&q=80"
              alt="Produse naturale colorate"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
