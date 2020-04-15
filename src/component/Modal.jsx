import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import React from 'react'
import '../bookStyle.css'
import Arrow from 'react-ionicons/lib/IosArrowDropright'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '45%',
      height                : '80%',
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'))
   
  function ModalTest(props){

    let state = {
        user:{
            name: props.user.name,
            surname: props.user.surname,
            number: props.user.number,
            id: props.user.id,
            email: props.user.email,
            amount:props.user.amount,
        },
        room:{
            room: props.room.room,
            ckeckin: props.room.checkin,
            checkout: props.room.checkout,
            status: props.room.status
        }
    }

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal(e) {
      e.preventDefault();  
      setIsOpen(true);
      console.log(state.user)
      console.log(props)
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#31312E';
    }
   
    function closeModal(){
      setIsOpen(false);
      
    }
   
      return (
        <div >
          {/* <input type="submit" value="submit" onClick={openModal}/> */}
          <button className="arrow" onClick={openModal} id="arrow" >
                 <Arrow fontSize="30px" color="#31312E" />
           </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            state={state}
            
          >
            <div>
                <div ref={_subtitle => (subtitle = _subtitle)} >
                    <div className="headAmodal">{props.room.room}</div>
                    <div className="headBmodal">. h o t e l</div>
                </div>
                <div className="roomModal">
                    <div className="col-25">
                        <label className="forms">Name: </label>
                    </div>
                    <div className="col-75">
                    <label className="text" id="">{state.user.name}</label>
                    </div>
                    <div className="col-25">
                        <label className="forms">Surname: </label>
                    </div>
                    <div className="col-75">
                        <label className="text">{state.user.surname}</label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> Peraonal ID: </label>
                    </div>
                    <div className="col-75">
                        <label className="text" >{state.user.id}</label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> Phone number: </label>
                    </div>
                    <div className="col-75">
                        <label className="text">{state.user.number}</label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> Check in: </label>
                    </div>
                    <div className="col-75" id="date">
                        <label className="forms" id="date2"> {props.room.checkin}</label>
                    </div>
                    <div className="col-25">
                        <label className="forms" > Check out: </label>
                    </div>
                    <div className="col-75" id="date">
                        <label className="forms" id="date2"> {props.room.checkout} </label>
                    </div>
                    <div className="col-25">
                        <label className="forms"> price:</label>
                    </div>
                    <div className="col-75" id="price">
                        <label className="forms" id="date2"> {props.room.prize}</label>
                    </div>
                    <form >
                        <div className="confirmSigninLabel">
                            <label for="confirmSignin" > My information is correct.</label>     
                        </div>
                        <div className="checkbox" >
                            <input type="checkbox" className="confirmSignin" name="confirmSignin" id = "checkBox"/> 
                        </div>
                        <div className="col-25">
                            <input type="submit" value="BOOKING" id="booking"/>
                        </div>
                    </form>
                    <div className="col-25" id="close">
                        <button onClick={closeModal} className="close">CLOSE</button>
                    </div>
                    
                </div>
                
                
            </div> 
            </Modal>
        </div>
      );
  }
  
export default ModalTest