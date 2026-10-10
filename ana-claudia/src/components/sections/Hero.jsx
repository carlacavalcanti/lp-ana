import heroImg from "../../assets/images/perfil2.jpeg";
import { WHATSAPP } from "../../config";

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero__media" aria-hidden="true">
        <img src={heroImg} alt="" />
      </div>

      <div className="hero__content">
        <span className="hero__role">Biomédica esteta · Natal/RN</span>
        <p className="hero__brand">Ana Claudia Leônidas</p>
        <h1 className="hero__title">
          Realce sua beleza com naturalidade, técnica e precisão.
        </h1>
        <p className="hero__text">
          Procedimentos personalizados para valorizar seus traços — com
          resultados que respeitam a sua individualidade.
        </p>
        <div className="hero__actions">
          <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer">
            Agendar minha avaliação
          </a>
          <a className="btn btn--ghost" href="#procedimentos">
            Ver procedimentos
          </a>
        </div>
      </div>
    </section>
  );
}
