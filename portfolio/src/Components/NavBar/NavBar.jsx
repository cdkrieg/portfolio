import '../../App'
import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';



const navbar = ()=> {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/AboutMe">About Me</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Contact">Say Hello!</Link>
            </li>
          
        </nav>
     );
}
 
export default navbar;