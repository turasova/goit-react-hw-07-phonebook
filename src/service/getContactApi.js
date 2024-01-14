import axios from 'axios';

const contactsInstance = axios.create({
    baseURL:'https://65a3dfaca54d8e805ed41fa5.mockapi.io'
})
 
export const fetchContacts = async () => {
    const { data } = await contactsInstance.get('/contact');
    console.log(data)
    return data
}

export const addContacts = async (newContact) => {
    const { data } = await contactsInstance.post('/contact', newContact);
    return data
}

export const deleteContacts = async (contactId) => {
    const { data } = await contactsInstance.delete(`/contact/${contactId}`);
    return data
}