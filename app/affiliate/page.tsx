import { PageContainer } from "@/components/page-container";
import {
  affiliateBenefits,
  affiliateSteps,
  trainingResources,
} from "@/data/site-content";

export default function AffiliatePage() {
  return (
    <PageContainer>
      <section className="section-shell mt-4 lg:mt-6">
        <span className="label">Affiliate Program</span>
        <h1 className="section-title max-w-5xl text-5xl sm:text-6xl lg:text-7xl">
          Earn Extra Income Sharing Vietnam&apos;s Best Gifts
        </h1>
        <p className="section-copy max-w-3xl">
          This page is a dedicated partner training experience for tour guides, tour companies,
          souvenir shops, hotels, and resellers. Learn the selling flow, commission logic,
          and how to turn travel moments into extra income.
        </p>
      </section>

      <section className="section-shell mt-5">
        <h2 className="text-4xl font-extrabold sm:text-5xl">How It Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {affiliateSteps.map((step) => (
            <article key={step.title} className="rounded-[24px] border border-coffee-900/10 bg-white p-6">
              <p className="text-xs font-extrabold uppercase tracking-luxe text-leaf-700">{step.title}</p>
              <h3 className="mt-3 text-2xl font-extrabold">{step.heading}</h3>
              <p className="mt-3">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-5">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Why Tourists Love These Products</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-coffee-800/80">
              Travelers love bringing home Vietnamese food gifts like coffee and dried fruits.
              These products are authentic, easy to carry, and meaningful as souvenirs.
            </p>
            <ul className="mt-6 space-y-3">
              {affiliateBenefits.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-coffee-900/10 bg-white px-4 py-3 text-sm font-semibold text-coffee-800/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-coffee-900/10 bg-gradient-to-br from-coffee-900 via-coffee-800 to-leaf-700 p-7 text-white">
            <p className="text-xs font-extrabold uppercase tracking-luxe text-white/65">Example selling script</p>
            <blockquote className="mt-4 text-2xl font-extrabold leading-tight text-white">
              &ldquo;This coffee comes from Buon Ma Thuot, the coffee capital of Vietnam.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Use short, natural product stories to help travelers connect emotionally and buy confidently.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell mt-5">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[26px] border border-coffee-900/10 bg-white p-6">
            <p className="text-xs font-extrabold uppercase tracking-luxe text-leaf-700">Commission Model</p>
            <h3 className="mt-3 text-3xl font-extrabold">Simple margin-based opportunity</h3>
            <div className="mt-5 space-y-3 text-sm text-coffee-800/80">
              <p>Coffee wholesale reference: 300,000 VND per kg</p>
              <p>Retail example: 500g pack can sell around 300,000 VND (~12 USD)</p>
              <p>Partners can earn meaningful margin from every successful sale.</p>
            </div>
          </div>

          <div className="rounded-[26px] border border-coffee-900/10 bg-sand-100 p-6">
            <p className="text-xs font-extrabold uppercase tracking-luxe text-leaf-700">Training Resources</p>
            <h3 className="mt-3 text-3xl font-extrabold">Everything needed to sell confidently</h3>
            <ul className="mt-5 space-y-3 text-sm text-coffee-800/80">
              {trainingResources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell mt-5">
        <h2 className="text-4xl font-extrabold sm:text-5xl">Partner Sign-Up Form</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-coffee-800/80">
          Apply to join the affiliate network. Our team will contact you to verify your profile,
          explain training materials, and activate your partner onboarding.
        </p>

        <form className="mt-8 grid gap-4 md:grid-cols-2" action="#" method="post">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-coffee-900">Name</span>
            <input
              name="name"
              type="text"
              required
              className="rounded-xl border border-coffee-900/15 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:border-leaf-700"
              placeholder="Your full name"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-coffee-900">Phone</span>
            <input
              name="phone"
              type="tel"
              required
              className="rounded-xl border border-coffee-900/15 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:border-leaf-700"
              placeholder="+84..."
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-coffee-900">Email</span>
            <input
              name="email"
              type="email"
              required
              className="rounded-xl border border-coffee-900/15 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:border-leaf-700"
              placeholder="name@email.com"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-coffee-900">Tour company (optional)</span>
            <input
              name="tourCompany"
              type="text"
              className="rounded-xl border border-coffee-900/15 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:border-leaf-700"
              placeholder="Company name"
            />
          </label>

          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-sm font-semibold text-coffee-900">Experience (optional)</span>
            <textarea
              name="experience"
              rows={4}
              className="rounded-xl border border-coffee-900/15 bg-white px-4 py-3 text-sm text-coffee-900 outline-none focus:border-leaf-700"
              placeholder="Tell us about your travel, sales, or hospitality experience"
            />
          </label>

          <div className="md:col-span-2">
            <button type="submit" className="button-primary">
              Apply to Become Partner
            </button>
          </div>
        </form>
      </section>
    </PageContainer>
  );
}