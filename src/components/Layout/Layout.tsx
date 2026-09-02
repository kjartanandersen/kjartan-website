import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const sections = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-ink text-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-panel focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl flex-col items-start gap-1.5 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-tight text-white"
          >
            Kjartan Már Andersen
          </a>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-muted sm:gap-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition-colors hover:text-accent"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-6">
        {children}
      </main>

      <footer className="mt-8 border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-10 font-mono text-[11px] text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Kjartan Már Andersen</span>
          <span>Reykjavík, Iceland</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
