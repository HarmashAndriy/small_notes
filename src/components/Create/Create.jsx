import React, { useState } from 'react'
import s from './Create.module.css'

const Create = ({ onClose, addNote }) => {
   const [newNote, setNewNote] = useState({
      title: '',
      text: ''
   })
   const changeNewNote = (e) => {
      setNewNote({ ...newNote, [e.target.name]: e.target.value })
   }
   const createNote = () => {
      if (newNote.title.length) {
         addNote({ ...newNote, id: Date.now() })
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
               <button onClick={createNote}>Create</button>
            </div>
            <textarea name="text" className={s.text_area} onChange={(e) => changeNewNote(e)} value={newNote.text}></textarea>
         </div>
      </div>
   );
};
export default Create