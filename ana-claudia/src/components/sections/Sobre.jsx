import portrait from "../../assets/images/perfil.jpeg";
import procedureImg from "../../assets/images/aplicandojpeg.jpeg";

export default function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="wrap about">
        <div className="about__media">
          <img
            src={portrait}
            alt="Ana Claudia Leônidas, biomédica esteta"
          />
        </div>

        <div className="about__copy">
          <p className="section__eyebrow">Sobre</p>
          <h2 className="section__title">
            De uma escolha inesperada a uma verdadeira vocação.
          </h2>

          <p>
            Nascida em Natal e formada em Biomedicina, Ana Claudia descobriu a
            estética ainda na graduação — e o que seria só uma experiência
            virou o centro da sua carreira.
          </p>

          <p>
            Hoje une conhecimento técnico, precisão e olhar individualizado
            para realçar a beleza de cada paciente. Além da prática clínica,
            forma e mentora profissionais da área.
          </p>

          <a className="btn btn--ghost" href="#resultados">
            Conheça o trabalho da Ana
          </a>
        </div>
      </div>

      <div className="wrap about__wide">
        <div className="about__media">
          <img
            src={procedureImg}
            alt="Ana Claudia realizando procedimento estético"
          />
        </div>
      </div>
    </section>
  );
}
