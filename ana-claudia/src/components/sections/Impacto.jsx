import { WHATSAPP } from "../../config";

export default function Impacto() {
  return (
    <section className="section section--rose final-cta" id="contato">
      <div className="wrap">
        <p className="section__eyebrow">Próximo passo</p>
        <h2 className="section__title">Pronta para realçar sua beleza?</h2>
        <p className="section__lead">
          Agende uma avaliação e descubra quais possibilidades fazem sentido
          para você — com técnica, naturalidade e cuidado.
        </p>

        <div className="final-cta__actions">
          <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer">
            Agendar minha avaliação
          </a>
        </div>
        <p className="final-cta__note">Atendimento pelo WhatsApp</p>
      </div>
    </section>
  );
}
