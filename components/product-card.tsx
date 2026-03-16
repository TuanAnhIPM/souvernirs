import { brand } from "@/data/site-content";

type ProductCardProps = {
  name: string;
  subtitle: string;
  description: string;
  tone: string;
};

export function ProductCard({ name, subtitle, description, tone }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Hello Kindness Vietnam, I want to order: ${name}`);
  const whatsappOrderUrl = `${brand.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <article className="group surface flex h-full flex-col overflow-hidden rounded-[30px] transition duration-200 hover:-translate-y-0.5">
      <div className={`image-placeholder aspect-[4/3] ${tone}`}>
        <div className="absolute inset-x-5 bottom-5 z-10 rounded-3xl border border-white/60 bg-white/85 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-coffee-800/55">
            Product Image Placeholder
          </p>
          <p className="mt-1 text-lg font-extrabold text-coffee-900">{name}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 py-6">
        <h3 className="text-2xl font-extrabold">{name}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">
          {subtitle}
        </p>
        <p className="mt-4 flex-1">{description}</p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-coffee-800/50">
            Available now
          </span>
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-coffee-900/10 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-coffee-900 transition hover:-translate-y-0.5 hover:border-coffee-900/25"
          >
            Order This
          </a>
        </div>
      </div>
    </article>
  );
}