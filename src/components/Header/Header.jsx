import React from 'react'
import s from './Header.module.css'
import Theme from '../Theme/Theme';

const Header = () => {
   return (
      <div className={s.header}>
         <nav className={s.nav}>
            <i className="bi bi-card-heading"></i>
            <Theme />
            <i className="bi bi-card-checklist"></i>
         </nav>
      </div>
   );
};
export default Header