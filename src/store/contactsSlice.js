import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const contactInitialState = {
    defoltContacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    reducers: {
        addContact(state, action) {
         state.defoltContacts = [...state.defoltContacts, action.payload]
        },
 deleteContact(state, action){
  state.defoltContacts = state.defoltContacts.filter(el => el.id !== action.payload)
 },
},
})

export const getContactValue = state => state.contacts.defoltContacts;
export const { addContact, deleteContact } = contactsSlice.actions;


const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsPersistReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)