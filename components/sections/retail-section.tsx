import { ContactActions } from "@/components/contact-actions";
import { SectionHeading } from "@/components/section-heading";
import { retailHighlights } from "@/data/site-content";

export function RetailSection() {
  return (
    <section id="retail" className="section-shell mt-5">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
        <div className="image-placeholder min-h-[340px] rounded-[32px] bg-gradient-to-br from-white via-sand-100 to-leaf-300/50 p-6">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="rounded-[28px] border border-white/70 bg-white/80 p-6">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-coffee-800/55">
                Retail experience placeholder
              </p>
              <p className="mt-3 text-3xl font-extrabold">
                Retail-ready gifts for travelers buying for themselves, friends, and family.
              </p>
            </div>
            <div className="rounded-[28px] border border-coffee-900/10 bg-white/85 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.18em] text-coffee-800/55">For individual customers</p>
              <p className="mt-3 text-base leading-7 text-coffee-800/78">
                Perfect for tourists who want one or two beautiful Vietnamese gifts without buying wholesale.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            label="Retail Sales"
            title="A separate retail path for travelers and individual customers."
            description="Not every visitor is a business buyer. This section makes it clear that tourists and local shoppers can also buy beautifully packaged products for personal gifting, family, and friends."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {retailHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-coffee-900/10 bg-white/80 px-5 py-5 text-sm font-semibold text-coffee-800/80"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-coffee-800/80">
            If you are shopping as an individual customer, contact us on Zalo or WhatsApp to ask for available products,
            current packs, and retail ordering support.
          </p>
          <div className="mt-6">
            <ContactActions />
          </div>
        </div>
      </div>
    </section>
  );
}