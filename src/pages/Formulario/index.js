import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./styles.css";

const validationForm = yup.object().shape({
    name: yup.string().required("Precisa colocar seu nome") .min(3, "Coloque Nome e Sobrenome"),
    email: yup.string().email("E-mail não valido").required("Precisa colocar seu e-mail") ,
    phone: yup.string().required("Precisa colocar seu Telefone").min(3, "Telefone não valido").max(15, "Telefone não valido"),
    class: yup.string().required("Escolha uma Turma"),
    course: yup.string().required("Escolha um Curso"),
});


const Formulario = () => {

    let navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    })

    const onSubmit = data => axios.post("http://localhost:3004/alumns", data)
        .then(() => {
            alert("FOI CADASTRADO COM SUCESSO")
            navigate("/")
        })
        .catch(() => {
            console.log("DEU ERRADO")
        })


    return (
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5 is-centered">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="box">

                                <div className="field">
                                    <label className="label">Nome:</label>
                                    <input className={`input ${errors.name
                                        ? "is-danger"
                                        : "is-success"
                                        }`}
                                        type="name"
                                        name='name' {...register("name")}
                                        placeholder="Seu Nome e Sobrenome" />
                                    <span className="erro-message-form">{errors.name?.message}</span>
                                </div>

                                <div className="field">
                                    <label className="label">E-mail:</label>
                                    <input
                                        className={`input ${errors.email
                                            ? "is-danger"
                                            : "is-success"
                                            }`}
                                        type="email"
                                        name="email"{...register("email")}
                                        placeholder="example@mail.com"
                                    />
                                    <span className="erro-message-form">{errors.email?.message}</span>
                                </div>

                                <div className="field">
                                    <label className="label">Telefone:</label>
                                    <input className={`input ${errors.phone
                                        ? "is-danger"
                                        : "is-success"
                                        }`}
                                        type="number"
                                        name="phone" {...register("phone")}
                                        placeholder="(DDD)0000-0000"
                                    />
                                    <span className="erro-message-form">{errors.phone?.message}</span>
                                </div>

                                <div className="field">
                                    <label className="label">Turma:</label>
                                    <select
                                        id="input"
                                        className={`input ${errors.class
                                            ? "is-danger"
                                            : "is-success"
                                            }`}
                                        name="class" {...register("class")}>
                                        <option value="">SELECCIONE...</option>
                                        <option >Turma 01</option>
                                        <option >Turma 02</option>
                                        <option >Turma 03</option>
                                    </select>
                                    <span className="erro-message-form">{errors.class?.message}</span>
                                </div>

                                <div className="field">
                                    <label className="label">Curso:</label>
                                    <select
                                        id="input"
                                        isMulti
                                        className={`input ${errors.course
                                            ? "is-danger"
                                            : "is-success"
                                            }`}
                                        name="course" {...register("course")}>
                                        <option value="">SELECCIONE...</option>
                                        <option>HTML</option>
                                        <option >CSS</option>
                                        <option >JAVA SCRIPT</option>
                                        <option >REACT</option>
                                    </select>
                                    <span className="erro-message-form">{errors.course?.message}</span>
                                </div>

                                <div className="field">

                                    <p className="buttons">
                                        <button 
                                        type="submit"
                                        className="button is-link is-outlined">
                                            <span>CADASTRAR</span>
                                        </button>
                                    </p>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formulario