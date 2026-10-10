export default function Conteudos() {
  const masterclasses = [
    {
      title: "Masterclass Labial",
      description:
        "Aprofundamento em técnicas de preenchimento labial com foco em naturalidade e proporção.",
    },
    {
      title: "Masterclass de Rinomodelação",
      description:
        "Aperfeiçoamento técnico para profissionais que desejam evoluir no planejamento nasal.",
    },
    {
      title: "Masterclass de Harmonização Glútea",
      description:
        "Técnicas e planejamento para harmonização da região glútea com segurança.",
    },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <p className="section__eyebrow">Educação</p>
          <h2 className="section__title">
            Formação e aperfeiçoamento profissional
          </h2>
          <p className="section__lead">
            Além da clínica, Ana Claudia compartilha conhecimento como
            professora e mentora — da prática ao ensino.
          </p>
        </div>

        <div className="contents-grid">
          {masterclasses.map((masterclass) => (
            <article className="content-card" key={masterclass.title}>
              <h3>{masterclass.title}</h3>
              <p>{masterclass.description}</p>
            </article>
          ))}
        </div>

        <div className="tags">
          <span>Pós-graduação</span>
          <span>Residência</span>
          <span>Cursos VIP</span>
        </div>
      </div>
    </section>
  );
}
