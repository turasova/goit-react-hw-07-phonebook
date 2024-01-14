import { Form } from './Form/Form';
import css from './App.module.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/loader';
import { getContactValue, getIsLoading } from 'store/contactsSlice';

export const App = () => {
  const contactIsLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContactValue);

  return (
    <div>
      <div className={css.phonebookWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
      </div>
      <div className={css.contactsWrapper}>
        <h2 className={css.title}>Contacts</h2>
        {contacts !== null && <Filter />}
        {contactIsLoading && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};
