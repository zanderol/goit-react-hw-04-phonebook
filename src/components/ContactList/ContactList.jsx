export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <button
            type="button"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
