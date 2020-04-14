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
      width                 : '65%',
      height                : '80%',
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)'
  
 

  Modal.setAppElement(document.getElementById('root'))
   
  function ModalProfile(props){

    function visible(value=false){
        return value;
    }

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal(e) {
      e.preventDefault();  
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#31312E';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <div>
          {/* <input type="submit" value="submit" onClick={openModal}/> */}
            <button className="edit" onClick={openModal} >EDIT</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>
                <div className="roomModal">
                    <div ref={_subtitle => (subtitle = _subtitle)} >
                        <div className = "editProfile">
                            .edit profile  
                        </div> 
                    </div>
                    
                    <div className="profileModal">
                        <div className="col-25">
                            <label className="forms">Name: </label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="fname" placeholder="Jacob"/>
                        </div>
                        <div className="col-25">
                            <label className="forms">Surname: </label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="lname" placeholder="Wilton"/>
                        </div>
                        <div className="col-25" >
                            <label className="forms"> Personal ID: </label>
                        </div>
                        <div className="col-75" >
                            <input type="text" placeholder="x-xxxx-xxx-xx-xx-x"/>
                        </div>
                        <div className="col-25" >
                            <label className="forms">Phone: </label>
                        </div>
                        <div className="col-75" >
                            <input type="tel" placeholder="08xxxxxx23"/>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Email: </label>
                        </div>
                        <div className="col-75">
                            <input type="email" placeholder="Jacob@example.com"/>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Password: </label>
                        </div>
                        <div className="col-75" id="reset">
                            <button className="reset" 
                                    onClick={() => {
                                        document.getElementById('visible').style.visibility = 'visible'
                                        console.log('i am here')} 
                                    }>
                                reset password
                            </button>
                        </div>
                            <div id = "visible">
                                <div className="col-25" id="newPass">
                                    <label className="forms"> New Password: </label>
                                </div>
                                <div className="col-75" id="newPassfill">
                                    <input type="password" />
                                </div>
                                <div className="col-25">
                                    <label className="forms"> Confirm password:</label>
                                </div>
                                <div className="col-75">
                                    <input type="password" />
                                </div> 
                            </div>
                          
                        
                        <div className="confirmSigninLabel">
                            <label for="confirmSignin" > My information is correct.</label>     
                        </div>
                        <div className="checkbox" >
                            <input type="checkbox" className="confirmSignin" name="confirmSignin"/> 
                        </div>
                        
                        <div className="col-25">
                            <input type="submit" id="submit" value="CONFIRM"/>
                        </div>
                        <div className="col-25" id="closeEdit">
                            <button onClick={closeModal} className="close" id="closeEdbtn">CLOSE</button>
                        </div>
                    </div>
                
                    </div>
                </div> 
            </Modal>
        </div>
      );
  }
  
export default ModalProfile