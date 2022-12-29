import css from './Filter.module.css';

export const Filter = ({ setFilter }) => {
  return (
    <div className={css.filterSection}>
      {/* <p>Filter Contacts</p>{' '} */}
      <input
        className={css.inputField}
        onChange={setFilter}
        placeholder="Filter Contacts"
      />
    </div>
  );
};
