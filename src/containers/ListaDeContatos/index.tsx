import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Contato from "../../components/Contato";
import { Lista } from "./styled";
const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos);

  return (
    <Lista>
      {contatos.map((contato) => (
        <li key={contato.numero}>
          <Contato nome={contato.nome} email={contato.email} numero={contato.numero} />
        </li>
      ))}
    </Lista>
  );
};

export default ListaDeContatos;
