import { Provider } from "react-redux";
import Formulario from "./containers/Formulario";
import ListaDeContatos from "./containers/ListaDeContatos";
import EstiloGlobal, { Container } from "./styles";
import store from "./store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <Formulario />
          <ListaDeContatos />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
