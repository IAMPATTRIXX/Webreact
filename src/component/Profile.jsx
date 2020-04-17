import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import '../bookStyle.css'
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarProfile from './NavbarProfile'
import Home from './Home';
import Findpage from './Findpage'


export default class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name : this.props.user.name,
            surname : this.props.user.surname,
            number : this.props.user.number,
            id : this.props.user.id,
            email : this.props.user.email,
            amountin : this.props.thisRoom.amountin,
            checkin : this.props.thisRoom.checkin,
            checkout : this.props.thisRoom.checkout,
            ID: this.props.user._id,
            room: this.props.thisRoom.room,
            status: this.props.thisRoom.status,
            logout:false,
        }
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
            
            const room = {
                room: this.state.room,
                checkin: this.state.checkin,
                checkout: this.state.checkout,
                amountin: this.state.amountin,
                status: true
            }
            if(String(this.state.status).localeCompare("navbar")!=0){
                this.props.addBooking(room);
            }
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
                .then
                // (res => {window.location.reload(false)}).catch(error=>{alert(error)})
                alert('Booking Success')
              }
              this.setState({
                  logout: false
              })
          }

    render(){
        if(this.state.logout){
            return <Home/>
        }
        return(
            <div id="col-100">
             <NavbarProfile />
             <div className = "center" id="profile"> {/* ---------------------------------------------------------------- Sign in page  */}
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
                             <label className="forms"> Room: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.room} onChange={this.onChange}  name="room"/>
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
                             <label className="forms"> Amount: </label>
                         </div>
                         <div className="col-75">
                             <input type="text" value={this.state.amountin} onChange={this.onChange}  name="amountin"/>
                         </div>
                         <div className="confirmSigninLabel">
                             <label for="confirmSignin" > My information is correct.</label>     
                         </div>
                         <div className="checkbox" >
                             <input type="checkbox" className="confirmSignin" name="confirmSignin" id= "checkBoxSign"/> 
                         </div>  
                        <div className="col-100">
                            <input type="submit" value="SEND" />
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