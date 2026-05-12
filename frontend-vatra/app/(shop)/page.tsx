import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/shop/Hero";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { getFeaturedProducts } from "@/lib/shop-data";

const tile = (id: string) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80`;

const COLLECTIONS = [
  {
    title: "Dulce natural",
    subtitle: "Miere și siropuri",
    href: "/collections/all",
    image: tile("1558642452-9d2a7deb7f62"),
  },
  {
    title: "Ceaiuri & infuzii",
    subtitle: "Plante și fructe uscate",
    href: "/collections/all",
    image: tile("1564890369478-c89ca6d9cde9"),
  },
  {
    title: "Îngrijire",
    subtitle: "Săpunuri și uleiuri",
    href: "/collections/all",
    image: tile("1474979266404-7eaacbcd87c5"),
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
            Patru produse alese pentru a ilustra vitrina — aceleași date ca în catalogul
            complet.
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
              furnizori mici și ambalaje cât mai simple. Acest site este{' '}
              <strong>doar de prezentare</strong> — poți răsfoi produsele ca într-un magazin
              online, fără coș real sau checkout.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Culorile și layout-ul urmăresc experiența familiară a unui magazin tip Shopify,
              adaptate identității noastre naturale.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-accent/50">
            <Image
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=675&q=80"
              alt="Legume și verdețuri proaspete"
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
