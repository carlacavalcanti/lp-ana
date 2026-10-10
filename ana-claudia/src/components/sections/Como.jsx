import { WHATSAPP } from "../../config";

export default function Como() {
  const steps = [
    {
      number: "01",
      title: "Avaliação",
      description:
        "Conversa sobre suas características, objetivos e expectativas — sem pressa e sem protocolo genérico.",
    },
    {
      number: "02",
      title: "Planejamento",
      description:
        "Definição do procedimento ou combinação mais adequada para o seu caso.",
    },
    {
      number: "03",
      title: "Procedimento",
      description:
        "Execução cuidadosa, com técnica individualizada e foco em naturalidade.",
    },
    {
      number: "04",
      title: "Acompanhamento",
      description:
        "Orientações claras para o pós-procedimento e suporte quando você precisar.",
    },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <p className="section__eyebrow">Como funciona</p>
          <h2 className="section__title">
            Seu atendimento começa antes do procedimento.
          </h2>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span className="step__number">{step.number}</span>
              <h3 className="step__title">{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="steps-cta">
          <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer">
            Agendar minha avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
