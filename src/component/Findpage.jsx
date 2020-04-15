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
                _id: "",
                name: "",
                surname: "",
                number: "",
                id: "",
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
    userID(){
        let userE = String(this.state.user.email)
        
        for(let i=0; i<this.state.users.length; i++){
            let usersE = String(this.state.users[i].email)
            if((userE).localeCompare(usersE)==0){
                this.setState({
                    user:{
                        _id: this.state.users[i]._id,
                        name: this.state.users[i].name,
                        surname: this.state.users[i].surname,
                        number: this.state.users[i].number,
                        id: this.state.users[i].id,
                        amount: this.state.user.amount.concat([this.state.users[i].amount]),
                    }

                })
            }
        }
        console.log(this.state.user)
    }


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
     
       e.preventDefault()

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
        
        this.userID()
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
        
        var unreservedRoom = 
            {
                room: "",
                checkin:"",
                checkout:"",
                amountin:0,
                type:"",
                prize:0,
                status: false,
            }
        
        let findout = false;
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
                findout = true;
                break;
            }
        }
        
        let chooseRoomIn = String(arrRoom[randomRoom].checkin)
        let chooseRoomOut = String(arrRoom[randomRoom].checkout)
        let findout2 = false;
        if(findout==false){

            for(let i=0; i<this.state.users.length; i++){
                let users = String(this.state.users[i].amount.checkin)
                let usersout = String(this.state.users[i].amount.checkout)
                if((chooseRoomIn).localeCompare(users)==0 && (chooseRoomOut).localeCompare(usersout)==0){
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
                    findout2=true;
                    break;
                }
            }
        }

        if(findout==false && findout2==false){
            alert('Please select new room.This room was book')
        }
        console.log(unreservedRoom)
        this.setState({
           listRoom:this.state.listRoom.concat([unreservedRoom]),
        })
        // this.state.listRoom.push(unreservedRoom)
        console.log(this.state.listRoom)
        //random index of unreservedRoom choose that room and keep value
        //use that room find data in rooms state .get data and up to chooseRoom
    }

    

    handlefind = e => {
        e.preventDefault();
        console.log(this.state.rooms)
        console.log(this.state.users)

        
        this.findRoom()
        this.userID()
       
        
    }

    addBooking = (room) => {
        e.preventDefault();

        let roomNow = String(room.room)
        let checkin = String(room.checkin)
        let checkout =String(room.checkout)
        for(let i=0; i<listRoom.length; i++){
            let roomlist = String(this.state.listRoom[i].room)
            let checkinlist = String(this.state.listRoom[i].checkin)
            let checkoutlist = String(this.state.listRoom[i].checkout)
            if((roomNow.localeCompare(roomlist)!=0) && (checkin.localeCompare(checkinlist)!=0) && (checkout.localeCompare(checkoutlist)!=0)){
                this.setState({
                    listRoom
                })
            }
        }

        // if(document.getElementById('checkBox').checked){

        //     axios.put('https://cpelab-booking.herokuapp.com/hotelbook/user/',
        //         [
        //             {
        //                 checkin: this.state.user.checkin,
        //                 checkout: this.state.user.checkout,
        //                 amountin: this.state.user.amountin
        //             }
        //         ]
        //     ).catch((err) => {
        //         console.log(err)
        //     })
        // }
    }

    onSubmit = e => {
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

    onChangeStatus = e =>{
        e.preventDefault();
        this.setState({
            listRoom:[
                {

                }
            ]
        })
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
                        
                        {this.state.listRoom.map(room => 
                        
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
                                {room.amountin}
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
                                        <ModalTest user={this.state.user}
                                                   room={room}
                                                   addBooking = {this.addBooking}
                                                   
                                        />
                                    </td>
                                </tr>)}
                            </tr>
                        </table>
                    </div>
            </div>    
    
            
        )
    }
}

// import React from 'react'
// import axios from 'axios'
// import Person from 'react-ionicons/lib/MdPerson'
// import Cash from 'react-ionicons/lib/MdCash'
// import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'
// import ModalTest from './Modal'
// import NavbarLogin from './NavbarLogin'
// import { FormErrors } from './FormErrors';




// export default class Findpage extends React.Component {

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

//     constructor(props){
//         super(props)
//         this.state = {
//             rooms : [],
//             users : [],
//             user: {
//                 _id: "",
//                 name: "",
//                 surname: "",
//                 number: "",
//                 id: "",
//                 email:this.props.email,
             
//                 amount:[
//                     {
//                         room:"",
//                         checkin:"",
//                         checkout:"",
//                         amountin: ""
                        
//                     },
//                 ]
                
//             },
//             amountin:'',
//             formErrors: {amountin: ''},
//             amountinlValid: false,

//             chooseRoom : 
//                 {
//                     room: "",
//                     checkin: "",
//                     checkout: "",
//                     amountin: "",
//                     typeRoom: ""
//                 },
//             listRoom : [],
            
//         }
//     }
    
//     validateField(fieldName, value) {
//         let fieldValidationErrors = this.state.formErrors;
//       let amountinValid = this.state.amountinValid;

  
//       switch(fieldName) {
        
//         case 'amountin':
//           amountinValid = value >= 1;
//           fieldValidationErrors.amountin = amountinValid ? '': ' member not collect';
//           break;
//         default:
        
//           break;
//       }
//       this.setState({formErrors: fieldValidationErrors,

//                       amountinValid: amountinValid
//                     }, this.validateForm);
//     }
  
//     validateForm() {
//       this.setState({formValid:   this.state.amountinValid});
//     }
  
//     errorClass(error) {
//       return(error.length === 0 ? '' : 'has-error');
//     }


//     // onChange2 = (e) => {
//     //     this.setState( { [e.target.rooms]: e.target.value } );
//     // }
//     userID(){
//         let userE = String(this.state.user.email)
        
//         for(let i=0; i<this.state.users.length; i++){
//             let usersE = String(this.state.users[i].email)
//             if((userE).localeCompare(usersE)==0){
//                 this.setState({
//                     user:{
//                         _id: this.state.users[i]._id,
//                         name: this.state.users[i].name,
//                         surname: this.state.users[i].surname,
//                         number: this.state.users[i].number,
//                         id: this.state.users[i].id,
//                         amount: this.state.user.amount.concat([this.state.users[i].amount]),
//                     }
//                 })
//             }
//         }
//         console.log(this.state.user)
//     }

//     componentDidMount(){
//         axios.get('https://cpelab-booking.herokuapp.com/hotelbook/room')
//         .then(res => {
//             console.log(res);
//             this.setState({rooms: res.data})
//         })
//         .catch((err) => {
//             console.log('error get room' + err)
//         })

//         const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/getall'
//         axios.get(url)
//         .then(res => {
//             console.log(res);
//             this.setState({users: res.data})
//         })
//         .catch((err) => {
//             console.log('error get user' + err)
//         })
            
        
//         console.log(this.state.user)

        
//     }

//     onChange = (e) => {
     
//        e.preventDefault()

//             this.setState({
//                 chooseRoom:
//                     {
//                         room: "",
//                         checkin: String(document.getElementById('checkin').value),
//                         checkout: String(document.getElementById('checkout').value),
//                         amountin: Number(document.getElementById('amount').value),
//                         typeRoom: document.getElementById('typeroom').value
//                     },
                
//             })

//         console.log(this.state.chooseRoom)
//             const { name, value } = e.target
//         this.setState({
//             [name]: value
//         },() => { this.validateField(name, value) });
        

//         console.log(this.state.chooseRoom)

//     }

//     findRoom(){
       
//         let arrRoom = []
//         let roomCanUse = {
//                 room: "",
//                 prize: "",
//                 type: "",
//             }
//         for(let i=0; i<this.state.rooms.length; i++){
//             console.log(this.state.rooms[i].type + "   " + this.state.chooseRoom.typeRoom)
//             if((this.state.rooms[i].type).localeCompare(this.state.chooseRoom.typeRoom)==0){
//                 roomCanUse = {
//                     room: this.state.rooms[i].room,
//                     prize: this.state.rooms[i].prize,
//                     type: this.state.rooms[i].type,
//                 }
//                 arrRoom.push(roomCanUse)
//             }
//         }
//         console.log(arrRoom)

//         let randomRoom = Math.floor(Math.random() * (arrRoom.length-1))
        
//         var unreservedRoom = 
//             {
//                 room: "",
//                 checkin:"",
//                 checkout:"",
//                 amountin:0,
//                 type:"",
//                 prize:0,
//                 status: false,
//             }
        
//         let findout = false;
//         let chooseRoom = arrRoom[randomRoom].room
//         for(let i = 0; i<this.state.users.length; i++){
            
//             let users = this.state.users[i].amount.room
//             if((chooseRoom).localeCompare(users)==0){
//                 console.log("same room" + arrRoom[randomRoom].room + " " + this.state.users[i].amount.room)
//             }else{
//                 console.log("not same "+arrRoom[randomRoom].room + " " + this.state.users[i].amount.room)
//                 unreservedRoom = {
//                     room: arrRoom[randomRoom].room,
//                     checkin: this.state.chooseRoom.checkin,
//                     checkout: this.state.chooseRoom.checkout,
//                     amountin : this.state.chooseRoom.amountin,
//                     type: arrRoom[randomRoom].type,
//                     prize: arrRoom[randomRoom].prize,
//                 } 
//                 findout = true;
//                 break;
//             }
//         }
        
//         let chooseRoomIn = String(arrRoom[randomRoom].checkin)
//         let chooseRoomOut = String(arrRoom[randomRoom].checkout)
//         let findout2 = false;
//         if(findout==false){

//             for(let i=0; i<this.state.users.length; i++){
//                 let users = String(this.state.users[i].amount.checkin)
//                 let usersout = String(this.state.users[i].amount.checkout)
//                 if((chooseRoomIn).localeCompare(users)==0 && (chooseRoomOut).localeCompare(usersout)==0){
//                     console.log("same room" + arrRoom[randomRoom].room + " " + this.state.users[i].amount.room)
//                 }else{
//                     console.log("not same "+arrRoom[randomRoom].room + " " + this.state.users[i].amount.room)
//                     unreservedRoom = {
//                         room: arrRoom[randomRoom].room,
//                         checkin: this.state.chooseRoom.checkin,
//                         checkout: this.state.chooseRoom.checkout,
//                         amountin : this.state.chooseRoom.amountin,
//                         type: arrRoom[randomRoom].type,
//                         prize: arrRoom[randomRoom].prize,
//                     } 
//                     findout2=true;
//                     break;
//                 }
//             }
//         }

//         if(findout==false && findout2==false){
//             alert('Please select new room.This room was book')
//         }
//         console.log(unreservedRoom)
//         this.setState({
//            listRoom:this.state.listRoom.concat([unreservedRoom]),
//         })
//         // this.state.listRoom.push(unreservedRoom)
//         console.log(this.state.listRoom)
//         //random index of unreservedRoom choose that room and keep value
//         //use that room find data in rooms state .get data and up to chooseRoom
//     }

    

//     handlefind = e => {
//         e.preventDefault();
//         console.log(this.state.rooms)
//         console.log(this.state.users)

        
//         this.findRoom()
//         this.userID()
        
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         if(document.getElementById('checkBox').checked){

//             axios.put('https://cpelab-booking.herokuapp.com/hotelbook/user/',
//                 [
//                     {
//                         checkin: this.state.user.checkin,
//                         checkout: this.state.user.checkout,
//                         amountin: this.state.user.amountin
//                     }
//                 ]
//             ).catch((err) => {
//                 console.log(err)
//             })
//         }
//     }

//     render(){
//         return  (
//             <div >
//                 <NavbarLogin />
//                 <div className = "center" >
                    
//                         <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
//                             . h o t e l  
//                         </div>
//                     <div>
//                         <form action="" className="form" onSubmit={this.handlefind}> 
//                         <FormErrors formErrors={this.state.formErrors} />
                   
//                             <label className="label"> Type Room : </label>
//                             <select className="typeRoom" id= "typeroom" >
//                                 <option value="Superior" onChange={this.onChange} >Superior &nbsp;&nbsp; ( 2 people )</option>
//                                 <option value="Delux"  onChange={this.onChange} >Delux room &nbsp;&nbsp; ( 2 people )</option>
//                                 <option value="Sweet"  onChange={this.onChange} >Sweet room &nbsp;&nbsp; ( 2 people )</option>
//                                 <option value="Suit"   onChange={this.onChange} >Suit room &nbsp;&nbsp; ( 4 people )</option>
//                                 <option value="Family" onChange={this.onChange} >Family room &nbsp;&nbsp; ( 4 people )</option>
//                             </select>
//                             <label className="label"> Check in : </label>
//                             <input type="date"  name="checkin"   id= "checkin" onChange={this.onChange} />
//                             <label className="label"> Check out : </label>
//                             <input type="date" name="checkout"  id= "checkout" onChange={this.onChange} />
//                             <div className={`form-group ${this.errorClass(this.state.formErrors.amountin)}`}>
//                             <label className ="label"> Amount : </label>   
//                             <input type="number" name="amountin"  id= "amount"  onChange={this.onChange} placeholder="0"className="form-control" value={this.state.amountin}/>
//                             </div>
//                             <input type="submit" value="FIND"   disabled={!this.state.formValid}/>    
//                         </form>
//                     </div>
  
//             </div>
            
//                 <div className = "result-list">
//                     <table className = "result">
//                         <th>  
//                             Result List
//                         </th>
//                     </table>
//                     <table className ="list">
//                     <tr className = "row">
                        
//                         {this.state.listRoom.map(room => 
                        
//                             <tr className = "row">
//                             <td className = "typeroom">
//                             {room.type}
//                             </td>
//                             <td className ="number">
//                             {room.room}
//                             </td>
//                             <td className = "iconPerson">
//                             <Person fontSize="27px" color="#31312E"/>
//                             </td >
//                             <td className = "amount">
//                                 {room.amountin}
//                             </td>
//                             <td className = "iconCash">
//                             <Cash fontSize="30px" color="#31312E"/>
//                             </td>
//                             <td className = "course">
//                             {room.prize}
//                             </td>
//                             <td className = "iconCheckmark">
//                                 {room.status == true? <Checkmark fontSize="30px" color="green"/>:<Checkmark fontSize="30px" color="salmon"/>} 
//                             </td>
//                             <td>
//                                 {room.status == true? 'booked':'unreserved'}   
//                             </td>
        
//                                     <td className = "iconArrow">
//                                         <ModalTest user={this.state.user}
//                                                    handleSubmit={this.handleSubmit}
                                                    
//                                         />
//                                     </td>
//                                 </tr>)}
//                             </tr>
//                         </table>
//                     </div>
//             </div>    
    
            
//         )
//     }
// }