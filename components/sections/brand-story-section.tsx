import { SectionHeading } from "@/components/section-heading";

export function BrandStorySection() {
  return (
    <section id="story" className="section-shell mt-5">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="image-placeholder min-h-[340px] rounded-[32px] bg-gradient-to-br from-leaf-700/90 via-coffee-800/90 to-coffee-900 p-6 text-white">
          <div className="relative z-10 flex h-full flex-col justify-end">
            <div className="max-w-sm rounded-[28px] border border-white/15 bg-white/10 p-6">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-white/70">
                Brand world placeholder
              </p>
              <p className="mt-3 text-2xl font-extrabold text-white">
                Vietnamese land, farmers, and flavors translated into refined gifts.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            label="Brand Story"
            title="Kindness Vietnam shares the warmth of Vietnam through honest food and beautiful presentation."
            description="Vietnam is a land of rich agriculture, warm people, and unforgettable flavors. Kindness Vietnam was created to share the kindness of Vietnamese land and farmers with the world through authentic specialties that feel elevated enough to become gifts."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-coffee-900/10 bg-sand-100/80 p-6">
              <h3 className="text-xl font-extrabold">Authentic origin</h3>
              <p className="mt-3">
                Each selection reflects real Vietnamese growing regions, local flavor memory,
                and products people genuinely want to bring home.
              </p>
            </div>
            <div className="rounded-[28px] border border-coffee-900/10 bg-white/80 p-6">
              <h3 className="text-xl font-extrabold">International polish</h3>
              <p className="mt-3">
                Packaging and storytelling are designed to feel trustworthy, refined,
                and easy for global travelers to understand at a glance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}