import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddContacts, getAllContacts, getDeleteContacts } from "service/getContactApi";

export const getContactsThunk = createAsyncThunk(
    'contacts/getAllContacts',
    async (_, thunkApi) => {
        try {
            const contacts = await getAllContacts()
            console.log(contacts)
            return contacts
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            
        }
    }
   
);

export const addContactThunk = createAsyncThunk(
    'contacts/getAddContacts',
    async ({name,phone}, thunkApi) => {
        try {
            const contacts = await getAddContacts({name,phone})
            return contacts
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            
        }
    }
);
    
export const deleteContactThunk = createAsyncThunk(
    'contacts/getDeleteContacts',
    async (contactId, thunkApi) => {
        try {
            const contacts = await getDeleteContacts(contactId)
            return contacts
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            
        }
    }
);
