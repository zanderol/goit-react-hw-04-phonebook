export const Filter = ({ setFilter }) => {
  return (
    <>
      <p>Filter Contacts</p> <input onChange={setFilter} />
    </>
  );
};
