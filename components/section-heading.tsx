type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={alignment}>
      <span className="label">{label}</span>
      <h2 className="section-title max-w-4xl">{title}</h2>
      <p className="section-copy max-w-3xl">{description}</p>
    </div>
  );
}