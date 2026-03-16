import { ContactActions } from "@/components/contact-actions";
import { brand, trustPoints } from "@/data/site-content";

export function HeroSection() {
  return (
    <section className="section-shell mt-4 lg:mt-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <span className="label">{brand.name} presents</span>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.92] sm:text-6xl lg:text-8xl">
            Beautiful Vietnamese Gifts to Bring Home
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-coffee-800/80 sm:text-lg">
            Authentic Vietnamese specialties carefully selected and beautifully packaged
            for travelers around the world. This website is built for direct product sales,
            so tourists and gift buyers can order immediately through Zalo or WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#collection" className="button-primary">
              Explore Products
            </a>
            <a href="#retail" className="button-secondary">
              Shop Now
            </a>
          </div>

          <div className="mt-5">
            <ContactActions />
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-coffee-900/8 bg-white/70 px-4 py-4 text-sm font-semibold text-coffee-800/80 shadow-soft"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="image-placeholder relative min-h-[360px] rounded-[32px] bg-gradient-to-br from-coffee-900 via-coffee-800 to-leaf-700 p-6 text-white sm:col-span-2 lg:min-h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_28%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="max-w-sm rounded-3xl border border-white/15 bg-white/10 p-5">
                <p className="text-xs font-extrabold uppercase tracking-luxe text-white/70">
                  Premium travel gift collection
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white">
                  {brand.line} by {brand.name}
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-3xl font-extrabold">09</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">Specialty gift products</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-3xl font-extrabold">B2B</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">Ready for tours and retail</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-3xl font-extrabold">Gift</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">Elegant packaging concept</p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-placeholder min-h-[210px] rounded-[28px] bg-gradient-to-br from-[#f0d7ae]/80 via-white to-[#d9e3ce]/80 p-5">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-coffee-800/55">
                Product photography placeholder
              </p>
              <div>
                <p className="text-2xl font-extrabold">Coffee & nuts</p>
                <p className="mt-2">Warm tones, premium detail, shelf-ready presence.</p>
              </div>
            </div>
          </div>

          <div className="image-placeholder min-h-[210px] rounded-[28px] bg-gradient-to-br from-[#dbe4d2]/90 via-white to-[#f4dfb6]/60 p-5">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-coffee-800/55">
                Vietnam travel mood placeholder
              </p>
              <div>
                <p className="text-2xl font-extrabold">Tourist gifting moments</p>
                <p className="mt-2">Designed to feel local, polished, and internationally appealing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}