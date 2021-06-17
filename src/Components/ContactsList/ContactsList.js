import React from 'react';

const ContactsList = ({ contactsData, onDeleteContact }) => (
  <ul>
    {contactsData.map(({ name, number, id }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
