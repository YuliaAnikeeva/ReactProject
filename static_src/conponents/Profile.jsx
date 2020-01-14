import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/profile.css';

export default class Profile extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        
    };
    static defaultProps = {
        name: "Me",
    };
   render() {
       return (
           <div className="profile">
               <h1>Profile</h1>
               <div >Name: { this.props.name}</div>
               <div>me@profile.ru</div>
               <div>+7 999 999 99 99</div>
               <Link to='/'> ← Назад</Link>
           </div>
       )
   }
}