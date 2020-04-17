import React,{Component} from 'react'
import '../bookStyle.css'
import Home from './Home'
import { Link } from 'react-router-dom';
import Profile from './Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'



function NavbarLogin(props) {
    let state = {
        profile:false,
    }
    function submit(e){
        state.profile = true
        props.navbarSubmit(state.profile);
    }

   return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
           <button id = "navName" className="button-is-light" type = "button" onClick={submit}>
                Profile
            </button>
             
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <Link to="/Home"> <button className="button-is-light" type="button" onClick={props.logout}>
                                Logout
                            </button>
                            </Link>  
                        </div>
                    </div>
                </div>
            </div>
        </nav>
 
   )
}
 
export default NavbarLogin
