import { Link } from "react-router-dom";
import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";

export default function Contato() {


  return (
    <>
      <h2>Entre em contato:</h2>
      <InputFatec placeholder='Nome' type='text' value='Bruna' />
      <br></br>
      <InputFatec placeholder='E-mail' type='text' value='' />
      <br></br>
      <InputFatec placeholder='Telefone' type='text' value='' />
      <br></br><br></br>
      <ButtonFatec type='submit' label='Enviar Informações' />
      <hr />
      <Link id='meulink' to='/'>Home   ·   </Link>
      <Link id='meulink' to='/contato'>Contato   ·   </Link>
      <Link id='meulink' to='/sobre'>Sobre   ·   </Link>
      <Link id='meulink' to='/tarefas'>Tarefas</Link>
    </>
  )
}
