import React from 'react'
import axios from 'axios'
import Person from 'react-ionicons/lib/MdPerson'
import Cash from 'react-ionicons/lib/MdCash'
import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'
import ModalTest from './Modal'
import NavbarLogin from './NavbarLogin'


export default class Findpage extends React.Component {
    
    
    
    
    // state = {
    //     rooms : [],
    // }

    // onChange2 = (e) => {
    //     this.setState( { [e.target.rooms]: e.target.value } );
    //     }

    // handlefind = event => {
    //     event.preventDefault();
    //     axios.get('https://cpelab-booking.herokuapp.com/hotelbook/room').then(res => {
    //         console.log(res);
    //         this.setState({rooms : res.data})
    //     })
    // }
    
    
    
    
    
    
    // render(){
    //     return(
    //         <div >
    //             <NavbarLogin />
    //             <div className = "center" >
                    
    //                     <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
    //                         . h o t e l  
    //                     </div>
    //                 <div>
    //                     <form action="" className="form" onSubmit={this.handlefind}> 
    //                         <label className="label"> Type Room : </label>
    //                         <select className="typeRoom">
    //                             <option value="Superior">Superior &nbsp;&nbsp; ( 2 people )</option>
    //                             <option value="Delux">Delux room &nbsp;&nbsp; ( 2 people )</option>
    //                             <option value="Sweet">Sweet room &nbsp;&nbsp; ( 2 people )</option>
    //                             <option value="Suit">Suit room &nbsp;&nbsp; ( 4 people )</option>
    //                             <option value="Family">Family room &nbsp;&nbsp; ( 4 people )</option>
    //                         </select>
    //                         <label className="label"> Check in : </label>
    //                         <input type="date"  name="checkin" />
    //                         <label className="label"> Check out : </label>
    //                         <input type="date" name="checkout" />
    //                         <label className ="label"> Amount : </label>   
    //                         <input type="number" name="amount" placeholder="0"/>
    //                         <input type="submit" value="FIND" onChange={this.handlefind}/>    
    //                     </form>
    //                 </div>
                    
    //                 <div className = "result-list">
    //                 <table className = "result">
    //                     <th>  
    //                         Result List
    //                     </th>
    //                 </table>
    //                 <table className ="list">
    //                 <tr className = "row">
                        
    //                     {this.state.rooms.map(room => 
                        
    //                         <tr className = "row">
    //                         <td className = "typeroom">
    //                         {room.type}
    //                         </td>
    //                         <td className ="number">
    //                         {room.room}
    //                         </td>
    //                         <td className = "iconPerson">
    //                         <Person fontSize="27px" color="#31312E"/>
    //                         </td >
    //                         <td className = "amount">
    //                         {room.amount}
    //                         </td>
    //                         <td className = "iconCash">
    //                         <Cash fontSize="30px" color="#31312E"/>
    //                         </td>
    //                         <td className = "course">
    //                         {room.prize}
    //                         </td>
    //                         <td className = "iconCheckmark">
    //                             {room.status == true? <Checkmark fontSize="30px" color="green"/>:<Checkmark fontSize="30px" color="salmon"/>} 
    //                         </td>
    //                         <td>
    //                             {room.status == true? 'booked':'unreserved'}   
    //                         </td>
        
    //                                 <td className = "iconArrow">
    //                                     <ModalTest/>
    //                                 </td>
    //                             </tr>)}
    //                         </tr>
    //                     </table>
    //                 </div>
    //             </div>
    //         </div>
            
    //     )
    // }

    state = {
        rooms : [],
        users : [],
        user : {
            name:"",
            amount:[
                {
                    amountin: 0,
                    checkin: '',
                    checkout: '',
                },
            ]
        },
        chooseRoom : [
            {
                room: "",
                checkin: "",
                checkout: "",
                amountin: "",
                type: "",
            },
        ]  
    }

    onChange2 = (e) => {
        this.setState( { [e.target.rooms]: e.target.value } );
        }

    findRoom(){
        let room = this.state.chooseRoom.room
        let checkin = this.state.chooseRoom.ckeckin
        let checkout = this.state.chooseRoom.checkout
        let amountin = this.state.chooseRoom.amountin
        let unreservedRoom = [
            {
                room: "",
                checkin:"",
                checkout:""
            },
        ]
        for(let i = 0; i<this.state.users.length; i++){
            if(this.state.chooseRoom.room == this.state.users.amount.room){
                //make new array and push data room checkin checkout
            }
        }
        //random index of unreservedRoom choose that room and keep value
        //use that room find data in rooms state .get data and up to chooseRoom
    }

    handlefind = event => {
        event.preventDefault();
        axios.get('https://cpelab-booking.herokuapp.com/hotelbook/room').then(res => {
            console.log(res);
            this.setState({rooms : res.data})
        })
        axios.get('https://cpelab-booking.herokuapp.com/hotelbook/users').then(res => {
            console.log(res);
            this.setState({users : res.data})
        })
        console.log(this.state.rooms)

        
    }

    handleSubmit = e => {
        e.preventDefault();
        if(document.getElementById('checkBox').checked){

            axios.put('https://cpelab-booking.herokuapp.com/hotelbook/users/',
                [
                    {
                        checkin: this.state.user.checkin,
                        checkout: this.state.user.checkout,
                        amountin: this.state.user.amountin
                    }
                ]
            ).catch((err) => {
                console.log(err)
            })
        }
    }

    handleDelete = e => {
        e.preventDefault();
        
        axios.delete('https://cpelab-booking.herokuapp.com/hotelbook/users/',{
            amount:[
                {
                    amountin: 0,
                    checkin: "",
                    checkout: ""
                }
            ]
        })
        .then( res => {
            console.log(res.data)
            let new_amount = this.state.user.amount.filter( amount => amount.checkin !== this.state.user.amount.checkin);
            this.setState( {amount: new_amount} );
            console.log(this.state.user)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    

    
    
    
    
    
    
    
    render(){
        return(
            <div >
                <NavbarLogin />
                <div className = "center" >
                    
                        <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
                            . h o t e l  
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
                            <input type="submit" value="FIND" onChange={this.handlefind}/>    
                        </form>
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
                                        <ModalTest/>
                                    </td>
                                </tr>)}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
        )
    }
}