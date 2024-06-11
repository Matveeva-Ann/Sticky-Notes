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

  return (
    <>
      <section
        className={`createNotesWrapper ${isShownSection ? "opening" : "closing"}`}
      >
          <div className={`${!isShownSection ? "closingContent" : ""}`}>
            <CreateNotesHeader
              onClick={() => setIsShownSection(false)}
            ></CreateNotesHeader>

            <SubTitle>Notes</SubTitle>
            <CreateNotes></CreateNotes>
            <SubTitle>Filter</SubTitle>
            <FilterNotes></FilterNotes>
            <SubTitle>Choose your background</SubTitle>
            <ChooseBackground></ChooseBackground>
          </div>

          {!isShownSection && (
            <HiddenCreateNotes
              onClick={() => setIsShownSection(true)}
            ></HiddenCreateNotes>
          )}
      </section>
    </>
  );
}
