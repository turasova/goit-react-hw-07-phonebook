import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'store/filterSlice';
import { deleteContactThunk, getContactsThunk } from 'store/thunks';
import { getContactValue } from 'store/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(getContactValue);
  const filterContacts = useSelector(getFilter);

  const lowerFilter = filterContacts.toLowerCase();

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const delContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <ul className={css.listContact}>
      {visibleContacts.map(({ name, phone, id }) => (
        <li className={css.contactItem} key={id}>
          <p>
            {name}: {phone}
          </p>
          <button
            type="button"
            className={css.buttonDelete}
            onClick={() => delContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
