import "./CreateNotesSidebar.scss";
import { useState } from "react";
import HiddenCreateNotes from "../../components/HiddenCreateNotes/HiddenCreateNotes";
import SubTitle from "../../components/SubTitle/SubTitle";
import CreateNotes from "../../components/CreateNotes/CreateNotes";
import FilterNotes from "../../components/FilterNotes/FilterNotes";
import ChooseBackground from "../../components/ChooseBackground/ChooseBackground";
import CreateNotesHeader from "../../components/NotesHeader/NotesHeader";

export default function CreateNotesSidebar() {
  const [isShownSection, setIsShownSection] = useState(false);
  const [isUserToggled, setIsUserToggled] = useState(false);

  function handelClick (action: boolean) {
    setIsUserToggled(true);
    setIsShownSection(action)
  }

  return (
    <>
      <section
         className={`createNotesWrapper ${isUserToggled ? (isShownSection ? "opening" : "closing") : ""}`}
      >
        <div className={`${!isShownSection ? "closingContent" : ""}`}>
          <CreateNotesHeader
            onClick={() => handelClick(false)}
          ></CreateNotesHeader>

          <SubTitle>Notes</SubTitle>
          <CreateNotes
            setIsShownSection={() => handelClick(false)}
          ></CreateNotes>
          <SubTitle>Filter</SubTitle>
          <FilterNotes></FilterNotes>
          <SubTitle>Choose your background</SubTitle>
          <ChooseBackground></ChooseBackground>
        </div>

        {!isShownSection && (
          <HiddenCreateNotes onClick={() => handelClick(true)}>
            Open Create Notes
          </HiddenCreateNotes>
        )}
      </section>
    </>
  );
}
