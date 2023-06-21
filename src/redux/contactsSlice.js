import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contats',
  initialState: {
    list: [
      { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      console.log(action);
      state.list = [...state.list, action.payload];
      // state.list.push(action.payload);
    },
    deleteContact(state, action) {
      state.list = state.list.filter(contact => contact.id !== action.payload);
      // const index = state.list.findIndex(task => task.id === action.payload);
      // state.list.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// export const ContactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const сontactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);








//ORIGINAL
/*import { createSlice} from '@reduxjs/toolkit';

// Define Slice y Asigna a la constante
const contactsSlice = createSlice({
  name: 'contacts',   //nombreSlice
  initialState: [],   //Es el estado inicial del slice, array vacío

  //objeto que contiene acciones
  reducers: {
    addContact: (state, action) => {
      if (Array.isArray(state)) {
        state.push(action.payload);
      }
    },

    // filtra el estado actual del array para eliminar por el id que coincida con payload
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

// Exporta para ser utilizados en cualquier componente de la app
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;*/


