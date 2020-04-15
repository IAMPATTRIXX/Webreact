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

    
        

    constructor(props){
        super(props)
        this.state = {
            rooms : [],
            users : [],
            user: {
                email:this.props.email,
                amount:[
                    {
                        room:"",
                        checkin:"",
                        checkout:"",
                        amountin: ""
                    },
                ]
            },
            chooseRoom : 
                {
                    room: "",
                    checkin: "",
                    checkout: "",
                    amountin: "",
                    typeRoom: ""
                },
            listRoom : [],
            
        }
    }

    // onChange2 = (e) => {
    //     this.setState( { [e.target.rooms]: e.target.value } );
    // }

    

    

    componentDidMount(){
        axios.get('https://cpelab-booking.herokuapp.com/hotelbook/room')
        .then(res => {
            console.log(res);
            this.setState({rooms: res.data})
        })
        .catch((err) => {
            console.log('error get room' + err)
        })

        const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/getall'
        axios.get(url)
        .then(res => {
            console.log(res);
            this.setState({users: res.data})
        })
        .catch((err) => {
            console.log('error get user' + err)
        })
            
        
        console.log(this.state.user)
    }

    onChange = (e) => {
     
       
        const chooseRoom = {
            room: "",
            checkin: String(document.getElementById('checkin').value),
            checkout: String(document.getElementById('checkout').value),
            amountin: Number(document.getElementById('amount').value),
            typeRoom:document.getElementById('typeroom').value,
        }

            this.setState({
                chooseRoom:
                    {
                        room: "",
                        checkin: String(document.getElementById('checkin').value),
                        checkout: String(document.getElementById('checkout').value),
                        amountin: Number(document.getElementById('amount').value),
                        typeRoom: document.getElementById('typeroom').value
                    },
                
            })
        

        console.log(this.state.chooseRoom)

    }

    findRoom(){
        let arrRoom = []
        let roomCanUse = {
                room: "",
                prize: "",
                type: "",
            }
        for(let i=0; i<this.state.rooms.length; i++){
            console.log(this.state.rooms[i].type + "   " + this.state.chooseRoom.typeRoom)
            if((this.state.rooms[i].type).localeCompare(this.state.chooseRoom.typeRoom)==0){
                roomCanUse = {
                    room: this.state.rooms[i].room,
                    prize: this.state.rooms[i].prize,
                    type: this.state.rooms[i].type,
                }
                arrRoom.push(roomCanUse)
            }
        }
        console.log(arrRoom)

        let randomRoom = Math.floor(Math.random() * (arrRoom.length-1))
        
        let unreservedRoom = [
            {
                room: "",
                checkin:"",
                checkout:"",
                amountin:0,
                type:"",
                prize:0,
                status: false,
            },
        ]

        let chooseRoom = arrRoom[randomRoom].room
        for(let i = 0; i<this.state.users.length; i++){
            
            let users = this.state.users[i].amount.room
            if((chooseRoom).localeCompare(users)==0){
                console.log("same room" + arrRoom[randomRoom].room + " " + this.state.users[i].amount.room)
            }else{
                console.log("not same "+arrRoom[randomRoom].room + " " + this.state.users[i].amount.room)
                unreservedRoom = {
                    room: arrRoom[randomRoom].room,
                    checkin: this.state.chooseRoom.checkin,
                    checkout: this.state.chooseRoom.checkout,
                    amountin : this.state.chooseRoom.amountin,
                    type: arrRoom[randomRoom].type,
                    prize: arrRoom[randomRoom].prize,
                } 
                break;
            }
            console.log(unreservedRoom)
        }

        // this.setState({listRoom:unreservedRoom})
        this.state.listRoom.push(unreservedRoom)
        console.log(this.state.listRoom)
        //random index of unreservedRoom choose that room and keep value
        //use that room find data in rooms state .get data and up to chooseRoom
    }

    handlefind = e => {
        e.preventDefault();
        console.log(this.state.rooms)
        console.log(this.state.users)

        
        this.findRoom()

        
        
    }

    handleSubmit = e => {
        e.preventDefault();
        if(document.getElementById('checkBox').checked){

            axios.put('https://cpelab-booking.herokuapp.com/hotelbook/user/',
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

    render(){
        return  (
            <div >
                <NavbarLogin />
                <div className = "center" >
                    
                        <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
                            . h o t e l  
                        </div>
                    <div>
                        <form action="" className="form" onSubmit={this.handlefind}> 
                            <label className="label"> Type Room : </label>
                            <select className="typeRoom" id= "typeroom" >
                                <option value="Superior" onChange={this.onChange} >Superior &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Delux"  onChange={this.onChange} >Delux room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Sweet"  onChange={this.onChange} >Sweet room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Suit"   onChange={this.onChange} >Suit room &nbsp;&nbsp; ( 4 people )</option>
                                <option value="Family" onChange={this.onChange} >Family room &nbsp;&nbsp; ( 4 people )</option>
                            </select>
                            <label className="label"> Check in : </label>
                            <input type="date"  name="checkin"   id= "checkin" onChange={this.onChange} />
                            <label className="label"> Check out : </label>
                            <input type="date" name="checkout"  id= "checkout" onChange={this.onChange} />
                            <label className ="label"> Amount : </label>   
                            <input type="number" name="amountin"  id= "amount"  onChange={this.onChange} placeholder="0"/>
                            <input type="submit" value="FIND" />    
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
                        
                        {/* {this.state.listRoom.map(list => 
                        
                            <tr className = "row">
                                <td className = "typeroom">
                                {list.type}
                                </td>
                                <td className ="number">
                                {list.room}
                                </td>
                                <td className = "iconPerson">
                                <Person fontSize="27px" color="#31312E"/>
                                </td >
                                <td className = "amount">
                                {list.amountin}
                                </td>
                                <td className = "iconCash">
                                <Cash fontSize="30px" color="#31312E"/>
                                </td>
                                <td className = "course">
                                {list.prize}
                                </td>
                                <td className = "iconCheckmark">
                                    {list.status == true? <Checkmark fontSize="30px" color="green"/>:<Checkmark fontSize="30px" color="salmon"/>} 
                                </td>
                                <td>
                                    {list.status == true? 'booked':'unreserved'}   
                                </td>
            
                                        <td className = "iconArrow">
                                            <ModalTest/>
                                        </td>
                            </tr>)} */}
                            {

                            }
                        </tr>
                    </table>
                </div>
            </div>    
    
            
        )
    }
}