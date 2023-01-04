import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({ filterContacts }) => {
  return (
    <div className={css.filterSection}>
      <input
        className={css.inputField}
        onChange={filterContacts}
        placeholder="Filter Contacts"
      />
    </div>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
