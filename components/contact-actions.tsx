import { brand } from "@/data/site-content";

type ContactActionsProps = {
  className?: string;
};

export function ContactActions({ className = "" }: ContactActionsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`.trim()}>
      <a href={brand.zaloUrl} target="_blank" rel="noreferrer" className="button-primary">
        Order on Zalo
      </a>
      <a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary">
        Order on WhatsApp
      </a>
    </div>
  );
}