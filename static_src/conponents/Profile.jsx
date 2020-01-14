import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/profile.css';

export default class Profile extends React.Component {
   render() {
       return (
           <div className="profile">
               <h1>Profile</h1>
               <div>Me</div>
               <div>me@profile.ru</div>
               <div>+7 999 999 99 99</div>
               <Link to='/'> ← Назад</Link>
           </div>
       )
   }
}