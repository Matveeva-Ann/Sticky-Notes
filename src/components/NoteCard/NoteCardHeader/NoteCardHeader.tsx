import { RxCross2 } from "react-icons/rx";
import "./NoteCardHeader.scss";
import { CiEdit } from "react-icons/ci";
import { MdFullscreen } from "react-icons/md";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Note } from "../../../types/note";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../../redux/notesSlica";

interface NoteCardHeaderProps {
  data: Note;
}
export default function NoteCardHeader({ data }: NoteCardHeaderProps) {
  const dispatch = useDispatch();


  return (
    <div className="noteCardHeader">
      <h3>{data.title}</h3>

      <div className="noteCardHeader__actions">
        <div className="noteCard__favorite">
          {data.isFavorite ? (
            <IoIosStarOutline className="noteCard__favoriteIcon" />
          ) : (
            <IoIosStar className="noteCard__favoriteIcon" />
          )}
        </div>
        <CiEdit className="noteCardHeader__actionsItem" />
        <MdFullscreen className="noteCardHeader__actionsItem" />
        <RxCross2 className="noteCardHeader__actionsItem" onClick={()=>dispatch(deleteNote(data.id))} />
      </div>
    </div>
  );
}
