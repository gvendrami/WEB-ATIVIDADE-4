import { Link } from "react-router-dom"

export default function Sobre() {
    return (
        <>
            <h2>Desenvolvedores</h2>
            <p>
                Ambos estudantes do curso de Análise e Desenvolvimento de Sistemas - 4º Semestre na FATEC
                Indaiatuba.
                <br></br><br></br>
                Projeto desenvolvido por: Gustavo e Bruna
            </p>
            <hr />
            <Link id='meulink' to='/'>Home   ·   </Link>
            <Link id='meulink' to='/contato'>Contato   ·   </Link>
            <Link id='meulink' to='/sobre'>Sobre   ·   </Link>
            <Link id='meulink' to='/tarefas'>Tarefas</Link>
        </>
    )
}