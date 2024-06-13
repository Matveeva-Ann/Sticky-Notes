import { useDispatch, useSelector } from "react-redux";
import "./FilterNotes.scss";
import {
  addFilterParam,
  resetColors,
  resetFavorite,
} from "../../redux/filterDataSlice";
import { colorsArr } from "../../utils/colorsArr";
import { FilterState, RootState } from "../../types/rootState";

export default function FilterNotes() {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: RootState) => state.reducer.filter
  ) as FilterState;

  function changeParams(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);

    const favoriteValueString = formData.get("favorite");
    const favoriteValue = favoriteValueString !== null ? JSON.parse(favoriteValueString as string) : null;
    const isFavorite: boolean | null = filters.isFavorite === favoriteValue ? filters.isFavorite : favoriteValue;

    const dataFilters = {
      colors: formData.getAll("color"),
      isFavorite: isFavorite,
    };

    dispatch(addFilterParam(dataFilters));
  }

  function resetFilter(filterName: string) {
    if (filterName === "colors") {
      dispatch(resetColors());
    }
    if (filterName === "favorite") {
      dispatch(resetFavorite());
    }
  }

  return (
    <form className="filterNotes__form" onChange={(e) => changeParams(e)}>
      <fieldset className="filterNotes__fieldset" name="favoritesFieldset">
        <button
          type="button"
          className="filterNotes__resetBtn"
          onClick={() => resetFilter("favorite")}
        >
          reset filter
        </button>
        <div className="checkbox__wrapper">
          <input
            className="checkbox__input"
            type="radio"
            value="true"
            name="favorite"
            id="favorite"
            checked={filters.isFavorite === true}
          />
          <span className="checkbox__checked checkbox__checked--black "></span>
          <label htmlFor="favorite" className="checkbox__label">
            Favorite
          </label>
        </div>

        <div className="checkbox__wrapper">
          <input
            type="radio"
            value="false"
            className="checkbox__input"
            name="favorite"
            id="noFavorite"
            checked={filters.isFavorite === false}
          />
          <span className="checkbox__checked checkbox__checked--black "></span>
          <label htmlFor="noFavorite" className="checkbox__label">
            Not Favorite
          </label>
        </div>
      </fieldset>
      <fieldset className="filterNotes__fieldset" name="colorsFieldset">
        <button
          type="button"
          className="filterNotes__resetBtn"
          onClick={() => resetFilter("colors")}
        >
          reset filter
        </button>

        {colorsArr.map((color, index) => (
          <div className="checkbox__wrapper" key={index}>
            <input
              className="checkbox__input"
              type="checkbox"
              id={color.value}
              value={color.value}
              name="color"
              checked={filters.colors.includes(color.value)}
            />
            <span className={`checkbox__checked ${color.value}`}></span>
            <label className="checkbox__label" htmlFor={color.value}>
              {color.name}
            </label>
          </div>
        ))}
      </fieldset>
    </form>
  );
}
