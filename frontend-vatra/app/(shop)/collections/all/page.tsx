import Link from "next/link";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { getAllProducts } from "@/lib/shop-data";

export default function AllCollectionsPage() {
  const products = getAllProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-sm text-ink/60">
        <Link href="/" className="hover:text-ink">
          Acasă
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">Toate produsele</span>
      </nav>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Toate produsele
      </h1>
      <p className="mt-3 max-w-2xl text-ink/75">
        Catalog de prezentare — {products.length} produse pentru corp și casă. Ingredientele
        sunt afișate pe fiecare articol.
      </p>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
