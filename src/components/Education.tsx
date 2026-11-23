import { EDUCATION, CERTIFICATIONS, LANGUAGES } from "@/data/profile";

const Education = () => {
  return (
    <section
      id="formacao"
      className="border-b border-[var(--line)] bg-[var(--bg)]"
    >
      <div
        className="mx-auto max-w-[1200px] py-16 md:py-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <h2
          className="font-display font-bold text-[var(--ink)]"
          style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.75rem)", lineHeight: 1.08 }}
        >
          Formação, certificações e idiomas
        </h2>

        {/* Formação acadêmica em duas colunas limpas com filete superior */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[var(--line-strong)] pt-8 md:grid-cols-2 md:gap-12">
          {EDUCATION.map((edu) => (
            <div key={edu.id}>
              <p className="tabular font-mono text-xs font-medium text-[var(--brand-accent)]">
                {edu.status}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-[var(--ink)]">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[var(--ink-muted)]">
                {edu.institution} · {edu.location}
              </p>
              <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-[var(--ink-muted)]">
                {edu.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Índice estruturado de certificações e idiomas */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[var(--line)] pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h3 className="font-display text-lg font-bold text-[var(--ink)]">
              Certificações e cursos
            </h3>
            <ul className="mt-4 divide-y divide-[var(--line)] border-t border-[var(--line)]">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="text-sm font-semibold text-[var(--ink)]">{cert.title}</span>
                    <span className="ml-2 text-sm text-[var(--ink-muted)]">— {cert.issuer}</span>
                  </div>
                  <span className="tabular font-mono text-xs text-[var(--ink-muted)]">
                    {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-lg font-bold text-[var(--ink)]">Idiomas</h3>
            <ul className="mt-4 divide-y divide-[var(--line)] border-t border-[var(--line)]">
              {LANGUAGES.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-3 py-3.5 text-sm"
                >
                  <span className="font-semibold text-[var(--ink)]">{lang.name}</span>
                  <span className="text-right text-[var(--ink-muted)]">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
