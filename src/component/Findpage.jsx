import React from 'react'
import axios from 'axios'
import Person from 'react-ionicons/lib/MdPerson'
import Cash from 'react-ionicons/lib/MdCash'
import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'
import ModalTest from './Modal'
import NavbarLogin from './NavbarLogin'
import { FormErrors } from './FormErrors';
import Profile from './Profile'
import { Link } from 'react-router-dom';
import Arrow from 'react-ionicons/lib/IosArrowDropright'


var amount = []
var unbookRoom =[]
var feild = false
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default class Findpage extends React.Component {

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
                amountin: "",
                checkin: "",
                checkout: "",
                room: ""
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
            formErrors: {amountin: ''},
            amountinlValid: false,
            thisRoom : {
                room: "",
                checkin: "",
                checkout: "",
                amountin: "",
                status: true
            },
            
            navbarRoom:{
                room: "",
                checkin: "",
                checkout: "",
                amountin: "",
                navbar: false,
                status: "navbar"
            }
        }
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
      let amountinValid = this.state.amountinValid;
  
      switch(fieldName) {
        
        case 'amountin':
          amountinValid = value.length >= 1;
          fieldValidationErrors.amountin = amountinValid ? '': ' member not collect';
          break;
        default:
        
          break;
      }
      this.setState({formErrors: fieldValidationErrors,

                      amountinValid: amountinValid
                    }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid:   this.state.amountinValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
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
                            email: this.state.user.email,
                            amountin: this.state.users[i].amountin,
                            checkin: this.state.users[i].checkin,
                            checkout: this.state.users[i].checkout,
                            room: this.state.users[i].checkout,
                        }
                    })
                    break;
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

        
    }

    onChange = (e) => {
     
        e.preventDefault()

        let checkin = String(document.getElementById('checkin').value)
        let checkout = String(document.getElementById('checkout').value)
        let amount = document.getElementById('amount').value
        console.log(date.localeCompare(checkin))
        console.log(date.localeCompare(checkout))
        console.log(checkin.localeCompare(checkout))

        
            let type = document.getElementById('typeroom').value
            let match = true
            switch(type){
                case "Superior":
                    if(Number(document.getElementById('amount').value)>2){
                        alert("Number of people not match of size room")
                        match = false
                        document.getElementById('amount').focus()
                    }
                break;
                case "Delux":
                    if(Number(document.getElementById('amount').value)>2){
                        alert("Number of people not match of size room")
                        match = false
                        document.getElementById('amount').focus()
                    }
                    break;
                case "Sweet":
                    if(Number(document.getElementById('amount').value)>2){
                        alert("Number of people not match of size room")
                        match = false
                        document.getElementById('amount').focus()
                    }
                    break;
                case "Suit":
                    if(Number(document.getElementById('amount').value)>4){
                        alert("Number of people not match of size room")
                        match = false
                        document.getElementById('amount').focus()
                    }
                    break;
                case "Family":
                    if(Number(document.getElementById('amount').value)>4){
                        alert("Number of people not match of size room")
                        match = false
                        document.getElementById('amount').focus()
                    }
                    break;
                default:
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
            feild = true
        
    
        const { name, value } = e.target
        this.setState({
            [name]: value
        },() => { this.validateField(name, value) });
        

       
        
        this.userID()
        console.log(this.state.chooseRoom)

        if(document.getElementById('typeroom').value!=="" && this.state.user.room != ""){
            let type = ""
            let room = this.state.user.room
            let prize = 0
            if(this.state.user.room!=''){
                    if(room.indexOf('R')!=-1){
                    type = "Superior"
                    prize = 1000
                }else if(room.indexOf('D')!=-1){
                    type = "Delux"
                    prize = 2000
                }else if(room.indexOf('F')!=-1){
                    type = "Family"
                    prize = 5000
                }else if(room.indexOf('S5')!=-1){
                    type = "Sweet"
                    prize = 4000
                }else if(room.indexOf('S7')!=-1){
                    type = "Suit"
                    prize = 7000
                }

                let roomUser = {
                    room: this.state.user.room,
                    checkin: this.state.user.checkin,
                    checkout: this.state.user.checkout,
                    amountin: this.state.user.amountin,
                    type: type,
                    prize: prize,
                    status: true  
                }
                unbookRoom.push(roomUser)
                this.setState({
                    listRoom: unbookRoom
                })

            }
            
        }

    }


    handlefind = e => {
        e.preventDefault();
        console.log(this.state.rooms)
        console.log(this.state.users)

        if(feild){
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
            let findoutList = false;
            let getroom = false;
            let chooseRoom = arrRoom[randomRoom].room
            if(this.state.listRoom.length == 0){
                unreservedRoom = {
                    room: arrRoom[randomRoom].room,
                    checkin: this.state.chooseRoom.checkin,
                    checkout: this.state.chooseRoom.checkout,
                    amountin : this.state.chooseRoom.amountin,
                    type: arrRoom[randomRoom].type,
                    prize: arrRoom[randomRoom].prize,
                    status: false,
                }  
                findout = true;
                findoutList = true;
                getroom = true;
            }else{
                for(let i = 0; i<this.state.listRoom.length; i++){
                    let userslist = this.state.listRoom[i].room
                    if((chooseRoom).localeCompare(userslist)==0){
                        console.log("same room" + arrRoom[randomRoom].room + " " + userslist)
                        findoutList = true
                        break;
                    }
                }
                for(let i = 0; i<this.state.users.length; i++){
                    if(this.state.users[i].room != null){
                        // for(let j = 0; j<this.state.users[i].amount.length; j++){
                            let users = this.state.users[i].room
                            if((chooseRoom).localeCompare(users)==0){
                                console.log("same room" + arrRoom[randomRoom].room + " " + users)
                                findoutList = true
                                break;
                            }
                        // }
                    }else{
                        break;
                    }
                }
                if(!findoutList){
                        console.log("not same "+arrRoom[randomRoom].room)
                        unreservedRoom = {
                            room: arrRoom[randomRoom].room,
                            checkin: this.state.chooseRoom.checkin,
                            checkout: this.state.chooseRoom.checkout,
                            amountin : this.state.chooseRoom.amountin,
                            type: arrRoom[randomRoom].type,
                            prize: arrRoom[randomRoom].prize,
                            status: false,
                        } 
                        findout = true;
                        findoutList = true;
                        getroom = true;
                    
                }
            
            }

            
            let chooseRoomIn = String(arrRoom[randomRoom].checkin)
            let chooseRoomOut = String(arrRoom[randomRoom].checkout)
            let findout2 = true;
            let findoutList2 = false;
            let getroom2 = false;
            if(!findout&&!findoutList){
                for(let i = 0; i<this.state.listRoom.length; i++){
                    let userslistin = String(this.state.listRoom[i].checkin)
                    let userslistout = String(this.state.listRoom[i].checkout)
                    if((chooseRoomIn).localeCompare(userslistin)==0 && (chooseRoomOut).localeCompare(userslistout)==0){
                        console.log("same room" + arrRoom[randomRoom].room + " " + this.state.listRoom[i].checkin)
                        findoutList2 = true
                        break;
                    }
                }
                for(let i = 0; i<this.state.users.length; i++){
                    let users = String(this.state.users[i].checkin)
                    let usersout = String(this.state.users[i].checkout)
                    if((chooseRoomIn).localeCompare(users)==0 && (chooseRoomOut).localeCompare(usersout)==0){
                        console.log("same room" + arrRoom[randomRoom].room + " " + users)
                        findoutList2 = true
                        break;
                    }
                }
                for(let i = 0; i<this.state.users.length; i++){
                    if(this.state.users[i].room != null){
                        // for(let j = 0; j<this.state.users[i].amount.length; j++){
                            let users = String(this.state.users[i].checkin)
                            let usersout = String(this.state.users[i].checkout)
                            if((chooseRoomIn).localeCompare(users)==0 && (chooseRoomOut).localeCompare(usersout)==0){
                                console.log("same room" + arrRoom[randomRoom].room + " " + users)
                                findoutList = true
                                break;
                            }
                        // }
                    }else{
                        break;
                    }
                }
                if(!findoutList2){
                        console.log("not same "+arrRoom[randomRoom].room)
                        unreservedRoom = {
                            room: arrRoom[randomRoom].room,
                            checkin: this.state.chooseRoom.checkin,
                            checkout: this.state.chooseRoom.checkout,
                            amountin : this.state.chooseRoom.amountin,
                            type: arrRoom[randomRoom].type,
                            prize: arrRoom[randomRoom].prize,
                            status: false,
                        } 
                        findout2 = true;
                        findoutList2 = true;
                        getroom2 = true;
                    
                }
            }

            if(!getroom && !getroom2 ){
                alert('Please select new room.This room was book')
            }


            console.log(unreservedRoom)
            if(getroom || getroom2){
                unbookRoom.push(unreservedRoom)
                this.setState({
                listRoom: unbookRoom
                })
            }
            // this.state.listRoom.push(unreservedRoom)
            console.log(this.state.listRoom)
            //random index of unreservedRoom choose that room and keep value
            //use that room find data in rooms state .get data and up to chooseRoom
        }
        
    }

    navbarSubmit = (bool) => {
        this.setState({
            navbarRoom:{
                room: this.state.user.room,
                checkin: this.state.user.checkin,
                checkout: this.state.user.checkout,
                amountin: this.state.user.amountin,
                navbar: bool
            },
            
        })
    }

    addBooking = (room) => {
        
        console.log("this is addbooking " + room.status )
        console.log(room)
        let roomNow = String(room.room)
        let checkin = String(room.checkin)
        let checkout =String(room.checkout)
        for(let i=0; i<this.state.listRoom.length; i++){
            let roomlist = String(this.state.listRoom[i].room)
            let checkinlist = String(this.state.listRoom[i].checkin)
            let checkoutlist = String(this.state.listRoom[i].checkout)
            console.log(roomNow + " " + roomlist + " " + checkin +" " + checkinlist + " " + checkout + " " + checkoutlist)
            if((roomNow.localeCompare(roomlist)==0) && (checkin.localeCompare(checkinlist)==0) && (checkout.localeCompare(checkoutlist)==0)){
                console.log(this.state.listRoom[i])
                console.log(unbookRoom[i])
                unbookRoom[i] = {
                    room: this.state.listRoom[i].room,
                    checkin : this.state.listRoom[i].checkin,
                    checkout: this.state.listRoom[i].checkout,
                    amountin: this.state.listRoom[i].amountin,
                    type: this.state.listRoom[i].type,
                    prize: this.state.listRoom[i].prize,
                    status: true,
                }
                this.setState({
                    listRoom: unbookRoom
                })
                const isroom = {
                    amountin: this.state.listRoom[i].amountin,
                    checkin: this.state.listRoom[i].checkin,
                    checkout: this.state.listRoom[i].checkout,
                    room: this.state.listRoom[i].room
                }
                amount.push(isroom)
                this.setState({
                    user:{
                        _id: this.state.user._id,
                        name: this.state.user.name,
                        surname: this.state.user.surname,
                        id: this.state.user.id,
                        email: this.state.user.email,
                        amountin: isroom.amountin,
                        checkin: isroom.checkin,
                        checkout: isroom.checkout,
                        room: isroom.room
                    }
                })
             break;
            }
        }
    
        console.log(this.state.user)
        console.log(this.state.listRoom)
        let strId = this.state.user._id

        // name: this.state.user.name,
        //     surname:this.state.user.surname,
        //     number: this.state.user.number,
        //     id: this.state.user.id,
        //     email: this.state.user.email,
        
        // axios.put('https://cpelab-booking.herokuapp.com/hotelbook/users/addRoom/'+ strId,{ addBook
        //     amount: {
        //         amountin: Number(room.amountin),
        //         checkin: String(room.checkin),
        //         checkout: String(room.checkout),
        //         room: String(room.room)
        //     }
        // })
        //     .catch((err) => {
        //     console.log(err)
        //     })
        
            console.log(this.state.user)
            console.log(room)
        
        
    }


    onChangeStatus = async e =>{
        e.preventDefault();
        let strId = this.state.user._id
        const exist = localStorage.getItem('token')

        if(exist!=null){
        await axios.put(`https://cpelab-booking.herokuapp.com/hotelbook/users/edit/${this.state.user._id}`,{
            name: this.state.user.name,
            surname:this.state.user.surname,
            number: this.state.user.number,
            id: this.state.user.id,
            amountin: 0,
            checkin: "",
            checkout: "",
            room: ""
        },{
            headers: {
                'Authorization': `Bearer ${exist}`
            }
        }).then(res => {
            window.location.reload(false)
                }).catch(error=>{
                  alert(error)
                })
        
            

        this.setState({
            user:{
                _id: this.state.user._id,
                name: this.state.user.name,
                surname: this.state.user.surname,
                id: this.state.user.id,
                email: this.state.user.email,
                amountin: 0,
                checkin: "",
                checkout: "",
                room: "",
            },
            listRoom: [],
        })
         alert('Cancel All reservation successed')
        }
    }

    render(){
        if(!this.state.thisRoom.status){
            return (
              <Profile  user={this.state.user}
                        thisRoom={this.state.thisRoom}
                        addBooking={this.addBooking}
              />
          )
        }else if(this.state.navbarRoom.navbar){
            return(
                <Profile user={this.state.user}
                         thisRoom={this.state.navbarRoom}   
                         navbarSubmit={this.navbarSubmit}
                />
            )
        } 
        return  (
            <div >
                <NavbarLogin navbarSubmit={this.navbarSubmit}/>
                <div className = "center" >
                    
                        <div className = "nameHotel"> {/* --------------------------------------------------------- find page */}
                            . h o t e l  
                        </div>
                    <div>
                        <form action="" className="form" onSubmit={this.handlefind}> 
                        <FormErrors formErrors={this.state.formErrors} />
                            <label className="label"> Type Room : </label>
                            <select className="typeRoom" id= "typeroom" >
                                <option value="Superior" onChange={this.onChange} >Superior &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Delux"  onChange={this.onChange} >Delux room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Sweet"  onChange={this.onChange} >Sweet room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Suit"   onChange={this.onChange} >Suit room &nbsp;&nbsp; ( 4 people )</option>
                                <option value="Family" onChange={this.onChange} >Family room &nbsp;&nbsp; ( 4 people )</option>
                            </select>
                            <label className="label"> Check in : </label>
                            <input type="date"  name="checkin"   id= "checkin" min = {date} onChange={this.onChange} />
                            <label className="label"> Check out : </label>
                            <input type="date" name="checkout"  id= "checkout" min = {date} onChange={this.onChange} />
                            <div className={`form-group ${this.errorClass(this.state.formErrors.amountin)}`}>
                            <label className ="label"> Amount : </label>   
                            <input type="number" name="amountin"  id= "amount"  onChange={this.onChange} placeholder="0"className="form-control" value={this.state.amountin}/>
                            </div>
                            <input type="submit" value="FIND" disabled={!this.state.formValid}/>    
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
                                    {/* <ModalTest user={this.state.user}
                                                   room={room}
                                                   addBooking = {this.addBooking}
                                                   
                                        />  */}
                                        <button className="arrom" id="arrow" onClick={()=>{
                                            this.setState({
                                                thisRoom:{
                                                    room: room.room,
                                                    checkin: room.checkin,
                                                    checkout: room.checkout,
                                                    amountin: room.amountin,
                                                    status: false,
                                                }
                                            })
                                                }
                                            }>
                                                <Arrow fontSize="30px" color="#31312E" />
                                            </button>
                                        
                                        
                                    </td>
                                </tr>)}
                            </tr>
                        </table>
                        <table className="cancelButton">
                            <button className="cancelBooked" onClick = {this.onChangeStatus}>
                                CANCEL ALL RESERVATIONS
                            </button>
                        </table>
                    </div>
            </div>    
    
            
        )
    }
}