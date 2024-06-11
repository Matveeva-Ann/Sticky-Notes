import { Note } from '../../types/note';
import './NoteCard.scss';
import NoteCardHeader from './NoteCardHeader/NoteCardHeader';


interface NoteCardProps {
    data: Note;
}
export default function NoteCard({ data }: NoteCardProps) {

    return (
        <div className={`noteCard ${data.color}`}>
            <NoteCardHeader data={data}></NoteCardHeader>
            <p className='noteCard__text'>{data.text.length < 230 ? data.text : (data.text.slice(0, 227) + '...')}</p>
        </div>
    )
}