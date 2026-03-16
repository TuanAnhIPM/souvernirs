import { SectionHeading } from "@/components/section-heading";
import { packagingFeatures, packagingSizes } from "@/data/site-content";

export function PackagingSection() {
  return (
    <section id="packaging" className="section-shell mt-5">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="image-placeholder min-h-[320px] rounded-[32px] bg-gradient-to-br from-sand-100 via-white to-gold-300/30 p-6">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="rounded-[28px] border border-white/60 bg-white/80 p-5">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-coffee-800/55">
                Packaging concept placeholder
              </p>
              <p className="mt-3 text-3xl font-extrabold">Elegant, gift-ready, and luggage-friendly.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {packagingSizes.map((size) => (
                <div
                  key={size}
                  className="rounded-3xl bg-coffee-900 px-4 py-5 text-center text-sm font-extrabold text-white"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            label="Beautiful Packaging"
            title="Packaging that feels suitable for premium souvenirs, not commodity food."
            description="Products are presented in elegant, display-friendly packaging that works for shelves, hotel gift corners, tour stops, and retail counters. The visual language aims to feel soft, modern, and trustworthy to international shoppers."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {packagingFeatures.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-coffee-900/10 bg-white/80 px-5 py-5 text-sm font-semibold text-coffee-800/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}