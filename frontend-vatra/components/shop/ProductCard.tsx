import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shop-data";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-accent/50 bg-surface shadow-sm transition hover:border-accent hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-accent/30">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
          {product.category}
        </p>
        <h2 className="mt-1 text-base font-semibold leading-snug text-ink group-hover:underline">
          {product.name}
        </h2>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink/70">{product.shortDescription}</p>
        <p className="mt-3 text-sm font-semibold text-ink">{product.priceLei.toFixed(0)} lei</p>
      </div>
    </Link>
  );
}
