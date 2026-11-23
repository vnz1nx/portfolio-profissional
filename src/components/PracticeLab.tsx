import { useState, type KeyboardEvent } from "react";
import { Database, Headset, Code2 } from "lucide-react";
import { PRACTICE_TABS } from "@/data/profile";

const TAB_ICONS = {
  dados: Database,
  erp: Headset,
  dev: Code2,
} as const;

const PracticeLab = () => {
  const [activeId, setActiveId] = useState(PRACTICE_TABS[0].id);
  const current = PRACTICE_TABS.find((t) => t.id === activeId) ?? PRACTICE_TABS[0];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const dir = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + dir + PRACTICE_TABS.length) % PRACTICE_TABS.length;
    const nextTab = PRACTICE_TABS[nextIndex];
    setActiveId(nextTab.id);
    const btn = document.getElementById(`tab-${nextTab.id}`);
    btn?.focus();
  };

  return (
    <section
      id="especialidade"
      className="theme-dark bg-tech-grid-dark border-b border-[var(--line-on-dark)] bg-[var(--bg-dark)] text-[var(--ink-on-dark)]"
    >
      <div
        className="mx-auto max-w-[1200px] py-16 md:py-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              className="font-display font-bold text-[var(--ink-on-dark)]"
              style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.85rem)", lineHeight: 1.08 }}
            >
              Na prática: Dados, ERP e Código
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[var(--ink-muted-on-dark)] md:text-base">
              As três frentes em que atuo no dia a dia — todas baseadas em experiência real de
              produção e projetos implementados do zero.
            </p>
          </div>

          {/* Seletor de frentes */}
          <div
            role="tablist"
            aria-label="Frentes de atuação técnica"
            className="inline-flex shrink-0 flex-wrap gap-1.5 rounded-lg border border-[var(--line-on-dark)] bg-[#0f1418] p-1 sm:flex-nowrap"
          >
            {PRACTICE_TABS.map((tab, index) => {
              const isSelected = tab.id === current.id;
              const Icon = TAB_ICONS[tab.id as keyof typeof TAB_ICONS] ?? Database;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveId(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`inline-flex min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    isSelected
                      ? "bg-[var(--accent-on-dark)] text-[#0d1417]"
                      : "text-[var(--ink-muted-on-dark)] hover:text-[var(--ink-on-dark)]"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Painel ativo */}
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="mt-10 grid grid-cols-1 gap-8 border-t border-[var(--line-on-dark)] pt-10 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-6">
            <p className="max-w-[54ch] text-base leading-relaxed text-[var(--ink-on-dark)] md:text-lg">
              {current.summary}
            </p>

            <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-[var(--ink-muted-on-dark)]">
              {current.routines.map((routine) => (
                <li key={routine} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-on-dark)]"
                    aria-hidden="true"
                  />
                  <span>{routine}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="mb-3 font-mono text-xs text-[var(--ink-muted-on-dark)]">
                Stack verificada nesta frente
              </p>
              <ul className="flex flex-wrap gap-2">
                {current.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-[var(--line-on-dark)] bg-[var(--surface-dark)] px-2.5 py-1 font-mono text-xs text-[var(--ink-on-dark)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Artefato técnico real da frente */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-lg border border-[var(--line-on-dark)] bg-[#0d1216]">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line-on-dark)] px-4 py-3 font-mono text-xs">
                <span className="text-[var(--ink-on-dark)]">{current.artifactTitle}</span>
                <span className="text-[var(--accent-on-dark)]">{current.artifactLang}</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-[1.7] text-[#d9e2e8] sm:text-[13px]">
                <code>{current.artifactBody}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeLab;
