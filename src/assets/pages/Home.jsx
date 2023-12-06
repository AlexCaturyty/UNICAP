import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import OurService from "../components/OurService/OurService";
import Faculty from "../components/Faculty/Faculty";
import ProjetoPedagogico from "../components/ProjetoPedagogico/Projeto";
import "./homePage.css";
import "../../global.css";
import Introduction from "../components/Introduction/Introduction";
import PosEextensao from "../components/PoseExtensao/PoseExtensao";

const Home = () => {
  return (
    <div id="homePage">
      <div className="backgroundNavbar">
        <NavBar />
      </div>

      <div className="backgroundSection">
        <header className="section" id="header">
          <Introduction />
        </header>
      </div>
      <div className="backgroundAbout">
        <section className="section" id="about">
          <section id="quemSomos">
            <About />
          </section>
        </section>
      </div>

      <div className="backgroundOurService">
        <section className="section" id="aboutWork">
          <OurService />
        </section>
      </div>
      <div className="backgroundFaculty">
        <section className="section" id="aboutWork">
          <Faculty />
        </section>
      </div>

      <h2 className="ProjectTitle">Acompanhamento e avaliação do Projeto Pedagógico</h2>
      <section className="section" id="projeto">
        <ProjetoPedagogico />
      </section>

      <div className="BackgroundPos">
        <section className="section" id="PosEextensao">
          <PosEextensao/>
        </section>
      </div>
    </div>
  );
};

export default Home;
