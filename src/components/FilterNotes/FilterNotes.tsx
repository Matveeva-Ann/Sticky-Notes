import "./FilterNotes.scss";

export default function FilterNotes() {


  return (
      <form action="" className="filterNotes__form">
        <fieldset className="filterNotes__fieldset">
          <label>
            <input type="checkbox" />
            Favorite
          </label>
          <label>
            <input type="checkbox" />
            All
          </label>
        </fieldset>
        <fieldset className="filterNotes__fieldset">
          <label>
            <input type="checkbox" />
            Favorite
          </label>
          <label>
            <input type="checkbox" />
            All
          </label>
        </fieldset>
      </form>
  );
}
