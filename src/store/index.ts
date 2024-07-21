import { configureStore } from "@reduxjs/toolkit";
import contatosRedurcer from './redurcers/contatos'
const store = configureStore({
    reducer: {
        contatos: contatosRedurcer,
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store