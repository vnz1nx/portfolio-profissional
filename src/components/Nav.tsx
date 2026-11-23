import { useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { PROFILE } from "@/data/profile";

interface NavProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "especialidade", label: "Especialidade" },
  { id: "projetos", label: "Projetos" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

const Nav = ({ activeSection }: NavProps) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    const mq = window.matchMedia("(min-width: 820px)");

    const syncPopoverMode = () => {
      // Use setAttribute/removeAttribute rather than the popover IDL property
      if (mq.matches) {
        menuEl.removeAttribute("popover");
      } else {
        menuEl.setAttribute("popover", "auto");
      }
    };

    syncPopoverMode();
    mq.addEventListener("change", syncPopoverMode);
    return () => mq.removeEventListener("change", syncPopoverMode);
  }, []);

  const handleNavClick = () => {
    const menuEl = menuRef.current as (HTMLUListElement & { hidePopover?: () => void }) | null;
    if (menuEl?.hasAttribute("popover") && typeof menuEl.hidePopover === "function") {
      try {
        menuEl.hidePopover();
      } catch {
        // Ignore when popover is already closed
      }
    }
  };

  return (
    <header className="site-header">
      <div
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <a
          href="#topo"
          className="inline-flex items-baseline gap-2.5 text-[var(--ink)] no-underline"
        >
          <span className="font-display text-lg font-bold tracking-tight">MV.</span>
          <span className="hidden font-mono text-xs text-[var(--ink-muted)] sm:inline">
            {PROFILE.shortName}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="flex items-center gap-3">
          <button
            type="button"
            className="menu-button inline-flex min-h-[40px] items-center gap-2 rounded-md border border-[var(--line-strong)] bg-[var(--surface-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface)]"
            {...({
              popovertarget: "site-menu",
              popovertargetaction: "toggle",
            } as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            aria-controls="site-menu"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
            <span>Menu</span>
          </button>

          <ul id="site-menu" ref={menuRef} className="site-menu-popover list-none">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleNavClick}
                    aria-current={isCurrent ? "location" : undefined}
                    className="nav-link relative block rounded-md px-3 py-2 text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-1 border-t border-[var(--line)] pt-2 min-[820px]:ml-2 min-[820px]:mt-0 min-[820px]:border-l min-[820px]:border-t-0 min-[820px]:pl-3 min-[820px]:pt-0">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="block rounded-md px-3 py-2 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand-accent)]"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
