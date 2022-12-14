import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { GiPadlock } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const validationForm = yup.object().shape({
    username: yup.string().required("Insira seu usuario").min(10, "Não tem autorização para logar"),
    password: yup.string().required("Insira sua senha"),
});

const Login = () => {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    })

    const onSubmit = () => {
            navigate("/admin")
    }

    return (
        <section className="hero is-success">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5 is-centered">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="box">

                                <div className="field">
                                    <label className="label"><FaUserCircle /> Usuario:</label>
                                    <input
                                        className={`input ${errors.username
                                            ? "is-danger"
                                            : "is-success"
                                            }`}
                                        type="text"
                                        id="username"
                                        name="username" {...register("username")}
                                    />
                                    <span className="erro-message-login">{errors.username?.message}</span>
                                </div>

                                <div className="field">
                                    <label className="label"><GiPadlock /> Senha:</label>
                                    <input className={`input ${errors.password
                                        ? "is-danger"
                                        : "is-success"
                                        }`}
                                        type="password"
                                        id="password"
                                        name="password" {...register("password")} />
                                    <span className="erro-message-login">{errors.password?.message}</span>
                                </div>

                                <p className="buttons is-centered">
                                    <button type="submit" className="button is-link is-outlined">
                                        <span>ENTRAR</span>
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login