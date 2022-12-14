import { Link, useNavigate, useParams } from "react-router-dom";

const DeletarAluno = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        fetch("http://localhost:3004/alumns/" + id, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                alert('Apagado com Sucesso')
                navigate('/admin');
            }
            ).catch(error => {
                console.log(error);
            }
            );
    }
    return (
        <div className="button">
            HELLO PEOPLE
                <button
                    onClick={handleDelete}>
                    SIM</button>
            

            <Link to="/admin">
                <button>NÃO</button>
            </Link>
        </div>

    );
}


export default DeletarAluno;