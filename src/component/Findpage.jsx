import React from 'react'
import axios from 'axios'
import Person from 'react-ionicons/lib/MdPerson'
import Cash from 'react-ionicons/lib/MdCash'
import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'
import ModalTest from './Modal'


export default class Findpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        rooms : [],
        users : [{
            name : '',
            surname : '',
            number : '',
            id : '',
            email : '',
            amountin : '',
            checkin : '',
            checkout : '',
            iD:''
        }]
        }
    }

    // componentDidMount(){ // start webpage
    //     const exist = localStorage.getItem('token')
    //     if(exist!=null){
    //         const url = 'https://cpelab-booking.herokuapp.com/hotelbook/users/me'
    //         axios.get(url,{
    //             headers: {
    //               'Authorization': `Bearer ${exist}`
    //             }
    //           })
    //           .then(res => {
    //             this.setState({ name: res.data.name,
    //           })
    //         })
    //     }
    //   }

    onChange2 = (e) => {
        this.setState( { [e.target.rooms]: e.target.value } );
        }

    handlefind = event => {
        event.preventDefault();
        axios.get('https://cpelab-booking.herokuapp.com/hotelbook/room').then(res => {
            console.log(res);
            this.setState({rooms : res.data})
        })
    }
    
   
    
    
    
    
    render(){
        return(
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
        )
    }
}