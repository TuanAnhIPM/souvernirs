import { SectionHeading } from "@/components/section-heading";
import { sellingStories } from "@/data/site-content";

export function SellingStorySection() {
  return (
    <section className="section-shell mt-5">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <SectionHeading
            label="Selling Story"
            title="Small stories make tourists feel connected to what they buy."
            description="Short English scripts help tour guides, hotel staff, and retail teams introduce products with confidence. The goal is not just to sell snacks, but to sell a piece of Vietnam with emotional clarity."
          />
          <div className="mt-8 space-y-4">
            {sellingStories.map((quote) => (
              <blockquote
                key={quote}
                className="rounded-[28px] border border-leaf-700/12 bg-leaf-300/20 px-6 py-5 text-lg font-bold leading-8 text-coffee-900"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </div>

        <div className="image-placeholder min-h-[340px] rounded-[32px] bg-gradient-to-br from-white via-sand-100 to-leaf-300/50 p-6">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="rounded-[28px] border border-white/70 bg-white/80 p-6">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-coffee-800/55">
                Sales interaction placeholder
              </p>
              <p className="mt-3 text-3xl font-extrabold">
                Story-led selling creates trust faster than generic retail language.
              </p>
            </div>
            <div className="rounded-[28px] border border-coffee-900/10 bg-coffee-900 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-white/65">For partner teams</p>
              <p className="mt-3 text-base leading-7 text-white/78">
                Clear origin, beautiful packaging, and easy scripts make the collection especially useful for travel-facing sales environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}