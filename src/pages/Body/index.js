import React from "react";
import Footer from "../../pages/Footer";
import html1 from "../../assets/html1.png";
import JS from "../../assets/JS.png";
import CSS1 from "../../assets/CSS1.png";
import foto1 from "../../assets/foto1.png";
import "./styles.css";

const Body = () => {

  return (

    <div className="containerprincipal">

      <section id="eyes" className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title is-1">RECURSOS EDUTECH</p>
              <p className="subtitle is-3">CONFIRA AS NOVIDADES</p>
            </div>

            <div className="column">
              <img className="image is-500x600 " src={foto1} />
            </div>
          </div>
        </div>
      </section>

      <section id="layout" className="section is-medium">
        <div className="tile is-ancestor">
        <div className="columns is-8 is-centered is-4 is-offset-8">
          <div className="tile is-2 is-vertical">
            <p className="title">Conheça HTML!</p>
            <p className="subtitle">Sabe o significado das siglas de HTML?...</p>
            <figure>
              <img className="image is-128x128" src={html1} width="220" alt="logohtml" />
            </figure>
          </div>

          <div className="tile is-2 is-vertical">
            <p className="title "> Aprenda JS!</p>
            <p className="subtitle">Programação de alto nível criado para tudo o que...</p>
            <figure >
              <img className="image is-128x128" src={JS} width="220" alt="logojs" />
            </figure>
          </div>

          <div className="tile is-2 is-vertical">
            <p className="title"> Inspira CSS!</p>
            <p className="subtitle">Usado para estilizar elementos escritos em a fe...</p>
            <figure >
              <img className="image is-128x128" src={CSS1} width="220" alt="logocss" />
            </figure>
          </div>
        </div >
      </div>

      </section>


      <div>
        <Footer />
      </div>
    </div>



  );
}

export default Body;