import { SectionHeading } from "@/components/section-heading";

export function ConceptSection() {
  return (
    <section className="section-shell mt-5">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            label="Vietnam Local Gifts"
            title="A souvenir concept built specifically for travelers."
            description="Vietnam Local Gifts is a curated collection of authentic Vietnamese specialties designed as beautiful souvenirs travelers can easily bring home. It bridges product quality, emotional storytelling, and polished presentation in one clear retail idea."
          />
        </div>
        <div className="grid gap-4">
          <div className="rounded-[30px] border border-coffee-900/10 bg-white/80 p-6 shadow-soft">
            <p className="text-sm font-extrabold uppercase tracking-luxe text-leaf-700">
              Why it works
            </p>
            <p className="mt-4 text-xl font-extrabold text-coffee-900">
              Travelers want to take home something that feels truly Vietnamese, easy to carry,
              and meaningful enough to gift.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-coffee-900/10 bg-sand-100/80 p-5">
              <p className="text-lg font-extrabold">Easy souvenir logic</p>
              <p className="mt-2">Small footprint, premium value perception, simple purchase decision.</p>
            </div>
            <div className="rounded-[28px] border border-coffee-900/10 bg-white/80 p-5">
              <p className="text-lg font-extrabold">Clear Vietnam story</p>
              <p className="mt-2">Coffee highlands, tropical fruit, local farmers, and regional identity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}