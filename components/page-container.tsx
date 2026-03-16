import { ReactNode } from "react";

import { FloatingContactDock } from "@/components/floating-contact-dock";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main id="top" className="page-frame">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top,_rgba(99,174,110,0.22),_transparent_38%),radial-gradient(circle_at_left,_rgba(63,132,80,0.14),_transparent_28%),radial-gradient(circle_at_right,_rgba(201,171,95,0.1),_transparent_24%)]" />
      <SiteHeader />
      {children}
      <FloatingContactDock />
      <SiteFooter />
    </main>
  );
}