import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/profile";

const ProjectLinks = ({ project }: { project: ProjectItem }) => {
  if (!project.githubUrl && !project.liveUrl) {
    return (
      <span className="inline-block font-mono text-xs text-[var(--ink-muted)]">
        Projeto acadêmico concluído · IF Goiano
      </span>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[36px] items-center gap-1.5 text-[var(--ink)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--brand-accent)] hover:decoration-[var(--brand-accent)]"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          <span>Código no GitHub</span>
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[36px] items-center gap-1.5 text-[var(--brand-accent)] underline decoration-[var(--brand-accent)] underline-offset-4 transition-colors hover:text-[var(--brand-accent-hover)]"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span>Abrir projeto online</span>
        </a>
      )}
    </div>
  );
};

const Portfolio = () => {
  const featured = PROJECTS[0];
  const secondary = PROJECTS.slice(1, 3);
  const extra = PROJECTS.slice(3);

  return (
    <section
      id="projetos"
      className="border-b border-[var(--line)] bg-[var(--bg)]"
    >
      <div
        className="mx-auto max-w-[1200px] py-16 md:py-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="max-w-[60ch]">
          <h2
            className="font-display font-bold text-[var(--ink)]"
            style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.85rem)", lineHeight: 1.08 }}
          >
            Projetos selecionados
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
            Sistemas construídos manualmente com foco em persistência relacional, arquitetura
            organizada e interfaces responsivas — todos com links verificados.
          </p>
        </div>

        {/* Projeto principal em destaque assimétrico */}
        {featured && (
          <article className="mt-12 grid grid-cols-1 gap-8 border-t border-[var(--line-strong)] pt-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="overflow-hidden rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center justify-between gap-2 font-mono text-xs text-[var(--ink-muted)]">
                <span>{featured.context}</span>
                <span className="tabular">{featured.period}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--ink)] md:text-[1.75rem]">
                {featured.title}
              </h3>

              <p className="mt-4 text-sm leading-[1.68] text-[var(--ink-muted)] md:text-base">
                {featured.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[var(--ink)]">
                {featured.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-accent)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {featured.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs text-[var(--ink)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-[var(--line)] pt-5">
                <ProjectLinks project={featured} />
              </div>
            </div>
          </article>
        )}

        {/* Dois projetos reais complementares */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[var(--line)] pt-12 md:grid-cols-2">
          {secondary.map((project) => (
            <article key={project.id} className="flex flex-col">
              <div className="overflow-hidden rounded-lg border border-[var(--line-strong)] bg-[var(--surface)]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-2 font-mono text-xs text-[var(--ink-muted)]">
                  <span>{project.context}</span>
                  <span className="tabular">{project.period}</span>
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-[var(--ink)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.65] text-[var(--ink-muted)]">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-[var(--line)] bg-[var(--surface)] px-2 py-0.5 font-mono text-xs text-[var(--ink)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Linha adicional enxuta para projeto extra funcional no ar */}
        {extra.length > 0 && (
          <div className="mt-12 border-t border-[var(--line)] pt-8">
            <p className="mb-4 font-mono text-xs text-[var(--ink-muted)]">
              Outro projeto web publicado
            </p>
            {extra.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between gap-4 border-b border-[var(--line)] pb-6 md:flex-row md:items-center"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-[60ch] text-sm text-[var(--ink-muted)]">
                    {project.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <ProjectLinks project={project} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
