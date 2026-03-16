import { ContactActions } from "@/components/contact-actions";
import { PageContainer } from "@/components/page-container";
import { ProductCollectionSection } from "@/components/sections/product-collection-section";
import { brand } from "@/data/site-content";

export default function HomePage() {
  return (
    <PageContainer>
      <section className="section-shell mt-4 lg:mt-6">
        <span className="label">Main Product Page</span>
        <h1 className="section-title max-w-5xl text-5xl sm:text-6xl lg:text-7xl">
          Shop {brand.line} directly
        </h1>
        <p className="section-copy max-w-3xl">
          This main page is optimized for direct product purchase only. Browse products below and place your order quickly via Zalo or WhatsApp.
        </p>
        <div className="mt-8">
          <ContactActions />
          <div className="mt-3">
            <a href="/checkout" className="button-secondary">
              Go to Checkout
            </a>
          </div>
        </div>
      </section>

      <ProductCollectionSection />

      <section className="section-shell mt-5 text-center">
        <p className="text-sm font-extrabold uppercase tracking-luxe text-leaf-700">Order support</p>
        <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Ready to order your Vietnamese gifts?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-coffee-800/80">
          Send us your product list and quantity. We will confirm availability, packaging format, and delivery details right away.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ContactActions className="justify-center" />
            <a href="/checkout" className="button-secondary">
              Checkout
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}