import { ContactActions } from "@/components/contact-actions";
import { PageContainer } from "@/components/page-container";
import { products } from "@/data/site-content";

export default function CheckoutPage() {
  return (
    <PageContainer>
      <section className="section-shell mt-4 lg:mt-6">
        <span className="label">Checkout</span>
        <h1 className="section-title max-w-4xl">Complete your Vietnamese gift order</h1>
        <p className="section-copy max-w-3xl">
          Send your selected products and quantity via Zalo or WhatsApp. We will confirm availability,
          final pricing, packaging options, and delivery details.
        </p>
      </section>

      <section className="section-shell mt-5">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Suggested order list</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div key={item.slug} className="rounded-2xl border border-coffee-900/10 bg-white px-4 py-4">
              <p className="text-sm font-extrabold text-coffee-900">{item.name}</p>
              <p className="mt-1 text-sm text-coffee-800/70">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-leaf-700/20 bg-leaf-300/20 p-5">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-leaf-700">How to order</p>
          <ol className="mt-3 space-y-2 text-sm text-coffee-800/80">
            <li>1. Choose products and estimated quantity.</li>
            <li>2. Send your list using Zalo or WhatsApp.</li>
            <li>3. Confirm payment and delivery information.</li>
          </ol>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ContactActions />
        </div>
      </section>
    </PageContainer>
  );
}