import { ContactActions } from "@/components/contact-actions";
import { SectionHeading } from "@/components/section-heading";

export function CtaSection() {
  return (
    <section className="section-shell mt-5 text-center">
      <SectionHeading
        label="Call To Action"
        title="Bring the Taste of Vietnam to Your Travelers."
        description="Let us help you create a more memorable, premium, and easy-to-sell Vietnamese gift offering for your guests and customers."
        align="center"
      />
      <div className="mt-8 flex justify-center">
        <ContactActions className="justify-center" />
      </div>
    </section>
  );
}