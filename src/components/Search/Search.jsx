import React from 'react'
import s from './Search.module.css'

const Search = () => {
   return (
      <div className={s.search}>
         <input type="text" placeholder='Пошук нотаток'/>
      </div>
   );
};
export default Search