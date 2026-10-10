import { INSTAGRAM, WHATSAPP } from "../../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <h2 className="footer__brand">Ana Claudia Leônidas</h2>
          <p className="footer__meta">
            Biomédica Esteta · Professora · Mentora
          </p>
        </div>

        <p className="footer__meta">Shopping Portugal Center — Natal/RN</p>

        <div className="footer__links">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <small className="footer__copy">
          © {new Date().getFullYear()} Ana Claudia Leônidas — Todos os direitos
          reservados.
        </small>
      </div>
    </footer>
  );
}
