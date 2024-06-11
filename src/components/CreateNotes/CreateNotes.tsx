import AddNote from "./AddNote/AddNote";
import './CreateNotes.scss';

export default function CreateNotes () {

    return(
 
            <ul className="createNotes__list">
                <li><AddNote noteColor='lightSalad'></AddNote></li>
                <li><AddNote noteColor='lightBlue'></AddNote></li>
                <li><AddNote noteColor='lightPeach'></AddNote></li>
                <li><AddNote noteColor='lightLavender'></AddNote></li>
                <li><AddNote noteColor='lightPurple'></AddNote></li>
                <li><AddNote noteColor='lightGray'></AddNote></li>
                <li><AddNote noteColor='lightPink'></AddNote></li>
                <li><AddNote noteColor='lightCoral'></AddNote></li>
            </ul>
   
    )
}