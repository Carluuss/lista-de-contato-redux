import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatoState = {
  contatos: Contato[];
};

const initialState: ContatoState = {
  contatos: [
    {
      nome: "Roberto",
      email: "nome@nome.com",
      numero: "(22) 222-2222",
    },
  ],
};

const contatoSlice = createSlice({
  name: "contato",
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contato = action.payload;
      state.contatos.push(contato);
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.contatos.findIndex(
        (contato) => contato.numero === action.payload.numero
      );

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload;
      }
    },
    remover: (state, action: PayloadAction<string>) => {
      state.contatos = [
        ...state.contatos.filter((tarefa) => tarefa.numero !== action.payload)
      ]
    },
  },
});

export const { adicionar, editar, remover } = contatoSlice.actions;
export default contatoSlice.reducer;
