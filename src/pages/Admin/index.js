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

  componentWillUnmount(){

  }

  postAluno = () => {
  fetch("http://localhost:3004/alumns")
      .then(response => response.json())
      .then(data => {
        this.setState({ alumnss: data })
      })
    }
    apagarAluno (id ){
      fetch("http://localhost:3004/alumns/"+id, {method: "DELETE"})
          .then(response => {
            if(response.ok){
              this.postAluno();
            }
          })
        }


  render() {

    return (
      <section className="hero is-warning">
        <div className="hero-body ">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9 is-centered">
                <table className="table is-bordered is-striped is-hoverable">
                  <thead className="has-background-info">
                    <tr>
                      <th className="has-text-white">Nome</th>
                      <th className="has-text-white">E-mail</th>
                      <th className="has-text-white">Telefone</th>
                      <th className="has-text-white">Turma</th>
                      <th className="has-text-white">Curso</th>
                      <th className="has-text-white">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="table is-hoverable has-background-light">
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
                              <button className="button is-danger is-outlined"
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

                <p className="buttons">
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

