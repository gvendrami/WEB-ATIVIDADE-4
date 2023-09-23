import { Link } from "react-router-dom";

export default function Tarefas() {


    return (
        <>
            <h2>
                Organização das tarefas:
            </h2>
            <ul>
                <li><b>Tarefa 1:</b> Código com Node.js e Typescript</li>
                <li><b>Tarefa 2:</b> Workshop Node / Express / Typescript - Intro </li>
                <li><b>Tarefa 3:</b> Criação de um formulário pelo Nodescript</li>
                <li><b>Tarefa 4:</b> Criação de páginas sobre os projetos de desenvolvimento</li>
            </ul>
            <hr />
            <Link id='meulink' to='/'>Home   ·   </Link>
            <Link id='meulink' to='/contato'>Contato   ·   </Link>
            <Link id='meulink' to='/sobre'>Sobre   ·   </Link>
            <Link id='meulink' to='/tarefas'>Tarefas</Link>
        </>
    )
}


