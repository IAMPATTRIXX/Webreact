import React from 'react'

import Room from './Room';
import Person from 'react-ionicons/lib/MdPerson'
import Arrow from 'react-ionicons/lib/IosArrowDropright'
import Cash from 'react-ionicons/lib/MdCash'
import Checkmarkoutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import Checkmark from 'react-ionicons/lib/IosCheckmarkCircle'
import ModalTest from './Modal'

export default function TableList(props) {

  const rooms = props.test;

  return (
    <div className = "result-list">
        <table className = "result">
            <th>  
                Result List
            </th>
        </table>
        <table className ="list">
            
            <tr className = "row">
                <td className = "typeroom">
                    SWEET ROOM
                </td>
                <td className ="number">
                    S201
                </td>
                <td className = "iconPerson">
                    <Person fontSize="27px" color="#31312E"/>
                </td >
                <td className = "amount">
                    2
                </td>
                <td className = "iconCash">
                    <Cash fontSize="30px" color="#31312E"/>
                </td>
                <td className = "course">
                    3000
                </td>
                <td className = "iconCheckmark">
                    {/* <Checkmark fontSize="30px" color="green"/> */}
                    <Checkmark fontSize="30px" color="salmon"/>
                </td>
                <td>
                    {/* <p className = "status"> booked </p> */}
                    <p className = "status2"> unreserved </p>
                </td>

                <td className = "iconArrow">
                    <ModalTest/>
                </td>
                </tr>
                <tbody >
                    {
                         rooms.map ( room => (
                            <Room  key={room.id} 
                                    room={room} />
                        ))
                    }
                </tbody>
            </table>
        <table className="cancelButton">
            <button className="cancelBooked">
                CANCEL ALL RESERVATIONS
            </button>
        </table>
    </div>
                
    
  )
}
