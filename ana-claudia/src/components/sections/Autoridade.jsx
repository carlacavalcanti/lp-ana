export default function Autoridade() {
  const information = [
    "Biomédica Esteta",
    "Professora e Mentora",
    "Pós · Residência · Cursos VIP",
    "Atendimento personalizado",
  ];

  return (
    <section className="authority">
      <div className="wrap">
        <h2 className="authority__title">Técnica, experiência e conhecimento.</h2>
        <div className="authority__list">
          {information.map((item) => (
            <div className="authority__item" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
