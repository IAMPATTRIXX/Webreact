import React from 'react'
import axios from 'axios'
import Person from 'react-ionicons/lib/MdPerson'
import Cash from 'react-ionicons/lib/MdCash'
import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'
import Modal from './Modal'
import Home from './Home'
import { Link } from 'react-router-dom';


export default class Findpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        rooms : [],
        user:[{
            name : '',
            surname : '',
            number : '',
            id : '',
            email : '',
            amountin : '',
            checkin : '',
            checkout : '',
            logout:false,
            }]
        }
        
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
                    checkout:res.data.user.checkout
                })
                localStorage.setItem('Status','Fucking Fina Time')
                console.log(res)
                })
            }
        }

    
    
        onChange = (e) => {
            const { name, value } = e.target
            this.setState({
            [name]: value
        })
        }

        handlefind = event => {
            event.preventDefault();
            axios.get('https://cpelab-booking.herokuapp.com/hotelbook/room').then(res => {
            console.log(res);
            this.setState({rooms : res.data})
            })
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
                alert('Logout Success')
        })
        }
    
    
    
    
    render(){
        if(this.state.logout){
            return <Home/>
        }
        
          return(
            <div className = "center" >
                    <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
                        . h o t e l  
                    </div>
                    <div className = "nameuser"> {/* --------------------------------------------------------- find page */}
                        {/* เค้าลองเช็ตดู ถ้าดึงมาได้ จะขึ้นเป็น "Welcome + ชื่อของ User นั้นๆ"*/}
                        Welcome {this.state.name} 
                    </div>
                <div>
                    <form action="" className="form" onSubmit={this.handlefind}> 
                        <label className="label"> Type Room : </label>
                        <select className="typeRoom">
                            <option value="Superior">Superior &nbsp;&nbsp; ( 2 people )</option>
                            <option value="Delux">Delux room &nbsp;&nbsp; ( 2 people )</option>
                            <option value="Sweet">Sweet room &nbsp;&nbsp; ( 2 people )</option>
                            <option value="Suit">Suit room &nbsp;&nbsp; ( 4 people )</option>
                            <option value="Family">Family room &nbsp;&nbsp; ( 4 people )</option>
                        </select>
                        <label className="label"> Check in : </label>
                        <input type="date"  name="checkin" />
                        <label className="label"> Check out : </label>
                        <input type="date" name="checkout" />
                        <label className ="label"> Amount : </label>   
                        <input type="number" name="amount" placeholder="0"/>
                        <input type="submit" value="FIND" onChange={this.onChange}/>    
                         
                    </form>
                    <div className="center">
                        <form action="" onSubmit={this.logout}>
                            <input type="submit" value="LOG OUT" onChange={this.onChange}/>
                    </form>
                    </div>
                    
                </div>
                
                <div className = "result-list">
                <table className = "result">
                    <th>  
                         Result List
                    </th>
                </table>
                <table className ="list">
                    <tr className = "row">
                     
                     {this.state.rooms.map(room => 
                     
                        <tr className = "row">
                        <td className = "typeroom">
                          {room.type}
                        </td>
                        <td className ="number">
                          {room.room}
                        </td>
                        <td className = "iconPerson">
                          <Person fontSize="27px" color="#31312E"/>
                        </td >
                        <td className = "amount">
                          {room.amount}
                        </td>
                        <td className = "iconCash">
                          <Cash fontSize="30px" color="#31312E"/>
                        </td>
                        <td className = "course">
                          {room.prize}
                        </td>
                        <td className = "iconCheckmark">
                            {room.status == true? <Checkmark fontSize="30px" color="green"/>:<Checkmark fontSize="30px" color="salmon"/>} 
                        </td>
                        <td>
                            {room.status == true? 'booked':'unreserved'}   
                        </td>
                        <td className = "iconArrow">
                            <Link to="/Modal"><button className="button-is-light" type="button" >
                                            Book
                                        </button>
                            </Link>
                        </td>
                        </tr>
                        )}
                        
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}