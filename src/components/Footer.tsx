import { PROFILE } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="theme-dark border-t border-[var(--line-on-dark)] bg-[#101519] text-[var(--ink-muted-on-dark)]">
      <div
        className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 py-6 text-xs sm:flex-row sm:items-center"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <p className="tabular">© 2026 {PROFILE.fullName}</p>
        <p className="font-mono">{PROFILE.location} · Portfólio verificado</p>
      </div>
    </footer>
  );
};

export default Footer;
