import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Autoridade from "./components/sections/Autoridade";
import Sobre from "./components/sections/Sobre";
import Procedimentos from "./components/sections/Procedimentos";
import Resultados from "./components/sections/Resultados";
import Diferenciais from "./components/sections/Diferenciais";
import Como from "./components/sections/Como";
import Depoimentos from "./components/sections/Depoimentos";
import Localizacao from "./components/sections/Localizacao";
import Mentoria from "./components/sections/Mentoria";
import Conteudos from "./components/sections/Conteudos";
import Impacto from "./components/sections/Impacto";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Autoridade />
        <Sobre />
        <Procedimentos />
        <Resultados />
        <Diferenciais />
        <Como />
        <Depoimentos />
        <Localizacao />
        <Mentoria />
        <Conteudos />
        <Impacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
