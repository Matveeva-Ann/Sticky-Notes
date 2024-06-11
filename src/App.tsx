import { useSelector } from "react-redux";
import "./App.css";
import CreateNotesSidebar from "./sections/CreateNotesSidebar/CreateNotesSidebar";
import { RootState } from "./types/rootState";
import AllNotesSection from "./sections/AllNotesSection/AllNotesSection";

function App() {
  const background = useSelector((state:RootState) => state.reducer.background);

  return (
    <div
      className="appWrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <CreateNotesSidebar></CreateNotesSidebar>
      <AllNotesSection></AllNotesSection>
    </div>
  );
}

export default App;
