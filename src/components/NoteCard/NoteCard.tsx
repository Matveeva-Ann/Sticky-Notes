import React, { useState } from "react";
import { Note } from "../../types/note";
import "./NoteCard.scss";
import NoteCardHeader from "./NoteCardHeader/NoteCardHeader";

interface NoteCardProps {
  data: Note;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}
export default function NoteCard({ data, moveCard, index }: NoteCardProps) {
  const [isElemLive, setIsElemLive] = useState(false);
  const [isElemOver, setIsElemOver] = useState(false);

  const dragStartHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());

    setIsElemLive(true);
  };

  const dragEndHandler = () => {
    setIsElemLive(false);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    setIsElemOver(true);
  };

  const dropHandler = (e: React.DragEvent<HTMLLIElement>) => {
    const dragIndex = Number(e.dataTransfer.getData("text/plain"));
    moveCard(dragIndex, index);
    setIsElemOver(false);
  };

  const dragLeaveHandler = () => {
    setIsElemOver(false);
  };

  return (
    <li
      className={`noteCard ${data.color} ${isElemLive ? "cardLive" : ""} ${
        isElemOver ? "isElemOver" : ""
      }`}
      onDragStart={(e: React.DragEvent<HTMLLIElement>) => dragStartHandler(e)} //коли взяли картку
      onDragLeave={dragLeaveHandler} //вийшли за межі картки
      onDragEnd={dragEndHandler} //коли відпустили картку
      onDragOver={(e: React.DragEvent<HTMLLIElement>) => dragOverHandler(e)} //коли знаходимось над елементом
      onDrop={(e: React.DragEvent<HTMLLIElement>) => dropHandler(e)} //відпустили картку і відбувається подія
      draggable
    >
      <NoteCardHeader data={data}></NoteCardHeader>
      <p className="noteCard__text">
        {data.text.length < 360 ? data.text : data.text.slice(0, 357) + "..."}
      </p>
    </li>
  );
}
