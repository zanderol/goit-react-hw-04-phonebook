import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactUser}>
          <span className={css.user}>{contact.name} : </span>
          <span>{contact.number} </span>
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

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
