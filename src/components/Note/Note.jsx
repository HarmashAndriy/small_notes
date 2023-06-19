import React, { useState } from 'react'
import s from './Note.module.css'
import Edit from '../Edit/Edit'


const Note = ({ note, saveNote }) => {
   const [popUpMenu, setPopUpMenu] = useState(false);

   const onClose = () => {
      setPopUpMenu(!popUpMenu)
   }

   const cutText = (text) => {
      let maxlength = 60
      if (text.length >= maxlength) {
         return text.slice(0, maxlength - 1) + '…'
      }
      return text
   }

   return (
      <div className={s.container}>
         {popUpMenu && <Edit onClose={onClose} note={note} saveNote={saveNote}/>}
         <div className={s.note} onClick={() => setPopUpMenu(!popUpMenu)}>
            <h3>{note.title}</h3>
            <p>{cutText(note.text)}</p>
         </div>
      </div>
   );
};
export default Note