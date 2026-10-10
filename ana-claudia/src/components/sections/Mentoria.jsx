import { WHATSAPP_MENTORIA } from "../../config";

export default function Mentoria() {
  const benefits = [
    "Experiência prática supervisionada",
    "Acompanhamento individual",
    "Orientação durante o atendimento",
    "Troca de experiências clínicas",
    "Aprimoramento técnico",
    "Contato direto com a mentora",
  ];

  return (
    <section className="section section--ink" id="mentoria">
      <div className="wrap mentoria">
        <div>
          <p className="section__eyebrow">Para profissionais</p>
          <h2 className="section__title">
            Eleve o nível da sua prática clínica.
          </h2>
          <p className="section__lead">
            Mentoria prática e exclusiva para quem quer aprimorar técnica com
            acompanhamento de perto — e paciente real na mão.
          </p>
        </div>

        <div className="mentoria__panel">
          <h3 className="mentoria__name">Mentoria VIP Ana Claudia Leônidas</h3>
          <p>
            Uma experiência individualizada para profissionais que desejam
            evoluir na estética avançada com supervisão clínica.
          </p>

          <div className="mentoria__meta">
            <div>
              <h3>Formato</h3>
              <p>Apenas 3 alunos por turma</p>
            </div>
            <div>
              <h3>Prática</h3>
              <p>1 paciente por aluno</p>
            </div>
          </div>

          <h3 className="mentoria__subtitle">O que você encontra</h3>

          <ul className="mentoria__benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <p className="mentoria__price">R$ 1.000</p>
          <p className="mentoria__note">por aluno · 3 vagas por turma</p>

          <a
            className="btn btn--light"
            href={WHATSAPP_MENTORIA}
            target="_blank"
            rel="noreferrer"
          >
            Quero saber sobre a mentoria
          </a>
        </div>
      </div>
    </section>
  );
}
