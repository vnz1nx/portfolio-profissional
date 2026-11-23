import { EXPERIENCES } from "@/data/profile";

const Experience = () => {
  return (
    <section
      id="trajetoria"
      className="border-b border-[var(--line)] bg-[var(--surface)]"
    >
      <div
        className="mx-auto max-w-[1200px] py-16 md:py-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna lateral fixa em desktop */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2
                className="font-display font-bold text-[var(--ink)]"
                style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.75rem)", lineHeight: 1.08 }}
              >
                Experiência profissional
              </h2>
              <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                Evolução prática do atendimento operacional e suporte ERP até migração de dados e
                bancos relacionais em ambiente de produção.
              </p>
            </div>
          </div>

          {/* Lista editorial com filetes estruturais */}
          <div className="lg:col-span-8">
            <ol className="divide-y divide-[var(--line-strong)] border-t border-[var(--line-strong)]">
              {EXPERIENCES.map((exp) => (
                <li key={exp.id} className="py-8 first:pt-6 last:pb-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-bold text-[var(--ink)]">
                      {exp.role}
                    </h3>
                    <span className="tabular font-mono text-xs font-medium text-[var(--brand-accent)]">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold text-[var(--ink-muted)]">
                    {exp.company} · {exp.location}
                  </p>

                  <ul className="mt-4 space-y-2.5 text-sm leading-[1.65] text-[var(--ink-muted)] md:text-[0.95rem]">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]/50"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-[var(--line)] bg-[var(--bg)] px-2.5 py-0.5 font-mono text-xs text-[var(--ink)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
