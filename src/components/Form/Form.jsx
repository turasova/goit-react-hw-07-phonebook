import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { getContactValue } from 'store/contactsSlice';
import { addContactThunk } from 'store/thunks';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContactValue);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, phone };

    if (isDuplicated(contacts, newContact) !== undefined) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
      return;
    }

    dispatch(addContactThunk(newContact));

    reset();
  };

  const isDuplicated = (contacts, newContact) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name <br />
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          value={phone}
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
