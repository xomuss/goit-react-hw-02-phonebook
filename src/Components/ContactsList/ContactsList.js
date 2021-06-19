import React from 'react';
import styles from './ContactList.module.css';

const ContactsList = ({ contactsData, onDeleteContact }) => (
  <ul className={styles.contsct__list}>
    {contactsData.map(({ name, number, id }) => (
      <li key={id} className={styles.contact__list_el}>
        <p className={styles.contact__list_text}>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
