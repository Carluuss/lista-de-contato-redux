import styled from "styled-components";
import { Botao } from "../../styles";

export const NomeContato = styled.p`
  margin-top: 16px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const ContainerContato = styled.div`
  margin: 0 auto;
  max-width: 340px;
  width: 100%;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid #0000001a;
  padding-top: 16px;
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
`
export const BotaoSalvar = styled(Botao)`
  background-color: green;
`

export const ContainerEdit = styled.div`
  display: flex;
  justify-content: center;
  
`

export const InputEdit = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px;
  margin-left: 10px;
  padding-bottom: 10px;
`