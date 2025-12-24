export default function Footer() {
  return (
    <footer className="w-full mt-24 pt-10 border-t border-[var(--accent-green)]/20">
      <div className="soft-container pb-10 flex flex-col items-center justify-center gap-3">

        <p className="text-[var(--text-muted)] text-sm tracking-wide">
          © {new Date().getFullYear()} Luiza Andrade — All rights reserved
        </p>

        <p className="text-[var(--accent-green)] text-xs uppercase tracking-[0.2em]">
          Crafted with precision & creativity
        </p>

      </div>
    </footer>
  );
}