import React, { useState } from 'react'
import s from './Edit.module.css'

const Edit = ({ onClose, note, saveNote }) => {
   const [newNote, setNewNote] = useState(note)
   const changeNewNote = (e) => {
      setNewNote({ ...newNote, [e.target.name]: e.target.value })
   }
   const confirmNote = () => {
      if (newNote.title.length) {
         saveNote(newNote)
         onClose()
      }
      else{
         alert('Rename the note.')
      }
   }
   return (
      <div className={s.container} onClick={onClose}>
         <div className={s.edit_window} onClick={(e)=>e.stopPropagation()}>
            <div className={s.menu}>
               <input type="text" name="title" onChange={(e) => changeNewNote(e)} value={newNote.title} />
               <button onClick={confirmNote}>Save</button>
            </div>
            <textarea name="text" className={s.text_area} onChange={(e) => changeNewNote(e)} value={newNote.text}></textarea>
         </div>
      </div>
   );
};
export default Edit