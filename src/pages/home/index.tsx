import { Link } from "react-router-dom";

export default function Home() {


  return (
    <>
      <h2>Projeto WEB</h2>
      <p>
        Nosso projeto tem como objetivo a aprendizagem do Node com execução de tarefas envolvendo
        o conteúdo das aulas.
      </p>
      <hr />
      <Link id='meulink' to='/'>Home   ·   </Link>
      <Link id='meulink' to='/contato'>Contato   ·   </Link>
      <Link id='meulink' to='/sobre'>Sobre   ·   </Link>
      <Link id='meulink' to='/tarefas'>Tarefas</Link>
    </>
  )
}


