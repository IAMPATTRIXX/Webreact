import '../bookStyle.css'
import React,{Component} from 'react'
import NavbarLogin from './NavbarLogin'
import ModalProfile from './ModalProfile'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Findpage from './Findpage'
import Signin from './Signin'
import Home from './Home'
import NavbarProfile from './NavbarProfile'


function Profile (){
    return(
        <div id = "col-100">
            <NavbarProfile />
            <div className="center">{/* ---------------------------------------------------------- edit profile */}
                <div className = "nameHotel">
                    .my profile  
                </div> 
                <div className="profile">
                    <div className="col-25">
                        <label className="forms">Name: </label>
                    </div>
                    <div className="col-75">
                        <label className="text" id="">Jacob</label>
                    </div>
                    <div className="col-25">
                        <label className="forms">Surname: </label>
                    </div>
                    <div className="col-75">
                        <label className="text">Wilson</label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> Email </label>
                    </div>
                    <div className="col-75" id="date">
                        <label className="forms" id="date2"> Jacob_wilson@example.com</label>
                    </div>
                    <div className="col-25">
                        <label className="forms" > Password </label>
                    </div>
                    <div className="col-75" id="date">
                        <label className="forms" id="date2"> xxxxxxxxxxxx </label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> Peraonal ID: </label>
                    </div>
                    <div className="col-75">
                        <label className="text" >xxxx-xxx-xxx-xxx</label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> Phone number: </label>
                    </div>
                    <div className="col-75">
                        <label className="text">08xxxxxx78</label>
                    </div>
                    <div className="col-100">
                        <div id="edit">
                            <ModalProfile/>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="col-100proFoot">
                    <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
                        . h o t e l  &nbsp;&nbsp; | &nbsp;&nbsp;
                        <Link to="/About">
                            <button className="footerBtn">
                                a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
                            </button>
                        </Link>
                        
                    </div>
            </div>
        </div>
            
            
        
        
    )
}

export default Profile