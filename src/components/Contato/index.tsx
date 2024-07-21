import { useDispatch } from "react-redux";
import TypeContato from "../../models/Contato";
import { editar, remover } from "../../store/redurcers/contatos";
import { useEffect, useState } from "react";

import InputMask from "react-input-mask";
import * as S from "./styled";
import { Botao } from "../../styles";

type Props = TypeContato;

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  numero: numeroOriginal,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [editarNome, setEditarNome] = useState("");
  const [editarEmail, setEditarEmail] = useState("");
  const [editarNumero, setEditarNumero] = useState("");

  const editarContato = () => {
    dispatch(
      editar({
        nome: nomeOriginal,
        email: emailOriginal,
        numero: numeroOriginal,
      })
    );
  };

  function cancelarEdicao() {
    setEstaEditando(false);
    setEditarNome(nomeOriginal);
    setEditarEmail(emailOriginal);
    setEditarNumero(numeroOriginal);
  }

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setEditarNome(nomeOriginal);
    }
    if (emailOriginal.length > 0) {
      setEditarEmail(emailOriginal);
    }
    if (numeroOriginal.length > 0) {
      setEditarNumero(numeroOriginal);
    }
  }, [nomeOriginal, numeroOriginal, emailOriginal]);

  return (
    <S.ContainerContato>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.NomeContato>
              <S.ContainerEdit>
                <S.InputEdit
                  type="text"
                  onChange={(evento) => setEditarNome(evento.target.value)}
                  placeholder="Nome"
                />
                <S.InputEdit
                  type="text"
                  placeholder="E-mail"
                  onChange={(evento) => setEditarEmail(evento.target.value)}
                />
                <InputMask
                  mask="(99) 9999-9999"
                  onChange={(evento) => setEditarNumero(evento.target.value)}
                  placeholder="Numero"
                >
                  <S.InputEdit type="tel" />
                </InputMask>
              </S.ContainerEdit>
            </S.NomeContato>
            <S.BotaoSalvar
              onClick={() => {
                editarContato();
                setEstaEditando(false);
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.NomeContato>
              <b>
                Nome: {editarNome} | E-mail: {editarEmail} | Número:{" "}
                {editarNumero}
              </b>
            </S.NomeContato>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover
              onClick={() => dispatch(remover(numeroOriginal))}
            >
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.ContainerContato>
  );
};

export default Contato;
