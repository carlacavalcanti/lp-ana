import { INSTAGRAM } from "../../config";

export default function Depoimentos() {
  const testimonials = [
    {
      name: "Paciente · Preenchimento labial",
      text: "Me senti acolhida desde a avaliação. O resultado ficou natural — exatamente o que eu buscava.",
    },
    {
      name: "Paciente · Toxina botulínica",
      text: "Saí com o rosto descansado, sem perder a expressão. Técnica e cuidado em cada detalhe.",
    },
    {
      name: "Paciente · Harmonização facial",
      text: "O planejamento fez toda a diferença. Me reconheço no espelho — só que mais harmônica.",
    },
  ];

  return (
    <section className="section section--alt">
      <div className="wrap">
        <div className="section__head">
          <p className="section__eyebrow">Experiência</p>
          <h2 className="section__title">
            Quem vive a experiência, recomenda.
          </h2>
        </div>

        <div className="proof">
          {testimonials.map((testimonial) => (
            <article className="proof-card" key={testimonial.name}>
              <span className="proof-card__stars" aria-label="5 estrelas">
                ★★★★★
              </span>
              <p>“{testimonial.text}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>

        <div className="results-cta">
          <a
            className="btn btn--ghost"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
