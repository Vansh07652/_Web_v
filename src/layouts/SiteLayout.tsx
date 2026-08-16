import type { ReactNode } from "react";
import type { Navigate } from "../lib/navigation";
import { Footer, SiteHeader } from "../components/ui";

export function SiteLayout({ children, navigate, currentPath }: { children: ReactNode; navigate: Navigate; currentPath: string }) {
  return (
    <div className="site-shell">
      <SiteHeader navigate={navigate} currentPath={currentPath} />
      <main id="main-content" className="main-content" tabIndex={-1}>{children}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
