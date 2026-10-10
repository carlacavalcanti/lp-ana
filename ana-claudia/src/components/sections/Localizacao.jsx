import { MAPS, WHATSAPP } from "../../config";

export default function Localizacao() {
  return (
    <section className="section" id="local">
      <div className="wrap location">
        <div>
          <p className="section__eyebrow">Onde atender</p>
          <h2 className="section__title">
            Seu momento de cuidado, em um endereço especial.
          </h2>
        </div>

        <div>
          <p className="location__place">Shopping Portugal Center</p>
          <p className="location__city">Natal — RN</p>
          <div className="location__actions">
            <a
              className="btn btn--ghost"
              href={MAPS}
              target="_blank"
              rel="noreferrer"
            >
              Como chegar
            </a>
            <a
              className="btn"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
