import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import '../bookStyle.css'
import axios from 'axios'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarSign from './NavbarSign'



class Signin extends Component{
    state = {
        signin: {
          name:'',
          surname:'',
          email:'',
          password:'',
          
        },
        
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            signin:{
                [e.target.name]: e.target.value,
                [e.target.surname]:e.target.value,
                [e.target.email]:e.target.value,
                [e.target.password]:e.target.value,
                
            },
            
        })
        
        
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
            if(fname.value==''){
                fname.focus();
                return false;
            }
            else if(lname.value==''){
                lname.focus();
                return false;
            }else if(email.value==''){
                email.focus();
                return false;
            }else if(password.value==''){
                password.focus();
                return false;
            }else if(confirmP.value==''){
                confirmP.focus();
                return false;
            }else if(strPass.localeCompare(confirmP.value)!=0){
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
    

        // addSign = (e) =>{
        //     e.preventDefault;
        //     const user = 
        //     axios.post(http://localhost:3000/hotelbook/users,{signin:{
        //       name: user.name,
        //       surname: user.surname,
        //       email: user.email,
        //       password: user.password
        //     }})
        //         .then(res => {
        //             console.log(user)
        //             console.log(res);
        //             console.log(res.data);
        //             this.state.signin.push(res.data);
        //             this.setState({ signin:this.state.signin })
        //         })
        //   }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.checkValidate()){
            //  this.addSign(this.state.signin);
            
            const user = {
                name: this.state.signin.name,
                surname: this.state.signin.surname,
                email: this.state.signin.email,
                password: this.state.signin.password
            }
            axios.post('https://cpelab-booking.herokuapp.com/hotelbook/users' , user)
                .then(res => {
                 
                    console.log(res);
                    console.log(res.data);
                    this.state.signin.push(res.data);
                    this.setState({ signin:this.state.signin })
                })
             this.state.signin = {
                 name: '',
                 surname: '',
                 email: '',
                 password: '', 
             }
             
        }
       
        console.log(this.checkValidate())
    }

    
render(){
    return(
        <div id="col-100">
            <NavbarSign />
            <div className = "center"> {/* ---------------------------------------------------------------- Sign in page  */}
                <div className = "nameHotel" id="titleSign">
                    . s i g n &nbsp; i n
                </div> 
                     <form action="" className="form" onSubmit={this.handleSubmit} > 
                        <div className="col-25">  
                            <label className="forms">Name: </label>
                        </div>
                        <div className="col-75">
                            <input type="text" 
                                    placeholder="Jacob" 
                                    id="fname" 
                                    value = {this.state.signin.name} 
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="col-25">
                            <label className="forms">Surname: </label>
                        </div>
                        <div className="col-75">
                            <input type="text" 
                                    placeholder="Wilton" 
                                    id="lname" 
                                    value={this.state.signin.surname}
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Email: </label>
                        </div>
                        <div className="col-75">
                            <input type="email" 
                                    placeholder="Jacob@example.com" 
                                    id="emailS" 
                                    value={this.state.signin.email}
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Password: </label>
                        </div>
                        <div className="col-75">
                            <input type="password" 
                                    id="passwordS" 
                                    value={this.state.signin.password}
                                    onChange={this.handleChange}/>
                        </div>  
                        <div className="col-25">
                            <label className="forms"> Confirm password:</label>
                        </div>
                        <div className="col-75">
                            <input type="password" 
                                    id="confirmPass"
                                    value={this.state.confirmPass}
                                    onChange={this.handleChange}/>
                        </div>
                        <div className="confirmSigninLabel">
                            <label for="confirmSignin" > My information is correct.</label>     
                        </div>
                        <div className="checkbox" >
                            <input type="checkbox" 
                                    className="confirmSignin" 
                                    name="check" 
                                    id="checkBoxSign"
                                    value={this.state.check}
                                    onChange={this.handleChange} /> 
                        </div>
                        <div className="col-100">
                        <Link to="/Home">
                        </Link><input type="submit" id="submit" value="SIGN IN"/> {/* login */}
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

export default Signin