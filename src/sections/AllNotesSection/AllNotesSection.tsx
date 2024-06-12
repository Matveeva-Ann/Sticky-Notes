import "./AllNotesSection.scss";
import AllNotesCards from "../../components/AllNotesCards/AllNotesCards";

export default function AllNotesSection() {
  
  return (
    <section className="allNotes">
      <h2 className="allNotesSection__title">Your Notes Board</h2>
      <AllNotesCards></AllNotesCards>
    </section>
  );
}
