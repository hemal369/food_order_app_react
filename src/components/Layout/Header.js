import React , { Fragment } from 'react';
import classes from './Header.module.css';
import mealsimage from '../../Assets/meals.jpg';
import Button from '../UI/button';

const Header = (props) => {
    
    return (
    <React.Fragment>
        <header className = {classes.header}>
            <h1>ReactMeals</h1>
            <Button onClick = {props.onShowCart}/> 
        </header>

        <div className = {classes.['main-image']}>
           <img src= {mealsimage} alt='anything'/>
        </div>
    </React.Fragment>
    );
}

export default Header;

