import { useDispatch } from "react-redux";
import "./FilterNotes.scss";
import { addFilterParam } from "../../redux/filterDataSlice";
import { colorsArr } from "./colorsArr";

export default function FilterNotes() {
  const dispatch = useDispatch();

  function changeParams(e: React.FormEvent<HTMLFormElement> ) {
    const formData = new FormData(e.currentTarget);
    let isFavorite = null;
    
    if(formData.get("favorite") === "favorite" && formData.get("noFavorite") === "noFavorite") {
      isFavorite = null;
    } else if (formData.get("favorite") === "favorite") {
      isFavorite = true;
    } else if (formData.get("noFavorite") === "noFavorite") {
      isFavorite = false;
    }

    const dataFilters = {
      colors: formData.getAll("color"),
      isFavorite: isFavorite,
    };

    dispatch(addFilterParam(dataFilters));
  }

  return (
    <form className="filterNotes__form" onChange={(e) => changeParams(e)}>
      <fieldset className="filterNotes__fieldset" name="favoritesFieldset">
        <label>
          <input type="checkbox" value="favorite" name="favorite" />
          Favorite
        </label>
        <label>
          <input type="checkbox" value="noFavorite" name="noFavorite" />
          Not Favorite
        </label>
      </fieldset>
      <fieldset className="filterNotes__fieldset" name="colorsFieldset">
        {colorsArr.map((color, index) => (
          <label key={index}>
            <input type="checkbox" value={color.value} name="color" />
            {color.name}
          </label>
        ))}
      </fieldset>
    </form>
  );
}
