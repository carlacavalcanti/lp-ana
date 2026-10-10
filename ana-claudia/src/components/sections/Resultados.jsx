import boca from "../../assets/images/boca.jpeg";
import boca2 from "../../assets/images/boca2.jpeg";
import mento from "../../assets/images/mento.jpeg";
import testa from "../../assets/images/testa.jpeg";
import malar from "../../assets/images/masculinomalar.jpeg";
import barriga from "../../assets/images/barriga.jpeg";
import { WHATSAPP } from "../../config";

export default function Resultados() {
  const results = [
    { procedure: "Preenchimento labial", image: boca },
    { procedure: "Preenchimento labial", image: boca2 },
    { procedure: "Rinomodelação e mento", image: mento },
    { procedure: "Toxina botulínica", image: testa },
    { procedure: "Harmonização facial", image: malar },
    { procedure: "Harmonização corporal", image: barriga },
  ];

  return (
    <section className="section" id="resultados">
      <div className="wrap">
        <div className="section__head">
          <p className="section__eyebrow">Antes e depois</p>
          <h2 className="section__title">Resultados que falam por si.</h2>
          <p className="section__lead">
            Cada procedimento é planejado de acordo com a anatomia, os objetivos
            e as características de cada paciente.
          </p>
        </div>

        <div className="results-grid">
          {results.map((result) => (
            <article className="result-card" key={`${result.procedure}-${result.image}`}>
              <img
                src={result.image}
                alt={`Resultado — ${result.procedure}`}
                loading="lazy"
              />
              <span className="result-card__label">{result.procedure}</span>
            </article>
          ))}
        </div>

        <div className="results-cta">
          <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer">
            Quero um resultado personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
