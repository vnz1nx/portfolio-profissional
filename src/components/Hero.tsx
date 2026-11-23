import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import portraitImg from "@/assets/marcos-portrait.jpg";
import { PROFILE } from "@/data/profile";

const Hero = () => {
  return (
    <section
      id="topo"
      className="bg-tech-grid relative border-b border-[var(--line)] bg-[var(--bg)]"
    >
      <div
        className="mx-auto max-w-[1200px] py-14 md:py-20 lg:py-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna principal de texto */}
          <div className="motion-enter lg:col-span-7">
            <p className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[var(--ink-muted)]">
              <MapPin className="h-3.5 w-3.5 text-[var(--brand-accent)]" aria-hidden="true" />
              <span>{PROFILE.location}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.availability}</span>
            </p>

            <h1
              className="font-display font-bold text-[var(--ink)]"
              style={{
                fontSize: "clamp(2.65rem, 5.6vw, 4.65rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
              }}
            >
              Marcos Vinicius
              <span className="block text-[0.58em] font-semibold tracking-[-0.025em] text-[var(--ink-muted)]">
                Gonçalves Piedade
              </span>
            </h1>

            <p className="mt-6 font-display text-lg font-semibold text-[var(--brand-accent)] md:text-xl">
              {PROFILE.role}
            </p>

            <p className="mt-4 max-w-[58ch] text-base leading-[1.68] text-[var(--ink-muted)] md:text-[1.0625rem]">
              {PROFILE.heroSummary}
            </p>

            {/* Ações principais */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[var(--brand-accent)] px-6 py-2.5 text-sm font-semibold text-[#f6f5f1] transition-colors hover:bg-[var(--brand-accent-hover)]"
              >
                Ver projetos verificados
              </a>
              <a
                href="#contato"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[var(--line-strong)] bg-[var(--surface-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--surface)]"
              >
                Entrar em contato
              </a>
            </div>

            {/* Links diretos e fatos reais */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6 text-sm">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand-accent)]"
              >
                <Linkedin className="h-4 w-4 text-[var(--ink-muted)]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand-accent)]"
              >
                <Github className="h-4 w-4 text-[var(--ink-muted)]" aria-hidden="true" />
                <span>github.com/vnz1nx</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand-accent)]"
              >
                <Mail className="h-4 w-4 text-[var(--ink-muted)]" aria-hidden="true" />
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </div>

          {/* Coluna do retrato editorial 4:5 */}
          <div className="lg:col-span-5">
            <figure className="mx-auto max-w-[390px] lg:ml-auto lg:mr-0">
              <div className="overflow-hidden rounded-lg border border-[var(--line-strong)] bg-[var(--bg-dark)] p-2 shadow-[0_24px_50px_-28px_rgba(20,25,29,0.45)]">
                <div className="aspect-[4/5] overflow-hidden rounded-[5px] bg-[#1e242a]">
                  <img
                    src={portraitImg}
                    alt="Retrato profissional de Marcos Vinicius Gonçalves Piedade"
                    width={800}
                    height={1000}
                    decoding="async"
                    {...({
                      fetchpriority: "high",
                    } as React.ImgHTMLAttributes<HTMLImageElement>)}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-2 font-mono text-[11px] text-[var(--ink-muted)]">
                <span>PostgreSQL · MySQL · Java · ERP</span>
                <span className="tabular">IF Goiano · UniGoiás</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
