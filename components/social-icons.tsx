type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13.5 20V12.7H16L16.4 9.9H13.5V8.1C13.5 7.3 13.8 6.7 15 6.7H16.5V4.2C16.2 4.2 15.3 4 14.2 4C11.9 4 10.4 5.4 10.4 8V9.9H8V12.7H10.4V20H13.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 7L12 12L18.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4C7.6 4 4 7.42 4 11.66C4 13.26 4.51 14.75 5.38 15.98L4.55 20L8.76 18.91C9.77 19.46 10.87 19.75 12 19.75C16.4 19.75 20 16.33 20 12.09C20 7.85 16.4 4 12 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.52 9.15C9.74 8.97 9.92 8.99 10.08 9.08C10.21 9.16 10.66 9.92 10.73 10.08C10.8 10.25 10.8 10.38 10.68 10.51C10.58 10.61 10.48 10.76 10.4 10.85C10.31 10.95 10.22 11.05 10.34 11.25C10.46 11.45 10.87 12.1 11.47 12.63C12.24 13.31 12.88 13.53 13.1 13.62C13.32 13.71 13.45 13.69 13.58 13.55C13.7 13.42 14.11 12.95 14.26 12.75C14.41 12.54 14.57 12.58 14.75 12.65C14.93 12.71 15.89 13.15 16.08 13.25C16.27 13.35 16.39 13.39 16.44 13.48C16.49 13.57 16.49 13.99 16.28 14.39C16.07 14.79 15.05 15.3 14.63 15.32C14.21 15.35 13.83 15.44 12.28 14.85C10.73 14.26 9.05 12.89 8.06 11.17C7.07 9.46 7.35 8.52 7.83 8.01C8.23 7.58 8.63 7.45 8.87 7.45C9.11 7.45 9.27 7.46 9.39 7.72"
        fill="currentColor"
      />
    </svg>
  );
}

function ZaloIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9.2H15.2L8.8 15H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  email: MailIcon,
  whatsapp: WhatsAppIcon,
  zalo: ZaloIcon,
};

type SocialLinkProps = {
  platform: keyof typeof icons;
  href: string;
  label: string;
};

export function SocialLink({ platform, href, label }: SocialLinkProps) {
  const Icon = icons[platform];

  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}