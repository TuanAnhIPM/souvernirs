import { BrandLogo } from "@/components/brand-logo";
import { SocialLink } from "@/components/social-icons";
import { brand } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-5 overflow-hidden rounded-[32px] bg-gradient-to-br from-leaf-700 via-leaf-700 to-coffee-900 px-6 py-12 text-white shadow-lift sm:px-8 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <BrandLogo size={56} className="rounded-[20px]" />
            <div>
              <p className="text-xs font-extrabold uppercase tracking-luxe text-white/55">
                {brand.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-white/70">{brand.line}</p>
            </div>
          </div>
          <p className="text-xs font-extrabold uppercase tracking-luxe text-white/55">
            Premium Vietnamese gift brand
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-[0.95] text-white sm:text-5xl">
            {brand.line} for modern travelers and thoughtful partners.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            Authentic Vietnamese agricultural specialties, elevated through careful curation,
            elegant presentation, and a travel-ready gift concept.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/55">Contact</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/78">
              <p>Email: {brand.email}</p>
              <p>Phone: {brand.phoneDisplay}</p>
              <p>Zalo / WhatsApp: {brand.phoneDisplay}</p>
              <p>Brand: {brand.line}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/55">Follow</p>
            <div className="mt-4 flex items-center gap-3">
              <SocialLink platform="zalo" href={brand.zaloUrl} label="Zalo" />
              <SocialLink platform="whatsapp" href={brand.whatsappUrl} label="WhatsApp" />
              <SocialLink platform="email" href={`mailto:${brand.email}`} label="Email" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/affiliate" className="button-secondary bg-white/90 text-coffee-900">
                Become a Partner
              </a>
              <a href="/" className="button-primary bg-white text-leaf-700 hover:bg-sand-100">
                Shop Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}