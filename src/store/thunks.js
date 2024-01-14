import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts} from "service/getContactApi";

export const getContactsThunk = createAsyncThunk(
    'contacts/getAllContacts',
    async (_, thunkApi) => {
        try {
            const contacts = await fetchContacts()
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
            const contacts = await addContacts({name,phone})
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
            const contacts = await deleteContacts(contactId)
            return contacts
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            
        }
    }
);
