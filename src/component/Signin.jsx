import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import '../bookStyle.css'
import axios from 'axios'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarSign from './NavbarSign'


export default class Signin extends React.Component {
    state = {
       name : '',
       surname : '',
       email :'',
       password:'',
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value,
                        [e.target.surname]: e.target.value,
                        [e.target.email]: e.target.value,
                        [e.target.password]: e.target.value } );
        }

    handlesubmit = event => {
        event.preventDefault();

        const user ={
            name : this.state.name,
            surname : this.state.surname,
            email : this.state.email,
            password : this.state.password,

        }
        axios.post('http://localhost:4000/hotelbook/users' , {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
            
        })
    }
    
    render(){
        return(
            
            <div id="col-100">
             <NavbarSign />
             <div className = "center"> {/* ---------------------------------------------------------------- Sign in page  */}
                 <div className = "nameHotel" id="titleSign">
                     . s i g n &nbsp; i n
                 </div> 
                      <form action="" className="form" onSubmit={this.handlesubmit}> 
                         <div className="col-25">  
                          <label className="forms">Name: </label>
                       </div>
                         <div className="col-75">
                           <input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Jacob"/>
                         </div>
                         <div className="col-25">
                             <label className="forms">Surname: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" name="surname" value={this.state.surname} onChange={this.onChange}  placeholder="Wilton"/>
                         </div>
                         <div className="col-25">
                             <label className="forms"> Email: </label>
                         </div>
                         <div className="col-75">
                             <input type="email" name="email" value={this.state.email} onChange={this.onChange}  placeholder="Jacob@example.com"/>
                         </div>
                         <div className="col-25">
                             <label className="forms"> Password: </label>
                         </div>
                         <div className="col-75">
                             <input type="password" value={this.state.password} onChange={this.onChange}  name="password"/>
                         </div>  
                         <div className="col-25">
                             <label className="forms"> Confirm password:</label>
                         </div>
                         <div className="col-75">
                            <input type="password" />
                         </div>
                         <div className="confirmSigninLabel">
                             <label for="confirmSignin" > My information is correct.</label>     
                         </div>
                         <div className="checkbox" >
                             <input type="checkbox" className="confirmSignin" name="confirmSignin"/> 
                         </div>
                         <div className="col-100">
                         <input type="submit" id="submit" value="SIGN IN"/> {/* login */}
                         
                         {/* <Link to="/Home"><input type="submit" id="submit" value="Home"/> login */}
                         {/* </Link> */}
                         </div>
                      </form>  
                 </div>
                 <div className="col-100Foot" >
                     <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
                         . h o t e l  &nbsp;&nbsp; | &nbsp;&nbsp;
                         <button className="footerBtn">
                         a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
                         </button>
                     </div>
                 </div>
                </div>
        )
    }
}











//     function Signin (){
//     return(
//         <div id="col-100">
//             <NavbarSign />
//             <div className = "center"> {/* ---------------------------------------------------------------- Sign in page  */}
//                 <div className = "nameHotel" id="titleSign">
//                     . s i g n &nbsp; i n
//                 </div> 
//                      <form action="" className="form" > 
//                         <div className="col-25">  
//                             <label className="forms">Name: </label>
//                         </div>
//                         <div className="col-75">
//                             <input type="text" name="fname" placeholder="Jacob"/>
//                         </div>
//                         <div className="col-25">
//                             <label className="forms">Surname: </label>
//                         </div>
//                         <div className="col-75">
//                             <input type="text" name="lname" placeholder="Wilton"/>
//                         </div>
//                         <div className="col-25">
//                             <label className="forms"> Email: </label>
//                         </div>
//                         <div className="col-75">
//                             <input type="email" placeholder="Jacob@example.com"/>
//                         </div>
//                         <div className="col-25">
//                             <label className="forms"> Password: </label>
//                         </div>
//                         <div className="col-75">
//                             <input type="password" />
//                         </div>  
//                         <div className="col-25">
//                             <label className="forms"> Confirm password:</label>
//                         </div>
//                         <div className="col-75">
//                             <input type="password" />
//                         </div>
//                         <div className="confirmSigninLabel">
//                             <label for="confirmSignin" > My information is correct.</label>     
//                         </div>
//                         <div className="checkbox" >
//                             <input type="checkbox" className="confirmSignin" name="confirmSignin"/> 
//                         </div>
//                         <div className="col-100">
//                         <Link to="/Home"><input type="submit" id="submit" value="SIGN IN"/> {/* login */}
//                         </Link>
//                         </div>
//                      </form>  
//                 </div>
//                 <div className="col-100Foot" >
//                     <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
//                         . h o t e l  &nbsp;&nbsp; | &nbsp;&nbsp;
//                         <button className="footerBtn">
//                         a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
//                         </button>
//                     </div>
//                 </div>
                
//         </div>       
        
//         )
//     }

// export default Signin