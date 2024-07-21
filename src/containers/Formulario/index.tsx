import { ImAddressBook } from "react-icons/im";
import * as S from "./styled";
import { IconContext } from "react-icons";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { adicionar } from "../../store/redurcers/contatos";
import { FormEvent, useState } from "react";



const Formulario = () => {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      adicionar({
        nome,
        email,
        numero,
      })
    );
  };



  return (
    <>
      <S.SecondContainer>
        <h1>Lista de contatos</h1>
        <IconContext.Provider
          value={{
            color: "black",
            size: "2em",
            className: "global-class-name",
          }}
        >
          <ImAddressBook />
        </IconContext.Provider>
      </S.SecondContainer>
      <S.Form action="" onSubmit={cadastrarContato}>
        <label htmlFor="nome">Nome: </label>
        <S.Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text" maxLength={20} required
        />
        <label htmlFor="email">E-mail: </label>
        <S.Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email" maxLength={20} required
        />
        <label htmlFor="">Contato: </label>
        <InputMask value={numero} mask="(99) 9999-9999" onChange={(evento) => setNumero(evento.target.value)}>
          <S.Campo
            type="tel" required
          />
        </InputMask>
        <S.BotaoAdicionar type="submit">+</S.BotaoAdicionar>
      </S.Form>
    </>
  );
};

export default Formulario;
