import { SectionHeading } from "@/components/section-heading";
import { brand } from "@/data/site-content";

export function AffiliateLinkSection() {
  return (
    <section id="affiliate" className="section-shell mt-5">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <SectionHeading
          label="Affiliate Program"
          title="Our affiliate and tour collaboration program is hosted on a separate link."
          description="This website focuses on direct product sales. If you want to join the affiliate or tour partnership program, please use the dedicated affiliate page below."
        />

        <div className="rounded-[30px] border border-coffee-900/10 bg-sand-100/80 p-7 shadow-soft">
          <p className="text-sm font-extrabold uppercase tracking-luxe text-leaf-700">
            Separate affiliate link
          </p>
          <p className="mt-4 text-base leading-8 text-coffee-800/80">
            Partnership onboarding, commission policy, and collaboration details are managed in a dedicated affiliate flow.
          </p>
          <a
            href={brand.affiliateUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary mt-6"
          >
            Open Affiliate Page
          </a>
        </div>
      </div>
    </section>
  );
}