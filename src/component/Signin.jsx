
import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import '../bookStyle.css'
import axios from 'axios'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarSign from './NavbarSign'
import Home from './Home'


export default class Signin extends React.Component {
    state = {
       name : '',
       surname : '',
       email :'',
       password:'',
       status:false
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    checkValidate(){
        const fname = document.querySelector('#fname')
        const lname = document.querySelector('#lname')
        const email = document.querySelector('#emailS')
        const password = document.querySelector('#passwordS')
        const confirmP = document.querySelector('#confirmPass')
        const check = document.querySelector('#checkBoxSign')
        const strPass = password.value
        console.log(check.checked)
        console.log(strPass)
            if(this.state.name==''){
                fname.focus();
                return false;
            }
            else if(this.state.surname==''){
                lname.focus();
                return false;
            }else if(this.state.email==''){
                email.focus();
                return false;
            }else if(this.state.password==''){
                password.focus();
                return false;
            }else if(confirmP.value==''){
                confirmP.focus();
                return false;
            }else if((this.state.password).localeCompare(confirmP.value)!=0){
                alert('Your confirm password is not correct!')
                confirmP.focus();
                return false;
            }else if(!check.checked){
                console.log('Please check a box')
                check.focus();
                return false;
            }
            return true;
    
        }

    

    visible(value=true){
        console.log(value);
        if(value==true){
            return value=true;
        }
        return value;
    }


    handlesubmit = event => {
        event.preventDefault();

        const user ={
            name : this.state.name,
            surname : this.state.surname,
            email : this.state.email,
            password : this.state.password,

        }
        axios.post('https://cpelab-booking.herokuapp.com/hotelbook/users' , user)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({status:true})
            localStorage.setItem('token',res.data.token)
            alert('Signup Success')
            
        })

       // alert('Createing new account was complete. Please back to page Login.')
        this.setState({
            status: true,
        })

    }

    
    
    render(){
        if(this.state.status){
            return (
              <Home/>
          )
        } 
        return(
            
            <div id="col-100">
             <NavbarSign />
             <div className = "center"> {/* ---------------------------------------------------------------- Sign in page  */}
                 <div className = "nameHotel" id="titleSign">
                     . s i g n &nbsp; i n
                 </div> 
                      <form action="" className="form" onSubmit={this.handlesubmit} > 
                         <div className="col-25">  
                          <label className="forms">Name: </label>
                       </div>
                         <div className="col-75">
                           <input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Jacob" id="fname"/>
                         </div>
                         <div className="col-25">
                             <label className="forms">Surname: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" name="surname" value={this.state.surname} onChange={this.onChange}  placeholder="Wilton" id="lname"/>
                         </div>
                         <div className="col-25">
                             <label className="forms"> Email: </label>
                         </div>
                         <div className="col-75">
                             <input type="email" name="email" value={this.state.email} onChange={this.onChange}  placeholder="Jacob@example.com" id="emailS"/>
                         </div>
                         <div className="col-25">
                             <label className="forms"> Password: </label>
                         </div>
                         <div className="col-75">
                             <input type="password" value={this.state.password} onChange={this.onChange}  name="password" id="passwordS"/>
                         </div>  
                         <div className="col-25"> 
                             <label className="forms"> Confirm password:</label>
                         </div>
                         <div className="col-75">
                            <input type="password" id="confirmPass" />
                         </div>
                         <div className="confirmSigninLabel">
                             <label for="confirmSignin" > My information is correct.</label>     
                         </div>
                         <div className="checkbox" >
                             <input type="checkbox" className="confirmSignin" name="confirmSignin" id= "checkBoxSign"/> 
                         </div>
                         <div className="col-100">
                         <input type="submit" id="submit" value="SIGN IN" /> 
                         
                         
                         </div>
                      </form>  
                      {/* {
                         
                            this.state.name!=''&&this.state.email!=''&&this.state.password!=''&&this.state.surname!='' ?
                            
                            <div>
                                <Link to="/Home"> 
                                    <button type="submit" id="submit" value="Go To Login" className="visible">
                                        Go To Login
                                    </button>
                                </Link>
                            </div>

                            :null 
                            
                         } */}
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