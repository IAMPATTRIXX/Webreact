import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import '../bookStyle.css'
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarSign from './NavbarSign'
import Home from './Home';


export default class Profile extends React.Component {
    state = {
        name : '',
        surname : '',
        number : '',
        id : '',
        email : '',
        amountin : '',
        checkin : '',
        checkout : '',
        ID:'',
        room:'',
        logout:false,
    }
    onChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }


    componentDidMount(){ // start webpage
        const exist = localStorage.getItem('token')
        if(exist!=null){
            const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/me'
            axios.get(url,{
                headers: {
                  'Authorization': `Bearer ${exist}`
                }
                })
                .then(res => {
                this.setState({ 
                    //เค้าดึงค่าจากใน mongo มาใส่นี้ไว้หมดแล้ว(มั้ง??)
                    name: res.data.user.name,
                    surname: res.data.user.surname,
                    number:  res.data.user.number,
                    id:  res.data.user.id,
                    email:  res.data.user.email,
                    amountin: res.data.user.amountin,
                    checkin:res.data.user.checkin,
                    checkout:res.data.user.checkout,
                    room : res.data.user.room,
                    ID : res.data.user._id,
                })
                localStorage.setItem('Status','Fucking Fina Time 2')
                localStorage.setItem('Id',res.data.user._id)
                console.log(res)
                })
            }
        }

        logout = (e) => {
            e.preventDefault();
            const exist = localStorage.getItem('token')
            const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/logout'
            const head = {
            headers: {
                'Authorization': `Bearer ${exist}`
              }
            };
            axios.get(url,head)
            .then(res => {
                localStorage.clear();
                this.setState({user:null,logout:true})
                alert('Log Out Success')
        })
        }

        onSubmit = async e => {
            e.preventDefault()
            const exist = localStorage.getItem('token')
            if(exist!=null){
              const url = `https://cpelab-booking.herokuapp.com/hotelbook/users/edit/${this.state.ID}`
              const data = {
                "name": this.state.name,
                "surname": this.state.surname,
                "number": this.state.number,
                "id": this.state.id,
                "amountin": this.state.amountin,
                "checkin":this.state.checkin,
                "checkout":this.state.checkout,
                "room":this.state.room
              }
              await axios.put(url,data,{
                  headers: {
                    'Authorization': `Bearer ${exist}`
                  }
                })
                .then(res => {
                  window.location.reload(false)
                }).catch(error=>{
                  alert(error)
                })
                alert('Booking Success')
              }
          }

    render(){
        if(this.state.logout){
            return <Home/>
        }
        return(
            <div id="col-100">
             <NavbarSign />
             <div className = "center"> {/* ---------------------------------------------------------------- Sign in page  */}
                 <div className = "nameHotel" id="titleSign">
                     . p r o f i l e
                 </div> 
                      <form action="" className="form" onSubmit={this.onSubmit}> 
                         <div className="col-25">  
                          <label className="forms">Name: </label>
                       </div>
                         <div className="col-75">
                           <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                         </div>
                         <div className="col-25">
                             <label className="forms">Surname: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" name="surname" value={this.state.surname} onChange={this.onChange}  />
                         </div>
                         <div className="col-25">
                             <label className="forms"> Number: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" name="number" value={this.state.number} onChange={this.onChange}  />
                         </div>
                         <div className="col-25">
                             <label className="forms"> ID: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.id} onChange={this.onChange}  name="id"/>
                         </div>  
                         <div className="col-25">
                             <label className="forms"> Amount: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.amountin} onChange={this.onChange}  name="amountin"/>
                         </div>  
                         <div className="col-25">
                             <label className="forms"> Check-In: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.checkin} onChange={this.onChange}  name="checkin"/>
                         </div>  
                         <div className="col-25">
                             <label className="forms"> Check-Out: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.checkout} onChange={this.onChange}  name="checkout"/>
                         </div>  
                         <div className="col-25">
                             <label className="forms"> Room: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.room} onChange={this.onChange}  name="room"/>
                         </div>  
                            <div className="col-100">
                            <input type="submit" value="SEND" onChange={this.onChange}/>
                         </div>
                      </form>
                      <div className="center">
                        <form action="" onSubmit={this.logout}>
                            <input type="submit" value="Log Out" onChange={this.onChange}/>
                        </form>
                    </div>  
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
