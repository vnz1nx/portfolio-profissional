import { useState } from "react";
import { Check, Copy, Mail, Phone, Linkedin, Github } from "lucide-react";
import { PROFILE } from "@/data/profile";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section
      id="contato"
      className="theme-dark bg-[var(--bg-dark)] text-[var(--ink-on-dark)]"
    >
      <div
        className="mx-auto max-w-[1200px] py-16 md:py-24"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display font-bold text-[var(--ink-on-dark)]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.05 }}
            >
              Aberto a novas oportunidades em dados, suporte ERP e desenvolvimento.
            </h2>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[var(--ink-muted-on-dark)]">
              Disponível para atuação 100% remota (Brasil) ou presencial/híbrida em Goiânia – GO.
              Se o perfil fizer sentido para a sua equipe, respondo diretamente por e-mail ou
              LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[var(--accent-on-dark)] px-5 py-2.5 text-sm font-semibold text-[#0d1417] transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Enviar e-mail</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[var(--line-on-dark)] bg-[var(--surface-dark)] px-5 py-2.5 text-sm font-medium text-[var(--ink-on-dark)] transition-colors hover:border-[var(--accent-on-dark)]/60"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[var(--accent-on-dark)]" aria-hidden="true" />
                    <span>E-mail copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>Copiar {PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--line-on-dark)] pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <dl className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line-on-dark)] pb-3">
                <dt className="inline-flex items-center gap-2 text-[var(--ink-muted-on-dark)]">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Telefone / WhatsApp</span>
                </dt>
                <dd className="tabular font-mono text-[var(--ink-on-dark)]">{PROFILE.phone}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line-on-dark)] pb-3">
                <dt className="inline-flex items-center gap-2 text-[var(--ink-muted-on-dark)]">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </dt>
                <dd>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--accent-on-dark)] underline underline-offset-4 hover:opacity-85"
                  >
                    marcos-vinicius-306151275
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="inline-flex items-center gap-2 text-[var(--ink-muted-on-dark)]">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                </dt>
                <dd>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--accent-on-dark)] underline underline-offset-4 hover:opacity-85"
                  >
                    github.com/vnz1nx
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
