import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchInput}>
      <p>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
