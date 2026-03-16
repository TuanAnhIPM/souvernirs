import { brand } from "@/data/site-content";

export function FloatingContactDock() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={brand.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-leaf-700 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-soft transition hover:bg-leaf-500"
      >
        Zalo Order
      </a>
      <a
        href={brand.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-leaf-700/20 bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-leaf-700 shadow-soft transition"
      >
        WhatsApp
      </a>
    </div>
  );
}