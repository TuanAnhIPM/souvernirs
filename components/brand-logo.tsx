import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
};

export function BrandLogo({ size = 48, className = "" }: BrandLogoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg shadow-coffee-900/15 ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <Image
        src="/kindness-vietnam-logo.svg"
        alt="Kindness Vietnam logo"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </div>
  );
}