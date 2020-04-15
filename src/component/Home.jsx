import '../bookStyle.css'
import React, { Component } from 'react'
// import { render } from 'react-dom'
// import Person from 'react-ionicons/lib/MdPerson'
// import Arrow from 'react-ionicons/lib/IosArrowDropright'
// import Cash from 'react-ionicons/lib/MdCash'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import Findpage from './Findpage'



export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            email: '',
            password:'',
            loginstatus:false
        }
    
    }

    // async componentDidMount(){ // start webpage
    //     const exist = localStorage.getItem('token')
    //     if(exist!=null){
    //         const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/me'
    //         await axios.get(url,{
    //             headers: {
    //               'Authorization': `Bearer ${exist}`
    //             }
    //           })
    //           .then(async res => {
    //             this.setState({currentUser:res.data.user})
    //         })
    //     }
    // }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    } 

    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        const user = {
            "email":email,
            "password":password
          };
        const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/login'


        axios.post(url,user) 
        .then(res => {
            if(res.status==201){
                localStorage.setItem('token',res.data.token)
                this.setState({loginstatus:true})
                alert('Login Success')

            }else{
              alert('login Failed')
            }
          }).catch(error=>{
            alert(error)
          })
    } 


    
      
    render(){
        if(this.state.loginstatus){
            return (
              <Findpage email={this.state.email}/>
          )
        } 
        return(   
          <section className = "section container" > 
                <div> {/* ----------------------------------------------------------------------------------- Navbar login page sign in */}
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                    <Link to="/Signin"><button className="button-is-light" type="button" >
                                            Sign In
                                        </button>
                                    </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div> 
                {/* <NavbarLogin/> ------------------------------------------------------------------- Navbar after login page wth findpage */}
                <div className = "center">{/* ---------------------------------------------------------------- Login page */} 
                    <div className = "nameHotel">
                        . h o t e l 
                    </div> 
                    <form  className="form" onSubmit={this.onSubmit} > 
                        <label className="label"> Email : </label>   
                        <input type="email" name ="email" onChange={this.onChange} placeholder="Jacob@example.com" />
                        <label className="label"> password : </label>
                        <input type="password" name ="password" onChange={this.onChange} />
                        <input type="submit" value="LOGIN"/>
                        {/* loginปุ่มfind page 112 */}
                        {/* <Route exact path="/Findpage" Component={Findpage} /> */}
                     </form>  
                </div>
                    
                <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
                    . h o t e l  &nbsp;&nbsp; | &nbsp;&nbsp;
                    <Link to="/About">
                        <button className="footerBtn">
                            a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
                        </button>
                    </Link>
          </div>
        
                
                </section>
                
            
            
        ) 
    } 


}

