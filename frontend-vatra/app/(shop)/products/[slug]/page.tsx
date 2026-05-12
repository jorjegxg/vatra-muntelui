import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts, getProductBySlug } from "@/lib/shop-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produs" };
  return {
    title: `${product.name} | Vatra din Munte`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-ink/60">
        <Link href="/" className="hover:text-ink">
          Acasă
        </Link>
        <span className="mx-2">/</span>
        <Link href="/collections/all" className="hover:text-ink">
          Toate produsele
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-accent/50 bg-accent/20">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-ink/50">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-ink">{product.priceLei.toFixed(0)} lei</p>
          <p className="mt-6 leading-relaxed text-ink/80">{product.longDescription}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-ink/30 px-8 py-3.5 text-sm font-semibold text-surface/90"
              aria-disabled
            >
              Adaugă în coș (indisponibil)
            </button>
            <Link
              href="/collections/all"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-surface"
            >
              Înapoi la catalog
            </Link>
          </div>
          <p className="mt-6 text-xs text-ink/55">
            Acest magazin este doar de prezentare — nu se pot plasa comenzi.
          </p>
        </div>
      </div>
    </div>
  );
}
