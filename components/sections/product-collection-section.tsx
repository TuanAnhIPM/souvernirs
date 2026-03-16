import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/site-content";

export function ProductCollectionSection() {
  return (
    <section id="collection" className="section-shell mt-5">
      <SectionHeading
        label="Product Collection"
        title="A premium collection of Vietnamese specialties designed to be seen, picked up, and brought home."
        description="Every product card is structured for clean merchandising: image-first presentation, clear naming, and a short product story that supports both tourists and B2B buyers."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}