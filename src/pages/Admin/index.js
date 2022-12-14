import React from "react";
import "./styles.css"
import { Link } from 'react-router-dom';
import { GoTrashcan } from "react-icons/go";
import { BiEdit } from "react-icons/bi";


class Admin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      alumnss: []
    }
  }

  componentDidMount() {
    this.postAluno();
  }

  componentWillUnmount() {

  }

  postAluno = () => {
    fetch("http://localhost:3004/alumns")
      .then(response => response.json())
      .then(data => {
        this.setState({ alumnss: data })
      })
  }
  apagarAluno(id) {
    fetch("http://localhost:3004/alumns/" + id, { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          alert("ALUNO APAGADO COM SUCESSO!")
          this.postAluno();
        }
      })
  }


  render() {

    return (
      <section className="hero is-warning is-centered">
        <div className="hero-body is-centered">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9 is-centered">

                <table className="table is-centered is-hoverable is-fullwidth is-bordered is-striped">
                  <thead className="has-background-info">
                    <tr>
                      <th className="has-text-white">NOME</th>
                      <th className="has-text-white">E-MAIL</th>
                      <th className="has-text-white">TELEFONE</th>
                      <th className="has-text-white">TURMA</th>
                      <th className="has-text-white">CURSO</th>
                      <th className="has-text-white">OPÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.alumnss.map((alumns) =>

                        <tr>
                          <td className="has-text-link-dark">{alumns.name}</td>
                          <td className="">{alumns.email}</td>
                          <td className="">{alumns.phone}</td>
                          <td className="">{alumns.class}</td>
                          <td className="">{alumns.course}</td>
                          <td>
                            <Link to={`/edit/${alumns.id}`}>
                              <BiEdit id="buttom-update" />
                            </Link>


                            <p className="buttons">
                              <button className="button is-small is-danger is-outlined"
                                onClick={() => this.apagarAluno(alumns.id)}>
                                <GoTrashcan id="buttom-delete" />
                              </button>
                            </p>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>

                <p className="buttons is-centered">
                  <Link to="/login">
                    <button className="button is-danger is-outlined">
                      <span>SAIR</span>
                    </button>
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>

      </section >

    );
  }
}
export default Admin;

