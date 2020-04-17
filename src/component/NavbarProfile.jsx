import React,{Component} from 'react'
import '../bookStyle.css'
import Findpage from './Findpage'
import { Link } from 'react-router-dom';
import Profile from './Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'




function NavbarProfile(props) {
   return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/Findpage"> <button className="button-is-light" type="button" >
                                Find Room
                            </button>
                            </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </nav>
 
   )
}
 
export default NavbarProfile
