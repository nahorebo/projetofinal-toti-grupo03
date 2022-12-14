import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EditarAluno = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [alumns, setAlumns] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:3004/alumns/' + id)
            .then(response => response.json())
            .then(data => {
                console.log('DEU CERTO O ID')
                setAlumns(data);
                setIsPending(false);
            }
            ).catch(error => {
                setError(error);
                setIsPending(false);
            }
            );
    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();
        fetch("http://localhost:3004/alumns/" + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(alumns)
        })
            .then(response => response.json())
            .then(data => {
                navigate("/admin");
            }
            ).catch(error => {
                console.log("DEU ERRO")
            }
            );
    }
    return (
        <section className="hero is-success">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5 is-centered">
                            <form onSubmit={handleSubmit}
                                className="box">

                                <div className="field">
                                    <label className="label">Novo Nome:</label>
                                    <input className="input"
                                        type="name"
                                        name='name'
                                        placeholder="Nome e Sobrenome"
                                        value={alumns.name}
                                        onChange={e => setAlumns({ ...alumns, name: e.target.value })} />

                                    <div className="field">
                                        <label className="label">Novo E-mail:</label>
                                        <input
                                            className="input"
                                            type="email"
                                            placeholder="example@mail.com"
                                            value={alumns.email}
                                            onChange={e => setAlumns({ ...alumns, email: e.target.value })} />
                                    </div>

                                    <div className="field">
                                        <label className="label">Novo Telefone:</label>
                                        <input className="input"
                                            type="phone"
                                            name='phone'
                                            placeholder="(DDD)0000-0000"
                                            value={alumns.phone}
                                            onChange={e => setAlumns({ ...alumns, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="field">
                                        <label className="label">Nova Turma:</label>
                                        <select
                                            id="input"
                                            className="input"
                                            name="class"
                                            value={alumns.class}
                                            onChange={e => setAlumns({ ...alumns, class: e.target.value })}>
                                            <option value="">Selecciona...</option>
                                            <option >Turma 01</option>
                                            <option >Turma 02</option>
                                            <option >Turma 03</option>
                                        </select>
                                    </div>

                                    <div className="field">
                                        <label className="label">Novo Curso:</label>
                                        <select
                                            id="input"
                                            className="input"
                                            name="course"
                                            value={alumns.course}
                                            onChange={e => setAlumns({ ...alumns, course: e.target.value })}>
                                            <option value="">Selecciona...</option>
                                            <option>HTML</option>
                                            <option >CSS</option>
                                            <option >JAVA SCRIPT</option>
                                            <option >REACT</option>
                                        </select>
                                    </div>
                                    <p className="buttons">
                                        <button type="submit" className="button is-link is-outlined">
                                            <span>ATUALIZAR</span>
                                        </button>
                                    </p>
                                </div>

                            </form>

                            <p className="buttons">
                                <Link to="/admin">
                                    <button class="button is-danger is-outlined">
                                        <span>VOLTAR</span>
                                    </button></Link>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default EditarAluno;