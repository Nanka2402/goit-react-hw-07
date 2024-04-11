import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onFilter = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <form className={css.label}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </form>
  );
};
export default SearchBox;
