import { WHATSAPP } from "../../config";

export default function Procedimentos() {
  const procedures = [
    {
      title: "Preenchimentos",
      description:
        "Realce e harmonização dos seus traços com técnicas personalizadas e planejamento individual.",
      options: [
        "Preenchimento labial",
        "Rinomodelação",
        "Harmonização facial",
        "Preenchimento de queixo",
        "Outras regiões",
      ],
    },
    {
      title: "Toxina botulínica",
      description:
        "Suavização de linhas de expressão e prevenção do envelhecimento, preservando a naturalidade do seu rosto.",
      options: ["Testa", "Glabela", "Pés de galinha"],
    },
    {
      title: "Microagulhamento",
      description:
        "Estimula a renovação da pele para uma aparência mais uniforme, firme e revitalizada.",
      options: [],
    },
    {
      title: "Harmonização corporal",
      description:
        "Protocolos personalizados para valorização e contorno corporal com naturalidade.",
      options: ["Harmonização glútea"],
    },
  ];

  return (
    <section className="section section--alt" id="procedimentos">
      <div className="wrap">
        <div className="section__head">
          <p className="section__eyebrow">O que oferecemos</p>
          <h2 className="section__title">Procedimentos estéticos</h2>
          <p className="section__lead">
            Cada protocolo é pensado para o seu rosto, o seu corpo e o seu
            objetivo — sem fórmulas prontas.
          </p>
        </div>

        <div className="procedures">
          {procedures.map((procedure) => (
            <article className="procedure" key={procedure.title}>
              <h3 className="procedure__title">{procedure.title}</h3>
              <p className="procedure__desc">{procedure.description}</p>

              {procedure.options.length > 0 && (
                <ul className="procedure__list">
                  {procedure.options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              )}

              <a
                className="btn btn--ghost"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Quero saber mais
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
