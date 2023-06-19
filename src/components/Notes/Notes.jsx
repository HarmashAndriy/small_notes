import React, { useState, useEffect } from 'react';
import s from './Notes.module.css';
import Note from '../Note/Note';
import Create from '../Create/Create';

const Notes = () => {
   const [notes, setNotes] = useState([])
   const [popUpMenu, setPopUpMenu] = useState(false);

   useEffect(() => {
      const notesData = JSON.parse(localStorage.getItem('notes'))
      if(notesData){
      setNotes(notesData)
      }
   }, [])
   const addNote = (newNote) => {
      setNotes([newNote, ...notes])
      localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
   }
   const saveNote = (editedNote) => {
      console.log(editedNote)
      const newNotes = notes.map((note)=>{
         if(note.id === editedNote.id){
            return editedNote
         }
         return note
      })
      setNotes(newNotes)
      localStorage.setItem('notes', JSON.stringify(newNotes));
   }
   const onClose = () => {
      setPopUpMenu(!popUpMenu)
   }
   return (
      <div className={s.notes}>
         {popUpMenu && <Create onClose={onClose} addNote={addNote} />}
         <button onClick={() => setPopUpMenu(!popUpMenu)} className={s.add_note}><i className="bi bi-plus-circle"></i></button>
         {notes.map((note) =>
            <Note note={note} key={note.id} saveNote={saveNote}/>                // цим я додаю нотатки, що вже існують в масиві
         )}
      </div>
   );
};
export default Notes