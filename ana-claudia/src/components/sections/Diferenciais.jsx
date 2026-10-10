export default function Diferenciais() {
  const differentials = [
    {
      title: "Atendimento individualizado",
      description:
        "Cada rosto, corpo e objetivo são únicos. O planejamento considera as suas características e expectativas.",
    },
    {
      title: "Técnica e conhecimento",
      description:
        "Experiência clínica aliada à atuação acadêmica e ao ensino de profissionais da área.",
    },
    {
      title: "Naturalidade",
      description:
        "O objetivo não é transformar quem você é, e sim valorizar o que já faz parte da sua beleza.",
    },
    {
      title: "Precisão",
      description:
        "Cada procedimento é realizado com planejamento, segurança e atenção aos detalhes.",
    },
  ];

  return (
    <section className="section section--rose">
      <div className="wrap">
        <div className="section__head">
          <p className="section__eyebrow">Diferenciais</p>
          <h2 className="section__title">
            Mais do que um procedimento. Um planejamento para você.
          </h2>
        </div>

        <div className="diff-grid">
          {differentials.map((item) => (
            <article className="diff-item" key={item.title}>
              <h3 className="diff-item__title">{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
