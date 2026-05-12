import type { Product } from "@/lib/shop-data";
import { ProductCard } from "./ProductCard";

type Props = { products: Product[] };

export function ProductGrid({ products }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
