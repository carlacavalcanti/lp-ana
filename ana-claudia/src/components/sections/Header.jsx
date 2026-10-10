import { useEffect, useState } from "react";
import { WHATSAPP } from "../../config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header__inner">
        <a href="#topo" className="header__brand">
          Ana Claudia Leônidas
        </a>

        <nav className="header__nav" aria-label="Principal">
          <a href="#procedimentos">Procedimentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#sobre">Sobre</a>
          <a href="#mentoria">Mentoria</a>
        </nav>

        <a className="btn btn--rose" href={WHATSAPP} target="_blank" rel="noreferrer">
          Agendar
        </a>
      </div>
    </header>
  );
}
